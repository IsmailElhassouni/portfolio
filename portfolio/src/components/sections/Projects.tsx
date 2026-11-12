import { Onscroll } from "../Onscroll";

interface Project {
    name: string,
    description: string,
    skill: string[],
    links: string[]
}

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/[0.06] hover:shadow-[0_12px_30px_rgba(59,130,246,0.12)] transition-all duration-300">
        <h3 className="text-xl font-bold mb-3">
            {project.links[0] ? (
                <a className="text-blue-300 visited:text-blue-300 hover:text-blue-200 transition-colors" href={project.links[0]} target="_blank" rel="noreferrer">
                    {project.name}
                </a>
            ) : project.name}
        </h3>
        <p className="text-gray-300 leading-relaxed mb-5">
            {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
            {project.skill.map((skill) => (
                <span
                    key={skill}
                    className="bg-blue-500/20 hover:bg-blue-500/40 transition text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export const Projects = () => {
    const projects: Project[] = [{
        name: "ft_transcendence",
        description: "A real-time multiplayer Pong game with chat and social features. Built with TypeScript on both frontend and backend using Fastify and Prisma. Implemented WebSocket for gameplay and messaging, and used Docker for DevOps and deployment. Integrated Google OAuth authentication with user profiles and matchmaking.",
        skill: ["TypeScript", "Fastify", "Prisma", "WebSocket", "SPA"],
        links: ["https://github.com/IsmailElhassouni/ft_transcendence"]
    }, {
        name: "Webserver",
        description: "A simple web server written in C++98 that serves static and dynamic files and handles basic HTTP requests (POST, GET, DELETE). It is designed to be lightweight and easy to extend.",
        skill: ["C++98"],
        links: ["https://github.com/IsmailElhassouni/CraftHTTP"]
    }, {
        name: "Portofolio",
        description: "This portfolio showcases my skills and projects as a full-stack developer. The code is available on GitHub, and I welcome contributions and feedback.",
        skill: ["React", "Tailwind CSS", "TypeScript", "EmailJS"],
        links: ["https://github.com/IsmailElhassouni/Portfolio"]
    }, {
        name: "Vavafrica.org",
        description: "I took part in building the front end behind Vavafrica, a platform that supports children and women in Africa with basic needs, education, healthcare, and more.",
        skill: ["Next.js", "Tailwind CSS", "TypeScript"],
        links: ["https://vavafrica.org/"]
    }, {
        name: "mionia.com",
        description: "I took part in building the front end and back end for Mionia.",
        skill: ["Nest.js", "React", "Tailwind CSS", "TypeScript"],
        links: ["https://mionia.com/"]
    }, {
        name: "mionia-mobile-app",
        description: "A React Native and Expo mobile application with authentication, real-time updates, and responsive experiences for iOS and Android.",
        skill: ["React Native", "Expo", "TypeScript", "Firebase"],
        links: [""]
    }, {
        name: "Leaffliction",
        description: "Plant Leaf Disease Classification. Built an end-to-end CNN image-classification pipeline, training a model from scratch to classify plant leaf conditions. Implemented dataset loading, train/validation splitting, class balancing with six image augmentation techniques, evaluation, and top-3 predictions.",
        skill: ["Python", "TensorFlow/Keras", "OpenCV", "CNN", "Image Classification"],
        links: ["https://github.com/IsmailElhassouni/Leaffliction"]
    }];

    return (
        <section className="min-h-screen flex items-center justify-center py-20" id="Projects">
            <Onscroll>
                <div className="max-w-5xl mx-auto px-4 w-full">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.name} project={project} />
                        ))}
                    </div>
                </div>
            </Onscroll>
        </section>
    );
};
