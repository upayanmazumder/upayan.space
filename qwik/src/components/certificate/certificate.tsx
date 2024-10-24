import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import certificateStyles from './certificate.module.css';

import CAndPLT from '/src/media/certificates/C&PLT_SOFTECH_20-06-2024.jpg?jsx';
import NodeJS from '/src/media/certificates/NODEJS_PROGRAMMINGHUB_05-08-2024.jpg?jsx';
import Fundamentals from '/src/media/certificates/FUNDAMENTALS_PROGRAMMINGHUB_05-08-2024.jpg?jsx';
import Four04 from "../../components/404/404"
const createSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

const certificates = [
    { 
        "title": "Fundamentals", 
        "path": Fundamentals, 
        "tags": ["programminghub", "fundamentals"] 
    },
    { 
        "title": "C & PLT", 
        "path": CAndPLT, 
        "tags": ["softech", "c", "plt"] 
    },
    { 
        "title": "NodeJS", 
        "path": NodeJS, 
        "tags": ["programminghub", "nodejs"] 
    }
];

export default component$(() => {
    const loc = useLocation();
    const certificateSlug = loc.params.certificate;
    const certificate = certificates.find(cert => createSlug(cert.title) === certificateSlug);

    // Unavailable certificate
    if (!certificate) {
        return <Four04 />;
    }

    return (
        <div class="container">
            <div class={certificateStyles.certificateDetailContainer}>
                <h2>{certificate.title}</h2>
                <div class={certificateStyles.certificateImage} id="image">
                    <certificate.path alt={`${certificate.title} certificate`} />
                </div>
                <p>Tags: {certificate.tags.join(', ')}</p>
            </div>
        </div>
    );
});
