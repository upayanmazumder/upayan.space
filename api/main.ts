import express from 'express';
import { Client, GatewayIntentBits, Partials } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const API_PORT = process.env.API_PORT;
const USER_ID = '1240025366853193758';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ],
    partials: [Partials.GuildMember],
});

client.once('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}`);

    const app = express();

    app.set('guildStatus', []);

    // Function to periodically update guildStatus
    const updateGuildStatus = async () => {
        const guildStatus = [];
        for (const guild of client.guilds.cache.values()) {
            const member = await guild.members.fetch(USER_ID).catch(() => null);
            if (member) {
                guildStatus.push({
                    guildId: guild.id,
                    discordstatus: member.presence?.status || 'offline',
                });
            }
        }
        app.set('guildStatus', guildStatus);
    };

    updateGuildStatus();
    setInterval(updateGuildStatus, 10 * 60 * 1000);

    app.get('/', async (req, res) => {
        res.json(app.get('guildStatus'));
    });

    app.listen(API_PORT, () => {
        console.log(`Express server listening on port ${API_PORT}`);
    });
});

client.login(BOT_TOKEN);