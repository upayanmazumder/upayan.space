import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import certificateStyles from "./certificates.module.css";

import CAndPLT from '/src/media/certificates/C&PLT_SOFTECH_20-06-2024.jpg?jsx';
import NodeJS from '/src/media/certificates/NODEJS_PROGRAMMINGHUB_05-08-2024.jpg?jsx';
import Fundamentals from '/src/media/certificates/FUNDAMENTALS_PROGRAMMINGHUB_05-08-2024.jpg?jsx';

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
    return (
        <div class={certificateStyles.certificatesContainer}>
            {certificates.map((certificate, index) => (
                <div key={index} class={certificateStyles.certificate}>
                    <h3>{certificate.title}</h3>
                    <Link href={`/certificates/${certificate.title.toLowerCase()}`}>
                        <certificate.path />
                    </Link>
                    <p>{certificate.tags.join(', ')}</p>
                </div>
            ))}
        </div>
    );
});
