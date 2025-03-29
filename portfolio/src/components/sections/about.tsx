import { Onscroll } from "../Onscroll";
export const About = () => {
    const frontendSkills = ["react", "typescript", "javascript", "html", "css", "tailwindcss", "bootstrap"];
    const backendSkills = ["nodejs", "express", "laravel", "mongodb", "mysql", "postgresql", "python"];
    const lowlevelSkills = ["c", "c++"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <Onscroll>
                
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="test-grey-300 mb-6">
                        Passionate about technology and innovation, I am a full-stack developer with a <br />
                        background in computer science. I have experience in developing web applications using <br />
                        modern technologies such as React, Node.js, Laravel, and MongoDB. <br />
                        and low-level programming languages such as C and C++. <br />
                        I am always eager to learn new things and improve my skills. I am a team player and I enjoy working
                        with others to achieve common goals. <br /> I am also a quick learner and I am able to adapt to new environments <br /> and technologies quickly.
                        I am looking for opportunities to work on challenging projects that will <br />
                        allow me to grow as a developer and contribute to the success of the team.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/20 hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-blue-500 px-3 py-1 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/20 hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-blue-500 px-3 py-1 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">System Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {lowlevelSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500/20 hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-blue-500 px-3 py-1 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div
                        className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all"
                    >
                        <h3 className="text-xl font-bold mb-4">
                            <span className="mr-2">🎓</span>Educations
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Software Engineer</strong> - 1337 UM6P [2023-present]
                            </li>
                            <li>
                                <strong>Full Stack</strong> - ISTA OFPPT [2021-2023]
                            </li>
                        </ul>
                    </div>
                    <div
                        className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all"
                    >
                        <h3 className="text-xl font-bold mb-4">
                            <span className="mr-2">💼</span>Work Experience
                        </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Full Stack at OCP: Internship (2023)</h4>
                                <p>
                                    Assisted in building a web application for managing the OCP Group internship requests. <br />
                                    <strong>Technologies:</strong> Laravel, MySQL, Bootstrap, JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Onscroll>
        </section>
    );
};