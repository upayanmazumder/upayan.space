"use client";

import React, { useEffect, useState } from 'react';
import linksData from '../../../data/links.json';
import styles from './work.module.css';

const SocialMediaWork = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const filteredLinks = linksData.filter(link =>
        ['IIT-Madras', 'Microsoft Learn', 'Leetcode', 'Gravatar', 'Devfolio', 'Amazon Music'].includes(link.name)
      );
      setLinks(filteredLinks);
    }
  }, []);

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.socialmediawork}>
      <ul>
        {links.map((link, index) => (
          <li key={index} >
            <button className={styles[link.classname]} onClick={() => handleClick(link.link)}>{link.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaWork;