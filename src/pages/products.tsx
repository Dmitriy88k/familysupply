import { useEffect, useState, useRef, useCallback } from "react";
import { db } from "../firebase";
import { collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import StarRating from "../components/starRating";
import LikeProduct from "../components/likeProduct"
import type { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";


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
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);


  const loaderRef = useRef(null);
  const lastScrollY = useRef(0); 

  const fetchProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const storage = getStorage();
    try {
      const productsCol = collection(db, "products");
      const q = lastDoc
        ? query(productsCol, orderBy("name"), startAfter(lastDoc), limit(12))
        : query(productsCol, orderBy("name"), limit(12));

      const snapshot = await getDocs(q);

      const productsList = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const data = doc.data();
          let imageUrl="";
          if (data.imagePath) {
            try {
              const imageRef = ref(storage, data.imagePath);
              imageUrl = await getDownloadURL(imageRef);
            } catch(e) {
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
      
      setProducts((prev) => [...prev, ...productsList]);

      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      setLastDoc(lastVisible);

      if (snapshot.docs.length < 8) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failde to fetch products:", err);
    } finally {
      setLoading(false);
    }
  }, [lastDoc, loading, hasMore]);
    
    const didFetchRef = useRef(false);

    useEffect(() => {
      if (!didFetchRef.current) {
        fetchProducts();
        didFetchRef.current = true;
      }
    }, [fetchProducts]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore && !loading) {
            console.log("Intersecting - fetching more products...");
            fetchProducts();
          }
        },
        { threshold: 1.0 }
      );

      const currentLoader = loaderRef.current;
      if (currentLoader) {
        observer.observe(currentLoader);
      }

      return () => {
        if (currentLoader) {
          observer.unobserve(currentLoader);
        }
      };
    }, [fetchProducts, hasMore, loading]);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if(currentScrollY >1200 && currentScrollY < lastScrollY.current) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }

        lastScrollY.current = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    


  return (
    <div className="bg-[#DCEEF9] min-h-[80vh] px-4 py-10">
      <div className="w-[70%] sm:w-[92%] mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {products.map((product) => (
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
      {hasMore && (
          <div ref={loaderRef} className="h-12 flex justify-center items-center mt-6 w-100 mx-auto">
            {loading ? (
              <p className="text-gray-500">Loading more products...</p>
            ) : (
              <p className="text-gray-500">Scroll to load more...</p>
            )}
          </div>
        )}

        {!hasMore && products.length > 0 && (
          <div className="h-12 flex justify-center items-center mt-6">
            <p className="text-gray-400">No more products</p>
          </div>
        )}

        
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 bg-[#FF6F34] text-white p-3 rounded-full shadow-lg hover:bg-[#ff814b] transition-opacity duration-500 z-50 ${
            showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        
    </div>
  );
};

export default Products;
