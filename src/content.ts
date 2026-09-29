import type { SiteContent } from './types.ts'


export const content: SiteContent = {
    name: 'Bryson Richards',
    role: 'Software Engineer',
    location: 'Eden, North Carolina',
    intro:
        "I build backend services and the infrastructure they run on. For three years I've " +
        'written the production automation a treasury team depends on every day. My own projects ' +
        'run on Java and Spring Boot over Postgres, and I manage AWS infrastructure with Terraform. ' +
        'I want a backend or platform role where I own services end to end.',
    stats: [
        { value: '3+', label: 'Years in production' },
        { value: 'Java / Spring Boot', label: 'Primary stack' },
        { value: 'B.S. Software Engineering', label: 'Degree' },
    ],
    email: 'bryrich.dev@gmail.com',
    resumeUrl: '/resume.pdf',
    availability: 'Open to full-time roles',
    socials: [
        { label: 'GitHub', href: 'https://github.com/bryrichdev', icon: 'github' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bryson-richards-a78812316', icon: 'linkedin' },
    ],

    about: [
        'I started writing code to get rid of manual work. I was managing treasury operations at ' +
        'Conservice, and the team lost hours every week to spreadsheet handoffs. Apps Script was ' +
        'already there, so I used it. Three years later, I own those services in production. ' +
        'Along the way, the workaround turned into the job I wanted.',

        'I finished my B.S. in Software Engineering at WGU in September 2026. I work in Java and ' +
        'Spring Boot on the backend and React and Angular on the front end. I know enough AWS to ' +
        "build my own infrastructure instead of filing a ticket for it. My capstone, PantryPlan, " +
        "is the project I'd most like to walk you through.",
    ],

    skills: [
        { label: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'VBA'] },
        { label: 'Backend', items: ['Spring Boot', 'JPA / Hibernate', 'REST APIs', 'PostgreSQL', 'MySQL', 'Flask'] },
        { label: 'Frontend', items: ['React', 'Angular', 'Vite', 'HTML', 'CSS'] },
        { label: 'Cloud & infrastructure', items: ['AWS', 'Terraform', 'Docker', 'S3', 'Lambda', 'IAM', 'RDS'] },
        { label: 'Tooling & testing', items: ['Git', 'GitHub Actions', 'JUnit', 'pytest', 'Playwright', 'IntelliJ'] },
        {
            label: 'Certifications',
            items: ['AWS Cloud Practitioner', 'CompTIA Project+', 'ITIL Foundation', 'AWS SAA-C03 (in progress)']
        },
    ],

    experience: [
        {
            role: 'Project Manager',
            org: 'Conservice',
            period: 'June 2024 – Present',
            location: 'Remote',
            summary:
                'Own the Google Workspace automation that treasury operations runs on, ' +
                'supporting a team of 30+.',
            points: [
                'Automated the daily bank reconciliation the team did by hand. Cut about 25 hours a week of manual entry and brought keying errors from about 2% of records to near zero.',
                'Build and maintain the Apps Script services treasury uses every day for matching, reporting, and exception handling across about 120,000 payment records and $80M in monthly volume.',
                'Built a data pipeline that processes and transforms 30,000+ lines of transaction data a day to feed the new reconciliation software.',
            ],
            tech: ['Google Apps Script', 'JavaScript', 'SQL', 'VBA', 'Power BI'],
        },
        {
            role: 'Payment Resolutions Team Lead',
            org: 'Conservice',
            period: 'December 2022 – June 2024',
            location: 'Logan, UT',
            summary: 'Led the team responsible for stopping client utility disconnections and preventing new ones.',
            points: [
                'Resolved complex payment and billing errors under tight service deadlines to keep client utilities connected.',
                'Cut the open ticket queue from about 4,000 to under 200 by redesigning intake and adding Apps Script support tooling.',
                'Set and enforced SOE, trained the team, and ran quality reviews to hold accuracy and throughput targets.',
                'Built SOE automation that tracked tickets closed, ticket lifespan, and work quality across several teams beyond my own.',
            ],
            tech: ['Google Apps Script', 'JavaScript']
        },
    ],

    projects: [
        {
            slug: 'pantryprep',
            name: 'PantryPrep',
            tagline: 'Plans the week around what is already in your pantry.',
            description:
                'A live meal-planning app that keeps recipes, pantry stock, weekly plans, and grocery ' +
                'lists in sync. PantryPrep totals what every meal needs, scales it for the planned ' +
                'servings, subtracts compatible stock, and sorts what is left by aisle. It began as ' +
                'my WGU capstone and now runs as a production service on AWS.',
            role: 'Solo build',
            period: '2026',
            status: 'Live',
            featured: true,
            highlights: [
                'Builds one grocery list from the whole week before subtracting pantry stock, so the same bag of flour is never counted against two meals. Quantities are converted across compatible kitchen units.',
                'Keeps the workflow connected: cooking a planned meal deducts its ingredients, undo restores the exact pantry rows, and bought groceries can be put away directly from the list.',
                'Terraform provisions a Graviton EC2 host running the app, PostgreSQL, and Caddy in Docker Compose. GitHub Actions deploys scanned ECR images through SSM and rolls back a failed release.',
            ],
            tech: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA', 'Docker', 'Terraform', 'AWS EC2', 'GitHub Actions'],
            links: {
                demo: 'https://pantryprep.app/',
                source: 'https://github.com/bryrichdev/pantryPlan',
            },
        },
        {
            slug: 'credentialing-automation',
            name: 'CredCloud',
            tagline: 'Turns provider records into reviewed PDFs and guided payer-portal applications.',
            description:
                'A live, multi-tenant credentialing workspace for providers, groups, licenses, documents, ' +
                'and payer enrollments. CredCloud reuses that record to generate fillable PDF applications ' +
                'and guide portal entry in an isolated browser. It fills the repetitive fields, then leaves ' +
                'review and submission with the credentialing coordinator.',
            role: 'Solo build',
            period: '2026',
            status: 'Live',
            featured: true,
            highlights: [
                'Maps provider data into versioned payer templates, creates a reviewable draft, and generates the completed AcroForm only after a coordinator checks every answer.',
                'Learns portal forms visually and replays the mapping in CredCloud\u2019s temporary browser or a Chrome extension. It fills text, selects options, and never clicks Submit.',
                'Runs on AWS behind a Cloudflare Tunnel with required two-step sign-in for admins, encrypted backup-and-restore drills, and a versioned S3 bucket isolated per workspace.',
            ],
            tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Playwright', 'PDFBox', 'Docker', 'Terraform', 'AWS S3'],
            links: {
                demo: 'https://credcloud.app/',
                source: 'https://github.com/bryrichdev/credapp'
            },
        },
        {
            slug: 'treasury-automation',
            name: 'Treasury Automation Suite',
            tagline: 'Production automation for 120,000 payment records and $80M in monthly volume.',
            description:
                'A suite of Google Workspace services I have built and operated at Conservice since 2023. ' +
                'It reconciles bank activity, surfaces exceptions, produces operational reporting, and ' +
                'moves transaction data into the company\u2019s reconciliation system. The software is ' +
                'internal, but it is the code of mine with the longest production track record.',
            role: 'Solo build, internal',
            period: '2023 – Present',
            status: 'Live',
            featured: true,
            highlights: [
                'Replaced a manual daily reconciliation process, saving about 25 hours each week and reducing keying errors from roughly 2% of records to near zero.',
                'Supports a treasury team of 30+ across matching, reporting, and exception handling for about 120,000 payment records each month.',
                'Processes and transforms more than 30,000 lines of transaction data each day for the company\u2019s reconciliation platform.',
            ],
            tech: ['Google Apps Script', 'JavaScript', 'SQL', 'VBA', 'Power BI'],
            links: {},
        },
        // {
        //     slug: 'photo-cold-storage',
        //     name: 'Cold Storage for Photos',
        //     tagline: 'Moves video out of iCloud into tiered S3 archive storage.',
        //     description:
        //         'Prime Photos covers stills at full resolution but caps video at 5 GB, which is exactly ' +
        //         'where a large library gets expensive. This iOS app offloads originals through PhotoKit ' +
        //         'into S3 — Glacier Instant Retrieval for anything you might browse, Deep Archive for the ' +
        //         'rest — while keeping thumbnails and web-res derivatives in Standard so the library stays ' +
        //         'browsable without paying retrieval costs.',
        //     role: 'Solo build',
        //     period: '2026',
        //     status: 'In progress',
        //     highlights: [
        //         'Nothing is deleted locally until a checksum against the uploaded object verifies. No exceptions and no fast path.',
        //         'Restores orchestrated through RestoreObject with SNS and Lambda handling completion, so a multi-hour Deep Archive retrieval does not require the app to stay open.',
        //         'Bring-your-own-AWS-account through a cross-account role. I would rather not be the custodian of anyone\u2019s family photos.',
        //     ],
        //     tech: ['Swift', 'PhotoKit', 'AWS S3', 'Lambda', 'SNS'],
        //     links: {},
        // },
    ],


}
