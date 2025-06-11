import Logo from "../assets/logo.png"


const Header = () => {
    return (
        <div style={{backgroundColor: "#212529"}} className="h-26 flex items-center">
            <div className="w-[90%] mx-auto flex items-center justify-between">
                <div>
                    <img src={Logo} alt="" className="w-19"/>
                </div>

                <div className="flex flex-col gap-2 cursor-pointer">
                    <span className="w-8 h-0.5" style={{backgroundColor: "#FFB84C"}}></span>
                    <span className="w-6 h-0.5" style={{backgroundColor: "#FF6F34"}}></span>
                    <span className="w-4 h-0.5" style={{backgroundColor: "#FF221A"}}></span>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Header;