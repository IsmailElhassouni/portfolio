import { useEffect, useRef, ReactNode } from "react";

interface OnscrollProps {
  children: ReactNode; // Ensures children can be any valid React node
}

export const Onscroll: React.FC<OnscrollProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() =>
    {
        const observer = new IntersectionObserver(
        ([entries]) => {
            if(entries.isIntersecting && ref.current)
            {
                ref.current.classList.add("visible");
            }
        } 
        ,
        {
            threshold: 0.2, rootMargin: "0px 0px -50px 0px"
            
        }
    );
    
        if(ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
});
        return (
        <div ref={ref} className="reveal">
            {children}
            </div>
    )
}