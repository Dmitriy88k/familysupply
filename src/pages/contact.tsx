const Contact = () => {
    return (
        <div className="flex-col text-center ">
            <h1 className="font-extrabold text-2xl my-10">Plan</h1>
            <div>
                <ul className="bg-red-300 py-10 flex flex-col gap-5 text-white text-2xl list-disc">
                    <li className="text-fuchsia-600">Rating/Reviews</li>
                    <li>Minimum order = $200</li>
                    <li className="line-through">Apply the "Family" coupon (Clipboard method)</li>
                    <li>Checkout</li>
                    <li>Limited Quantity Stock</li>
                    <li>Credit Card fake Number</li>
                    <li>Create Account</li>
                    <li>History of orders</li>
                    <li>Likes/Favorites</li>
                    <li>Search Products</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;