export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-2xl mx-auto text-center relative z-10">
                <h2 className="text-sm font-mono text-blue-500 mb-6 tracking-widest uppercase">
                    05. What&apos;s Next?
                </h2>
                <h3 className="text-5xl md:text-6xl font-bold text-slate-100 mb-8">
                    Get In Touch
                </h3>

                <p className="text-lg text-slate-400 mb-12">
                    I&apos;m currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <a
                    href="mailto:hello@example.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:-translate-y-1 transition-all rounded-md font-mono text-sm tracking-wide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    Say Hello
                </a>
            </div>

            {/* Footer credits implicit */}
            <div className="mt-32 text-center text-slate-500 font-mono text-sm">
                <p>Built with Next.js & Tailwind CSS</p>
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>
    );
}
