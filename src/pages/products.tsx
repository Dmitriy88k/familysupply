import ProductCard from "../components/productCard";
import GoToTopButton from "../components/goToTopButton";
import useProductPagination from "../hooks/useProductPagination";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useScrollToTop from "../hooks/useScrollToTop";

const Products = () => {
  const { products, fetchProducts, loading, hasMore } = useProductPagination();
  const showScrollTop = useScrollToTop(1200);
  const loaderRef = useInfiniteScroll(() => {
    if (hasMore && !loading) {
      fetchProducts();
    }
  });

  return (
    <div className="bg-[#DCEEF9] min-h-[80vh] px-4 py-10">
      <div className="w-[70%] sm:w-[92%] mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMore && (
        <div ref={loaderRef} className="h-12 flex justify-center items-center mt-6 w-full mx-auto">
          <p className="text-gray-500">{loading ? "Loading more products..." : "Scroll to load more..."}</p>
        </div>
      )}

      {!hasMore && products.length > 0 && (
        <div className="h-12 flex justify-center items-center mt-6">
          <p className="text-gray-400">No more products</p>
        </div>
      )}

      <GoToTopButton show={showScrollTop} />
    </div>
  );
};

export default Products;
