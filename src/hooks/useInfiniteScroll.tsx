import { useEffect, useRef } from "react";

const useInfiniteScroll = (
  callback: () => void,
  options: IntersectionObserverInit = { threshold: 1.0 }
) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [callback, options]);

  return loaderRef;
};

export default useInfiniteScroll;
