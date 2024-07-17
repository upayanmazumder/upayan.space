/* eslint-disable qwik/loader-location */
import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import styles from './activity.module.css';

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

// Fetch guild statistics from the API
const fetchGuildStatistics = async (): Promise<GuildStatistics[]> => {
  try {
    const response = await fetch('https://upayan-statistics-api.upayan.space/', {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. HTTP error: ${response.status}`);
    }

    const responseData = await response.json();
    // Assuming responseData is an array of GuildStatistics
    return responseData.map((guildData: any) => ({
      discordstatus: guildData.discordstatus,
      activities: guildData.activities,
    })) as GuildStatistics[];
  } catch (error) {
    console.error('Error fetching guild statistics:', error);
    return [];
  }
};

// Route loader to fetch guild statistics
export const useGuildStatistics = routeLoader$<GuildStatistics[]>(async () => {
  return await fetchGuildStatistics();
});

export default component$(() => {
  const guildStatistics = useGuildStatistics();

  return (
    <div class={styles.container}>
      {guildStatistics.value.map((guild, guildIndex) => (
        <div class={styles.guild} key={guildIndex}>
          <p>Status: {guild.discordstatus}</p>
          <div class={styles.activities}>
            {guild.activities.map((activity, activityIndex) => (
              <div class={styles.activity} key={activityIndex}>
                <img src={activity.largeImageURL} alt={activity.largeText} />
                <img src={activity.smallImageURL} alt={activity.smallText} />
                <h3>{activity.name}</h3>
                <p>{activity.details}</p>
                <p>{activity.state}</p>
                <p>{activity.startTimestamp}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});
