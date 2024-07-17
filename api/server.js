const express = require('express');
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const dotenv = require('dotenv');
const winston = require('winston');

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const API_PORT = process.env.API_PORT;
const USER_ID = '1240025366853193758';

// Configure logging
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' })
    ],
});

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ],
    partials: [Partials.GuildMember],
});

client.once('ready', async () => {
    logger.info(`Logged in as ${client.user?.tag}`);

    const app = express();

    app.set('guildStatus', []);

    // Function to periodically update guildStatus
    const updateGuildStatus = async () => {
        try {
            const guildStatus = [];
            for (const guild of client.guilds.cache.values()) {
                try {
                    const member = await guild.members.fetch(USER_ID).catch(err => {
                        logger.warn(`Failed to fetch member ${USER_ID} in guild ${guild.id}: ${err.message}`);
                        return null;
                    });
                    if (member) {
                        const activities = member.presence?.activities.map(activity => ({
                            name: activity.name,
                            type: activity.type,
                            details: activity.details,
                            state: activity.state,
                            startTimestamp: activity.timestamps?.start,
                            endTimestamp: activity.timestamps?.end,
                            largeImageURL: activity.assets?.largeImageURL(),
                            largeText: activity.assets?.largeText,
                            smallImageURL: activity.assets?.smallImageURL(),
                            smallText: activity.assets?.smallText,
                            partyId: activity.party?.id,
                            partySize: activity.party?.size,
                            partyMax: activity.party?.max,
                            syncId: activity.syncId,
                            sessionId: activity.sessionId,
                            flags: activity.flags?.toArray(),
                        })) || [];
                        guildStatus.push({
                            guildId: guild.id,
                            discordstatus: member.presence?.status || 'offline',
                            activities,
                        });
                    }
                } catch (err) {
                    logger.error(`Error processing guild ${guild.id}: ${err.message}`);
                }
            }
            app.set('guildStatus', guildStatus);
        } catch (err) {
            logger.error(`Failed to update guild status: ${err.message}`);
        }
    };

    updateGuildStatus();
    setInterval(updateGuildStatus, 10 * 60 * 1000);

    app.get('/', async (req, res) => {
        try {
            res.json(app.get('guildStatus'));
        } catch (err) {
            logger.error(`Error handling request to '/': ${err.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    app.listen(API_PORT, () => {
        logger.info(`API is listening on port ${API_PORT}`);
    });
});

client.login(BOT_TOKEN).catch(err => {
    logger.error(`Failed to login: ${err.message}`);
});
