// activity.tsx
/* eslint-disable qwik/no-use-visible-task */
/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import activityStyles from './activity.module.css';
import { BsCircleFill, BsMoonFill, BsDashCircleFill, BsWifiOff } from "@qwikest/icons/bootstrap";

interface Activity {
  name: string;
  details: string;
  state: string;
  startTimestamp: string;
  largeImageURL: string;
  largeText: string;
  smallImageURL: string;
  smallText: string;
}

interface GuildStatistics {
  discordstatus: string;
  activities: Activity[];
}

const fetchGuildStatistics = async (): Promise<GuildStatistics[] | null> => {
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

// eslint-disable-next-line qwik/loader-location
export const useGuildStatistics = routeLoader$<GuildStatistics[] | null>(async () => {
  return await fetchGuildStatistics();
});

const getStatusIcon = (status: string) => {
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

const getTimeElapsed = (startTimestamp: string) => {
  const startTime = new Date(startTimestamp);
  const currentTime = new Date();
  const elapsedTime = currentTime.getTime() - startTime.getTime();
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export default component$(() => {
  const guildStatistics = useGuildStatistics();

  if (!guildStatistics.value || guildStatistics.value.length === 0) {
    console.log('No guild statistics available');
    return (
      <>
      </>
    );
  }

  return (
    <>
      {guildStatistics.value.length > 0 && guildStatistics.value[0].discordstatus.toLowerCase() !== 'offline' && (
        <div class={activityStyles.container}>
          {guildStatistics.value.map((guild, guildIndex) => (
            <div key={guildIndex}>
              {guild.discordstatus.toLowerCase() !== 'offline' && (
                <div class={activityStyles.activities}>
                  {guild.activities.map((activity, activityIndex) => (
                    <div key={activityIndex}>
                      <div class={activityStyles.activity}>
                        <div class={activityStyles.imagecontainer}>
                          <img width="128" height="128" src={activity.largeImageURL} alt={activity.largeText} class={activityStyles.largeImage}/>
                          <img src={activity.smallImageURL} alt={activity.smallText} class={activityStyles.smallImage}/>
                        </div>
                        <h3 class={activityStyles.name}>{activity.name}</h3>
                      </div>
                      <p class={activityStyles.details}>{activity.details}</p>
                      <p class={activityStyles.state}>{activity.state}</p>
                      <p class={activityStyles.time}>{getTimeElapsed(activity.startTimestamp)}</p>
                    </div>
                  ))}
                  <div class={activityStyles.status}>
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
});
