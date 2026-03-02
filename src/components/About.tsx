export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-100 flex items-center gap-4">
                    <span className="text-blue-500">01.</span> About Me
                    <div className="h-[1px] bg-slate-800 flex-grow ml-4 rounded-full"></div>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                        <p>
                            Hi there! I am a software engineer with a passion for building high-quality, scalable digital products and experiences. My journey in web development started back when I was fascinated by the inner workings of websites on the internet.
                        </p>
                        <p>
                            Fast forward to today, and I&apos;ve had the privilege of building software for startups, mid-sized companies, and massive enterprise systems. My main focus these days is building accessible, inclusive products and digital experiences for a variety of users.
                        </p>
                        <p>
                            When I&apos;m not at the computer, I&apos;m usually hanging out with friends, reading, or exploring new creative hobbies.
                        </p>
                    </div>

                    <div className="relative group w-full max-w-sm mx-auto">
                        {/* Image Placeholder */}
                        <div className="absolute inset-0 bg-blue-500/20 translate-x-4 translate-y-4 rounded-2xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 group-hover:border-blue-500/50 transition-colors flex items-center justify-center">
                            <span className="text-slate-500 font-medium">Profile Image</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
