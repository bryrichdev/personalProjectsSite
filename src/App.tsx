import { useMemo } from 'react'
import { content } from './content.ts'
import { useTheme } from './hooks/useTheme.ts'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { Projects } from './components/Projects.tsx'
import { Skills } from './components/Skills.tsx'
import { Experience } from './components/Experience.tsx'
import { About } from './components/About.tsx'
import { Contact } from './components/Contact.tsx'
import { Footer } from './components/Footer.tsx'
import type { NavItem } from './components/Header.tsx'

function App() {
    const { theme, toggle } = useTheme()

    const hasExperience = content.experience.length > 0
    const hasSkills = content.skills.length > 0

    // Sections that have no content are dropped from both the page and the nav.
    const nav = useMemo<NavItem[]>(
        () =>
            [
                { id: 'projects', label: 'Projects' },
                hasSkills ? { id: 'skills', label: 'Skills' } : null,
                hasExperience ? { id: 'experience', label: 'Experience' } : null,
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' },
            ].filter((item): item is NavItem => item !== null),
        [hasSkills, hasExperience],
    )

    const navIds = useMemo(() => nav.map((item) => item.id), [nav])

    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>

            <Header
                name={content.name}
                nav={nav}
                navIds={navIds}
                theme={theme}
                onToggleTheme={toggle}
            />

            <main id="main">
                <Hero content={content} />
                <Projects projects={content.projects} />
                {hasSkills && <Skills groups={content.skills} />}
                {hasExperience && <Experience entries={content.experience} />}
                <About
                    paragraphs={content.about}
                    name={content.name}
                    role={content.role}
                    location={content.location}
                />
                <Contact content={content} />
            </main>

            <Footer name={content.name} />
        </>
    )
}

export default App
