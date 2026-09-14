import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
}

export function GithubIcon(props: IconProps) {
    return (
        <svg {...base} {...props} fill="currentColor" stroke="none">
            <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.5v-1.8c-2.92.64-3.54-1.4-3.54-1.4-.48-1.23-1.17-1.56-1.17-1.56-.96-.65.07-.64.07-.64 1.06.08 1.61 1.1 1.61 1.1.94 1.6 2.47 1.14 3.07.87.1-.69.37-1.15.67-1.42-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.41-2.09 1.09-2.83-.11-.27-.47-1.34.1-2.8 0 0 .88-.28 2.89 1.08a10 10 0 0 1 5.26 0c2-1.36 2.89-1.08 2.89-1.08.57 1.46.21 2.53.1 2.8.68.74 1.09 1.68 1.09 2.83 0 4.04-2.46 4.93-4.8 5.19.38.33.71.97.71 1.96v2.9c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z" />
        </svg>
    )
}

export function LinkedinIcon(props: IconProps) {
    return (
        <svg {...base} {...props} fill="currentColor" stroke="none">
            <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.9c0-3.35-1.79-4.9-4.17-4.9-1.92 0-2.78 1.06-3.26 1.8V8.5H9.63c.04.95 0 12.5 0 12.5h3.38v-6.98c0-.3.02-.6.11-.82.25-.6.8-1.23 1.73-1.23 1.22 0 1.71.93 1.71 2.3V21h3.38v-7.1Z" />
        </svg>
    )
}

export function MailIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
            <path d="m3.5 6.5 7.28 5.2a2 2 0 0 0 2.44 0l7.28-5.2" />
        </svg>
    )
}

export function FileIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M14 2.5H7A2.5 2.5 0 0 0 4.5 5v14A2.5 2.5 0 0 0 7 21.5h10a2.5 2.5 0 0 0 2.5-2.5V8l-5.5-5.5Z" />
            <path d="M14 2.5V8h5.5M8.5 13h7M8.5 17h5" />
        </svg>
    )
}

export function GlobeIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <circle cx="12" cy="12" r="9.5" />
            <path d="M2.8 9.5h18.4M2.8 14.5h18.4" />
            <path d="M12 2.5c2.5 2.6 3.75 5.8 3.75 9.5S14.5 18.9 12 21.5c-2.5-2.6-3.75-5.8-3.75-9.5S9.5 5.1 12 2.5Z" />
        </svg>
    )
}

export function ExternalIcon(props: IconProps) {
    return (
        <svg {...base} width={16} height={16} {...props}>
            <path d="M14 4h6v6M20 4l-8.5 8.5" />
            <path d="M18 14.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H10" />
        </svg>
    )
}

export function ArrowDownIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M12 4.5v15M6 13.5l6 6 6-6" />
        </svg>
    )
}

export function SunIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <circle cx="12" cy="12" r="4.25" />
            <path d="M12 2.5v2.2M12 19.3v2.2M4.22 4.22l1.56 1.56M18.22 18.22l1.56 1.56M2.5 12h2.2M19.3 12h2.2M4.22 19.78l1.56-1.56M18.22 5.78l1.56-1.56" />
        </svg>
    )
}

export function MoonIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M20.5 14.3A8.8 8.8 0 0 1 9.7 3.5a8.8 8.8 0 1 0 10.8 10.8Z" />
        </svg>
    )
}

export function MenuIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
    )
}

export function CloseIcon(props: IconProps) {
    return (
        <svg {...base} {...props}>
            <path d="M6 6l12 12M18 6 6 18" />
        </svg>
    )
}
