"use client";

import React, { useState } from "react";
import certificateStyles from "./certificates.module.css";
import { createSlug, certificates } from "../../shared/certificatesData";
import { BsFunnel, BsFunnelFill } from "react-icons/bs";

const Certificates = () => {
    const [selectedTag, setSelectedTag] = useState("");

    // Get all unique tags for the filter options
    const allTags = [...new Set(certificates.flatMap((certificate) => certificate.tags))];

    // Filter certificates based on the selected tag
    const filteredCertificates = selectedTag
        ? certificates.filter((certificate) => certificate.tags.includes(selectedTag))
        : certificates;

    return (
        <section className={certificateStyles.pageContainer}>
            {/* Filter Section */}
            <div className={certificateStyles.filterContainer}>
                <summary className={certificateStyles.filterSummary}>
                    {selectedTag ? <BsFunnelFill /> : <BsFunnel />}
                    <span>Filter Certificates</span>
                </summary>
                <div className={certificateStyles.filterButtons}>
                    <button
                        className={`${certificateStyles.filterButton} ${selectedTag === "" ? certificateStyles.active : ""
                            }`}
                        onClick={() => setSelectedTag("")}
                    >
                        All
                    </button>
                    {allTags.map((tag, index) => (
                        <button
                            key={index}
                            className={`${certificateStyles.filterButton} ${selectedTag === tag ? certificateStyles.active : ""
                                }`}
                            onClick={() => setSelectedTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Certificates Grid */}
            <div className={certificateStyles.gridContainer}>
                {filteredCertificates.map((certificate, index) => (
                    <div key={index} className={certificateStyles.certificateCard}>
                        <a href={`/certificates/${createSlug(certificate.title)}#image`}>
                            <img
                                src={certificate.path}
                                alt={`${certificate.title} certificate`}
                                className={certificateStyles.certificateImage}
                            />
                        </a>
                        <div className={certificateStyles.cardContent}>
                            <h2 className={certificateStyles.cardTitle}>{certificate.title}</h2>
                            <div className={certificateStyles.tagsContainer}>
                                {certificate.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className={certificateStyles.certificateTag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
