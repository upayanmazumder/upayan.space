import React, { useEffect, useState } from 'react';
import { BsCircleFill, BsMoonFill, BsDashCircleFill, BsWifiOff } from 'react-icons/bs';
import activityStyles from './activity.module.css'; // Importing CSS Module

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
      return <BsCircleFill color="#00FF00" />;
    case 'idle':
      return <BsMoonFill color="#F1C40F" />;
    case 'dnd':
      return <BsDashCircleFill color="#E74C3C" />;
    default:
      return <BsWifiOff color="#7F8C8D" />;
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

  const timeComponents = [];
  if (days > 0) timeComponents.push(`${days}d`);
  if (hours > 0) timeComponents.push(`${hours}h`);
  if (minutes > 0) timeComponents.push(`${minutes}m`);
  if (seconds > 0) timeComponents.push(`${seconds}s`);

  return timeComponents.join(' ');
};

const Activity = () => {
  const [guildStatistics, setGuildStatistics] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const loadGuildStatistics = async () => {
      const data = await fetchGuildStatistics();
      setGuildStatistics(data);
    };
    
    loadGuildStatistics();

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!guildStatistics || guildStatistics.length === 0) {
    console.log('No guild statistics available');
    return null;
  }

  return (
    <div className={activityStyles.activityContainer}>
      {guildStatistics[0]?.discordstatus.toLowerCase() !== 'offline' && (
        <div className={activityStyles.activityCardWrapper}>
          {guildStatistics.map((guild, guildIndex) => (
            <div key={guildIndex} className={activityStyles.activityCard}>
              {guild.discordstatus.toLowerCase() !== 'offline' && (
                <div className={activityStyles.activityCardInner}>
                  {guild.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className={activityStyles.activityItem}>
                      <div className={activityStyles.imageContainer}>
                        {activity.largeImageURL && (
                          <img
                            src={activity.largeImageURL}
                            alt={activity.largeText}
                            className={activityStyles.activityLargeImage}
                          />
                        )}
                        {activity.smallImageURL && (
                          <img
                            src={activity.smallImageURL}
                            alt={activity.smallText}
                            className={activityStyles.activitySmallImage}
                          />
                        )}
                      </div>
                      <h3 className={activityStyles.activityName}>{activity.name}</h3>
                      <p className={activityStyles.activityDetails}>{activity.details}</p>
                      <p className={activityStyles.activityState}>{activity.state}</p>
                      <p className={activityStyles.activityTime}>{getTimeElapsed(activity.startTimestamp)}</p>
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
    </div>
  );
};

export default Activity;
