"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="bg-transparent backdrop-blur border-b">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center flex-1">
                        <Link href="/" className="flex items-center gap-3">
                            <span className="relative w-[120px] h-[120px]">
                                <Image
                                    src="/nav-logo.webp"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </span>
                            <span className="sr-only">Company</span>
                        </Link>
                    </div>


                    {/* center: nav items (hidden on small screens) */}
                    <div className="hidden md:flex md:space-x-6 md:flex-1 md:justify-center">
                        <ul className="flex items-center gap-6">
                            {navItems.map((item) => (
                                <li key={item.name} className="relative group">
                                    <Link
                                        href={item.href}
                                        className={`px-2 py-2 text-lg transition-colors font-small ${pathName === item.href
                                            ? "text-blue-600 font-medium"
                                            : "text-gray-800 hover:text-blue-600"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>

                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* right: icons + mobile hamburger */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex md:items-center md:gap-3">
                        </div>

                        {/* mobile hamburger */}
                        <button
                            onClick={() => setOpen((s) => !s)}
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                            aria-expanded={open}
                            aria-label="Toggle menu"
                        >
                            {/* icon switches between hamburger / x */}
                            {!open ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu (only visible when open) */}
                {open && (
                    <div className="md:hidden mt-2 pb-4">
                        <ul className="space-y-1">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`px-2 py-2 text-lg transition-colors font-small ${pathName === item.href
                                                ? "text-blue-600 font-medium"
                                                : "text-gray-800 hover:text-blue-600"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>


                                </li>
                            ))}
                        </ul>

                        <div className="mt-3 flex items-center gap-3 px-3">
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
