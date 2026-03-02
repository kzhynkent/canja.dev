export default function Navigation() {
    const links = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 px-8 flex justify-between items-center pointer-events-none">
            {/* Logo placeholder - Left side */}
            <div className="font-bold text-xl tracking-tighter text-white pointer-events-auto">
                <span className="text-blue-500">C</span>.dev
            </div>

            {/* Centered Navigation Links */}
            <ul className="flex items-center gap-2 px-2 py-2 pointer-events-auto bg-slate-900/40 backdrop-blur-md rounded-full border border-white/5 mx-auto">
                {links.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/10"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Download CV - Right side */}
            <div className="pointer-events-auto">
                <a
                    href="/cv.pdf"
                    download
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 bg-white hover:bg-slate-200 transition-colors px-6 py-2.5 rounded-full shadow-lg"
                >
                    Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                </a>
            </div>
        </nav>
    );
}
