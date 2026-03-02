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

                <div className="flex items-center justify-center gap-4 pt-8">
                    <a href="#projects" className="px-8 py-4 bg-green-500 text-black font-bold hover:bg-green-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(34,197,94,0.5)] uppercase tracking-wider">
                        Execute /Work
                    </a>
                    <a href="#contact" className="px-8 py-4 border border-green-500 text-green-500 hover:bg-green-900/30 transition-colors font-medium uppercase tracking-wider relative group">
                        <span className="absolute -top-2 -left-2 w-2 h-2 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute -bottom-2 -right-2 w-2 h-2 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        Initialize /Contact
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
