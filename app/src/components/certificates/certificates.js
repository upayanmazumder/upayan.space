"use client";

import React, { useState } from 'react';
import { createSlug, certificates } from '../../shared/certificatesData';
import { BsFunnel, BsFunnelFill } from "react-icons/bs";

const Certificates = () => {
    const [selectedTag, setSelectedTag] = useState('');

    // Get all unique tags for the filter options
    const allTags = [...new Set(certificates.flatMap(certificate => certificate.tags))];

    // Filter certificates based on the selected tag
    const filteredCertificates = selectedTag
        ? certificates.filter(certificate => certificate.tags.includes(selectedTag))
        : certificates;

    return (
        <div>
            <details>
                <summary>
                    {/* Toggle between funnel icons based on whether a filter is selected */}
                    {selectedTag ? <BsFunnelFill /> : <BsFunnel />}
                </summary>
                <div>
                    <button>
                        All
                    </button>
                    {allTags.map((tag, index) => (
                        <button key={index}>
                            {tag}
                        </button>
                    ))}
                </div>
            </details>

            {/* Certificates Display Section */}
            <div>
                {filteredCertificates.map((certificate, index) => (
                    <div key={index}>
                        <h2>{certificate.title}</h2>
                        <a href={`/certificates/${createSlug(certificate.title)}#image`}>
                            <img src={certificate.path} alt={`${certificate.title} certificate`} />
                        </a>
                        <div>
                            {certificate.tags.map((tag, tagIndex) => (
                                <span key={tagIndex}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;