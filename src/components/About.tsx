"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrambleTextOnScroll } from "./ScrambleTextOnScroll";

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
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="text-green-500 font-bold text-xl drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">01.</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-tight">
                        <ScrambleTextOnScroll text="About " duration={1000} /><span className="text-green-500"><ScrambleTextOnScroll text="Me" duration={1200} /></span>
                    </h2>
                    <div className="h-[2px] bg-gradient-to-r from-green-500/50 to-transparent flex-grow ml-4"></div>
                </motion.div>

                <div className="flex flex-col-reverse md:grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-start">
                    {/* Text Content Area */}
                    <div className="relative p-8 border border-green-500/20 bg-green-950/10 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]">
                        {/* decorative corners */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-500"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-500"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-500"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-500"></div>

                        <div className="space-y-4 md:space-y-6 text-green-100/80 text-[0.95rem] md:text-lg font-light md:font-normal leading-relaxed">
                            <p>
                                <span className="text-green-500 font-bold">{'>'}</span> <ScrambleTextOnScroll text="I am " duration={1200} /><span className="text-green-400 font-bold"><ScrambleTextOnScroll text="KURT ZHYNKENT R. CANJA" duration={1500} /></span><ScrambleTextOnScroll text=", a 22-year-old " duration={1800} /><span className="text-green-400 font-bold shadow-[0_4px_0_-2px_rgba(34,197,94,0.5)]"><ScrambleTextOnScroll text="Full-Stack Developer" duration={2000} /></span><ScrambleTextOnScroll text=" and a 4th-year Computer Science student based in the Philippines. I love building tools that truly help people and make everyday tasks easier. For me, the best part of coding is finding the perfect balance between smart, reliable system logic and a clean, seamless user experience." duration={3000} />
                            </p>
                            <p>
                                <span className="text-green-500 font-bold">{'>'}</span> <ScrambleTextOnScroll text="Currently, I am focused on finishing my degree and growing my real-world tech skills through my internship at DTI Negros Occidental. Because I always want to keep learning, I am also earning certifications in Data Science on DataCamp (supported by a Data Engineering Pilipinas scholarship) and Digital Marketing on Coursera." duration={4000} />
                            </p>
                            <p>
                                <span className="text-green-500 font-bold">{'>'}</span> <ScrambleTextOnScroll text="When I am not writing code, analyzing data, or working on my school projects, I like to unplug and relax by exploring new digital worlds through gaming." duration={5000} /> <span className="inline-block w-2 h-4 bg-green-500 animate-pulse align-middle ml-1"></span>
                            </p>
                        </div>
                    </div>

                    {/* Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative group w-2/3 max-w-[250px] md:w-full md:max-w-md mx-auto aspect-square md:aspect-[4/5] mb-8 md:mb-0"
                    >
                        {/* Background wireframe accent */}
                        <div className="absolute inset-0 border-2 border-green-500/30 rounded-full md:rounded-none translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2">
                            {/* animated targeting crosshairs in corners (Hide on mobile circle) */}
                            <div className="hidden md:block absolute -top-1 -left-1 w-2 h-2 bg-green-500/50"></div>
                            <div className="hidden md:block absolute -top-1 -right-1 w-2 h-2 bg-green-500/50"></div>
                            <div className="hidden md:block absolute -bottom-1 -left-1 w-2 h-2 bg-green-500/50"></div>
                            <div className="hidden md:block absolute -bottom-1 -right-1 w-2 h-2 bg-green-500/50"></div>
                        </div>

                        {/* Image Container */}
                        <div className="relative w-full h-full bg-slate-900 border border-green-500/50 rounded-full md:rounded-none overflow-hidden group-hover:border-green-400 transition-colors duration-500 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                            <Image
                                src="/bnw-profile2.JPG"
                                alt="Profile Picture"
                                fill
                                className="object-cover object-top transition-all duration-700"
                            />

                            {/* Scanning line effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-400/50 blur-[2px] z-20 animate-[scan_4s_ease-in-out_infinite]"></div>
                        </div>

                        {/* Decorative side HUD text */}
                        <div className="hidden md:block absolute -right-20 top-12 rotate-90 origin-left text-xs text-green-500/50 tracking-widest uppercase font-bold">
                            {/* IDENTITY_VERIFIED */}
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
