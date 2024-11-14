import React from 'react';
import certificateStyles from './certificates.module.css';
import { createSlug, certificates } from '../../shared/certificatesData';  // Fix the import path

const Certificates = () => {
    return (
        <div className={certificateStyles.certificatesContainer}>
            {certificates.map((certificate, index) => (
                <div key={index} className={certificateStyles.certificateCard}>
                    <h3>{certificate.title}</h3>
                    <a href={`/certificates/${createSlug(certificate.title)}#image`}>
                        <img src={certificate.path} alt={`${certificate.title} certificate`} />
                    </a>
                    <div>
                        {certificate.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className={certificateStyles.certificateTag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certificates;
