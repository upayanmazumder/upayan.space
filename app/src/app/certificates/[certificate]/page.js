"use client"

import React from "react";
import Certificate from "@/components/certificate/certificate";
import { useParams } from "next/navigation";

import styles from "../../page.module.css";

const CertificatePage = () => {
    const { certificate: slug } = useParams();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Certificate slug={slug} />
            </main>
        </div>
    );
};

export default CertificatePage;