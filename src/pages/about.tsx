import CheckIcon from "../assets/check.png"

const About = () => {
    return (
        <div className="w-[100%] h-[80vh] flex justify-center items-center">
            <div className=" w-100">
                <h1 className="font-extrabold text-5xl">Current Task</h1>
                <p className="my-5 text-orange-400 text-xl ">~Copy coupon to the clipboard~</p>
                <label htmlFor=""></label>
                <ul className="list-decimal leading-loose font-semibold">
                    <li>Learn About the clipboard method and <br/>how to use it <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                    <li>Can I use it with react? <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                    <li>Download icon green checkmark <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                    <li>Instead of alert make good looking message which quickly disapiares <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                    <li>Make adaptive to the mobile version <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>

                </ul>
            </div>
            
        </div>
    )
}

export default About;