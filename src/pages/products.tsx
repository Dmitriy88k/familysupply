import { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import GoToTopButton from "../components/goToTopButton";
import useProductPagination from "../hooks/useProductPagination";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useScrollToTop from "../hooks/useScrollToTop";
import SearchInput from "../components/searchInput"
import type { Product } from "../type";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";



const Products = () => {
  const { products, fetchProducts, loading, hasMore } = useProductPagination();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const showScrollTop = useScrollToTop(1200);
  const loaderRef = useInfiniteScroll(() => {
    if (hasMore && !loading) {
      fetchProducts();
    }
  });

const handleSearch = (term: string) => {
  setSearchTerm(term);
  if (term.trim() === "") {
    setFilteredProducts([]);
  } else {
    const lower = term.toLowerCase();
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(lower)
    );
    setFilteredProducts(filtered);
  }
};

useEffect(() => {
  const fetchAllProducts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const all: Product[] = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const data = doc.data() as Omit<Product, "id" | "imageUrl"> & { imagePath?: string };
          let imageUrl = "";

          if (data.imagePath) {
            try {
              const imageRef = ref(storage, data.imagePath); 
              imageUrl = await getDownloadURL(imageRef); 
            } catch (error) {
              console.warn("Failed to load image for product:", doc.id, error);
            }
          }

          return {
            id: doc.id,
            name: data.name ?? "",
            description: data.description ?? "",
            price: data.price ?? 0,
            imagePath: data.imagePath ?? "",
            imageUrl, // ✅ attach resolved imageUrl
            rating: data.rating ?? 0,
          };
        })
      );

      setAllProducts(all);
    } catch (error) {
      console.error("Failed to fetch full product list", error);
    }
  };

  fetchAllProducts();
}, []);


  const visibleProducts = searchTerm.trim() !== "" ? filteredProducts : products;

  return (
    <div className="bg-[#DCEEF9] min-h-[80vh] px-4 py-10">
       <SearchInput onSearch={handleSearch} />

      <div className="w-[70%] sm:w-[92%] mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMore && filteredProducts.length === 0 && (
        <div
          ref={loaderRef}
          className="h-12 flex justify-center items-center mt-6 w-full mx-auto"
        >
          <p className="text-gray-500">{loading ? "Loading more products..." : "Scroll to load more..."}</p>
        </div>
      )}

      {!hasMore && visibleProducts.length > 0 && (
        <div className="h-12 flex justify-center items-center mt-6">
          <p className="text-gray-400">No more products</p>
        </div>
      )}

      <GoToTopButton show={showScrollTop} />
    </div>
  );
};

export default Products;
