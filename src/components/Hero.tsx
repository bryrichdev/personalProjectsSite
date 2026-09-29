import { lazy, Suspense, useRef, useState } from 'react'
import { ArrowDownIcon, CloseIcon, ExternalIcon, FileIcon, MailIcon } from './Icons.tsx'
import { socialIcons } from './socialIcons.ts'
import type { SiteContent } from '../types.ts'
import './Hero.css'

const ResumePreview = lazy(() => import('./ResumePreview.tsx'))

interface HeroProps {
    content: SiteContent
}

export function Hero({ content }: HeroProps) {
    const { name, role, location, intro, stats, email, socials, resumeUrl, availability } = content
    const resumeDialog = useRef<HTMLDialogElement>(null)
    const [resumeOpen, setResumeOpen] = useState(false)

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
                        <>
                            <button className="btn btn-ghost" type="button" aria-haspopup="dialog" onClick={() => {
                                resumeDialog.current?.showModal()
                                setResumeOpen(true)
                            }}>
                                <FileIcon width={16} height={16} />
                                Resume
                            </button>
                            <dialog
                                ref={resumeDialog}
                                className="resume-dialog"
                                aria-labelledby="resume-dialog-title"
                                onClose={() => setResumeOpen(false)}
                                onClick={(event) => {
                                    if (event.target !== event.currentTarget) return
                                    const bounds = event.currentTarget.getBoundingClientRect()
                                    if (event.clientX < bounds.left || event.clientX > bounds.right ||
                                        event.clientY < bounds.top || event.clientY > bounds.bottom) {
                                        event.currentTarget.close()
                                    }
                                }}
                            >
                                <header className="resume-dialog-header">
                                    <div className="resume-dialog-heading">
                                        <span className="resume-dialog-icon"><FileIcon width={22} height={22} /></span>
                                        <div>
                                            <h2 id="resume-dialog-title">Resume</h2>
                                            <p>{name} <span aria-hidden="true">·</span> {role}</p>
                                        </div>
                                    </div>
                                    <div className="resume-dialog-actions">
                                        <a className="btn btn-primary resume-download" href={resumeUrl} download>
                                            <ArrowDownIcon width={16} height={16} />
                                            Download PDF
                                        </a>
                                        <button
                                            className="resume-dialog-close"
                                            type="button"
                                            aria-label="Close resume"
                                            autoFocus
                                            onClick={() => resumeDialog.current?.close()}
                                        >
                                            <CloseIcon width={20} height={20} />
                                        </button>
                                    </div>
                                </header>
                                <div className="resume-dialog-preview">
                                    {resumeOpen && (
                                        <Suspense fallback={<p className="resume-preview-message" role="status">Loading resume…</p>}>
                                            <ResumePreview url={resumeUrl} name={name} />
                                        </Suspense>
                                    )}
                                </div>
                                <footer className="resume-dialog-footer">
                                    <p>Prefer a separate window?</p>
                                    <a href={resumeUrl} target="_blank" rel="noreferrer">
                                        Open PDF <ExternalIcon />
                                    </a>
                                </footer>
                            </dialog>
                        </>
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
