import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import type { Product } from "../type";

const useProductSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const allProducts: Product[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        if (searchInput.trim() === "") {
          setResults(allProducts); // Return all if input is empty
        } else {
          const filtered = allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchInput.toLowerCase())
          );
          setResults(filtered);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setResults([]);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [searchInput]);

  return {
    searchInput,
    setSearchInput,
    results,
    loading,
  };
};

export default useProductSearch;
