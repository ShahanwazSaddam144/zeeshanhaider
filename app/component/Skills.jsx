"use client";
import React from "react";

const skills = [
    { name: "Data Warehousing", pct: 95 },
    { name: "Data Optimization", pct: 90 },
    { name: "Presentation", pct: 80 },
    { name: "Project Management", pct: 90 },
];

const experiences = [
    {
        date: "2013 - Present",
        company: "ISPC Holding",
        title: "Asst. Manager / Project Manager — ERP & BI Analytics",
        bullets: [
            "Lead SAP BW/4HANA optimization strategy: define and develop HANA-optimized data flow and modeling.",
            "Currently evaluating upgrade path to SAP Datasphere and SAP Analytics Cloud (SAC).",
        ],
    },
    {
        date: "2008 - 2013",
        company:
            "Bisha Steel (Dubai) · Thames Steel (UK) · Al Tuwairqi Transport (KSA) · Al Tuwairqi Power Plant (KSA) · The International Electric Co. (KSA)",
        title: "Team Lead — SAP BI / BW",
        bullets: [
            "Implemented BW/BI across business units to maximize ERP ROI.",
            "Captured business requirements, assessed data availability, and delivered BI/ETL implementations.",
            "Assisted upgrade from BW 3.5 to BI 7; led pre/post-upgrade testing of sources, cubes and reports.",
        ],
    },
    {
        date: "2004 - 2008",
        company: "Al Tuwairqi Group of Companies",
        title: "Team Lead — IT Developments",
        bullets: [
            "J2EE server-side programming and business process workflows.",
            "Implemented group time-attendance and access control systems.",
            "Built fleet tracking system for ATT transportation.",
        ],
    },
    {
        date: "2001 - 2003",
        company: "JMobiles, Denmark",
        title: "Senior Analyst Programmer",
        bullets: [
            "J2EE server-side programming for J2ME-based applications.",
            "Parsed various feeds, generated content and served it to client apps.",
        ],
    },
];

export default function ResumeSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                        Experience & Skills
                    </h1>
                    <p className="mt-2 text-sm md:text-base text-gray-600">
                        ERP · SAP BW/4HANA · Data Warehousing · Project Leadership
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <aside className="lg:col-span-1 bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-lg md:text-xl font-semibold mb-4 text-cyan-600">Skills</h2>

                    <div className="space-y-5">
                        {skills.map((s) => (
                            <div key={s.name}>
                                <div className="flex justify-between items-baseline mb-2">
                                    <span className="text-sm md:text-base font-medium text-gray-800">{s.name}</span>
                                    <span className="text-sm md:text-sm font-semibold text-cyan-600">{s.pct}%</span>
                                </div>

                                <div
                                    role="progressbar"
                                    aria-valuenow={s.pct}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    className="w-full bg-cyan-50 rounded-full h-3 md:h-4 overflow-hidden"
                                >
                                    <div
                                        className="h-full rounded-full transition-all duration-600"
                                        style={{ width: `${s.pct}%`, background: "linear-gradient(90deg,#06b6d4,#0891b2)" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Experience */}
                <main className="lg:col-span-2">
                    <h2 className="text-lg md:text-2xl font-semibold mb-6 text-gray-900">
                        Professional Experience
                    </h2>

                    <ol aria-label="Professional experience timeline" className="relative border-l-2 border-cyan-100 ml-3 md:ml-6 space-y-8">
                        {experiences.map((exp, idx) => (
                            <li key={`${exp.company}-${idx}`} className="relative pl-6">
                                {/* marker */}
                                <span className="absolute -left-5 top-2 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
                                    <span className="block w-3.5 h-3.5 rounded-full bg-cyan-600" />
                                </span>

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                    <h3 className="text-base md:text-lg font-semibold text-gray-900">{exp.title}</h3>
                                    <time className="text-xs md:text-sm text-gray-500">{exp.date}</time>
                                </div>

                                <p className="text-sm text-gray-600 mt-1">{exp.company}</p>

                                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                                    {exp.bullets.map((b, i) => (
                                        <li key={i} className="text-sm leading-relaxed">
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </main>
            </div>
        </section>
    );
}
