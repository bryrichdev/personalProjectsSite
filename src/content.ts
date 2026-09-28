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
        "I build backend services and the infrastructure they run on. For three years I've " +
        'written the production automation a treasury team depends on every day. My own projects ' +
        'run on Java and Spring Boot over Postgres, and I manage AWS infrastructure with Terraform. ' +
        'I want a backend or platform role where I own services end to end.',
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
        'I started writing code to get rid of manual work. I was managing treasury operations at ' +
        'Conservice, and the team lost hours every week to spreadsheet handoffs. Apps Script was ' +
        'already there, so I used it. Three years later, I own those services in production. ' +
        'Along the way, the workaround turned into the job I wanted.',

        'I finished my B.S. in Software Engineering at WGU in September 2026. I work in Java and ' +
        'Spring Boot on the backend and React and Angular on the front end. I know enough AWS to ' +
        "build my own infrastructure instead of filing a ticket for it. My capstone, PantryPlan, " +
        "is the project I'd most like to walk you through.",

        "I'm looking for a backend or infrastructure role on a team that ships. If that's your " +
        'team, send me an email.',
    ],

    skills: [
        {label: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'VBA']},
        {label: 'Backend', items: ['Spring Boot', 'JPA / Hibernate', 'REST APIs', 'PostgreSQL', 'MySQL', 'Flask']},
        {label: 'Frontend', items: ['React', 'Angular', 'Vite', 'HTML', 'CSS']},
        {label: 'Cloud & infrastructure', items: ['AWS', 'Terraform', 'Docker', 'S3', 'Lambda', 'IAM', 'RDS']},
        {label: 'Tooling & testing', items: ['Git', 'GitHub Actions', 'JUnit', 'pytest', 'Playwright', 'IntelliJ']},
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
            slug: 'pantryplan',
            name: 'PantryPlan',
            tagline: 'Turns your recipes and pantry stock into a grocery list.',
            description:
                'A full-stack meal planner built on Spring Boot and PostgreSQL. You add recipes and ' +
                "track what's in your pantry. PantryPlan subtracts what you have from what the week's " +
                "meals need and returns what you still have to buy. It's my WGU capstone and the first " +
                'project where I owned the schema, the service layer, and the deployment.',
            role: 'Solo build',
            period: '2026',
            status: 'In progress',
            featured: true,
            highlights: [
                'One request builds the grocery list. It takes the set difference between planned recipes and current stock, replacing the manual cross-checking the app was built to remove.',
                'Reports share one interface. PantryStockReport and RecipeUsageReport both implement it, so a new report type is a new class instead of another branch in a switch.',
                'Deployed on Render. I priced App Runner with RDS and ECS Fargate with Aurora Serverless first. Neither was worth the operational overhead at this scale.',
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
            tagline: 'The Apps Script services a national utility billing company\u2019s treasury team runs every morning.',
            description:
                'Three years of production automation in Google Workspace at Conservice. I build and ' +
                'maintain the services the treasury team uses every day for reconciliation, reporting, ' +
                "and the handoffs between them. It's internal, so there's no public repo. It's also the " +
                'code of mine that has run in production the longest.',
            role: 'Solo build, internal',
            period: '2023 – Present',
            status: 'Live',
            featured: true,
            highlights: [],
            tech: ['Google Apps Script', 'JavaScript'],
            links: {},
        },
        // {
        //     slug: 'landon-hotel',
        //     name: 'Landon Hotel Booking',
        //     tagline: 'Internationalized booking app — Spring Boot API, Angular front end.',
        //     description:
        //         'A booking system for a hotel chain operating across time zones. The CRUD was not the ' +
        //         'interesting part; making one deployment serve users in multiple locales was, with rates ' +
        //         'and availability rendered in the viewer\u2019s time zone instead of the server\u2019s.',
        //     role: 'Solo build',
        //     period: '2025',
        //     status: 'Archived',
        //     highlights: [
        //         'Locale handling runs off i18n resource bundles, so adding a language is a properties file rather than a code change.',
        //         'Timestamps stored in UTC and converted at the edge, which removed an entire class of off-by-one-day booking bugs.',
        //         'Packaged with a multi-stage Docker build so the runtime image carries the JAR and nothing else.',
        //     ],
        //     tech: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Docker'],
        //     links: {
        //         // source: 'https://github.com/bryrichdev/landon-hotel',
        //     },
        // },
        {
            slug: 'credentialing-automation',
            name: 'Credentialing Automation',
            tagline: 'Fills out medical credentialing applications without storing anyone\u2019s credentials.',
            description:
                'Credentialing coordinators retype the same provider data into dozens of payer portals. ' +
                'This Spring Boot service drives Playwright to fill those forms, then stops. A person ' +
                'reviews and submits every one. Provider data stays in the customer\u2019s own AWS account ' +
                'and is reached through a cross-account role, so the service never stores credentials.',
            role: 'Solo build',
            period: '2026',
            status: 'Prototype',
            featured: true,
            highlights: [
                'Fills forms but never submits them. The submit click is where the liability sits, so a person makes it.',
                'Fills PDF packets with PDFBox AcroForms using versioned field-mapping templates. When a payer changes a form, I update a template instead of redeploying.',
                'Uses cross-account IAM instead of stored credentials. The service assumes a role the customer controls and can revoke at any time.',
            ],
            tech: ['Java', 'Spring Boot', 'Playwright', 'PDFBox', 'AWS IAM'],
            links: {
                source: 'https://credcloud.app'
            },
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
        // {
        //     slug: 'portfolio-infra',
        //     name: 'This Site',
        //     tagline: 'A React portfolio and the Terraform that puts it on AWS.',
        //     description:
        //         'React and TypeScript on Vite, with every piece of copy in one typed content file so ' +
        //         'updating the site is editing data rather than JSX. Infrastructure is Terraform: a single ' +
        //         'reusable S3 module applied across dev, staging, and prod from one monorepo, with ' +
        //         'CloudFront in front of it.',
        //     role: 'Solo build',
        //     period: '2026',
        //     status: 'In progress',
        //     highlights: [
        //         'Content, types, and presentation kept separate — adding a project is one typed object, and the compiler catches anything missing.',
        //         'One S3 module applied per environment rather than three configurations that drift apart.',
        //     ],
        //     tech: ['React', 'TypeScript', 'Vite', 'Terraform', 'AWS S3', 'CloudFront'],
        //     links: {
        //         source: 'https://github.com/bryrichdev/personalProjectsSite',
        //     },
        // },
    ],

    
}