export const About =()=>{
    return (
        <section id="about" 
        className="min-h-screen flex items-center  justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="test-grey-300 mb-6 ">
                Passionate about technology and innovation, I am a full-stack developer with a <br/>
                background in computer science. I have experience in developing web applicationsusing <br/>
                modern technologies such as React, Node.js, Laravel ,and MongoDB. <br/>
                I am always eager to learn new things and improve my skills. I am a team player and I enjoy working <br/>
                with others to achieve common goals. I am also a quick learner and I am able to adapt to new environments<br/> and technologies quickly. 
                I am looking for opportunities to work on challenging projects that will <br/>
                allow me to grow as a developer and contribute to the success of the team.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2"></div>
            </div>
            </div>
        </div>
        </section>
    );
}