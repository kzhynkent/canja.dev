export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10" />

            <div className="max-w-4xl mx-auto text-center z-10 space-y-8 mt-20">
                <div className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 backdrop-blur-sm text-sm font-semibold tracking-wide uppercase mb-4 animate-fade-in-up">
                    Welcome to my portfolio
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                    Crafting Digital <br className="hidden md:block" /> Experiences
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    I am a passionate software developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.
                </p>

                <div className="flex items-center justify-center gap-4 pt-8">
                    <a href="#projects" className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:scale-105 transition-transform shadow-xl shadow-white/10">
                        View My Work
                    </a>
                    <a href="#contact" className="px-8 py-4 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-colors font-medium">
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] -z-10 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -z-10 mix-blend-screen" />
        </section>
    );
}
