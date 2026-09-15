import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the nav can highlight it.
 * The top margin offsets the sticky header; the bottom one keeps the last
 * short section from losing the highlight before it leaves the viewport.
 */
export function useActiveSection(ids: string[]): string {
    const [active, setActive] = useState(ids[0] ?? '')

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        if (sections.length === 0) return

        const visible = new Set<string>()

        const SCROLL_PADDING = 88 // keep in sync with scroll-padding-top in index.css
        const SPY_TOP = SCROLL_PADDING + 16

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visible.add(entry.target.id)
                    else visible.delete(entry.target.id)
                }
                const first = ids.find((id) => visible.has(id))
                if (first) setActive(first)
            },
            { rootMargin: `-${SPY_TOP}px 0px -55% 0px`, threshold: 0 },
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [ids])

    return active
}
