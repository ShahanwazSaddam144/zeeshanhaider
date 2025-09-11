// components/Services.jsx
import React from "react";

const Services = () => {
    const cards = [
        {
            id: "dataware",
            title: "Dataware housing",
            desc: "Collecting, storing, and managing large volumes of data from different sources for analysis and reporting to enable organizations to make informed decisions by providing a centralized, consistent, and accessible repository of historical and current data.",
            icon: (
                <svg
                    className="h-7 w-7 text-cyan-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z" />
                </svg>
            ),
        },
        {
            id: "optimization",
            title: "Data optimization",
            desc: "Refining and structuring data to improve performance, efficiency, and accessibility in storage and processing by implementing techniques such as indexing, data compression, and query optimization to reduce storage costs and enhance retrieval speeds.",
            icon: (
                <svg
                    className="h-7 w-7 text-cyan-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M440.1 355.2l-39.2-23 34.1-9.3c8.4-2.3 13.4-11.1 11.1-19.6l-4.1-15.5c-2.2-8.5-10.9-13.6-19.3-11.3L343 298.2 271.2 256l71.9-42.2 79.7 21.7c8.4 2.3 17-2.8 19.3-11.3l4.1-15.5c2.2-8.5-2.7-17.3-11.1-19.6l-34.1-9.3 39.2-23c7.5-4.4 10.1-14.2 5.8-21.9l-7.9-13.9c-4.3-7.7-14-10.3-21.5-5.9l-39.2 23 9.1-34.7c2.2-8.5-2.7-17.3-11.1-19.6l-15.2-4.1c-8.4-2.3-17 2.8-19.3 11.3l-21.3 81-71.9 42.2v-84.5L306 70.4c6.1-6.2 6.1-16.4 0-22.6l-11.1-11.3c-6.1-6.2-16.1-6.2-22.2 0l-24.9 25.4V16c0-8.8-7-16-15.7-16h-15.7c-8.7 0-15.7 7.2-15.7 16v46.1l-24.9-25.4c-6.1-6.2-16.1-6.2-22.2 0L142.1 48c-6.1 6.2-6.1 16.4 0 22.6l58.3 59.3v84.5l-71.9-42.2-21.3-81c-2.2-8.5-10.9-13.6-19.3-11.3L72.7 84c-8.4 2.3-13.4 11.1-11.1 19.6l9.1 34.7-39.2-23c-7.5-4.4-17.1-1.8-21.5 5.9l-7.9 13.9c-4.3 7.7-1.8 17.4 5.8 21.9l39.2 23-34.1 9.1c-8.4 2.3-13.4 11.1-11.1 19.6L6 224.2c2.2 8.5 10.9 13.6 19.3 11.3l79.7-21.7 71.9 42.2-71.9 42.2-79.7-21.7c-8.4 2.3-17 2.8-19.3 11.3l-4.1 15.5c-2.2 8.5 2.7 17.3 11.1 19.6l34.1 9.3-39.2 23c-7.5 4.4-10.1 14.2-5.8 21.9L10 391c4.3 7.7 14 10.3 21.5 5.9l39.2-23-9.1 34.7c-2.2 8.5 2.7 17.3 11.1 19.6l15.2 4.1c8.4 2.3 17-2.8 19.3-11.3l21.3-81 71.9-42.2v84.5l-58.3 59.3c-6.1 6.2-6.1 16.4 0 22.6l11.1 11.3c6.1 6.2 16.1 6.2 22.2 0l24.9-25.4V496c0 8.8 7 16 15.7 16h15.7c8.7 0 15.7-7.2 15.7-16v-46.1l24.9 25.4c6.1 6.2 16.1 6.2 22.2 0l11.1-11.3c6.1-6.2 6.1-16.4 0-22.6l-58.3-59.3v-84.5l71.9 42.2 21.3 81c2.2 8.5 10.9 13.6 19.3 11.3L375 428c8.4-2.3 13.4-11.1 11.1-19.6l-9.1-34.7 39.2 23c7.5 4.4 17.1-1.8 21.5-5.9l7.9-13.9c4.6-7.5 2.1-17.3-5.5-21.7z" />
                </svg>
            ),
        },
        {
            id: "presentation",
            title: "Data presentation",
            desc: "Organizing and displaying data in a clear, visually appealing way to facilitate understanding and decision-making by highlighting the key insights and trends effectively.",
            icon: (
                <svg
                    className="h-7 w-7 text-cyan-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Heading */}
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-semibold text-gray-900">What I do</h2>
                    <p className="mt-4 text-gray-600">
                        From understanding your requirements, designing a blueprint and delivering the final product,
                        I do everything that falls in between these lines.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
                    {cards.map((c) => (
                        <div
                            key={c.id}
                            className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex-shrink-0">
                                <div className="h-12 w-12 rounded-lg bg-cyan-50 flex items-center justify-center">
                                    {c.icon}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900">{c.title}</h3>
                                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
