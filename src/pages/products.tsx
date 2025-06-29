import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imagePath: string;
  imageUrl?: string;
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
      <div className="w-[92%] mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:justify-between md:min-h-[340px]"
          >
            <div className="flex flex-col items-center">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-40 h-40 object-cover rounded-xl mb-4"
                />
              ) : (
                <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-xl mb-4 text-gray-500 text-sm">
                  No image
                </div>
              )}
              <h2 className="font-semibold text-center text-base mb-1">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600 text-center mb-2">
                {product.description}
              </p>
            </div>
            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="font-bold text-black  text-md">
                ${product.price.toFixed(2)}
              </p>
              <button
                style={{ background: "#212529" }}
                className="scale-90 px-6 py-2 rounded-4xl font-semibold text-amber-50 cursor-pointer  md:hover:scale-100 transition-transform duration-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
