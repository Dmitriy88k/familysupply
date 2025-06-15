import HomeImg from "../assets/home.jpg"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div initial={{ opacity: -2, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2}} className="flex flex-col gap-10 items-center md:w-[90%] mx-auto lg:flex-row md:my-18">
            <img src={HomeImg} alt="" className="lg:w-[60%]"/>
            <div className="w-[90%] mx-auto md:py-17">
                <h1 className="text-5xl mb-10 ">Your Trusted Source for Home Cleaning Supplies</h1>
                <p className="mb-10  text-sm">At Family Supply, we are dedicated to providing high-quality cleaning products that make your home shine. Our mission is to simplify your cleaning routine with reliable supplies delivered right to you</p>
                <Link to="/products"><button style={{background: "#FF6F34"}} className="px-6 py-2 rounded-4xl text-amber-50 font-semibold mr-3 cursor-pointer hover:scale-110 transition-transform duration-300" >Shop</button></Link>
                <Link to="/about"><button style={{background: "#212529"}} className="px-6 py-2 rounded-4xl font-semibold text-amber-50 cursor-pointer hover:scale-110 transition-transform duration-300" >Learn More</button></Link>
            </div>
        </motion.div>
    )
}

export default Home;