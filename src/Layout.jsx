import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import { getMeta } from "./db/meta";

export default function Layout() {
  useEffect(() => {
    getMeta(1);
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CookieBanner />
    </>
  );
}
