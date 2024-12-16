"use client";

import React from 'react';
import SocialMediaPersonal from "../social-media/personal/personal";
import packageJson from '../../../../package.json';

const Footer = () => {
  return (
    <div>
      <SocialMediaPersonal />
      <br />
      <a href="/p/terms-of-service">Terms of Service</a>
      <span>  |  </span>
      <a href="/p/privacy-policy">Privacy Policy</a>
      <div>&copy; 2024 Upayan v{packageJson.version}</div>
    </div>
  );
};

export default Footer;