import React from "react";
import Certificate from "@/components/certificate/certificate";
import { useRouter } from 'next/router';

const CertificatePage = () => {
    const { query: { certificate: slug } } = useRouter();

    return (
        <>
            <Certificate slug={slug} />
        </>
    );
}

export default CertificatePage;