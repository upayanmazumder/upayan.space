"use client"

import React from "react";
import Certificate from "@/components/certificate/certificate";
import { useParams } from "next/navigation";

const CertificatePage = () => {
    const { certificate: slug } = useParams();

    return (
        <Certificate slug={slug} />
    );
};

export default CertificatePage;