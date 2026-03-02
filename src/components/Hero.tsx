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
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 z-10"
                style={{ x: midgroundX, y: midgroundY }}
            >
                <pre className="text-green-700 font-bold textShadow filter blur-[1px] transform scale-150">
                    {ASCII_ART}
                </pre>
            </motion.div>

            {/* Foreground layer (Main Content) */}
            <motion.div
                className="relative z-20 max-w-4xl mx-auto text-center space-y-8 mt-20"
                style={{ x: foregroundX, y: foregroundY }}
            >
                <div className="inline-block px-4 py-2 border border-green-500/30 bg-green-900/20 text-green-400 backdrop-blur-sm text-sm font-semibold tracking-wide uppercase mb-4 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                    {'>'} {subHeading}_
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    {title1}
                    <br className="hidden md:block" />
                    <span className="text-green-300 drop-shadow-[0_0_20px_rgba(134,239,172,0.8)]">
                        {title2}
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-green-600/80 max-w-2xl mx-auto leading-relaxed">
                    I am a passionate software developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.
                </p>

                <div className="flex items-center justify-center gap-6 pt-8">
                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="p-4 border border-green-500/50 text-green-500 hover:bg-green-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] rounded-lg group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                        className="p-4 border border-green-500/50 text-green-500 hover:bg-green-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] rounded-lg group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/yournumberhere" target="_blank" rel="noopener noreferrer"
                        className="p-4 border border-green-500/50 text-green-500 hover:bg-green-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] rounded-lg group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
