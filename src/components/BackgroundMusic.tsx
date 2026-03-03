"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // We initialize the Audio object only on the client side
        // Make sure you place an audio file named 'bg-music.mp3' in your Next.js 'public' folder.
        const audio = new Audio("/bg-music.mp3");
        audio.loop = true;
        audio.volume = 0.2; // 60% background volume
        audioRef.current = audio;

        // Attempt autoplay immediately
        audio.play().catch((err) => {
            console.log("Autoplay prevented by browser, waiting for user interaction.", err);
            setIsPlaying(false); // Update state to reflect it's not actually playing
        });

        // Cleanup when unmounting
        return () => {
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            // Audio autoplay requires user interaction, so we trigger it via click
            audioRef.current.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={
                isPlaying
                    ? {
                        opacity: 1,
                        x: [0, -2, 2, -1, 1, 0],
                        y: [0, -1, 1, -1, 1, 0],
                    }
                    : {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: [1, 1.05, 1],
                    }
            }
            transition={
                isPlaying
                    ? {
                        duration: 0.3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                    }
                    : {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }
            }
            onClick={togglePlay}
            className="fixed bottom-6 right-6 z-50 p-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-full backdrop-blur-md text-green-500 transition-all group shadow-[0_0_15px_rgba(34,197,94,0.15)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center"
            aria-label="Toggle background music"
        >
            {isPlaying ? (
                // Unmute Icon (Playing)
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
            ) : (
                // Mute Icon (Paused)
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
            )}

            {/* Decorative ping indicator when playing */}
            {isPlaying && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            )}
        </motion.button>
    );
}
