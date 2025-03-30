import { FC } from "react";
interface MobileProps {
    menu: boolean;
    setmenu: (value: boolean) => void;
  }
  
  export const Mobile: FC<MobileProps> = ({ menu, setmenu }) => {
    return(
<div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
    ${menu ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>



        <button aria-label="Close Menu" onClick={() => setmenu(false)} className="absolute top-5 right-5 text-white text-3xl focus:outline-none cursor-pointer">
            &times;
        </button>
        <a onClick={() => setmenu(false)} href="#home"
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}>
            Home
            </a>
            <a onClick={() => setmenu(false)} href="#About"
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}>
            About
            </a>
            <a onClick={() => setmenu(false)} href="#Projects"
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}>
            Projects
            </a>
            <a onClick={() => setmenu(false)} href="#Contact"
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}>
            Contact
            </a>
    </div>

    );}