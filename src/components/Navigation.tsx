"use client";

import { motion } from "framer-motion";

export default function Navigation() {
    const links = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    const containerVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 1,
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center pointer-events-none font-mono bg-black/40 backdrop-blur-md">
            {/* Logo placeholder - Left side */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-xl tracking-tighter text-green-500 pointer-events-auto drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] flex items-center gap-1"
            >
                {'>'} C.dev
                <span className="inline-block w-3 h-5 bg-green-500 animate-[pulse_1s_infinite]"></span>
            </motion.div>

            {/* Centered Navigation Links, Hidden on Mobile */}
            <motion.ul
                variants={containerVariant}
                initial="hidden"
                animate="show"
                className="hidden md:flex items-center gap-2 pointer-events-auto mx-auto"
            >
                {links.map((link) => (
                    <motion.li key={link.name} variants={itemVariant}>
                        <a
                            href={link.href}
                            className="text-sm font-medium text-green-600 hover:text-green-400 hover:bg-green-900/30 transition-colors px-4 py-2 uppercase tracking-wider relative group"
                        >
                            <span className="absolute left-1 opacity-0 group-hover:opacity-100 transition-opacity">{'['}</span>
                            {link.name}
                            <span className="absolute right-1 opacity-0 group-hover:opacity-100 transition-opacity">{']'}</span>
                        </a>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Download CV - Right side */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="pointer-events-auto"
            >
                <a
                    href="/cv.pdf"
                    download
                    className="flex items-center gap-2 text-sm font-bold text-black bg-green-500 hover:bg-green-400 transition-colors px-6 py-2.5 shadow-[0_0_15px_rgba(34,197,94,0.5)] uppercase tracking-wider"
                >
                    Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                </a>
            </motion.div>
        </nav>
    );
}
