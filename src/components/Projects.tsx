import { ReactNode } from "react";

export default function Projects() {
    const projects = [
        {
            title: "Task Management App",
            description: "A comprehensive project management tool with real-time collaboration, kanban boards, and task analytics.",
            techs: ["React", "Node.js", "Socket.io", "MongoDB"],
            link: "#",
            github: "#"
        },
        {
            title: "E-Commerce Frontend",
            description: "A high-performance e-commerce storefront with complex filtering, cart management, and seamless checkout experience.",
            techs: ["Next.js", "Tailwind CSS", "Stripe", "Zustand"],
            link: "#",
            github: "#"
        },
        {
            title: "AI Chat Interface",
            description: "A sleek conversational UI for interacting with large language models, featuring message history and code highlighting.",
            techs: ["TypeScript", "React", "OpenAI API", "Tailwind"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-slate-100 flex items-center gap-4">
                    <span className="text-blue-500">03.</span> Featured Projects
                    <div className="h-[1px] bg-slate-800 flex-grow ml-4 rounded-full"></div>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-slate-800/20 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
                        >
                            {/* Folder Icon Placeholder */}
                            <div className="flex justify-between items-center mb-8">
                                <div className="text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>
                                </div>
                                <div className="flex gap-4 text-slate-400">
                                    <a href={project.github} className="hover:text-blue-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                    </a>
                                    <a href={project.link} className="hover:text-blue-400 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-slate-200 mb-4 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 mb-8 flex-grow">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-3 text-sm text-slate-500 font-mono">
                                {project.techs.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
