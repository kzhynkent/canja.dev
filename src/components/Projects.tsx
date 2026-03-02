"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrambleTextOnScroll } from "./ScrambleTextOnScroll";

const projects = [
    {
        id: "polycon",
        title: "POLYCON",
        type: "exe",
        description: "An advanced Learning Management System (LMS) serving as an intelligent student-mentor conduit. Core system capabilities include AI-driven voice transcriptions, Natural Language Processing (NLP) for automated concern analytics, robust reporting modules, and centralized consultation document management.",
        techs: ["React", "AI Transcription", "NLP Analytics", "LMS Architecture"],
        link: "https://polycon-frontend.onrender.com/",
        github: "#"
    },
    {
        id: "tactiq",
        title: "Tactiq",
        type: "sh",
        description: "A comprehensive legal operations platform engineered to digitize and streamline daily firm activities. It features systematic case documentation workflows, automated reporting tools, and an integrated accounting module designed specifically for legal practitioners.",
        techs: ["Legal Tech", "Workflow Automation", "Accounting Module", "Reporting"],
        link: "#",
        github: "#",
        status: "undeployed"
    },
    {
        id: "sti-wnu",
        title: "Admission System",
        type: "sys",
        description: "An enterprise-grade enrollment management portal developed for STI West Negros University. It provides a secure, intuitive interface for administrative staff to track, process, and oversee incoming enrollees from initial application through to final admission.",
        techs: ["Enterprise Portal", "Data Management", "Role-based Auth", "University Systems"],
        link: "https://admissionenrolmentsystem.web.app/",
        github: "#"
    },
    {
        id: "krm-rice",
        title: "KRM Rice Retailing",
        type: "bat",
        description: "A customized point-of-sale and comprehensive inventory tracking solution. Built entirely from the ground up to digitize, modernize, and scale daily operations for a fast-paced, family-owned agricultural retail enterprise.",
        techs: ["POS Architecture", "Inventory Tracking", "Retail Scaling", "Custom DB"],
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    const [activeProject, setActiveProject] = useState(projects[0]);

    return (
        <section id="projects" className="py-24 px-6 md:px-12 relative bg-black font-mono overflow-hidden">
            {/* Background scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay"
                style={{
                    backgroundImage: 'linear-gradient(transparent 50%, rgba(34, 197, 94, 0.5) 50%)',
                    backgroundSize: '100% 4px'
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-end items-center gap-4 mb-16"
                >
                    <div className="h-[2px] bg-gradient-to-l from-green-500/50 to-transparent flex-grow mr-4"></div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-tight text-right">
                        Featured <span className="text-green-500"><ScrambleTextOnScroll text="Projects" duration={1200} /></span>
                    </h2>
                    <span className="text-green-500 font-bold text-xl drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">.03</span>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12 h-auto lg:h-[600px]">

                    {/* LEFT PANEL: File System Explorer */}
                    <div className="w-full lg:w-1/3 flex flex-col border border-green-500/30 bg-green-950/10 backdrop-blur-sm self-start">
                        <div className="bg-green-500/10 border-b border-green-500/30 p-3 text-sm text-green-400 font-bold uppercase tracking-widest flex items-center justify-between">
                            <span>/mnt/projects_dir</span>
                            <span className="w-2 h-4 bg-green-500/50 animate-pulse"></span>
                        </div>
                        <div className="p-4 flex flex-col gap-2 overflow-y-auto">
                            {projects.map((project) => (
                                <button
                                    key={project.id}
                                    onClick={() => setActiveProject(project)}
                                    className={`text-left p-3 flex flex-col gap-1 transition-all duration-300 border-l-2 ${activeProject.id === project.id
                                        ? 'border-green-400 bg-green-500/10 text-green-400'
                                        : 'border-transparent text-green-100/50 hover:text-green-300 hover:bg-green-500/5 hover:border-green-500/30'
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="opacity-50">{'>'}</span>
                                        <span className="font-bold">{project.id}.{project.type}</span>
                                    </div>
                                    <span className="text-xs opacity-60 pl-4">{project.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT PANEL: Project Data HUD */}
                    <div className="w-full lg:w-2/3 border border-green-500/30 bg-black/80 relative flex flex-col h-full min-h-[400px]">
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-500"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-green-500"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-green-500"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-500"></div>

                        <div className="bg-green-500/10 border-b border-green-500/20 p-2 text-xs text-green-500/50 flex justify-between items-center">
                            <span>EXECUTING: {activeProject.id}.{activeProject.type}</span>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 bg-green-500"></div>
                                <div className="w-2 h-2 bg-green-500/50"></div>
                                <div className="w-2 h-2 bg-green-500/20"></div>
                            </div>
                        </div>

                        <div className="p-6 md:p-10 flex-grow relative overflow-y-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col h-full"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-black text-green-400 mb-2 uppercase tracking-wider">{activeProject.title}</h3>
                                            {activeProject.status === "undeployed" && (
                                                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-bold border border-yellow-500/50 uppercase">Internal / Undeployed</span>
                                            )}
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex gap-4">
                                            {activeProject.github !== "#" && (
                                                <a href={activeProject.github} target="_blank" rel="noreferrer" className="text-green-500/50 hover:text-green-400 transition-colors tooltip relative group">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-green-900 border border-green-500 text-green-400 text-xs px-2 py-1 transition-opacity whitespace-nowrap">View Source</span>
                                                </a>
                                            )}
                                            {activeProject.link !== "#" && (
                                                <a href={activeProject.link} target="_blank" rel="noreferrer" className="text-green-500/50 hover:text-green-400 transition-colors tooltip relative group">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-green-900 border border-green-500 text-green-400 text-xs px-2 py-1 transition-opacity whitespace-nowrap">Launch Live</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="w-full h-[1px] bg-green-900/50 mb-6"></div>

                                    <div className="text-green-100/80 leading-relaxed mb-8 text-lg">
                                        <span className="text-green-500 mr-2">{'>'}</span>
                                        {activeProject.description}
                                    </div>

                                    <div className="mt-auto">
                                        <div className="text-xs text-green-500/50 uppercase tracking-widest mb-3">sys_dependencies:</div>
                                        <div className="flex flex-wrap gap-2">
                                            {activeProject.techs.map((tech, i) => (
                                                <span key={i} className="px-2 py-1 bg-green-950/30 border border-green-500/20 text-green-400 text-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sub-scanline specifically for data panel */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-green-400/30 blur-[2px] z-20 animate-[scan_3s_ease-in-out_infinite] pointer-events-none"></div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { top: -5%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 105%; opacity: 0; }
                }
            `}</style>
        </section>
    );
}
