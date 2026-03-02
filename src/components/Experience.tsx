export default function Experience() {
    const experiences = [
        {
            role: "Senior Frontend Engineer",
            company: "Tech Innovators Inc.",
            duration: "2022 - Present",
            description: [
                "Led the frontend team in rebuilding the core platform using Next.js and React.",
                "Improved application performance by 40% through code splitting and lazy loading.",
                "Mentored junior developers and established code review best practices."
            ]
        },
        {
            role: "Software Engineer",
            company: "Digital Solutions LLC",
            duration: "2019 - 2022",
            description: [
                "Developed and maintained highly scalable web applications for enterprise clients.",
                "Integrated third-party APIs and payment gateways.",
                "Collaborated closely with designers to ensure pixel-perfect implementations."
            ]
        },
        {
            role: "Junior Web Developer",
            company: "Creative Agency",
            duration: "2018 - 2019",
            description: [
                "Built responsive marketing websites and landing pages.",
                "Ensured cross-browser compatibility and accessibility standard compliance."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 md:px-12 bg-slate-900/50 backdrop-blur-xl border-y border-slate-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-slate-100 flex items-center gap-4">
                    <span className="text-blue-500">04.</span> Experience
                    <div className="h-[1px] bg-slate-800 flex-grow ml-4 rounded-full"></div>
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-0">
                            <div className="md:grid md:grid-cols-[1fr_3fr] gap-8">
                                <div className="mb-4 md:mb-0 text-slate-400 font-mono text-sm mt-1">
                                    {exp.duration}
                                </div>

                                <div className="relative group">
                                    <div className="absolute -left-[45px] top-2 md:hidden w-3 h-3 bg-slate-700 rounded-full group-hover:bg-blue-500 transition-colors"></div>

                                    <h3 className="text-2xl font-semibold text-slate-200 mb-1">
                                        {exp.role} <span className="text-blue-500">@ {exp.company}</span>
                                    </h3>

                                    <ul className="mt-4 space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-slate-400 flex items-start gap-3">
                                                <span className="text-blue-500 mt-1">▹</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
