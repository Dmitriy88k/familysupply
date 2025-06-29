import Slider from "react-slick";
import Image1 from "../assets/clorox_spray.png"
import Image2 from "../assets/2.webp"
import Image3 from "../assets/3.png"
import Image4 from "../assets/4.png"


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                },
            },
        ],
    };

    return (
        <div className=" my-50" >
            <h1 className="font-bold text-center text-6xl h-40">Our Best Selling Products</h1>
            <Slider {...settings} className="">
                <div><img src={Image1} alt="" className="w-100 mx-auto md:hover:scale-110 transition-transform duration-250"/></div>
                <div><img src={Image2} alt="" className="w-100 mx-auto md:hover:scale-110 transition-transform duration-250"/></div>
                <div className=" h-100">
                    <img src={Image4} alt="" className="w-100 mx-auto md:hover:scale-110 transition-transform duration-250"/>
                    
                </div>
                <div>
                    <img src={Image3} alt="" className="w-100 lg:h-110 mx-auto md:hover:scale-110 transition-transform duration-250"/>
                    <div className="w-100 mx-auto my-5 text-center">
                        <h1>Kiwi & Watermelon</h1>
                        <p> $5.00</p>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Carousel;