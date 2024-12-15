import React, { useState } from 'react';
import projectStyles from './projects.module.css';
import projects from '../../shared/projects.json';

const ProjectsDisplay = () => {
    return (
        <section className={projectStyles.container}>
            <header>
                <h3 className={projectStyles.heading}>My Projects</h3>
            </header>
            <div className={projectStyles.projectsWrapper}>
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
        <article className={projectStyles.projectCard}>
            {/* Project Icon */}
            {project.icon && (
                <figure className={projectStyles.iconWrapper}>
                    <img
                        src={project.icon}
                        alt={`${project.name} icon`}
                        className={projectStyles.icon}
                    />
                </figure>
            )}

            {/* Project Name */}
            <h2 className={projectStyles.projectName}>{project.name}</h2>

            {/* Project Description */}
            {project.description && (
                <p className={projectStyles.description}>{project.description}</p>
            )}

            {/* Links Section */}
            <div className={projectStyles.linksSection}>
                <button
                    onClick={() => setShowLinks(!showLinks)}
                    className={projectStyles.dropdownButton}
                >
                    {showLinks ? 'Hide Links' : 'Show Links'}
                </button>

                {showLinks && (
                    <div className={projectStyles.linksWrapper}>
                        {project.github && (
                            <p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={projectStyles.link}
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
                                    className={projectStyles.link}
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
                                    className={projectStyles.link}
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
                <div className={projectStyles.packagesSection}>
                    <button
                        onClick={() => setShowPackages(!showPackages)}
                        className={projectStyles.dropdownButton}
                    >
                        {showPackages ? 'Hide Packages' : 'Show Packages'}
                    </button>

                    {showPackages && (
                        <section>
                            <ul className={projectStyles.packageList}>
                                {project.packageLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={projectStyles.link}
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
