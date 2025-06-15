import Logo from "../assets/logo2.png"
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';


const Header = () => {
    const [menuOpenned, setMenuOpenned] = useState(false);

    useEffect(() => {
        if (menuOpenned) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpenned]);

    const handleToggle = () => {
        setMenuOpenned(!menuOpenned);
    }

    return (
        <div style={{backgroundColor: "#212529"}} className="h-[108px]  flex items-center relative">
            <div className="w-[90%] mx-auto flex items-center justify-between md:justify-start">
                <div>
                    <Link to="/"><img src={Logo} alt="" className="w-19 cursor-pointer hover:scale-105 transition-transform duration-300"/></Link>
                </div>

                <ul className="hidden md:flex gap-6 text-white text-sm ml-25">
                    <li className="transition-transform duration-200 hover:scale-110 will-change-transform transform-gpu"><Link to="/">Home</Link></li>
                    <li className="transition-transform duration-200 hover:scale-110 will-change-transform transform-gpu"><Link to="/products">Products</Link></li>
                    <li className="transition-transform duration-200 hover:scale-110 will-change-transform transform-gpu"><Link to="/about">About Us</Link></li>
                    <li className="transition-transform duration-200 hover:scale-110 will-change-transform transform-gpu"><Link to="/contact">Contact Us</Link></li>
                </ul>


                <button onClick={handleToggle} className="flex flex-col gap-2 cursor-pointer md:hidden transition-transform durtaion-200 active:scale-90 outline-none focus:outline-none">
                    
                    <span className="w-8 h-0.5" style={{backgroundColor: "#FFB84C"}}></span>
                    <span className="w-6 h-0.5" style={{backgroundColor: "#FF6F34"}}></span>
                    <span className="w-4 h-0.5" style={{backgroundColor: "#FF221A"}}></span>
                </button>

                
                
            </div>
            
            
            <div className={`fixed top-[108px] left-0 w-full transition-transform duration-500 ease-in-out z-10 ${menuOpenned ? "translate-y-0" : "translate-y-[100vh]"}`} style={{ backgroundColor: "#212529", height: "calc(100vh - 108px)" }}>
                <ul className="pl-8 pt-20 flex flex-col text-white text-sm gap-10">
                    <li className="relative after:content-[''] after:block after:h-px after:w-24 after:bg-white after:mt-3">
                    <Link to="/" onClick={() => setMenuOpenned(false)}>Home</Link>
                    </li>
                    <li className="relative after:content-[''] after:block after:h-px after:w-32 after:bg-white after:mt-3">
                    <Link to="/products" onClick={() => setMenuOpenned(false)}>Products</Link>
                    </li>
                    <li className="relative after:content-[''] after:block after:h-px after:w-40 after:bg-white after:mt-3">
                    <Link to="/about" onClick={() => setMenuOpenned(false)}>About Us</Link>
                    </li>
                    <li className="relative after:content-[''] after:block after:h-px after:w-48 after:bg-white after:mt-3">
                    <Link to="/contact" onClick={() => setMenuOpenned(false)}>Contact Us</Link>
                    </li>
                </ul>
            </div>
            
            
            
            
        </div>
    )
}

export default Header;