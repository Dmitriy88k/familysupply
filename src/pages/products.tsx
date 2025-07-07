import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import StarRating from "../components/starRating";
import LikeProduct from "../components/likeProduct"


interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imagePath: string;
  imageUrl?: string;
  rating: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storage = getStorage();

    async function fetchProducts() {
      try {
        const productsCol = collection(db, "products");
        const snapshot = await getDocs(productsCol);

        const productsList = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const data = doc.data();
            let imageUrl = "";

            if (data.imagePath) {
              try {
                const imageRef = ref(storage, data.imagePath);
                imageUrl = await getDownloadURL(imageRef);
              } catch (e) {
                console.error("Could not load image:", data.imagePath, e);
              }
            }

            return {
              id: doc.id,
              name: data.name ?? "",
              description: data.description ?? "",
              price: data.price ?? 0,
              imagePath: data.imagePath ?? "",
              imageUrl,
              rating: data.rating ?? 0,
            };
          })
        );

        setProducts(productsList);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="bg-[#DCEEF9] min-h-screen px-4 py-10">
      <div className="w-[70%] sm:w-[92%] mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {products.map((product) => (
          <div key={product.id} className="relative bg-white rounded-3xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:justify-between md:min-h-[340px]">
            
            <div className="flex flex-col ">
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
              <p className="text-sm text-gray-600"> {product.description}</p>
              <p className="font-bold text-black text-md"> ${product.price.toFixed(2)} </p>
              <div className="flex flex-col 2xl:flex-row items-start xl:items-center gap-3 mt-4">
  
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                  <button className="w-9 py-2 border-r border-gray-300 hover:bg-gray-100 cursor-pointer">-</button>
                  <span className="w-9 text-center py-2 select-none">0</span>
                  <button className="w-9 py-2 border-l border-gray-300 hover:bg-gray-100 cursor-pointer">+</button>
                </div>

                
                <button
                  className="w-[110px] py-2 font-semibold text-white rounded bg-[#212529] shadow hover:scale-105 transition-transform cursor-pointer"
                >
                  Add to cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
