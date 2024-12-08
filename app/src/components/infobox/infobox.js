import React from 'react';
import infoboxStyles from './infobox.module.css';

const InfoBox = ({ title, children }) => {
  return (
    <div className={infoboxStyles.InfoBox}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default InfoBox;