/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import activityStyles from './activity.module.css';
import { BsCircleFill, BsMoonFill, BsDashCircleFill, BsWifiOff } from "@qwikest/icons/bootstrap"

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
    const response = await fetch('https://upayan-statistics-api.upayan.space/', {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. HTTP error: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData.map((guildData: any) => ({
      discordstatus: guildData.discordstatus,
      activities: guildData.activities,
    })) as GuildStatistics[];
  } catch (error) {
    console.error('Error fetching guild statistics:', error);
    return null;
  }
};

const calculateTimeElapsed = (timestamp: string): string => {
  if (!timestamp) {
    return '';
  }

  const start = new Date(timestamp);
  if (isNaN(start.getTime())) {
    return '';
  }

  const now = new Date();
  const elapsedMilliseconds = now.getTime() - start.getTime();
  const seconds = Math.floor(elapsedMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return days === 1 ? `For ${days} day` : `For ${days} days`;
  } else if (hours > 0) {
    return hours === 1 ? `For ${hours} hour` : `For ${hours} hours`;
  } else if (minutes > 0) {
    return minutes === 1 ? `For ${minutes} minute` : `For ${minutes} minutes`;
  } else {
    return seconds === 1 ? `For ${seconds} second` : `For ${seconds} seconds`;
  }
};

const getStatusIcon = (status: string) => {
  const iconStyle = { color: '' };

  switch (status.toLowerCase()) {
    case 'online':
      iconStyle.color = 'green';
      return <><BsCircleFill style={iconStyle} /> Online </>;
    case 'offline':
      iconStyle.color = 'gray';
      return <><BsWifiOff style={iconStyle} /> Offline </>;
    case 'dnd':
      iconStyle.color = 'red';
      return <><BsDashCircleFill style={iconStyle} /> DND</>;
    case 'idle':
      iconStyle.color = 'yellow';
      return <><BsMoonFill style={iconStyle} /> Idle</>;
    default:
      return null;
  }
};

// eslint-disable-next-line qwik/loader-location
export const useGuildStatistics = routeLoader$<GuildStatistics[] | null>(async () => {
  return await fetchGuildStatistics();
});

export default component$(() => {
  const guildStatistics = useGuildStatistics();

  if (!guildStatistics.value || guildStatistics.value.length === 0) {
    return null;
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
                      <p class={activityStyles.time}>{calculateTimeElapsed(activity.startTimestamp)}</p>
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
