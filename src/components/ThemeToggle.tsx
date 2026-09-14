import { MoonIcon, SunIcon } from './Icons.tsx'
import type { Theme } from '../hooks/useTheme.ts'

interface ThemeToggleProps {
    theme: Theme
    onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
    const next = theme === 'dark' ? 'light' : 'dark'

    return (
        <button
            type="button"
            className="icon-btn"
            onClick={onToggle}
            aria-label={`Switch to ${next} theme`}
            title={`Switch to ${next} theme`}
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}
