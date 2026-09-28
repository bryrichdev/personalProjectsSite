import { useReveal } from '../hooks/useReveal.ts'
import { MailIcon } from './Icons.tsx'
import { socialIcons } from './socialIcons.ts'
import type { SiteContent } from '../types.ts'
import './Contact.css'

interface ContactProps {
    content: SiteContent
}

export function Contact({ content }: ContactProps) {
    const ref = useReveal<HTMLElement>()
    const { email, socials, availability } = content

    return (
        <section id="contact" className="contact reveal" ref={ref} aria-labelledby="contact-title">
            <div className="container">
                <div className="contact-card">
                    <p className="eyebrow">
                        <span className="eyebrow-rule" aria-hidden="true" />
                        Contact
                    </p>
                    <h2 id="contact-title" className="contact-title">
                        Let's talk
                    </h2>
                    <p className="contact-lead">
                        {availability}. Email is the fastest way to reach me.
                    </p>

                    <a className="btn btn-primary contact-email" href={`mailto:${email}`}>
                        <MailIcon width={18} height={18} />
                        {email}
                    </a>

                    {socials.length > 0 && (
                        <ul className="contact-socials">
                            {socials.map((social) => {
                                const Icon = socialIcons[social.icon]
                                return (
                                    <li key={social.label}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="icon-btn"
                                            aria-label={social.label}
                                            title={social.label}
                                        >
                                            <Icon />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    )
}
