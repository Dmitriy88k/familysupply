import { useEffect, useState, useRef, useCallback } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  type QueryDocumentSnapshot,
  type DocumentData,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import type { Product } from "../type";

const useProductPagination = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const didFetchRef = useRef(false);

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

      // Prevent duplicates by checking existing product IDs
      setProducts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const uniqueNew = productsList.filter((p) => !existingIds.has(p.id));
        return [...prev, ...uniqueNew];
      });

      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      setLastDoc(lastVisible);

      if (snapshot.docs.length < 12) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  }, [lastDoc, loading, hasMore]);

  useEffect(() => {
    if (!didFetchRef.current) {
      fetchProducts();
      didFetchRef.current = true;
    }
  }, [fetchProducts]);

  return {
    products,
    loading,
    hasMore,
    fetchProducts,
  };
};

export default useProductPagination;
