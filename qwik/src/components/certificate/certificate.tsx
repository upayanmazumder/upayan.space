import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import certificateStyles from './certificate.module.css';
import { createSlug, certificates } from '../../shared/certificateData';
import Four04 from "../../components/404/404";

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