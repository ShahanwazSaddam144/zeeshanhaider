'use client'

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function AchievementsGallery() {
    const [lightbox, setLightbox] = useState({ open: false, index: 0 });
    const images = [
        { src: "/BW7.5.webp", alt: "BW7.5", title: "BW7.5" },
        { src: "/C_BOWI_42.webp", alt: "C_BOWI_42", title: "C_BOWI_42" },
        { src: "/C_LUMIRA_23.webp", alt: "C_LUMIRA_23", title: "C_LUMIRA_23" },
        { src: "/itil.webp", alt: "itil", title: "itil" },
    ];

    const total = images.length;
    const startX = useRef(0);
    const currentX = useRef(0);
    const thumbsRef = useRef(null);
    const activeThumbRef = useRef(null);
    const contentRef = useRef(null);

    const normalizeIndex = (i) => ((i % total) + total) % total;

    function openAt(index) { setLightbox({ open: true, index: normalizeIndex(index) }); }
    function closeLightbox() { setLightbox(s => ({ ...s, open: false })); }
    function next() { setLightbox(s => ({ ...s, index: normalizeIndex(s.index + 1) })); }
    function prev() { setLightbox(s => ({ ...s, index: normalizeIndex(s.index - 1) })); }

    // lock body scroll while lightbox is open
    useEffect(() => {
        const prev = document.body.style.overflow;
        if (lightbox.open) document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
    }, [lightbox.open]);

    // keyboard nav
    useEffect(() => {
        if (!lightbox.open) return;
        const onKey = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightbox.open]); // eslint-disable-line

    // preload neighbors
    useEffect(() => {
        if (!lightbox.open) return;
        const i = lightbox.index;
        [i, normalizeIndex(i + 1), normalizeIndex(i - 1)].forEach(idx => {
            const img = new Image();
            img.src = images[idx].src;
        });
    }, [lightbox.index, lightbox.open]); // eslint-disable-line

    // auto-center active thumbnail
    useEffect(() => {
        if (!lightbox.open) return;
        const el = activeThumbRef.current;
        const container = thumbsRef.current;
        if (!el || !container) return;
        const contRect = container.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const offset = (elRect.left - contRect.left) - (contRect.width / 2) + (elRect.width / 2);
        container.scrollBy({ left: offset, behavior: "smooth" });
    }, [lightbox.index, lightbox.open]);

    // touch swipe handlers
    function onTouchStart(e) {
        startX.current = e.touches?.[0]?.clientX ?? 0;
        currentX.current = startX.current;
    }
    function onTouchMove(e) {
        currentX.current = e.touches?.[0]?.clientX ?? currentX.current;
    }
    function onTouchEnd() {
        const delta = currentX.current - startX.current;
        const threshold = 50;
        if (delta > threshold) prev();
        else if (delta < -threshold) next();
        startX.current = 0; currentX.current = 0;
    }

    // handle backdrop click (close when clicking outside the content)
    function onBackdropClick(e) {
        if (e.target === e.currentTarget) closeLightbox();
    }

    // Framer motion variants
    const overlay = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
    const panel = { hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.98 } };
    const imgSlideLeft = { enter: { x: 0, opacity: 1 }, exitLeft: { x: -50, opacity: 0 }, exitRight: { x: 50, opacity: 0 } };

    return (
        <div
            className="max-w-6xl mx-auto px-4 py-8"
            data-id="32270e5"
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
        >
            {/* Header (restored) */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-semibold">Achievements</h2>
                    <div className="text-sm text-gray-500">Certificates & badges — click to open. Smooth animations added ✨</div>
                </div>
                <div className="flex items-center">
                    <a href="#" className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100" aria-hidden>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className="w-6 h-6" role="img" aria-hidden="true">
                            <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Grid (thumbnails) */}
            <div id="gallery-1" role="list" aria-label="Achievements gallery" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                    <figure key={img.src} className="bg-white rounded overflow-hidden shadow-sm" role="listitem">
                        <button
                            type="button"
                            onClick={() => openAt(idx)}
                            className="w-full block text-left focus:outline-none"
                            aria-label={`Open ${img.title}`}
                        >
                            <div className="w-full aspect-square sm:aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-gray-50">
                                {/* use motion.img with shared layoutId for smooth thumb->lightbox animation */}
                                <motion.img
                                    layoutId={`image-${idx}`}
                                    src={img.src}
                                    alt={img.alt || img.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                                    whileHover={{ scale: 1.03 }}
                                />
                            </div>
                            <figcaption className="p-3 text-center text-sm text-gray-600">{img.title}</figcaption>
                        </button>
                    </figure>
                ))}
            </div>

            {/* LIGHTBOX (AnimatePresence) */}
            <AnimatePresence>
                {lightbox.open && (
                    <motion.div
                        key="overlay"
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        variants={overlay}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onBackdropClick}
                        style={{ background: "rgba(0,0,0,0.7)" }}
                    >
                        {/* panel: constrained so nothing overflows the bottom */}
                        <motion.div
                            className="relative w-full max-w-5xl max-h-[95vh] mx-4 md:mx-auto rounded"
                            variants={panel}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            ref={contentRef}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* content layout: image (center) + thumbnails (bottom). Using flex-col so thumbnails stay inside viewport */}
                            <div className="bg-transparent rounded overflow-hidden flex flex-col" style={{ minHeight: 0 }}>
                                {/* Close */}
                                <button
                                    onClick={closeLightbox}
                                    className="absolute top-3 right-3 z-50 bg-black/50 text-white px-3 py-1 rounded hover:bg-black/70"
                                    aria-label="Close"
                                >
                                    ✕
                                </button>

                                {/* Prev / Next buttons (touch-friendly) */}
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

                                {/* MAIN IMAGE: constrained to avoid overflow bottom (calc used inline to account for thumbnails + caption) */}
                                <div
                                    className="w-full flex items-center justify-center"
                                    onTouchStart={onTouchStart}
                                    onTouchMove={onTouchMove}
                                    onTouchEnd={onTouchEnd}
                                    style={{ minHeight: 0 }}
                                >
                                    <motion.img
                                        key={images[lightbox.index].src}
                                        layoutId={`image-${lightbox.index}`}
                                        src={images[lightbox.index].src}
                                        alt={images[lightbox.index].alt || images[lightbox.index].title}
                                        draggable="false"
                                        className="object-contain rounded shadow-lg"
                                        // ensure image cannot push content out; reserve space for thumbnails/caption (~160px)
                                        style={{ maxHeight: "calc(95vh - 160px)", maxWidth: "100%" }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.25 }}
                                    />
                                </div>

                                {/* caption & counter */}
                                <div className="w-full mt-3 text-center text-white">
                                    <div className="text-sm">{images[lightbox.index].title}</div>
                                    <div className="text-xs text-gray-200/70">{lightbox.index + 1} / {total}</div>
                                </div>

                                {/* thumbnails scroller (fixed height so it never causes page overflow) */}
                                <div className="w-full mt-3 py-2">
                                    <div
                                        ref={thumbsRef}
                                        className="flex gap-2 overflow-x-auto px-2 py-1"
                                        style={{ WebkitOverflowScrolling: "touch", msOverflowStyle: "none", scrollbarWidth: "none" }}
                                    >
                                        {images.map((t, i) => {
                                            const isActive = i === lightbox.index;
                                            return (
                                                <button
                                                    key={t.src}
                                                    ref={isActive ? activeThumbRef : null}
                                                    onClick={() => setLightbox({ open: true, index: i })}
                                                    className={`flex-shrink-0 rounded overflow-hidden border-2 ${isActive ? "border-white" : "border-transparent"}`}
                                                    style={{ width: 80, height: 80 }}
                                                    aria-label={`Open ${t.title}`}
                                                >
                                                    <motion.img
                                                        src={t.src}
                                                        alt={t.alt || t.title}
                                                        className="w-full h-full object-cover"
                                                        initial={{ scale: 1 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    />
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
