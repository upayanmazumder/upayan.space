import React from 'react';

import DevJourney from '../../components/devjourney/devjourney';

import styles from "../page.module.css";

const DevJourneyPage = () => {
  return (
    <main className={styles.main}>
      <DevJourney />
      <h1>Hello world</h1>
    </main>
  );
};

export default DevJourneyPage;

export const metadata = {
  title: "Upayan - Devjourney",
  description: "View my coding journey",
};
