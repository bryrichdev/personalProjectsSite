import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function readStoredTheme(): Theme | null {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored === 'light' || stored === 'dark' ? stored : null
    } catch {
        // Private browsing or blocked storage — fall back to the system preference.
        return null
    }
}

function systemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

/** Resolves the theme once on mount, then keeps <html data-theme> in sync. */
export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => readStoredTheme() ?? systemTheme())

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    const toggle = useCallback(() => {
        setTheme((current) => {
            const next: Theme = current === 'dark' ? 'light' : 'dark'
            try {
                localStorage.setItem(STORAGE_KEY, next)
            } catch {
                // Preference just won't persist; the toggle still works this session.
            }
            return next
        })
    }, [])

    return { theme, toggle }
}
