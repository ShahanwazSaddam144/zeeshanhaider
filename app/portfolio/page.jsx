
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PortfolioPage() {
    const gallery = [
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-01-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-03-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-02-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-05-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-04-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-06-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-07-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-09-free-img.jpg",
        "https://zeeshanhaider.com/wp-content/uploads/2021/05/portfolio-08-free-img.jpg",
    ]

    const total = gallery.length
    const [lightbox, setLightbox] = useState({ open: false, index: 0 })
    const startX = useRef(0)
    const currentX = useRef(0)
    const thumbsRef = useRef(null)
    const activeThumbRef = useRef(null)

    const normalize = (i) => ((i % total) + total) % total

    function openAt(i) { setLightbox({ open: true, index: normalize(i) }) }
    function closeLightbox() { setLightbox(s => ({ ...s, open: false })) }
    function next() { setLightbox(s => ({ ...s, index: normalize(s.index + 1) })) }
    function prev() { setLightbox(s => ({ ...s, index: normalize(s.index - 1) })) }

    // lock body scroll
    useEffect(() => {
        const prev = document.body.style.overflow
        if (lightbox.open) document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = prev }
    }, [lightbox.open])

    // keyboard nav
    useEffect(() => {
        if (!lightbox.open) return
        const onKey = (e) => {
            if (e.key === 'ArrowRight') next()
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'Escape') closeLightbox()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [lightbox.open]) // eslint-disable-line

    // preload neighbors
    useEffect(() => {
        if (!lightbox.open) return
        const i = lightbox.index
            ;[i, normalize(i + 1), normalize(i - 1)].forEach(idx => {
                const img = new Image()
                img.src = gallery[idx]
            })
    }, [lightbox.index, lightbox.open]) // eslint-disable-line

    // auto-center active thumbnail
    useEffect(() => {
        if (!lightbox.open) return
        const el = activeThumbRef.current
        const container = thumbsRef.current
        if (!el || !container) return
        const contRect = container.getBoundingClientRect()
        const elRect = el.getBoundingClientRect()
        const offset = (elRect.left - contRect.left) - (contRect.width / 2) + (elRect.width / 2)
        container.scrollBy({ left: offset, behavior: 'smooth' })
    }, [lightbox.index, lightbox.open])

    // touch handlers
    function onTouchStart(e) {
        startX.current = e.touches?.[0]?.clientX ?? 0
        currentX.current = startX.current
    }
    function onTouchMove(e) {
        currentX.current = e.touches?.[0]?.clientX ?? currentX.current
    }
    function onTouchEnd() {
        const delta = currentX.current - startX.current
        const threshold = 50
        if (delta > threshold) prev()
        else if (delta < -threshold) next()
        startX.current = 0
        currentX.current = 0
    }

    // framer variants
    const overlayV = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    const panelV = { hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 }, exit: { y: 6, opacity: 0 } }

    return (
        <main className="min-h-screen bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <header className="mb-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Portfolio</h1>
                    <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
                        A selection of UI/UX work, illustrations and project screenshots.
                    </p>
                </header>

                {/* Hero */}
                <section className="mb-12 flex justify-center">
                    <img
                        src="https://zeeshanhaider.com/wp-content/uploads/2021/05/bg-05-free-img.jpg"
                        alt="Hero"
                        className="max-w-full w-full md:w-3/4 lg:w-2/3 rounded shadow-md object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                </section>

                {/* UI/UX Heading */}
                <section className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">UI/UX Design</h2>
                    <div aria-hidden className="text-gray-400">
                        <svg className="w-6 h-6" viewBox="0 0 2048 2048" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z" />
                        </svg>
                    </div>
                </section>

                {/* Responsive grid (1 / 2 / 3 / 4) */}
                <section aria-label="Portfolio gallery">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {gallery.map((src, idx) => (
                            <article key={src} className="bg-white rounded-lg overflow-hidden shadow-sm">
                                <button
                                    type="button"
                                    onClick={() => openAt(idx)}
                                    className="w-full block text-left focus:outline-none"
                                    aria-label={`Open image ${idx + 1}`}
                                >
                                    <div className="w-full aspect-[370/474] sm:aspect-[370/474] md:aspect-[370/389] lg:aspect-[370/342] overflow-hidden bg-gray-100">
                                        <motion.img
                                            layoutId={`thumb-${idx}`}
                                            src={src}
                                            alt={`Portfolio ${idx + 1}`}
                                            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-3 text-center">
                                        <h3 className="text-sm font-medium text-gray-700">Project {idx + 1}</h3>
                                    </div>
                                </button>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="mt-12 bg-gradient-to-r from-white to-gray-50 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <p className="text-sm text-gray-600">Interested in working together? Reach out for collaborations or inquiries.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                        >
                            Get in touch
                        </a>

                    </div>
                </section>
            </div>

            {/* Lightbox with Framer Motion */}
            <AnimatePresence>
                {lightbox.open && (
                    <motion.div
                        key="overlay"
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        variants={overlayV}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
                        style={{ background: 'rgba(0,0,0,0.72)' }}
                    >
                        <motion.div
                            className="relative w-full max-w-5xl max-h-[95vh] mx-4 md:mx-auto rounded"
                            variants={panelV}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}
                        >
                            {/* Close */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-3 right-3 z-50 bg-black/50 text-white px-3 py-1 rounded hover:bg-black/70"
                                aria-label="Close"
                            >
                                ✕
                            </button>

                            {/* Prev / Next */}
                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-black/30 text-white p-3 rounded-full hover:bg-black/50"
                                aria-label="Previous image"
                            >‹</button>

                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-black/30 text-white p-3 rounded-full hover:bg-black/50"
                                aria-label="Next image"
                            >›</button>

                            {/* Main image area — constrained so thumbnails + caption never push it off-screen */}
                            <div
                                className="flex-1 w-full flex items-center justify-center"
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                                style={{ minHeight: 0 }}
                            >
                                <motion.img
                                    key={gallery[lightbox.index]}
                                    layoutId={`thumb-${lightbox.index}`}
                                    src={gallery[lightbox.index]}
                                    alt={`Portfolio ${lightbox.index + 1}`}
                                    draggable="false"
                                    className="object-contain rounded shadow-lg"
                                    style={{ maxHeight: 'calc(95vh - 160px)', maxWidth: '100%' }}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.25 }}
                                />
                            </div>

                            {/* Caption & counter */}
                            <div className="w-full mt-3 text-center text-white">
                                <div className="text-sm">{`Project ${lightbox.index + 1}`}</div>
                                <div className="text-xs text-gray-200/70">{lightbox.index + 1} / {total}</div>
                            </div>

                            {/* Thumbnails scroller */}
                            <div className="w-full mt-3 py-2">
                                <div
                                    ref={thumbsRef}
                                    className="flex gap-2 overflow-x-auto px-2 py-1"
                                    style={{ WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                                >
                                    {gallery.map((src, i) => {
                                        const isActive = i === lightbox.index
                                        return (
                                            <button
                                                key={src}
                                                ref={isActive ? activeThumbRef : null}
                                                onClick={() => setLightbox({ open: true, index: i })}
                                                className={`flex-shrink-0 rounded overflow-hidden border-2 ${isActive ? 'border-white' : 'border-transparent'}`}
                                                style={{ width: 80, height: 80 }}
                                                aria-label={`Open ${i + 1}`}
                                            >
                                                <motion.img
                                                    src={src}
                                                    alt={`thumb ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                    initial={{ scale: 1 }}
                                                    whileHover={{ scale: 1.03 }}
                                                />
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}
