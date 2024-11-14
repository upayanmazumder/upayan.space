// Activity.js
import React, { useEffect, useState } from 'react';
import activityStyles from './activity.module.css';
import { BsCircleFill, BsMoonFill, BsDashCircleFill, BsWifiOff } from 'react-icons/bs';

const fetchGuildStatistics = async () => {
  try {
    const response = await fetch('https://api.upayan.dev');
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Server responded with an error');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching guild statistics:', error);
    return null;
  }
};

const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case 'online':
      return <BsCircleFill color="green" />;
    case 'idle':
      return <BsMoonFill color="yellow" />;
    case 'dnd':
      return <BsDashCircleFill color="red" />;
    default:
      return <BsWifiOff color="gray" />;
  }
};

const getTimeElapsed = (startTimestamp) => {
  const startTime = new Date(startTimestamp);
  const currentTime = new Date();
  const elapsedTime = currentTime - startTime;

  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const Activity = () => {
  const [guildStatistics, setGuildStatistics] = useState(null);

  useEffect(() => {
    const loadGuildStatistics = async () => {
      const data = await fetchGuildStatistics();
      setGuildStatistics(data);
    };
    
    loadGuildStatistics();
  }, []);

  if (!guildStatistics || guildStatistics.length === 0) {
    console.log('No guild statistics available');
    return null;
  }

  return (
    <>
      {guildStatistics[0]?.discordstatus.toLowerCase() !== 'offline' && (
        <div className={activityStyles.container}>
          {guildStatistics.map((guild, guildIndex) => (
            <div key={guildIndex}>
              {guild.discordstatus.toLowerCase() !== 'offline' && (
                <div className={activityStyles.activities}>
                  {guild.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className={activityStyles.activity}>
                      <div className={activityStyles.imagecontainer}>
                        <img
                          width="128"
                          height="128"
                          src={activity.largeImageURL}
                          alt={activity.largeText}
                          className={activityStyles.largeImage}
                        />
                        <img
                          src={activity.smallImageURL}
                          alt={activity.smallText}
                          className={activityStyles.smallImage}
                        />
                      </div>
                      <h3 className={activityStyles.name}>{activity.name}</h3>
                      <p className={activityStyles.details}>{activity.details}</p>
                      <p className={activityStyles.state}>{activity.state}</p>
                      <p className={activityStyles.time}>{getTimeElapsed(activity.startTimestamp)}</p>
                    </div>
                  ))}
                  <div className={activityStyles.status}>
                    {getStatusIcon(guild.discordstatus)} <span>{guild.discordstatus}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Activity;
