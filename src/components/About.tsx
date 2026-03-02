"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useScrambleText } from "./useScrambleText";

function ScrambleTextOnScroll({ text, duration = 1500, className = "" }: { text: string, duration?: number, className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    // Only start scrambling when the element comes into view
    useEffect(() => {
        if (isInView) {
            setShouldAnimate(true);
        }
    }, [isInView]);

    // The hook returns the original text immediately if shouldAnimate is false
    const scrambled = useScrambleText(text, duration);
    const displayText = shouldAnimate ? scrambled : "";

    return (
        <span ref={ref} className={className}>
            {displayText}
        </span>
    );
}

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 relative bg-black font-mono overflow-hidden">
            {/* Background scanlines for section */}
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
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="text-green-500 font-bold text-xl drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">01.</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-tight">
                        <ScrambleTextOnScroll text="About " duration={1000} /><span className="text-green-500"><ScrambleTextOnScroll text="Me" duration={1200} /></span>
                    </h2>
                    <div className="h-[2px] bg-gradient-to-r from-green-500/50 to-transparent flex-grow ml-4"></div>
                </motion.div>

                <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-start">
                    {/* Text Content Area */}
                    <div className="relative p-8 border border-green-500/20 bg-green-950/10 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]">
                        {/* decorative corners */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-500"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-500"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-500"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-500"></div>

                        <div className="space-y-6 text-green-100/80 text-lg leading-relaxed">
                            <p>
                                <span className="text-green-500 font-bold">{'>'}</span> <ScrambleTextOnScroll text="I am a " duration={1500} /><span className="text-green-400 font-bold shadow-[0_4px_0_-2px_rgba(34,197,94,0.5)]"><ScrambleTextOnScroll text="Full-stack developer" duration={2000} /></span><ScrambleTextOnScroll text=". My passion for development and data started when my drive for creating something that helps someone or something sparked. I am constantly fascinated by the intersection of complex logic and practical, human-centered utility." duration={3000} />
                            </p>
                            <p>
                                <span className="text-green-500 font-bold">{'>'}</span> <ScrambleTextOnScroll text="I am currently focusing on my internship, gaining experience from it, and I am very much busy with gaining certifications at DataCamp (taking Data Science as I have been granted a scholarship from DEP - Data Engineering Pilipinas) and Coursera (Digital Marketing and e-Commerce). When I'm not studying or coding, I spend my free time exploring new worlds through gaming." duration={4000} /> <span className="inline-block w-2 h-4 bg-green-500 animate-pulse align-middle ml-1"></span>
                            </p>
                        </div>
                    </div>

                    {/* Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative group w-full max-w-md mx-auto aspect-[4/5] mt-8 md:mt-0"
                    >
                        {/* Background wireframe accent */}
                        <div className="absolute inset-0 border-2 border-green-500/30 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2">
                            {/* animated targeting crosshairs in corners */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-500/50"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500/50"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-500/50"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500/50"></div>
                        </div>

                        {/* Image Container */}
                        <div className="relative w-full h-full bg-slate-900 border border-green-500/50 overflow-hidden group-hover:border-green-400 transition-colors duration-500 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                            {/* 
                                Using next/image requires width/height or fill.
                                Assuming the extension is .jpg. If it's .png, Next.js handles it, just ensure the file is named correctly.
                            */}
                            <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>

                            <Image
                                src="/bnw-profile2.JPG"
                                alt="Profile Picture"
                                fill
                                className="object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Scanning line effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-400/50 blur-[2px] z-20 animate-[scan_4s_ease-in-out_infinite]"></div>
                        </div>

                        {/* Decorative side HUD text */}
                        <div className="absolute -right-20 top-12 rotate-90 origin-left text-xs text-green-500/50 tracking-widest uppercase font-bold">
                            // IDENTITY_VERIFIED
                        </div>
                    </motion.div>
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
