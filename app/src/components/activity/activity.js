import React, { useEffect, useState } from 'react';
import { BsCircleFill, BsMoonFill, BsDashCircleFill, BsWifiOff } from 'react-icons/bs';
import styles from './activity.module.css'; // CSS Module

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
  const icons = {
    online: <BsCircleFill color="#22C55E" />,
    idle: <BsMoonFill color="#FACC15" />,
    dnd: <BsDashCircleFill color="#EF4444" />,
    default: <BsWifiOff color="#6B7280" />,
  };
  return icons[status.toLowerCase()] || icons.default;
};

const formatElapsedTime = (startTimestamp) => {
  const elapsedTime = Date.now() - new Date(startTimestamp).getTime();
  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

  return `${days ? `${days}d ` : ''}${hours ? `${hours}h ` : ''}${minutes ? `${minutes}m` : ''}`.trim();
};

const Activity = () => {
  const [guildStatistics, setGuildStatistics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGuildStatistics();
      setGuildStatistics(data);
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchData(); // Fetch every 15 seconds
    }, 15000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  if (!guildStatistics || guildStatistics.length === 0) {
    return null; // Don't show anything until data is loaded
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        {guildStatistics.map((guild, guildIndex) => (
          <div key={guildIndex} className={styles.card}>
            <div className={styles.header}>
              {getStatusIcon(guild.discordstatus)}
              <span>{guild.discordstatus}</span>
            </div>
            <div className={styles.activities}>
              {guild.activities.map((activity, activityIndex) => (
                <div key={activityIndex} className={styles.activity}>
                  {activity.largeImageURL && (
                    <img
                      src={activity.largeImageURL}
                      alt={activity.largeText}
                      className={styles.largeImage}
                    />
                  )}
                  <h3 className={styles.activityName}>{activity.name}</h3>
                  <p className={styles.activityDetails}>{activity.details}</p>
                  <p className={styles.activityState}>{activity.state}</p>
                  <p className={styles.activityTime}>
                    {formatElapsedTime(activity.startTimestamp)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
