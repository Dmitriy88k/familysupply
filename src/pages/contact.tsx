import CheckIcon from "../assets/check.png"

const Contact = () => {
    return (
        
        <div className="w-[100%] h-[88vh] flex justify-center items-center bg-[#DCEEF9]">
            <div className=" max-w-full">
                <h1 className="font-extrabold text-5xl mb-7 text-pink-800">Plan</h1>
                <ul className="list-decimal leading-loose font-semibold text-lg">
                    <li className="line-through">Rating/Reviews <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                    <li>Minimum order = $200</li>
                    <li className="line-through">Apply the "Family" coupon (Clipboard method) <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                    <li>Checkout</li>
                    <li className="line-through">Add Quantity To Products <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                    <li>Limited Quantity Stock</li>
                    <li>Credit Card fake Number</li>
                    <li>Create Account</li>
                    <li>History of orders</li>
                    <li className="line-through">Likes/Favorites <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                    <li className="text-fuchsia-600">Search Products</li>
                    <li className="line-through">Create footer <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                    <li className="line-through">Products Carousel <img src={CheckIcon} alt="" className="inline w-5 ml-3"/></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Contact;