from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from xml.sax.saxutils import escape

ROOT = Path('/Users/bryson/Projects/personalProjectsSite')
FONT = Path('/Users/bryson/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/libreoffice-headless/libreoffice/LibreOfficeDev.app/Contents/Resources/fonts/truetype')
for name, filename in [('Carlito', 'Carlito-Regular.ttf'), ('Carlito-Bold', 'Carlito-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONT / filename)))
pdfmetrics.registerFontFamily('Carlito', normal='Carlito', bold='Carlito-Bold', italic='Carlito', boldItalic='Carlito-Bold')
OUT = ROOT / 'output/pdf/Bryson_Richards_Resume.pdf'
c = canvas.Canvas(str(OUT), pagesize=(612, 792))
c.setTitle('Bryson Richards | Software Engineer')
c.setAuthor('Bryson Richards')
c.setSubject('Software engineering resume - updated project experience, September 2026')
LEFT, WIDTH = 36, 540
y = 758
body = ParagraphStyle('body', fontName='Carlito', fontSize=8.3, leading=9.9, textColor=HexColor('#222222'))

def para(text, size=None, leading=None, gap=2, indent=0, bold=False, color=None):
    global y
    style = ParagraphStyle('p', parent=body, fontSize=size or body.fontSize,
                           leading=leading or body.leading,
                           fontName='Carlito-Bold' if bold else 'Carlito',
                           textColor=HexColor(color) if color else body.textColor)
    p = Paragraph(text, style)
    _, h = p.wrap(WIDTH-indent, 800)
    p.drawOn(c, LEFT+indent, y-h)
    y -= h+gap

def section(label):
    global y
    y -= 4
    para(label, size=9.2, leading=11, bold=True, gap=3)
    c.setStrokeColor(HexColor('#888888'))
    c.setLineWidth(.5)
    c.line(LEFT, y, LEFT+WIDTH, y)
    y -= 4

def bullet(text):
    c.setFillColor(HexColor('#222222'))
    c.circle(LEFT+2, y-4.8, 1.15, stroke=0, fill=1)
    para(text, indent=9, gap=2)

def skill(label, text):
    global y
    start = y
    para(escape(label), bold=True, gap=2)
    y = start
    para(escape(text), indent=93, gap=2)

def link(url, label):
    return f'<link href="{url}" color="#254f6e">{escape(label)}</link>'

def project(title, stack, text, links=None):
    global y
    heading = f'<b>{escape(title)}</b> · {escape(stack)}'
    para(heading, gap=1)
    para(text, gap=3)
    if links:
        para(' · '.join(link(url,label) for label,url in links), size=8, leading=9.3, gap=4)

para('Bryson Richards', size=18, leading=20, bold=True, gap=3)
para('Software Engineer | Cloud &amp; Automation', size=10, leading=12, gap=4)
para('Eden, NC · (208) 406-7762 · '+link('mailto:bryrich.dev@gmail.com','bryrich.dev@gmail.com')+' · '+link('https://www.linkedin.com/in/bryson-richards-a78812316','LinkedIn')+' · '+link('https://github.com/bryrichdev','github.com/bryrichdev'), size=8.3, leading=10, gap=3)

section('PROFILE')
para('Software engineer with five years in financial services, building and owning the production automation that runs daily treasury operations. Builds Java and Spring Boot applications backed by PostgreSQL, with AWS infrastructure in Terraform and automated Docker deployments through GitHub Actions. B.S. Software Engineering complete; AWS certified.')

section('TECHNICAL SKILLS')
skill('Languages', 'Java, JavaScript, TypeScript, Python, SQL, VBA')
skill('Cloud & Infrastructure', 'AWS (EC2, S3, ECR, IAM, SSM, Lambda, VPC), Terraform, Docker, Cloudflare')
skill('Backend & Web', 'Spring Boot, JPA/Hibernate, REST APIs, Angular, React, Node.js, Google Apps Script')
skill('Data', 'PostgreSQL, MySQL, BigQuery, data modeling, stored procedures, triggers, Flyway migrations')
skill('Testing & Automation', 'JUnit, Testcontainers, pytest, Playwright, PDFBox, browser and document automation')
skill('Tools & Practices', 'Git/GitHub, GitHub Actions, CI/CD, Linux/macOS, infrastructure as code, Agile delivery')

section('CERTIFICATIONS & EDUCATION')
para('<b>AWS Certified Cloud Practitioner (CLF-C02)</b> - Amazon Web Services', gap=2)
para('<b>CompTIA Project+ (PK0-005)</b> - CompTIA', gap=2)
para('<b>AWS Certified Solutions Architect - Associate (SAA-C03)</b> - in progress', gap=2)
para('<b>B.S. Software Engineering</b> - Western Governors University, September 2026', gap=2)

section('PROFESSIONAL EXPERIENCE')
para('Project Manager - Treasury Automation, Conservice', bold=True, size=9.2, gap=1)
para('June 2024 - Present · Remote', size=8.2, leading=10, color='#555555', gap=3)
bullet('Sole developer and maintainer of treasury automation in Google Apps Script, JavaScript, and VBA; own production triage and requirements gathering with finance stakeholders.')
bullet('Engineered a credit card reconciliation pipeline handling tens of thousands of daily transactions, eliminating 50+ hours of manual work per week from reconciliation through archiving.')
bullet('Built an Apps Script REST API connecting Excel clients to Google Workspace data and giving leadership live visibility into treasury metrics.')
bullet('Developed SOE performance tracking and reporting for senior leaders, replacing 20+ hours of manual leadership reporting each month.')
para('Payment Resolutions Team Lead, Conservice', bold=True, size=9.2, gap=1)
para('December 2022 - June 2024 · Logan, UT', size=8.2, leading=10, color='#555555', gap=3)
bullet('Led the team in preventing client utility disconnections by resolving complex payment and billing errors under tight service deadlines.')
bullet("Reduced the team's open ticket queue from roughly 4,000 to 200 by redesigning intake processes and introducing supporting tooling.")
bullet('Set and enforced Standards of Excellence, trained team members, and ran quality reviews to hold accuracy and throughput targets.')
para('Payment Operations Assistant Team Lead, Conservice', bold=True, size=9.2, gap=1)
para('October 2021 - December 2022 · Logan, UT', size=8.2, leading=10, color='#555555', gap=3)
bullet('Supported daily payment operations, trained team members on systems and processes, and tracked performance against Statement of Expectations metrics.')

section('PROJECTS')
project('PantryPrep - Meal Planning & Grocery Automation', 'Java, Spring Boot, PostgreSQL, Docker, Terraform, AWS',
        'Built and deployed a meal planner that scales recipe quantities, converts compatible units, and subtracts pantry stock across a weekly plan. Cooking and grocery stock-up keep inventory in sync. Provisioned EC2 with Terraform; GitHub Actions deploys scanned ECR images through SSM with health checks and rollback.',
        [('pantryprep.app','https://pantryprep.app/'), ('Source','https://github.com/bryrichdev/pantryPlan')])
project('CredCloud - Credentialing Workspace & Automation', 'Java, Spring Boot, PostgreSQL, Playwright, PDFBox, AWS',
        'Built a multi-tenant workspace for provider records, documents, and payer enrollments. Generates reviewed PDF applications from versioned templates and fills portal forms in a temporary browser or Chrome extension, leaving submission to the user. Added workspace-scoped S3 storage, admin MFA, and encrypted backups with restore drills.',
        [('credcloud.app','https://credcloud.app/'), ('Source','https://github.com/bryrichdev/credapp')])
project('Personal Portfolio', 'React, TypeScript, Vite, Cloudflare, GitHub Actions',
        'Built a responsive portfolio with typed content, project filters, accessible navigation, and light/dark themes. CI runs lint and production-build checks; Wrangler configures static assets for Cloudflare.',
        [('Source','https://github.com/bryrichdev/personalProjectsSite')])
project('Landon Hotel Booking Platform', 'Java, Spring Boot, Angular, Docker',
        'Built a booking application with a multi-stage Docker build, internationalized resource bundles, and timezone-aware reservations.')
project('Secure API Remediation', 'Python, Flask, pytest',
        'Remediated hardcoded secrets, plaintext credentials, missing authentication, and broken object-level authorization; added regression tests and a security report.')
project('Relational Database Automation', 'PostgreSQL',
        'Designed a normalized schema and automated reporting with triggers, stored procedures, and scheduled pgAgent jobs.')

assert y >= 25, f'Content overflows: bottom at {y:.1f}'
c.showPage()
c.save()
print(f'{OUT}\nBottom of content: {y:.1f} pt')
