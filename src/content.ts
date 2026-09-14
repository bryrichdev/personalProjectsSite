import type { SiteContent } from './types.ts'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE — it is the only place site copy lives.
 *
 *  Everything below is PLACEHOLDER text written to show the shape of a strong
 *  entry. Replace it with your real projects; delete anything you don't have
 *  yet (empty arrays render as nothing rather than breaking the layout).
 *
 *  Recruiter-facing tips:
 *   - `highlights` should be outcomes, not task lists. "Cut p95 latency from
 *     800ms to 120ms" lands; "Used Redis" does not.
 *   - A working `links.demo` is worth more than three more paragraphs.
 *   - Put your two strongest projects first and mark them `featured: true`.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const content: SiteContent = {
    name: 'Bryson Richards',
    role: 'Software Engineer',
    location: 'Eden, North Carolina',
    intro:
        'TODO: Two sentences a hiring manager can skim. What you build, the stack ' +
        'you reach for, and the kind of problem you want to be pointed at next. ' +
        'Example: I build full-stack web apps with TypeScript and React on the front ' +
        'and Node/Postgres behind them — currently looking for a backend-leaning role ' +
        'on a product team that ships weekly.',
    stats: [
        { value: 3, label: 'Years writing code' },
        { value: 2, label: 'Projects shipped' },
        { value: 'Spring Boot', label: 'Primary stack' },
    ],
    email: 'bryrich.dev@gmail.com',
    resumeUrl: '', // e.g. '/resume.pdf' — drop the PDF in public/ and the button appears
    availability: 'Open to full-time roles',
    socials: [
        { label: 'GitHub', href: 'https://github.com/bryrichdev', icon: 'github' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bryson-richards-a78812316', icon: 'linkedin' },
    ],

    about: [
        'TODO: A short paragraph on how you got into software and what you like ' +
        'building. Keep it human — this is the part that makes someone want to talk ' +
        'to you rather than just scan your stack list.',
        'TODO: A second paragraph on what you are working on or learning right now, ' +
        'and what you are looking for next. End with an invitation to get in touch.',
    ],

    skills: [
        { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'SQL', 'Python'] },
        { label: 'Frontend', items: ['React', 'Vite', 'HTML', 'CSS', 'Accessibility'] },
        { label: 'Backend', items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Spring Boot'] },
        { label: 'Tooling', items: ['Git', 'GitHub Actions', 'Docker', 'Vitest', 'Figma'] },
    ],

    projects: [
        {
            slug: 'project-one',
            name: 'TODO: Project One',
            tagline: 'One line on what it does and who it is for.',
            description:
                'TODO: Two or three sentences. What problem it solves, the interesting ' +
                'technical decision you made, and where it runs today. Name the hard part ' +
                'and how you handled it — that is the paragraph an engineer actually reads.',
            role: 'Solo build',
            period: '2025',
            status: 'Live',
            featured: true,
            highlights: [
                'TODO: An outcome with a number in it (users, latency, data volume, uptime).',
                'TODO: A technical decision and the tradeoff behind it.',
                'TODO: Something you would tell an interviewer you would do differently.',
            ],
            tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
            links: {
                demo: 'https://example.com',
                source: 'https://github.com/bryrichdev/TODO',
            },
        },
        {
            slug: 'project-two',
            name: 'TODO: Project Two',
            tagline: 'One line on what it does and who it is for.',
            description:
                'TODO: Two or three sentences. If this one is more about craft than scale, ' +
                'say so — a polished small tool reads better than a vague large one.',
            role: 'Solo build',
            period: '2025',
            status: 'Live',
            featured: true,
            highlights: [
                'TODO: An outcome with a number in it.',
                'TODO: A technical decision and the tradeoff behind it.',
            ],
            tech: ['React', 'Vite', 'CSS'],
            links: {
                demo: 'https://example.com',
                source: 'https://github.com/bryrichdev/TODO',
            },
        },
        {
            slug: 'project-three',
            name: 'TODO: Project Three',
            tagline: 'One line on what it does and who it is for.',
            description:
                'TODO: Smaller projects still earn a spot if they show range — a CLI, a ' +
                'game, a data pipeline, something you automated for yourself.',
            role: 'Solo build',
            period: '2024',
            status: 'In progress',
            highlights: [
                'TODO: What you learned building it.',
                'TODO: What works today and what is still unfinished.',
            ],
            tech: ['Python', 'SQL'],
            links: {
                source: 'https://github.com/bryrichdev/TODO',
            },
        },
    ],

    experience: [
        {
            role: 'TODO: Job Title',
            org: 'TODO: Company',
            period: 'TODO: 2024 — Present',
            location: 'TODO: City, State',
            summary:
                'TODO: One sentence on the team, the product, and what you owned on it.',
            points: [
                'TODO: An achievement framed as impact, with a number where you have one.',
                'TODO: Something you built end to end, named concretely.',
                'TODO: Collaboration, mentoring, or process work that moved the team.',
            ],
            tech: ['TypeScript', 'React', 'Node.js'],
        },
    ],
}
