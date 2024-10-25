import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import certificateStyles from './certificates.module.css';
import { createSlug, certificates } from '../../shared/certificateData';

export default component$(() => {
    return (
        <div class={certificateStyles.certificatesContainer}>
            {certificates.map((certificate, index) => (
                <div key={index} class={certificateStyles.certificateCard}>
                    <h3>{certificate.title}</h3>
                    <Link href={`/certificates/${createSlug(certificate.title)}#image`}>
                        <certificate.path alt={`${certificate.title} certificate`} />
                    </Link>
                    <div>
                        {certificate.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} class={certificateStyles.certificateTag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
});