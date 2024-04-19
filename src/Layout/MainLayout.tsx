import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import LikeBtn from "../components/LikeBtn";
import { GoToTop } from "go-to-top-react";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
const MainLayout = () => {
  return (
    <div>
      <TopBar />

      <Header />
      <br />
      <br />

      <Outlet />
      <Footer />
      <LikeBtn />
      <GoToTop />
    </div>
  );
};

export default MainLayout;
