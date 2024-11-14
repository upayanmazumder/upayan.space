"use client";

import React from 'react';
import SocialMediaPersonal from "../social-media/personal/personal";
import styles from './footer.module.css';
import packageJson from '../../../../package.json';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <SocialMediaPersonal />
      <br />
      <a href="/p/terms-of-service" className={styles.link}>Terms of Service</a>
      <span>  |  </span>
      <a href="/p/privacy-policy" className={styles.link}>Privacy Policy</a>
      <div className={styles.version}>&copy; 2024 Upayan v{packageJson.version}</div>
    </div>
  );
};

export default Footer;