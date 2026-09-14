import { Section } from './Section.tsx'
import type { SkillGroup } from '../types.ts'
import './Skills.css'

interface SkillsProps {
    groups: SkillGroup[]
}

export function Skills({ groups }: SkillsProps) {
    return (
        <Section
            id="skills"
            eyebrow="Toolkit"
            title="What I work with"
            lead="The tools I reach for by default. I pick up new ones quickly when a problem calls for it."
        >
            <div className="skill-grid">
                {groups.map((group) => (
                    <div key={group.label} className="skill-group">
                        <h3 className="skill-label">{group.label}</h3>
                        <ul className="skill-items">
                            {group.items.map((item) => (
                                <li key={item} className="tag">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    )
}
