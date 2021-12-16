import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { Pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Pathname]);

  return null;
}
// use it if it is required
