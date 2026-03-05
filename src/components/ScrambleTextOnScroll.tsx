"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { useScrambleText } from "./useScrambleText";

export function ScrambleTextOnScroll({ text, duration = 1500, className = "" }: { text: string, duration?: number, className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px", once: true });

    // The hook returns the original text immediately if trigger is false
    const scrambled = useScrambleText(text, duration, isInView);

    return (
        <span ref={ref} className={className}>
            {scrambled}
        </span>
    );
}
