"use client";

import React, { useEffect, useState } from 'react';
import SocialMediaPersonal from "../social-media/personal/personal";
import styles from './footer.module.css';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <SocialMediaPersonal />
    </div>
  );
};

export default Footer;