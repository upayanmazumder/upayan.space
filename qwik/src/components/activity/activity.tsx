/* eslint-disable qwik/no-use-visible-task */
/* eslint-disable qwik/jsx-img */
// activity.tsx
import { component$, useVisibleTask$, useStore } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import activityStyles from './activity.module.css';
import { BsCircleFill, BsMoonFill, BsDashCircleFill, BsWifiOff } from "@qwikest/icons/bootstrap";
import { apiRequest } from '~/shared/api';

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

// Helper function to calculate time elapsed from a timestamp
const calculateTimeElapsed = (startTimestamp: string, currentTime: Date): string => {
  const start = new Date(startTimestamp);
  const seconds = Math.floor((currentTime.getTime() - start.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) return `${hours}h ${minutes % 60}m ago`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s ago`;
  return `${seconds}s ago`;
};

// Helper function to get the icon based on the discord status
const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case 'online':
      return ( 
        <>
          <BsCircleFill color="green"/>
          Online
        </>
      );
    case 'idle':
      return (
        <>
          <BsMoonFill color="yellow"/>
          Idle
        </>
      );
    case 'dnd':
      return (
        <>
          <BsDashCircleFill color="red"/>
          Do Not Disturb
        </>
      );
    default:
      return (
        <>
          <BsWifiOff color="gray"/>
          Offline
        </>
      );
  }
};

const fetchGuildStatistics = async (): Promise<GuildStatistics[] | null> => {
  try {
    return await apiRequest<GuildStatistics[]>('/');
  } catch (error) {
    console.error('Error fetching guild statistics:', error);
    return null;
  }
};

// eslint-disable-next-line qwik/loader-location
export const useGuildStatistics = routeLoader$<GuildStatistics[] | null>(async () => {
  return await fetchGuildStatistics();
});

export default component$(() => {
  const guildStatistics = useGuildStatistics();
  const state = useStore({ currentTime: new Date() });

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      state.currentTime = new Date();
    }, 1000);

    return () => clearInterval(interval);
  });

  if (!guildStatistics.value || guildStatistics.value.length === 0) {
    return <p>No guild statistics available.</p>;
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
                      <p class={activityStyles.time}>{calculateTimeElapsed(activity.startTimestamp, state.currentTime)}</p>
                    </div>
                  ))}
                  <p class={activityStyles.status}>{getStatusIcon(guild.discordstatus)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
});
