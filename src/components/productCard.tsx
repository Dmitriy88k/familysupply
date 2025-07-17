import StarRating from "../components/starRating";
import LikeProduct from "../components/likeProduct";

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        description: string;
        price: number;
        imagePath: string;
        imageUrl?: string;
        rating: number;
    };
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div key={product.id} className="relative bg-white rounded-3xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:justify-between md:min-h-[340px]">
            <div className="flex flex-col items-center">
              {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.name} className="w-40 h-40 object-cover rounded-xl mb-4 mx-auto"/>
              ) : (
                <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-xl mb-4 text-gray-500 text-sm">
                  No image
                </div>
              )}
            </div>
            <div className="absolute top-3 right-3">
              <LikeProduct />
            </div>
            <div className="flex flex-col p-5 mx-auto text-center md:text-start md:mx-0 xl:mx-auto xl:text-center">
              <h2 className="font-semibold  h-13 truncate">{product.name}</h2>
              <StarRating rating={product.rating}/>
              <p className="text-sm text-gray-600 h-15 mt-2"> {product.description}</p>
              <p className="font-bold text-black text-md"> ${product.price.toFixed(2)} </p>
              <div className="flex flex-col   items-center md:items-start xl:items-center xl:justify-center 2xl:flex-row gap-3 mt-4">
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                  <button className="w-9 py-2 border-r border-gray-300 hover:bg-gray-100 cursor-pointer">-</button>
                  <span className="w-9 text-center py-2 select-none">0</span>
                  <button className="w-9 py-2 border-l border-gray-300 hover:bg-gray-100 cursor-pointer">+</button>
                </div>

                <button className="w-[110px] py-2 font-semibold text-white rounded bg-[#212529] shadow hover:scale-105 transition-transform cursor-pointer">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
    );
};

export default ProductCard;