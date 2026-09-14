import { useEffect, useRef } from 'react'

/**
 * Adds `is-visible` the first time the element scrolls into view, driving the
 * `.reveal` transition in index.css. Elements stay visible once revealed.
 */
export function useReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (!('IntersectionObserver' in window)) {
            el.classList.add('is-visible')
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    observer.disconnect()
                }
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return ref
}
