import React, { useState } from 'react';
import styles from './projects.module.css';
import projects from '../../shared/projects.json';

const ProjectsDisplay = () => {
    return (
        <section className={styles.container}>
            <header>
                <h3 className={styles.heading}>My Projects</h3>
            </header>
            <div className={styles.projectsWrapper}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    const [showLinks, setShowLinks] = useState(false);
    const [showPackages, setShowPackages] = useState(false);

    return (
        <article className={styles.projectCard}>
            {/* Project Icon */}
            {project.icon && (
                <figure className={styles.iconWrapper}>
                    <img
                        src={project.icon}
                        alt={`${project.name} icon`}
                        className={styles.icon}
                    />
                </figure>
            )}

            {/* Project Name */}
            <h2 className={styles.projectName}>{project.name}</h2>

            {/* Project Description */}
            {project.description && (
                <p className={styles.description}>{project.description}</p>
            )}

            {/* Links Section */}
            <div className={styles.linksSection}>
                <button
                    onClick={() => setShowLinks(!showLinks)}
                    className={styles.dropdownButton}
                >
                    {showLinks ? 'Hide Links' : 'Show Links'}
                </button>

                {showLinks && (
                    <div className={styles.linksWrapper}>
                        {project.github && (
                            <p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    GitHub Repository
                                </a>
                            </p>
                        )}
                        {project.deploymentUrl && (
                            <p>
                                <a
                                    href={project.deploymentUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    Deployed Application
                                </a>
                            </p>
                        )}
                        {project.apiUrl && (
                            <p>
                                <a
                                    href={project.apiUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    API Documentation
                                </a>
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Package Links */}
            {project.packageLinks && project.packageLinks.length > 0 && (
                <div className={styles.packagesSection}>
                    <button
                        onClick={() => setShowPackages(!showPackages)}
                        className={styles.dropdownButton}
                    >
                        {showPackages ? 'Hide Packages' : 'Show Packages'}
                    </button>

                    {showPackages && (
                        <section>
                            <ul className={styles.packageList}>
                                {project.packageLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            )}
        </article>
    );
};

export default ProjectsDisplay;
