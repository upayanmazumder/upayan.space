"use client";

import React from 'react';
import SocialMediaPersonal from "../social-media/personal/personal";
import styles from './footer.module.css';
import packageJson from '../../../../package.json';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <SocialMediaPersonal />
      <a href="/p/terms-of-service" className={styles.link}>Terms of Service</a> <span>  |  </span>
      <a href="/p/privacy-policy" className={styles.link}>Privacy Policy</a>
      <div className={styles.version}>Version: {packageJson.version}</div>
    </div>
  );
};

export default Footer;