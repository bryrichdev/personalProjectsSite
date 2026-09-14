import type {SiteContent} from './types.ts'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE — it is the only place site copy lives.
 *
 *  Anything still marked TODO needs a real value from you. Links are commented
 *  out rather than filled with guesses, so nothing renders as a dead link.
 *  Uncomment each one once the URL is confirmed.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const content: SiteContent = {
    name: 'Bryson Richards',
    role: 'Software Engineer',
    location: 'Eden, North Carolina',
    intro:
        'I build backend services and the infrastructure they run on — Java and Spring Boot ' +
        'over Postgres, deployed with Terraform on AWS. Three years of that has been production ' +
        'automation for a treasury team, where the code either runs correctly every morning or ' +
        'someone loses their day to it. Looking for a backend or platform role where I keep ' +
        'owning services end to end.',
    stats: [
        {value: '3+', label: 'Years in production'},
        {value: 'Java / Spring Boot', label: 'Primary stack'},
        {value: 'B.S. Software Engineering', label: 'Degree'},
    ],
    email: 'bryrich.dev@gmail.com',
    resumeUrl: '', // drop resume.pdf in public/ and set this to '/resume.pdf'
    availability: 'Open to full-time roles',
    socials: [
        {label: 'GitHub', href: 'https://github.com/bryrichdev', icon: 'github'},
        {label: 'LinkedIn', href: 'https://www.linkedin.com/in/bryson-richards-a78812316', icon: 'linkedin'},
    ],

    about: [
        'I started writing code to get out of manual work. I was managing treasury operations ' +
        'at Conservice, the team was losing hours a week to spreadsheet handoffs, and Apps Script ' +
        'was the tool sitting right there. Three years later I own those services in production. ' +
        'Somewhere in the middle it stopped being a workaround and became the job I actually wanted.',

        'I finished a B.S. in Software Engineering at WGU in September 2026. Java and Spring Boot on ' +
        'the backend, React and Angular on the front, and enough AWS to build my own infrastructure ' +
        'rather than file a ticket for it. PantryPlan is my capstone and the project I would most ' +
        'want to walk you through.',

        'I am looking for a backend or infrastructure role on a team that ships. If that sounds ' +
        'like yours, email me.',
    ],

    skills: [
        {label: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'VBA']},
        {label: 'Backend', items: ['Spring Boot', 'JPA / Hibernate', 'REST APIs', 'PostgreSQL', 'MySQL', 'Flask']},
        {label: 'Frontend', items: ['React', 'Angular', 'Vite', 'HTML', 'CSS']},
        {label: 'Cloud & infrastructure', items: ['AWS', 'Terraform', 'Docker', 'S3', 'Lambda', 'IAM', 'RDS']},
        {label: 'Tooling & testing', items: ['Git', 'GitHub Actions', 'JUnit', 'pytest', 'Playwright', 'IntelliJ']},
        {
            label: 'Certifications',
            items: ['AWS Cloud Practitioner', 'CompTIA Project+', 'ITIL Foundations', 'AWS SAA-C03 (in progress)']
        },
    ],

    projects: [
        {
            slug: 'pantryplan',
            name: 'PantryPlan',
            tagline: 'Turns your recipes and what is already in your pantry into a grocery list.',
            description:
                'A full-stack meal planner on Spring Boot and PostgreSQL. You add recipes and track ' +
                'pantry stock; PantryPlan subtracts what you already have from what the week of cooking ' +
                'requires and hands back the list of what you actually need to buy. It is my WGU software ' +
                'engineering capstone and the first project where I owned the schema, the service layer, ' +
                'and the deploy end to end.',
            role: 'Solo build',
            period: '2026',
            status: 'In progress',
            featured: true,
            highlights: [
                'Grocery list generation is a set difference across planned recipes and current stock, so one request replaces the manual cross-referencing the app exists to kill.',
                'Reporting runs through a polymorphic Report hierarchy — PantryStockReport and RecipeUsageReport share an interface, so a new report type is a new class rather than another branch in a switch.',
                'Deployed on Render after costing out App Runner + RDS and ECS Fargate + Aurora Serverless. Neither justified its operational surface at this scale.',
            ],
            tech: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA', 'REST', 'Render'],
            links: {
                // demo: 'https://pantryplan.onrender.com',
                // source: 'https://github.com/bryrichdev/pantryplan',
            },
        },
        {
            slug: 'treasury-automation',
            name: 'Treasury Automation Suite',
            tagline: 'The Apps Script services a national utility billing team runs every morning.',
            description:
                'Three years of production automation inside Google Workspace at Conservice. I build ' +
                'and maintain the services the treasury team depends on daily — reconciliation, reporting, ' +
                'and the handoffs between them. Internal work, so there is no public repo, but it is ' +
                'the code of mine that has been in production the longest.',
            role: 'Solo build, internal',
            period: '2023 — Present',
            status: 'Live',
            featured: true,
            highlights: [],
            tech: ['Google Apps Script', 'JavaScript'],
            links: {},
        },
        {
            slug: 'landon-hotel',
            name: 'Landon Hotel Booking',
            tagline: 'Internationalized booking app — Spring Boot API, Angular front end.',
            description:
                'A booking system for a hotel chain operating across time zones. The CRUD was not the ' +
                'interesting part; making one deployment serve users in multiple locales was, with rates ' +
                'and availability rendered in the viewer\u2019s time zone instead of the server\u2019s.',
            role: 'Solo build',
            period: '2025',
            status: 'Archived',
            highlights: [
                'Locale handling runs off i18n resource bundles, so adding a language is a properties file rather than a code change.',
                'Timestamps stored in UTC and converted at the edge, which removed an entire class of off-by-one-day booking bugs.',
                'Packaged with a multi-stage Docker build so the runtime image carries the JAR and nothing else.',
            ],
            tech: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Docker'],
            links: {
                // source: 'https://github.com/bryrichdev/landon-hotel',
            },
        },
        {
            slug: 'credentialing-automation',
            name: 'Credentialing Automation',
            tagline: 'Fills medical credentialing applications without ever holding the credentials.',
            description:
                'Credentialing coordinators retype the same provider data into dozens of payer portals. ' +
                'This is a Spring Boot service that drives Playwright to fill those forms and then stops — ' +
                'a human reviews and submits every one. Provider data stays in the customer\u2019s own AWS ' +
                'account, reached through a cross-account role, so the service never stores anyone\u2019s ' +
                'credentials.',
            role: 'Solo build',
            period: '2026',
            status: 'Prototype',
            highlights: [
                'Fill but do not submit, by design. Automating the submit click is where the liability lives, so the tool does not do it.',
                'PDF packets filled through PDFBox AcroForms against versioned field-mapping templates — a payer changing their form is a template revision, not a redeploy.',
                'Cross-account IAM instead of credential storage. The service assumes a role the customer controls and can revoke.',
            ],
            tech: ['Java', 'Spring Boot', 'Playwright', 'PDFBox', 'AWS IAM'],
            links: {},
        },
        {
            slug: 'photo-cold-storage',
            name: 'Cold Storage for Photos',
            tagline: 'Moves video out of iCloud into tiered S3 archive storage.',
            description:
                'Prime Photos covers stills at full resolution but caps video at 5 GB, which is exactly ' +
                'where a large library gets expensive. This iOS app offloads originals through PhotoKit ' +
                'into S3 — Glacier Instant Retrieval for anything you might browse, Deep Archive for the ' +
                'rest — while keeping thumbnails and web-res derivatives in Standard so the library stays ' +
                'browsable without paying retrieval costs.',
            role: 'Solo build',
            period: '2026',
            status: 'In progress',
            highlights: [
                'Nothing is deleted locally until a checksum against the uploaded object verifies. No exceptions and no fast path.',
                'Restores orchestrated through RestoreObject with SNS and Lambda handling completion, so a multi-hour Deep Archive retrieval does not require the app to stay open.',
                'Bring-your-own-AWS-account through a cross-account role. I would rather not be the custodian of anyone\u2019s family photos.',
            ],
            tech: ['Swift', 'PhotoKit', 'AWS S3', 'Lambda', 'SNS'],
            links: {},
        },
        {
            slug: 'portfolio-infra',
            name: 'This Site',
            tagline: 'A React portfolio and the Terraform that puts it on AWS.',
            description:
                'React and TypeScript on Vite, with every piece of copy in one typed content file so ' +
                'updating the site is editing data rather than JSX. Infrastructure is Terraform: a single ' +
                'reusable S3 module applied across dev, staging, and prod from one monorepo, with ' +
                'CloudFront in front of it.',
            role: 'Solo build',
            period: '2026',
            status: 'In progress',
            highlights: [
                'Content, types, and presentation kept separate — adding a project is one typed object, and the compiler catches anything missing.',
                'One S3 module applied per environment rather than three configurations that drift apart.',
            ],
            tech: ['React', 'TypeScript', 'Vite', 'Terraform', 'AWS S3', 'CloudFront'],
            links: {
                source: 'https://github.com/bryrichdev/personalProjectsSite',
            },
        },
    ],

    experience: [
        {
            role: 'Project Manager',
            org: 'Conservice',
            period: 'March 2023 — Present',
            location: 'Remote',
            summary:
                'Own the automation treasury operations runs on — Apps Script services across ' +
                'Google Workspace, ' +
                'supporting a team of 30+.',
            points: [
                'Automated the daily bank reconciliation the team had been doing by hand, cutting roughly 25 hours a week of manual entry and taking keying errors from about 2% of records to effectively zero.',
                'Built and maintain the Apps Script services treasury depends on daily — matching, reporting, and exception handling across about 12,000 payment records and $40M in monthly volume.',
                'Created data pipeline, processing and transforming 30,000+ lines of transactional data daily, to feed into new reconciliation software partner.',
            ],
            tech: ['Google Apps Script', 'JavaScript', 'AWS', 'Terraform', 'SQL'],
        },
    ],
}