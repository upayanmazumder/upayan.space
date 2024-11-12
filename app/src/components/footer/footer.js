"use client";

import React, { useEffect, useState } from 'react';
import SocialMediaPersonal from "../social-media/personal/personal";
import styles from './footer.module.css';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <SocialMediaPersonal />
      <a href="/p/terms-of-service" className={styles.link}>Terms of Service</a>
      <a href="/p/privacy-policy" className={styles.link}>Privacy Policy</a>
    </div>
  );
};

export default Footer;