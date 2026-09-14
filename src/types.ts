export type ProjectStatus = 'Live' | 'In progress' | 'Prototype' | 'Archived'

export interface ProjectLinks {
    /** Public URL where a recruiter can click around the running app. */
    demo?: string
    /** Repository URL. */
    source?: string
    /** Write-up, blog post, or demo video. */
    writeup?: string
}

export interface Project {
    /** Stable id used for keys and filter state. */
    slug: string
    name: string
    /** One line, shown under the title. */
    tagline: string
    /** A short paragraph: what it is and why it exists. */
    description: string
    /** e.g. "Solo build" or "Backend lead, team of 4". */
    role: string
    /** e.g. "2025" or "Jan–Apr 2025". */
    period: string
    status: ProjectStatus
    /** Outcome-shaped bullets. Numbers beat adjectives. */
    highlights: string[]
    /** Drives both the card tags and the filter bar. */
    tech: string[]
    links: ProjectLinks
    /** Featured projects render first, in a wider card. */
    featured?: boolean
}

export interface SkillGroup {
    label: string
    items: string[]
}

export interface ExperienceEntry {
    role: string
    org: string
    period: string
    location?: string
    summary: string
    points: string[]
    tech?: string[]
}

export interface SocialLink {
    label: string
    href: string
    /** Matches a key in components/Icons.tsx */
    icon: 'github' | 'linkedin' | 'mail' | 'file' | 'globe'
}

export interface SiteContent {
    name: string
    role: string
    location: string
    /** Hero paragraph. Two or three sentences, aimed at a hiring manager. */
    intro: string
    /** Shown as small stats under the hero. */
    stats: { value: string; label: string }[]
    email: string
    socials: SocialLink[]
    /** Path or URL to a resume PDF. Leave empty to hide the button. */
    resumeUrl: string
    availability: string
    about: string[]
    skills: SkillGroup[]
    projects: Project[]
    experience: ExperienceEntry[]
}
