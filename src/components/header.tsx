import Logo from "../assets/logo2.png"
import { NavLink } from "react-router-dom";
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
        <div style={{ backgroundColor: "#212529" }} className="h-[108px] flex items-center w-full z-50 md:relative fixed top-0 left-0 md:top-auto">

            <div className="w-[90%] mx-auto flex items-center justify-between md:justify-start ">
                <div>
                    <NavLink to="/" onClick={() => setMenuOpenned(false)}><img src={Logo} alt="" className="w-19 cursor-pointer md:hover:scale-105 transition-transform duration-300"/></NavLink>
                </div>

                <ul className="hidden md:flex gap-6 text-white text-sm ml-25">
                    <li><NavLink to="/" className={({ isActive }) => `${isActive ? 'text-[#FF6F34]' : 'text-white'}`}>Home</NavLink></li>
                    <li><NavLink to="/products" className={({ isActive }) => `${isActive ? 'text-[#FF6F34]' : 'text-white'}`}>Products</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => `${isActive ? 'text-[#FF6F34]' : 'text-white'}`}>About Us</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => `${isActive ? 'text-[#FF6F34]' : 'text-white'}`}>Contact Us</NavLink></li>
                </ul>
                

                


                <button onClick={handleToggle} className="flex flex-col gap-2 cursor-pointer md:hidden transition-transform durtaion-200 active:scale-90 outline-none focus:outline-none">
                    
                    <span className="w-8 h-0.5" style={{backgroundColor: "#FFB84C"}}></span>
                    <span className="w-6 h-0.5" style={{backgroundColor: "#FF6F34"}}></span>
                    <span className="w-4 h-0.5" style={{backgroundColor: "#FF221A"}}></span>
                </button>

                
                
            </div>
            
            
            <div className={`fixed top-[108px] left-0 w-full transition-transform duration-500 ease-in-out z-10 md:hidden ${menuOpenned ? "translate-y-0" : "translate-y-[100vh]"}`} style={{ backgroundColor: "#212529", height: "calc(100vh - 108px)" }}>
                <ul className="pl-8 pt-20 flex flex-col text-white text-sm gap-10">
                    <li className="relative after:content-[''] after:block after:h-px after:w-24 after:bg-white after:mt-3">
                    <NavLink to="/" onClick={() => setMenuOpenned(false)} className={({ isActive }) => `${isActive ? 'text-[#FF6F34]' : 'text-white'}`}>Home</NavLink>
                    </li>
                    <li className="relative after:content-[''] after:block after:h-px after:w-32 after:bg-white after:mt-3">
                    <NavLink to="/products" onClick={() => setMenuOpenned(false)} className={({ isActive }) => `${isActive ? 'text-[#FF6F34]' : 'text-white'}`}>Products</NavLink>
                    </li>
                    <li className="relative after:content-[''] after:block after:h-px after:w-40 after:bg-white after:mt-3">
                    <NavLink to="/about" onClick={() => setMenuOpenned(false)} className={({ isActive }) => `${isActive ? 'text-[#FF6F34]' : 'text-white'}`}>About Us</NavLink>
                    </li>
                    <li className="relative after:content-[''] after:block after:h-px after:w-48 after:bg-white after:mt-3">
                    <NavLink to="/contact" onClick={() => setMenuOpenned(false)} className={({ isActive }) => `${isActive ? 'text-[#FF6F34]' : 'text-white'}`}>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            
            
            
            
        </div>
    )
}

export default Header;