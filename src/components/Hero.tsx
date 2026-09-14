import { ArrowDownIcon, FileIcon, MailIcon } from './Icons.tsx'
import { socialIcons } from './socialIcons.ts'
import type { SiteContent } from '../types.ts'
import './Hero.css'

interface HeroProps {
    content: SiteContent
}

export function Hero({ content }: HeroProps) {
    const { name, role, location, intro, stats, email, socials, resumeUrl, availability } = content

    return (
        <section className="hero" id="top" aria-labelledby="hero-title">
            <div className="container hero-inner">
                <p className="hero-status">
                    <span className="status-dot" aria-hidden="true" />
                    {availability}
                </p>

                <h1 id="hero-title" className="hero-title">
                    {name}
                </h1>

                <p className="hero-role">
                    {role}
                    <span className="hero-sep" aria-hidden="true">
                        /
                    </span>
                    <span className="hero-location">{location}</span>
                </p>

                <p className="hero-intro">{intro}</p>

                <div className="hero-actions">
                    <a className="btn btn-primary" href="#projects">
                        View projects
                        <ArrowDownIcon width={16} height={16} />
                    </a>
                    <a className="btn btn-ghost" href={`mailto:${email}`}>
                        <MailIcon width={16} height={16} />
                        Get in touch
                    </a>
                    {resumeUrl && (
                        <a className="btn btn-ghost" href={resumeUrl} target="_blank" rel="noreferrer">
                            <FileIcon width={16} height={16} />
                            Resume
                        </a>
                    )}
                </div>

                {socials.length > 0 && (
                    <ul className="hero-socials">
                        {socials.map((social) => {
                            const Icon = socialIcons[social.icon]
                            return (
                                <li key={social.label}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-link"
                                    >
                                        <Icon width={16} height={16} />
                                        {social.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                )}

                {stats.length > 0 && (
                    <dl className="hero-stats">
                        {stats.map((stat) => (
                            <div key={stat.label} className="hero-stat">
                                <dt>{stat.label}</dt>
                                <dd>{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                )}
            </div>
        </section>
    )
}
