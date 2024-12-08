import React from 'react';
import tosStyles from '../p.module.css';
import styles from "../../page.module.css";

const TermsOfService = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={tosStyles.container}>
          <h1 className={tosStyles.title}>Terms of Service</h1>
          <p className={tosStyles.disclaimer}><strong>Disclaimer:</strong> This is not a legally valid document and is provided solely for informational purposes. Please consult with legal professionals if you require a legally binding terms of service agreement.</p>

          <section className={tosStyles.section}>
            <h2 className={tosStyles.sectionTitle}>1. Introduction</h2>
            <p className={tosStyles.sectionContent}>Welcome to our service! By using our website or services, you agree to be bound by these terms and conditions.</p>
          </section>

          <section className={tosStyles.section}>
            <h2 className={tosStyles.sectionTitle}>2. Services Provided</h2>
            <p className={tosStyles.sectionContent}>We provide a variety of online services, including access to our platform, tools, and customer support. Please note that our services may change at any time.</p>
          </section>

          <section className={tosStyles.section}>
            <h2 className={tosStyles.sectionTitle}>3. User Responsibilities</h2>
            <p className={tosStyles.sectionContent}>As a user, you agree to use our services responsibly, not to misuse or harm the platform, and to comply with any applicable laws.</p>
          </section>

          <section className={tosStyles.section}>
            <h2 className={tosStyles.sectionTitle}>4. Restrictions</h2>
            <p className={tosStyles.sectionContent}>You are prohibited from engaging in unlawful activities or using our platform for malicious purposes. Any violations of these terms may result in suspension or termination of access.</p>
          </section>

          <section className={tosStyles.section}>
            <h2 className={tosStyles.sectionTitle}>5. Account Security</h2>
            <p className={tosStyles.sectionContent}>You are responsible for maintaining the security of your account and any activities that occur under your account.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;


export const metadata = {
  title: "Upayan - Terms of Service",
  description: "View my terms of service",
};