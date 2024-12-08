import React from 'react';

import Certificates from '../../components/certificates/certificates';

import styles from "../page.module.css";

const CertificatesPage = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Certificates />
      </main>
    </div>
  );
};

export default CertificatesPage;

export const metadata = {
  title: "Upayan - Certificates",
  description: "View my certificates",
};