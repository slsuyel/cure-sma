import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';

import { GoToTop } from 'go-to-top-react';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <br />
      <br />

      <Outlet />
      <Footer />
      {/* <LikeBtn /> */}
      <GoToTop />
    </div>
  );
};

export default MainLayout;
