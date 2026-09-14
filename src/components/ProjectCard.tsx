import { ExternalIcon, GithubIcon, GlobeIcon } from './Icons.tsx'
import type { Project } from '../types.ts'

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { name, tagline, description, role, period, status, highlights, tech, links } = project
    const statusModifier = status.toLowerCase().replace(/\s+/g, '-')

    return (
        <article className={`project-card${project.featured ? ' is-featured' : ''}`}>
            <div className="project-top">
                <div>
                    <h3 className="project-name">{name}</h3>
                    <p className="project-tagline">{tagline}</p>
                </div>
                <span className={`project-status status-${statusModifier}`}>{status}</span>
            </div>

            <p className="project-meta">
                <span>{role}</span>
                <span aria-hidden="true">·</span>
                <span>{period}</span>
            </p>

            <p className="project-description">{description}</p>

            {highlights.length > 0 && (
                <ul className="project-highlights">
                    {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>
            )}

            <ul className="project-tech">
                {tech.map((item) => (
                    <li key={item} className="tag">
                        {item}
                    </li>
                ))}
            </ul>

            <div className="project-links">
                {links.demo && (
                    <a href={links.demo} target="_blank" rel="noreferrer" className="project-link">
                        <GlobeIcon width={16} height={16} />
                        Live demo
                        <ExternalIcon className="link-arrow" />
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                )}
                {links.source && (
                    <a href={links.source} target="_blank" rel="noreferrer" className="project-link">
                        <GithubIcon width={16} height={16} />
                        Source
                        <ExternalIcon className="link-arrow" />
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                )}
                {links.writeup && (
                    <a href={links.writeup} target="_blank" rel="noreferrer" className="project-link">
                        Write-up
                        <ExternalIcon className="link-arrow" />
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                )}
            </div>
        </article>
    )
}
