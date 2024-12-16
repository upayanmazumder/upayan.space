import React, { useState } from 'react';
import projects from '../../shared/projects.json';

const ProjectsDisplay = () => {
    return (
        <section>
            <header>
                <h3>My Projects</h3>
            </header>
            <div>
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
        <article>
            {/* Project Icon */}
            {project.icon && (
                <figure>
                    <img
                        src={project.icon}
                        alt={`${project.name} icon`}

                    />
                </figure>
            )}

            {/* Project Name */}
            <h2>{project.name}</h2>

            {/* Project Description */}
            {project.description && (
                <p>{project.description}</p>
            )}

            {/* Links Section */}
            <div>
                <button
                    onClick={() => setShowLinks(!showLinks)}

                >
                    {showLinks ? 'Hide Links' : 'Show Links'}
                </button>

                {showLinks && (
                    <div>
                        {project.github && (
                            <p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"

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
                <div>
                    <button
                        onClick={() => setShowPackages(!showPackages)}

                    >
                        {showPackages ? 'Hide Packages' : 'Show Packages'}
                    </button>

                    {showPackages && (
                        <section>
                            <ul>
                                {project.packageLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"

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
