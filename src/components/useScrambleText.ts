"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMOPQRSTUVWXYZ0123456789@#$%^&*()_+{}|:<>?~";

export function useScrambleText(text: string, duration: number = 2000) {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let startTime = performance.now();
        let frameId: number;

        const animate = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const scrambledLength = Math.floor(text.length * (1 - progress));

            let newText = "";
            for (let i = 0; i < text.length; i++) {
                if (i < text.length - scrambledLength) {
                    newText += text[i];
                } else {
                    newText += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            }

            setDisplayText(newText);

            if (progress < 1) {
                frameId = requestAnimationFrame(animate);
            }
        };

        frameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameId);
    }, [text, duration]);

    return displayText;
}
