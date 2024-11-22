import React from 'react';
import { useRouter } from 'next/router';
import certificateStyles from './certificate.module.css';
import { createSlug, certificates } from '../../shared/certificatesData';
import Four04 from "../404/404";

const CertificateDetail = ({ slug }) => {
  const certificate = certificates.find(cert => createSlug(cert.title) === slug);

  // Unavailable certificate
  if (!certificate) {
    return <Four04 />;
  }

  return (
    <div className="container">
      <div className={certificateStyles.certificateDetailContainer}>
        <h2>{certificate.title}</h2>
        <div className={certificateStyles.certificateImage} id="image">
          <img src={certificate.path} alt={`${certificate.title} certificate`} />
        </div>
        <p>Tags: {certificate.tags.join(', ')}</p>
      </div>
    </div>
  );
};

export default CertificateDetail;