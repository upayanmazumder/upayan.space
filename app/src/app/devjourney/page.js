import React from 'react';

import DevJourney from '../../components/devjourney/devjourney';

import styles from "../page.module.css";

const DevJourneyPage = () => {
  return (
    <main className={styles.main}>
      <DevJourney />
    </main>
  );
};

export default DevJourneyPage;