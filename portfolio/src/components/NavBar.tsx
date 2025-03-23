import { useEffect } from "react";
export const NavBar = ({menu,setmenu}) => {
    useEffect(() => {
        document.body.style.overflow = menu ? "hidden" : "";
 }, [menu]);
 return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
    <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <a href="#home" className="text-2xl font-bold text-gray-100">
            Ismail<span className="text-blue-500">.ELhassouni</span>{" "}
        
        </a>

        <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setmenu((prev: Boolean) => !prev)}>
        &#9776;
        </div>
        <div className="hidden md:flex items space-x-8">
            <a href="#home"
            className="text-gray-300 hover:text-blue-500 transition-colors">
            {" "}Home{" "}
            </a>
            <a href="#About"
            className="text-gray-300 hover:text-blue-500 transition-colors">
            {" "}About{" "}
            </a>
            <a href="#Projects"
            className="text-gray-300 hover:text-blue-500 transition-colors">
            {" "}Projects{" "}
            </a>
            <a href="#Contact"
            className="text-gray-300 hover:text-blue-500 transition-colors">
            {" "}Contact{" "}
            </a>
        </div>
        </div>
    </div>

 </nav> 
}