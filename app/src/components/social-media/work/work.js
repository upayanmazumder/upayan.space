"use client";

import React, { useEffect, useState } from 'react';
import linksData from '../../../data/links.json';

const SocialMediaWork = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const filteredLinks = linksData.filter(link =>
        ['IIT-Madras', 'Microsoft Learn', 'Leetcode', 'Gravatar', 'Devfolio'].includes(link.name)
      );
      setLinks(filteredLinks);
    }
  }, []);

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <li key={index} >
            <button onClick={() => handleClick(link.link)}>{link.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaWork;