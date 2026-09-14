import './Footer.css'

interface FooterProps {
    name: string
}

export function Footer({ name }: FooterProps) {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <p>
                    © {new Date().getFullYear()} {name}
                </p>
                <p className="footer-built">Built with React, TypeScript, and Vite.</p>
                <a href="#top" className="footer-top">
                    Back to top ↑
                </a>
            </div>
        </footer>
    )
}
