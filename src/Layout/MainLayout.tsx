import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LikeBtn from "../components/LikeBtn";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <br />

      <Outlet />
      <Footer />
      <LikeBtn />
    </div>
  );
};

export default MainLayout;
