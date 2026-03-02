export default function Skills() {
    const skills = [
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "PostgreSQL",
        "GraphQL"
    ];

    return (
        <section id="skills" className="py-24 px-6 md:px-12 bg-slate-900/50 backdrop-blur-xl border-y border-slate-800/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-100 flex items-center gap-4">
                    <span className="text-blue-500">02.</span> Skills & Tech
                    <div className="h-[1px] bg-slate-800 flex-grow ml-4 rounded-full"></div>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 transition-all cursor-default"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-pulse"></div>
                                <span className="text-slate-300 font-medium">{skill}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
