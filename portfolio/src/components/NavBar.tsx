import { useEffect } from "react";

export const NavBar = ({ menu, setmenu }) => {
    useEffect(() => {
        document.body.style.overflow = menu ? "hidden" : "";
    }, [menu]);

    // Function to handle smooth scrolling
    const handleScroll = (id: string) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a
                        onClick={() => handleScroll("#home")}
                        className="text-2xl font-bold text-gray-100 cursor-pointer"
                    >
                        Ismail<span className="text-blue-500">.ELhassouni</span>
                    </a>

                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setmenu((prev: Boolean) => !prev)}
                    >
                        &#9776;
                    </div>
                    <div className="hidden md:flex items space-x-8">
                        <span
                            onClick={() => handleScroll("#home")}
                            className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
                        >
                            Home
                        </span>
                        <span
                            onClick={() => handleScroll("#about")}
                            className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
                        >
                            About
                        </span>
                        <span
                            onClick={() => handleScroll("#Projects")}
                            className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
                        >
                            Projects
                        </span>
                        <span
                            onClick={() => handleScroll("#Contact")}
                            className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer"
                        >
                            Contact
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};