import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection.ts'
import { CloseIcon, MenuIcon } from './Icons.tsx'
import { ThemeToggle } from './ThemeToggle.tsx'
import type { Theme } from '../hooks/useTheme.ts'
import './Header.css'

export interface NavItem {
    id: string
    label: string
}

interface HeaderProps {
    name: string
    nav: NavItem[]
    navIds: string[]
    theme: Theme
    onToggleTheme: () => void
}

export function Header({ name, nav, navIds, theme, onToggleTheme }: HeaderProps) {
    const active = useActiveSection(navIds)
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (!menuOpen) return
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuOpen(false)
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [menuOpen])

    const initials = name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()

    return (
        <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
            <div className="container header-inner">
                <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
                    <span className="brand-mark" aria-hidden="true">
                        {initials}
                    </span>
                    <span className="brand-name">{name}</span>
                </a>

                <nav className="nav-desktop" aria-label="Sections">
                    <ul>
                        {nav.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={active === item.id ? 'is-active' : undefined}
                                    aria-current={active === item.id ? 'true' : undefined}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                    <button
                        type="button"
                        className="icon-btn nav-trigger"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            <nav
                id="mobile-nav"
                className={`nav-mobile${menuOpen ? ' is-open' : ''}`}
                aria-label="Sections"
                hidden={!menuOpen}
            >
                <ul className="container">
                    {nav.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={active === item.id ? 'is-active' : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
