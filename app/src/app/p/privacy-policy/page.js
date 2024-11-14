import React from 'react';
import privacyStyles from '../p.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={privacyStyles.container}>
      <h1 className={privacyStyles.title}>Privacy Policy</h1>
      <p className={privacyStyles.disclaimer}><strong>Disclaimer:</strong> This is not a legally valid document and is provided solely for informational purposes. Please consult with legal professionals if you require a legally binding privacy policy agreement.</p>

      <section className={privacyStyles.section}>
        <h2 className={privacyStyles.sectionTitle}>1. Introduction</h2>
        <p className={privacyStyles.sectionContent}>Welcome to our privacy policy. Your privacy is critically important to us. By using our website or services, you agree to the collection and use of information in accordance with this policy.</p>
      </section>

      <section className={privacyStyles.section}>
        <h2 className={privacyStyles.sectionTitle}>2. Information We Collect</h2>
        <p className={privacyStyles.sectionContent}>We collect various types of information in connection with the services we provide, including information you provide directly to us, information collected automatically, and information from third-party sources.</p>
      </section>

      <section className={privacyStyles.section}>
        <h2 className={privacyStyles.sectionTitle}>3. How We Use Information</h2>
        <p className={privacyStyles.sectionContent}>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users.</p>
      </section>

      <section className={privacyStyles.section}>
        <h2 className={privacyStyles.sectionTitle}>4. Sharing Information</h2>
        <p className={privacyStyles.sectionContent}>We do not share your personal information with companies, organizations, or individuals outside of our company except in the following cases: with your consent, for external processing, and for legal reasons.</p>
      </section>

      <section className={privacyStyles.section}>
        <h2 className={privacyStyles.sectionTitle}>5. Your Rights</h2>
        <p className={privacyStyles.sectionContent}>You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;