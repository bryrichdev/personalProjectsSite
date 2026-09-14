import { Section } from './Section.tsx'
import './About.css'

interface AboutProps {
    paragraphs: string[]
    name: string
    role: string
    location: string
}

export function About({ paragraphs, name, role, location }: AboutProps) {
    const initials = name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()

    return (
        <Section id="about" eyebrow="Who" title="About me">
            <div className="about-layout">
                <div className="about-copy">
                    {paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                </div>

                {/* Swap this block for a photo when you have one you like:
                    <img className="about-photo" src="/portrait.jpg" alt="" /> */}
                <aside className="about-card">
                    <span className="about-avatar" aria-hidden="true">
                        {initials}
                    </span>
                    <p className="about-name">{name}</p>
                    <p className="about-role">{role}</p>
                    <p className="about-location">{location}</p>
                </aside>
            </div>
        </Section>
    )
}
