import { Onscroll } from "../Onscroll";
interface Project{
    name:string,
    description:string,
    skill:string[],
    links:string[]

}
export const Projects = () => {
    const projects:Project[]=[{
    name:"ft_transcendence",
    description: "A real-time multiplayer Pong game with chat and social features. Built with TypeScript on both frontend and backend using Fastify and Prisma. Implemented WebSocket for gameplay and messaging, and used Docker for DevOps and deployment. Integrated google OAuth authentication with user profiles and matchmaking.GitHub",
    skill:["TypeScript", "Fastify", "Prisma", "WebSocket", "SPA"],
    links:["https://github.com/IsmailElhassouni/ft_transcendence"]
    },{
        name:"Webserver",
        description:"webserver is a simple web server written in C++ 98 that can serve static and dyanmic files, handle basic HTTP requests (POST GET DELETE). It is designed to be lightweight and easy to use, making it a great starting point for more projects in cpp. the docker  image is available in my GitHub if you want to take a look at the code Contact me",
        skill:["c++ 98"],
        links:["https://github.com/IsmailElhassouni/CraftHTTP","#Contact"]
    }
,{
    name:"Portofolio",
    description:"This portfolio. It showcases my skills and projects as a full-stack developer. The code is available on GitHub , and I welcome contributions and feedback.",
    skill:["React", "Tailwind CSS", "TypeScript","emailjs"],
    links:["https://github.com/IsmailElhassouni/Portfolio"]
},
{
    name:"Vavafrica.org",
    description:" i took part on build the front-end behind vavafrica wich is a platform that stand with childern and women in africa and help them to get the basic needs and education and health care and many more",
    skill:["Next.js", "Tailwind CSS", "TypeScript"],
    links:["https://vavafrica.org/"]
},
{
    name:"mionia.com",
    description:"i took part on build the front-end and back-end for mionia",
    skill:["Nest.js","React", "Tailwind CSS", "TypeScript"],
    links:["https://mionia.com/"]
},
{
    name:"mionia-mobile-app",
    description:"mionia-mobile-app is a mobile application built with React Native and Expo, designed to provide users with a seamless experience on their mobile devices. It offers features such as user authentication, real-time updates, and a responsive design that adapts to various screen sizes. The app is available for both iOS and Android platforms.",
    skill:["React Native", "Expo", "TypeScript","Firebase"],
    links:[""]
}]
    return ( <section 
    className="min-h-screen flex items-center justify-center py-20"
    id="Projects">
        <Onscroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Feature Projects </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj,index)=>
            (
                <div key={index} className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">{proj.name.includes(".") ? <a className="text-blue-300 visited:text-blue-300 hover:text-blue-200" href={proj.links[0]} target="_blank" rel="noreferrer">{proj.name}</a> : proj.name}</h3>
                    <p className="text-gray-300 mb-4">
                        {
                            proj.description.split(".").map((line, index) => (
                                <span key={index}>
                                    {line.split(" ").map((word, i) =>
                                        word === "GitHub" ? (
                                            <a key={i} className="text-blue-500 visited:text-blue-500 hover:text-blue-400" href={proj.links[0]} target="_blank" rel="noreferrer">
                                                {word}
                                            </a>
                                        ) : word === "Contact" ? (
                                            <a key={i} className="text-blue-500 visited:text-blue-500 hover:text-blue-400" href={proj.links[1]}>
                                                {word}
                                            </a>
                                        ) : (
                                            <span key={i}> {word} </span>
                                        )
                                    )}
                                    <br />
                                </span>
                            ))
                        }
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {proj.skill.map((skill, index) => (
                            <span
                            key={index}
                                className="bg-blue-500/20 hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition text-blue-500 px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>))}
        
            </div>

        </div>
        </Onscroll>
    </section>)}
