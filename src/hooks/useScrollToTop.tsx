import { useEffect, useState, useRef } from "react";

const useScrollToTop = (threshold = 1200) => {
  const [show, setShow] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(currentScrollY > threshold && currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return show;
};

export default useScrollToTop;