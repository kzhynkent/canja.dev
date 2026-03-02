"use client";

import { useState, useEffect } from "react";

// Toned down to mostly alphanumeric with a few subtle symbols
const CHARS = "ABCDEFGHIJKLMOPQRSTUVWXYZ0123456789-_/\\";

export function useScrambleText(text: string, duration: number = 2000, trigger: boolean = true) {
    const [displayText, setDisplayText] = useState(() => {
        if (!trigger) {
            let placeholder = "";
            for (let i = 0; i < text.length; i++) {
                placeholder += (text[i] === " " || text[i] === "\n") ? text[i] : "_";
            }
            return placeholder;
        }
        return text;
    });

    useEffect(() => {
        if (!trigger) {
            let placeholder = "";
            for (let i = 0; i < text.length; i++) {
                placeholder += (text[i] === " " || text[i] === "\n") ? text[i] : "_";
            }
            setDisplayText(placeholder);
            return;
        }

        let startTime = performance.now();
        let frameId: number;
        let lastUpdateTime = 0;

        const animate = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const scrambledLength = Math.floor(text.length * (1 - progress));

            // Throttle updates slightly to reduce visual chaos (approx 30fps instead of 60fps)
            if (time - lastUpdateTime > 30) {
                let newText = "";
                for (let i = 0; i < text.length; i++) {
                    // Start revealing characters correctly over time
                    if (i < text.length - scrambledLength) {
                        newText += text[i];
                    } else if (text[i] === " " || text[i] === "\n") {
                        // Never scramble spaces, keeps the structure of paragraphs readable immediately
                        newText += text[i];
                    } else {
                        // Only scramble ~30% of the remaining letters at a time to keep it subtle
                        if (Math.random() < 0.3) {
                            newText += CHARS[Math.floor(Math.random() * CHARS.length)];
                        } else {
                            // Leave the rest as faint underscores or dots
                            newText += "_";
                        }
                    }
                }

                setDisplayText(newText);
                lastUpdateTime = time;
            }

            if (progress < 1) {
                frameId = requestAnimationFrame(animate);
            } else {
                setDisplayText(text); // Ensure final exact text is set at 100%
            }
        };

        frameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameId);
    }, [text, duration, trigger]);

    return displayText;
}
