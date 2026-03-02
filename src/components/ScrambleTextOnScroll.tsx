"use client";

import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useScrambleText } from "./useScrambleText";

export function ScrambleTextOnScroll({ text, duration = 1500, className = "" }: { text: string, duration?: number, className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    // Toggle scrambling state based on visibility
    useEffect(() => {
        setShouldAnimate(isInView);
    }, [isInView]);

    // The hook returns the original text immediately if shouldAnimate is false
    const scrambled = useScrambleText(text, duration);
    const displayText = shouldAnimate ? scrambled : text; // Reset immediately to target text if not animating, or handle it inside hook

    return (
        <span ref={ref} className={className}>
            {displayText}
        </span>
    );
}
