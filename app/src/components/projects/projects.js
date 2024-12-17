import React from 'react';
import projectStyles from './projects.module.css';
import projects from '../../data/projects.json';

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
    return (
        <article className={projectStyles.projectCard}>
            {project.icon && (
                <figure className={projectStyles.iconWrapper}>
                    <img
                        src={project.icon}
                        alt={`${project.name} icon`}
                        className={projectStyles.icon}
                    />
                </figure>
            )}

            <h2 className={projectStyles.projectName}>{project.name}</h2>

            {project.description && (
                <p className={projectStyles.description}>{project.description}</p>
            )}

            {/* Links Section */}
            <div className={projectStyles.linksSection}>
                {project.links.map((link, idx) => (
                    <button
                        key={idx}
                        className={projectStyles.actionButton}
                        onClick={() => window.open(link.url, '_blank')}
                    >
                        {link.name}
                    </button>
                ))}
            </div>

            {/* Package Links */}
            {project.packageLinks && project.packageLinks.length > 0 && (
                <div className={projectStyles.packagesSection}>
                    {project.packageLinks.map((pkg, idx) => (
                        <button
                            key={idx}
                            className={projectStyles.actionButton}
                            onClick={() => window.open(pkg.url, '_blank')}
                        >
                            {pkg.name}
                        </button>
                    ))}
                </div>
            )}
        </article>
    );
};

export default ProjectsDisplay;
