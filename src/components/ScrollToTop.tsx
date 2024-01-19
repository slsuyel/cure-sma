import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

type TScrollTop = {
  children: ReactNode;
};

const ScrollToTop = ({ children }: TScrollTop) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;
