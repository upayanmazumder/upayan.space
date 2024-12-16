import React from 'react';
import { createSlug, certificates } from '../../shared/certificatesData';
import Four04 from "../../components/404/404";

const CertificateDetail = ({ slug }) => {
  const certificate = certificates.find(cert => createSlug(cert.title) === slug);

  // Unavailable certificate
  if (!certificate) {
    return <Four04 />;
  }

  return (
    <div className="container">
      <div>
        <h2>{certificate.title}</h2>
        <div id="image">
          <img src={certificate.path} alt={`${certificate.title} certificate`} />
        </div>
        <p>Tags: {certificate.tags.join(', ')}</p>
      </div>
    </div>
  );
};

export default CertificateDetail;