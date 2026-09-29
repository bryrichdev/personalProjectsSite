import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

// Bundle the worker with the site so PDF rendering does not depend on a CDN.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString()

interface ResumePreviewProps {
    url: string
    name: string
}

export default function ResumePreview({ url, name }: ResumePreviewProps) {
    const container = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)
    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        const element = container.current
        if (!element) return

        const observer = new ResizeObserver(([entry]) => {
            setWidth(Math.floor(entry.contentRect.width))
        })
        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    const loading = <p className="resume-preview-message" role="status">Loading resume…</p>
    const error = (
        <p className="resume-preview-message" role="alert">
            The preview could not load. <a href={url} download>Download the resume instead.</a>
        </p>
    )

    return (
        <div ref={container} className="resume-document" role="region" aria-label={`${name} resume`}>
            <Document
                file={url}
                suspense={false}
                onLoadSuccess={({ numPages }) => setPageCount(numPages)}
                loading={loading}
                error={error}
                externalLinkTarget="_blank"
                externalLinkRel="noopener noreferrer"
            >
                {width > 0 && Array.from({ length: pageCount }, (_, index) => (
                    <Page
                        key={index + 1}
                        pageNumber={index + 1}
                        width={width}
                        loading={loading}
                        error={error}
                    />
                ))}
            </Document>
        </div>
    )
}
