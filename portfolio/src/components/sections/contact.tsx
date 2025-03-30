import { Onscroll } from "../Onscroll"
import emailjs from "emailjs-com"
import {useState, FormEvent} from "react"
export const Contact = () => {
    const [formdata, Setformdata] = useState({
        name: "",
        email: "",
        message: ""
    })

    const hanldesub =(e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_serviceid,
            import.meta.env.VITE_tempid,
            e.target as HTMLFormElement,
            import.meta.env.VITE_pubKey)
        .then(() => {
           alert("Message sent successfully");
           Setformdata({ name: "", email: "", message: "" });
        })
        .catch((e) => 
            {
                console.error(e);
                console.log( import.meta.env.VITE_serviceid, import.meta.env.VITE_tempid, import.meta.env.VITE_pubKey," import.meta.env.VITE_serviceid");
                alert("Oops! something went wrong. Please try again.");
            });
    }
return (<section id="Contact" className="min-h-screen flex items-center justify-center py-20">
    <Onscroll>
    <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In touch
        </h2>
            
        <form className="space-y-6" onSubmit={hanldesub}>
                <div className="relative">
                        <input onChange={(e)=>Setformdata({...formdata,name:e.target.value})} value={formdata.name} type="text" id="name"  name="name" required className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"  
                        placeholder="name..."
                        />
                </div>
                <div className="relative">
                        <input onChange={(e)=>Setformdata({...formdata,email:e.target.value})} value={formdata.email} type="email" id="email"  name="email" required className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"  
                        placeholder="example@example.com"
                        />
                </div>
                <div className="relative">
                        <textarea onChange={(e)=>Setformdata({...formdata,message:e.target.value})} value={formdata.message} id="message"  name="email" rows={5} required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"  
                        placeholder="Your message..."
                        />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send Message</button>
        </form>
        <div className="mt-8 text-center">
                            <a
                                href="https://www.linkedin.com/in/ismail-elhassouni-07312a352/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-700 text-white py-2 px-4 rounded font-medium transition hover:bg-blue-800"
                            >
                                Connect on LinkedIn
                            </a>
        </div>
    </div>
    </Onscroll>
</section>)
}
