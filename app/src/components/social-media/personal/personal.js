"use client";

import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaDiscord, FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';
import linksData from '../../../data/links.json';

const Personal = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const filteredLinks = linksData.filter(link =>
        ['LinkedIn', 'Github', 'Discord', 'Instagram', 'Facebook', 'Pinterest'].includes(link.name)
      );
      setLinks(filteredLinks);
    }
  }, []);

  const getIcon = (name) => {
    switch (name) {
      case 'LinkedIn':
        return <FaLinkedin />;
      case 'Github':
        return <FaGithub />;
      case 'Discord':
        return <FaDiscord />;
      case 'Instagram':
        return <FaInstagram />;
      case 'Facebook':
        return <FaFacebook />;
      case 'Pinterest':
        return <FaPinterest />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {getIcon(link.name)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Personal;