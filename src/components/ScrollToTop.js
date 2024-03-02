import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ScrollToTop() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    navigate(location.pathname);
  }, [location.pathname, navigate]);

  return null;
}

export default ScrollToTop;
