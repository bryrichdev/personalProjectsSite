import { useMemo, useState } from 'react'
import { Section } from './Section.tsx'
import { ProjectCard } from './ProjectCard.tsx'
import type { Project } from '../types.ts'
import './Projects.css'

interface ProjectsProps {
    projects: Project[]
}

const ALL = 'All'

export function Projects({ projects }: ProjectsProps) {
    const [filter, setFilter] = useState(ALL)

    // Featured first, then the tech list every project contributes to.
    const ordered = useMemo(
        () => [...projects].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)),
        [projects],
    )

    const filters = useMemo(() => {
        const counts = new Map<string, number>()
        for (const project of projects) {
            for (const tech of project.tech) {
                counts.set(tech, (counts.get(tech) ?? 0) + 1)
            }
        }
        return [
            ALL,
            // Most-used tech first so the bar stays short and useful.
            ...[...counts.entries()]
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .map(([tech]) => tech),
        ]
    }, [projects])

    const visible = filter === ALL ? ordered : ordered.filter((p) => p.tech.includes(filter))

    return (
        <Section
            id="projects"
            eyebrow="Work"
            title="Projects"
            lead="Things I designed, built, and shipped. Each one links to a live demo or the source, so you can judge the code rather than take my word for it."
        >
            {filters.length > 2 && (
                <div className="project-filters" role="group" aria-label="Filter projects by technology">
                    {filters.map((item) => (
                        <button
                            key={item}
                            type="button"
                            className={`filter-chip${filter === item ? ' is-active' : ''}`}
                            aria-pressed={filter === item}
                            onClick={() => setFilter(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}

            <div className="project-grid">
                {visible.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>

            <p className="project-count" role="status">
                Showing {visible.length} of {projects.length} projects
                {filter !== ALL && ` built with ${filter}`}.
            </p>
        </Section>
    )
}
