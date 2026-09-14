import { Section } from './Section.tsx'
import type { ExperienceEntry } from '../types.ts'
import './Experience.css'

interface ExperienceProps {
    entries: ExperienceEntry[]
}

export function Experience({ entries }: ExperienceProps) {
    return (
        <Section
            id="experience"
            eyebrow="Background"
            title="Experience"
            lead="Where I've worked and what I owned there."
        >
            <ol className="timeline">
                {entries.map((entry) => (
                    <li key={`${entry.org}-${entry.period}`} className="timeline-item">
                        <div className="timeline-marker" aria-hidden="true" />
                        <div className="timeline-body">
                            <p className="timeline-period">
                                {entry.period}
                                {entry.location && (
                                    <>
                                        <span aria-hidden="true"> · </span>
                                        {entry.location}
                                    </>
                                )}
                            </p>
                            <h3 className="timeline-role">
                                {entry.role} <span className="timeline-org">· {entry.org}</span>
                            </h3>
                            <p className="timeline-summary">{entry.summary}</p>
                            {entry.points.length > 0 && (
                                <ul className="timeline-points">
                                    {entry.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            )}
                            {entry.tech && entry.tech.length > 0 && (
                                <ul className="timeline-tech">
                                    {entry.tech.map((item) => (
                                        <li key={item} className="tag">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    )
}
