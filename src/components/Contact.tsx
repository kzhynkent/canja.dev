"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { ScrambleTextOnScroll } from "./ScrambleTextOnScroll";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [botcheck, setBotcheck] = useState("");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        // Honeypot check for bots
        if (botcheck) {
            setSubmitStatus("success"); // silently disregard bot
            setTimeout(() => setSubmitStatus("idle"), 5000);
            form.current.reset();
            setBotcheck("");
            return;
        }

        // Basic frontend rate limiting (10 minutes)
        const lastSubmit = localStorage.getItem('lastFormSubmit');
        if (lastSubmit) {
            const timeSinceLastSubmit = new Date().getTime() - parseInt(lastSubmit, 10);
            const cooldownPeriod = 10 * 60 * 1000;

            if (timeSinceLastSubmit < cooldownPeriod) {
                alert("Transmission rate limited. Please hold for 10 minutes before sending another packet.");
                return;
            }
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        // NOTE: These placeholder values need to be replaced by the USER
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        const formData = new FormData(form.current);
        const nameInput = formData.get('user_name') as string || '';
        const emailInput = formData.get('user_email') as string || '';
        const messageInput = formData.get('message') as string || '';

        // Validation: Block submission if any HTML/Script tags are detected
        const containsHTML = (str: string) => /<[a-z][\s\S]*>/i.test(str);

        if (containsHTML(nameInput) || containsHTML(emailInput) || containsHTML(messageInput)) {
            alert("Transmission blocked: Invalid characters or script tags detected in the input payload.");
            setIsSubmitting(false);
            setSubmitStatus("error");
            return;
        }

        // Additional Sanitization as a fallback before sending
        const sanitizeInput = (str: string) => {
            return str.replace(/[<>"']/g, (char) => {
                switch (char) {
                    case '<': return '&lt;';
                    case '>': return '&gt;';
                    case '"': return '&quot;';
                    case "'": return '&#39;';
                    default: return char;
                }
            });
        };

        const templateParams = {
            user_name: sanitizeInput(nameInput),
            user_email: sanitizeInput(emailInput),
            message: sanitizeInput(messageInput),
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSubmitStatus("success");
                localStorage.setItem('lastFormSubmit', new Date().getTime().toString());
                form.current?.reset();
            }, (error) => {
                console.log(error.text);
                setSubmitStatus("error");
            })
            .finally(() => {
                setIsSubmitting(false);
                // Reset status message after 5 seconds
                setTimeout(() => setSubmitStatus("idle"), 5000);
            });
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 relative bg-black font-mono overflow-hidden">
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
                    className="flex flex-col items-center text-center mb-16"
                >
                    <span className="text-green-500 font-bold text-xl mb-4 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">05.</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-tight mb-6">
                        <ScrambleTextOnScroll text="Open" duration={1000} /> <span className="text-green-500"><ScrambleTextOnScroll text="Comm_Link" duration={1500} /></span>
                    </h2>
                    <p className="max-w-xl text-green-100/60 leading-relaxed mx-auto">
                        <ScrambleTextOnScroll text="My inbox is currently open for new opportunities. Whether you have an inquiry, a project proposal, or just want to establish a connection, initiate a transmission below." duration={2500} />
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative max-w-2xl mx-auto"
                >
                    <div className="border border-green-500/30 bg-green-950/10 p-1 backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.05)]">
                        <div className="bg-black/80 border border-green-500/20 p-8 relative">
                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-500"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-500"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-500"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-500"></div>

                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 border-b border-green-500/20 pb-4 mb-8">
                                <div className="w-3 h-3 rounded-sm bg-green-500/50 animate-pulse"></div>
                                <span className="ml-2 text-green-500/50 text-xs tracking-widest uppercase">secure_channel_established</span>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                {/* Honeypot field to trap bots */}
                                <div className="hidden" aria-hidden="true">
                                    <label htmlFor="botcheck">Leave this field empty</label>
                                    <input
                                        type="text"
                                        name="botcheck"
                                        id="botcheck"
                                        value={botcheck}
                                        onChange={(e) => setBotcheck(e.target.value)}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="user_name" className="text-green-500 text-xs uppercase tracking-widest pl-1">{'>'} IDENTIFIER</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            id="user_name"
                                            required
                                            className="w-full bg-green-950/20 border border-green-500/30 px-4 py-3 text-green-100 placeholder-green-500/30 focus:outline-none focus:border-green-400 focus:bg-green-900/20 transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="user_email" className="text-green-500 text-xs uppercase tracking-widest pl-1">{'>'} RETURN_ADDRESS</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            id="user_email"
                                            required
                                            className="w-full bg-green-950/20 border border-green-500/30 px-4 py-3 text-green-100 placeholder-green-500/30 focus:outline-none focus:border-green-400 focus:bg-green-900/20 transition-colors"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-green-500 text-xs uppercase tracking-widest pl-1">{'>'} TRANSMISSION_DATA</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        rows={5}
                                        className="w-full bg-green-950/20 border border-green-500/30 px-4 py-3 text-green-100 placeholder-green-500/30 focus:outline-none focus:border-green-400 focus:bg-green-900/20 transition-colors resize-none"
                                        placeholder="Enter your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full relative group bg-transparent border border-green-500 text-green-400 px-8 py-4 uppercase tracking-widest font-bold hover:bg-green-500/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                                                TRANSMITTING...
                                            </>
                                        ) : (
                                            <>
                                                <span>{'>'}</span> INITIATE_TRANSFER
                                            </>
                                        )}
                                    </span>
                                    {/* Button hover scanline */}
                                    <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-green-400/20 to-transparent group-hover:animate-[btnScan_1s_ease-in-out_infinite]" />
                                </button>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <p className="text-green-400 text-center text-sm mt-4 animate-pulse">
                                        [TRANSMISSION SUCCESSFUL] Data packet received.
                                    </p>
                                )}
                                {submitStatus === "error" && (
                                    <p className="text-red-500 text-center text-sm mt-4">
                                        [TRANSMISSION FAILED] Please try again.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Credits */}
                <div className="mt-32 text-center text-green-500/40 text-xs tracking-widest flex flex-col items-center justify-center gap-2">
                    <p>Designed & Built by Kurt Zhynkent R. Canja</p>
                    <p className="mt-2 text-[10px] text-green-500/30">
                        BG Music: <a href="https://www.chosic.com/download-audio/58283/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">Noise - Cyberpunk Sport Midtempo by Alex-Productions</a>
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <span className="w-4 h-px bg-green-500/30"></span>
                        <p>SYSTEM.VER V1.0.0</p>
                        <span className="w-4 h-px bg-green-500/30"></span>
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes btnScan {
                    0% { left: -100%; }
                    100% { left: 200%; }
                }
            `}</style>
        </section>
    );
}
