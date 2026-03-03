"use client";

import { motion } from "framer-motion";
import { ScrambleTextOnScroll } from "./ScrambleTextOnScroll";

export default function Experience() {
    const experiences = [
        {
            id: "log-03",
            role: "Full-Stack Developer (Intern)",
            company: "DTI NIR",
            duration: "2026",
            description: [
                "Contributed to the development and maintenance of scalable web applications during an intensive internship.",
                "Gained hands-on experience with modern frontend frameworks and backend database integrations.",
                "Assisted senior developers in debugging, optimizing code, and deploying features to production environments."
            ]
        },
        {
            id: "log-02",
            role: "Full-Stack Developer",
            company: "TACTIQ Project",
            duration: "2025 - 2026",
            description: [
                "Engineered a comprehensive legal operations platform from the ground up to digitize daily firm activities.",
                "Developed systematic workflows for case documentation, automated reporting, and an integrated accounting module.",
                "Ensured high-security data handling protocols were maintained across both client and server architectures."
            ]
        },
        {
            id: "log-01",
            role: "System Analyst",
            company: "POLYCON (Thesis Project)",
            duration: "2024 - 2025",
            description: [
                "Architected system requirements and designed the core data flow for an AI-driven Learning Management System.",
                "Collaborated with developers to ensure NLP and transcription models integrated flawlessly with the UI/UX architecture.",
                "Conducted comprehensive system testing and mapped out user-experience workflows for both mentors and students."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 md:px-12 relative bg-black font-mono overflow-hidden">
            {/* Background scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay"
                style={{
                    backgroundImage: 'linear-gradient(transparent 50%, rgba(34, 197, 94, 0.5) 50%)',
                    backgroundSize: '100% 4px'
                }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-start items-center gap-4 mb-20"
                >
                    <span className="text-green-500 font-bold text-xl drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">04.</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-tight">
                        <ScrambleTextOnScroll text="Service" duration={1000} /> <span className="text-green-500"><ScrambleTextOnScroll text="Logs" duration={1500} /></span>
                    </h2>
                    <div className="h-[2px] bg-gradient-to-r from-green-500/50 to-transparent flex-grow ml-4"></div>
                </motion.div>

                <div className="relative border-l border-green-500/30 ml-4 md:ml-8 space-y-16">
                    {/* Pulsing origin dot */}
                    <div className="absolute -left-[5px] -top-2 w-2 h-2 bg-green-500/80 rounded-full animate-pulse blur-[1px]"></div>
                    <div className="absolute -left-[5px] -top-2 w-2 h-2 bg-green-400 rounded-full"></div>

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className="relative pl-8 md:pl-12 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-black border border-green-500 group-hover:bg-green-500 transition-colors duration-300"></div>

                            {/* Connection Line Highlight on Hover */}
                            <div className="absolute -left-px top-3 bottom-[-4rem] w-[2px] bg-gradient-to-b from-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                <h3 className="text-2xl font-bold text-green-400 tracking-wide uppercase">
                                    <ScrambleTextOnScroll text={exp.role} duration={1000 + (idx * 200)} />
                                </h3>
                                <div className="text-green-500/50 font-mono text-sm mt-1 md:mt-0 flex items-center gap-2">
                                    <span className="w-2 h-px bg-green-500/50 hidden md:block"></span>
                                    [<ScrambleTextOnScroll text={exp.duration} duration={800 + (idx * 200)} />]
                                </div>
                            </div>

                            <h4 className="text-lg text-slate-300 mb-6 font-semibold flex items-center gap-2">
                                <span className="text-green-500/70">@</span> <ScrambleTextOnScroll text={exp.company} duration={1200 + (idx * 200)} />
                            </h4>

                            <div className="border border-green-500/20 bg-green-950/10 p-6 relative backdrop-blur-sm group-hover:border-green-500/40 transition-colors duration-300">
                                {/* Decorative UI corners for data block */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <ul className="space-y-4">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-green-100/70 text-base leading-relaxed flex items-start gap-4">
                                            <span className="text-green-500 mt-1 font-bold text-xs">{'>>'}</span>
                                            <span><ScrambleTextOnScroll text={item} duration={2000 + (i * 300)} /></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Terminating node */}
                <div className="relative border-l border-green-500/30 ml-4 md:ml-8 h-16 opacity-50">
                    <div className="absolute -left-[5px] bottom-0 w-2 h-2 bg-green-500/30 border border-green-500/50 rounded-sm"></div>
                    <div className="absolute left-6 bottom-0 text-xs text-green-500/30 tracking-widest uppercase">END_OF_LOG</div>
                </div>

            </div>
        </section>
    );
}
