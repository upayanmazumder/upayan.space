"use client";

import React from 'react';
import packageJson from '../../../../package.json';
import footerStyles from './footer.module.css';

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <a href="/p/terms-of-service">Terms of Service</a>
      <span>  |  </span>
      <a href="/p/privacy-policy">Privacy Policy</a>
      <div>&copy; 2024 Upayan v{packageJson.version}</div>
    </div>
  );
};

export default Footer;