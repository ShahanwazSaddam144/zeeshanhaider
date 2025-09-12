"use client";

import Link from "next/link";
import Footer from '../component/Footer';

export default function NotFound() {
    return (
        <>
        <div id="content" className="site-content min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="max-w-2xl text-center">
               
                <header className="page-header mb-6">
                    <h1 className="page-title text-[40px] sm:text-[60px] font-playfair font-bold text-gray-800">
                        This page doesn&apos;t seem to exist.
                    </h1>
                </header>

                <div className="page-sub-title text-lg text-gray-600 mb-6">
                    It looks like the link pointing here was faulty. Maybe try searching?
                </div>

                <div className="ast-404-search mb-8">
                    <form
                        role="search"
                        method="get"
                        action="/"
                        className="flex items-center justify-center max-w-md mx-auto"
                    >
                        <label htmlFor="search-field" className="sr-only">
                            Search for:
                        </label>
                        <input
                            type="search"
                            id="search-field"
                            name="s"
                            placeholder="Search..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            aria-label="Search Submit"
                        >
                            Search
                        </button>
                    </form>
                </div>

             
                <Link
                    href="/"
                    className="inline-block bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
                >
                    Go back home
                </Link>
            </div>
        </div>
        <Footer />
        </>
    );
}
