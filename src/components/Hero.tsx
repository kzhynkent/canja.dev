"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useScrambleText } from "./useScrambleText";

const ASCII_ART = `
    ██████╗   ██████╗  ██████╗ ███████╗ ██████╗ 
   ██╔════╝   ██╔══██╗██╔═══██╗██╔════╝██╔════╝ 
   ██║        ██║  ██║██║   ██║█████╗  ██║  ███╗
   ██║        ██║  ██║██║   ██║██╔══╝  ██║   ██║
   ╚██████╗██╗██████╔╝╚██████╔╝███████╗╚██████╔╝
    ╚═════╝╚═╝╚═════╝  ╚═════╝ ╚══════╝ ╚═════╝
`.trim();

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position state for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse values
    const springConfig = { damping: 50, stiffness: 200 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    // Transform values for different parallax layers
    const backgroundX = useTransform(smoothMouseX, [-0.5, 0.5], ["5%", "-5%"]);
    const backgroundY = useTransform(smoothMouseY, [-0.5, 0.5], ["5%", "-5%"]);

    const midgroundX = useTransform(smoothMouseX, [-0.5, 0.5], ["-3%", "3%"]);
    const midgroundY = useTransform(smoothMouseY, [-0.5, 0.5], ["-3%", "3%"]);

    const foregroundX = useTransform(smoothMouseX, [-0.5, 0.5], ["-8%", "8%"]);
    const foregroundY = useTransform(smoothMouseY, [-0.5, 0.5], ["-8%", "8%"]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            // Normalize mouse position between -0.5 and 0.5
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Scramble text effects
    const subHeading = useScrambleText("SYSTEM INITIALIZED", 1500);
    const title1 = useScrambleText("CRAFTING", 2000);
    const title2 = useScrambleText("DIGITAL EXPERIENCES", 2500);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-green-500 font-mono"
        >
            {/* Scanlines overlay */}
            <div className="absolute inset-0 pointer-events-none z-50 opacity-10 mix-blend-overlay"
                style={{
                    backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 50%)',
                    backgroundSize: '100% 4px'
                }}
            />

            {/* Background layer (slowest) */}
            <motion.div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ x: backgroundX, y: backgroundY }}
            >
                <div className="absolute top-[20%] left-[10%] text-xs opacity-50 font-mono">
                    <p>root@system:~# tail -f /var/log/syslog</p>
                    <p>Connection established...</p>
                    <p>Decrypting payload...</p>
                    <p>Bypassing firewall [OK]</p>
                </div>
                <div className="absolute bottom-[20%] right-[10%] text-xs opacity-50 font-mono text-right">
                    <p>{"<STATUS: ONLINE>"}</p>
                    <p>MEM: 4096MB [||||||||||]</p>
                    <p>CPU: OP-1 [|||-------]</p>
                </div>
            </motion.div>

            {/* Midground layer (ASCII art) */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[10%] pointer-events-none opacity-30 z-10"
                style={{ x: midgroundX, y: midgroundY }}
            >
                <pre className="text-green-700 font-bold textShadow filter blur-[1px] transform scale-150 lg:scale-[2]">
                    {ASCII_ART}
                </pre>
            </motion.div>

            {/* Foreground layer (Main Content) */}
            <motion.div
                className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                style={{ x: foregroundX, y: foregroundY }}
            >
                <div className="space-y-8 text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 border-l-2 border-green-500 bg-green-900/20 text-green-400 backdrop-blur-sm text-sm font-semibold tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(34,197,94,0.15)] relative">
                        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-500"></span>
                        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-500"></span>
                        <span className="w-2 h-2 bg-green-500 rounded-sm animate-pulse"></span>
                        {subHeading}_
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-green-300 to-green-700 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)] leading-[1.1] md:leading-[0.9]">
                        {title1}
                        <br />
                        <span className="text-green-500 opacity-90 block mt-2 md:mt-0">
                            {title2}
                        </span>
                    </h1>

                    <div className="relative pl-6 py-2 border-l border-green-800/50">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500/80 to-transparent"></div>
                        <p className="text-xl text-green-600/90 max-w-xl leading-relaxed">
                            I am a passionate software developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-6">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"
                            className="p-3 border border-green-500/40 text-green-500 hover:bg-green-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] rounded-sm group relative overflow-hidden">
                            <span className="absolute inset-0 bg-green-500/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                            <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/kzhynkent" target="_blank" rel="noopener noreferrer"
                            className="p-3 border border-green-500/40 text-green-500 hover:bg-green-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] rounded-sm group relative overflow-hidden">
                            <span className="absolute inset-0 bg-green-500/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                            <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </a>

                        {/* WhatsApp */}
                        <a href="https://wa.me/639501601883" target="_blank" rel="noopener noreferrer"
                            className="p-3 border border-green-500/40 text-green-500 hover:bg-green-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] rounded-sm group relative overflow-hidden">
                            <span className="absolute inset-0 bg-green-500/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                            <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Right Column / Decorative HUD Elements */}
                <div className="hidden lg:block relative h-full min-h-[400px]">
                    <div className="absolute top-10 right-0 p-5 border border-green-500/30 bg-black/60 backdrop-blur-md shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-500"></div>
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500"></div>
                        <p className="text-xs text-green-500/70 mb-4 font-bold tracking-widest">{"// SYS_STATS"}</p>
                        <ul className="text-sm text-green-400 space-y-3 font-medium">
                            <li className="flex justify-between gap-12 border-b border-green-900/50 pb-1"><span>EXPERIENCE:</span> <span className="text-white">5_YRS</span></li>
                            <li className="flex justify-between gap-12 border-b border-green-900/50 pb-1"><span>PROJECTS:</span> <span className="text-white">42_DEPLOYED</span></li>
                            <li className="flex justify-between gap-12 border-b border-green-900/50 pb-1"><span>COFFEE:</span> <span className="text-green-500 animate-pulse">ERR_OVFLW</span></li>
                        </ul>
                    </div>

                    <div className="absolute bottom-10 left-10 p-4 border border-green-500/20 bg-green-950/20 backdrop-blur-md">
                        <p className="text-xs text-green-500/60 mb-3 tracking-widest">{"// CURRENT_STACK"}</p>
                        <div className="flex gap-3">
                            <span className="px-3 py-1 border border-green-500/40 bg-green-900/40 text-green-300 text-xs font-bold font-sans">TS</span>
                            <span className="px-3 py-1 border border-green-500/40 bg-green-900/40 text-green-300 text-xs font-bold font-sans">React</span>
                            <span className="px-3 py-1 border border-green-500/40 bg-green-900/40 text-green-300 text-xs font-bold font-sans">Next</span>
                        </div>
                    </div>

                    {/* Decorative targeting reticle */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                        <div className="w-64 h-64 border border-green-500 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
                        <div className="absolute w-40 h-40 border border-green-400 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
