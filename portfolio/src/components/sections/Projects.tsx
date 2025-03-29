import { Onscroll } from "../Onscroll";
export const Projects = () => {
    return ( <section 
    className="min-h-screen flex items-center justify-center py-20"
    id="Projects">
        <Onscroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Feature Projects </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2" >
                        Webserver
                    </h3>
                    <p className="text-gray-300 mb-4">
                        webserver is a simple web server written in C++ 98 that can serve static 
                        and dyanmic files<br />handle basic HTTP requests (POST GET DELETE). <br />It is designed to be lightweight and easy to use, making it a great starting point for more projects in cpp.
                        <br />the docker  image is available in my <a className="text-blue-500" href="https://github.com/IsmailElhassouni/CraftHTTP">Github</a>  if you want to take a look at the code <a className="text-blue-500" href="#Contact"> contact me</a>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["c++ 98"].map((skill, index) => (
                       <span
                       key={index}
                       className="bg-blue-500/20 hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition text-blue-500 px-3 py-1 rounded-full"
                   >
                       {skill}
                   </span>    
                    ))}
                    </div>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">
                       Portofolio
                    </h3>
                    <p className="text-gray-300 mb-4">
                        This portfolio. 
                        It showcases my skills and projects as a full-stack developer. 
                        The code is available on <a className="text-blue-500" href="https://github.com/IsmailElhassouni/portfolio">GitHub</a>, 
                        and I welcome contributions and feedback.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Tailwind CSS", "TypeScript","emailjs"].map((skill, index) => (
                       <span
                       key={index}
                       className="bg-blue-500/20 hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition text-blue-500 px-3 py-1 rounded-full"
                   >
                       {skill}
                   </span>    
                    ))}
                    </div>
                </div>
        
            </div>

        </div>
        </Onscroll>
    </section>)}
