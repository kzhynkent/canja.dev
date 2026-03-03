"use client";

import { motion, Variants } from "framer-motion";
import { ScrambleTextOnScroll } from "./ScrambleTextOnScroll";

const skillCategories = [
    {
        title: "CORE_TECHNOLOGIES",
        skills: ["Next.js", "Django", "React", "Tailwind CSS", "Node.js", "Python", "SQL", "JavaScript", "Firebase", "Firestore", "Firebase Functions"]
    },
    {
        title: "BACKEND_&_DATABASE",
        skills: ["Node.js", "Python/Django", "PostgreSQL", "Firebase"]
    },
    {
        title: "TOOLS_&_PLATFORMS",
        skills: ["Git", "GitHub", "Docker", "Vercel"]
    },
    {
        title: "DATA_SCIENCE_&_ANALYTICS",
        skills: ["Pandas", "NumPy", "SQL"]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 md:px-12 relative bg-black font-mono overflow-hidden">
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
                    className="flex flex-col sm:flex-row sm:items-center gap-4 mb-16"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-green-500 font-bold text-xl drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">02.</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-tight">
                            <ScrambleTextOnScroll text="System" duration={1000} /> <span className="text-green-500"><ScrambleTextOnScroll text="Capabilities" duration={1500} /></span>
                        </h2>
                    </div>
                    <div className="h-[2px] bg-gradient-to-r from-green-500/50 to-transparent flex-grow w-full sm:w-auto ml-0 sm:ml-4 mt-2 sm:mt-0"></div>
                </motion.div>

                <div className="border border-green-500/30 bg-green-950/10 backdrop-blur-sm p-1 shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]">
                    <div className="bg-black/80 border border-green-500/20 p-6 md:p-10 relative">
                        {/* Decorative Corners for the inner terminal */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-500/50"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-green-500/50"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-green-500/50"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-500/50"></div>

                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 border-b border-green-500/20 pb-4 mb-8">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            <span className="ml-4 text-green-500/50 text-xs tracking-widest uppercase">sys_report_generated.sh</span>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                        >
                            {skillCategories.map((category, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="space-y-4">
                                    <h3 className="text-green-400 font-bold text-sm md:text-lg tracking-normal md:tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
                                        [<ScrambleTextOnScroll text={category.title} duration={800 + (idx * 200)} />]
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {category.skills.map((skill, skillIdx) => (
                                            <div
                                                key={skillIdx}
                                                className="px-3 py-1 bg-green-900/20 border border-green-500/30 text-green-100/90 text-sm hover:bg-green-500/20 hover:border-green-400 hover:text-green-400 transition-colors duration-300 cursor-crosshair group"
                                            >
                                                <span className="opacity-50 mr-2 group-hover:text-green-400 group-hover:opacity-100">{'>'}</span>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ amount: 0 }}
                            transition={{ delay: 1 }}
                            className="mt-12 text-green-500/50 text-xs flex items-center"
                        >
                            <span>STATUS: READY</span>
                            <span className="inline-block w-2 h-4 bg-green-500/50 animate-pulse ml-2"></span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
