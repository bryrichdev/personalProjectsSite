import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal.ts'
import './Section.css'

interface SectionProps {
    id: string
    eyebrow: string
    title: string
    lead?: string
    children: ReactNode
}

export function Section({ id, eyebrow, title, lead, children }: SectionProps) {
    const ref = useReveal<HTMLElement>()

    return (
        <section id={id} className="section reveal" ref={ref} aria-labelledby={`${id}-title`}>
            <div className="container">
                <header className="section-head">
                    <p className="eyebrow">
                        <span className="eyebrow-rule" aria-hidden="true" />
                        {eyebrow}
                    </p>
                    <h2 id={`${id}-title`} className="section-title">
                        {title}
                    </h2>
                    {lead && <p className="section-lead">{lead}</p>}
                </header>
                {children}
            </div>
        </section>
    )
}
