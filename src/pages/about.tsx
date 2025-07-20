import CheckIcon from "../assets/check.png"

const About = () => {
    return (
        <div className="w-[100%] h-[88vh] flex justify-center items-center bg-[#DCEEF9]">
            <div className=" w-100">
                <h1 className="font-extrabold text-5xl">Current Task</h1>
                <p className="my-5 text-orange-400 text-xl ">~Products carousel~ <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></p>
                <ul className="list-decimal leading-loose font-semibold">
                    <li className="line-through">Find out how many listings should be in one page <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                    
                
                    
                </ul>
            </div>
            
        </div>
    )
}

export default About;