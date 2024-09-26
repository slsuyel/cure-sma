import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';

import { GoToTop } from 'go-to-top-react';
import Header from '../components/Header';
import SocialShare from '../components/SocialShare';

const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <br />
      <br />
      <SocialShare />
      <div className="max-w-[1440px] mx-auto">
        {' '}
        <Outlet />
      </div>
      <Footer />
      {/* <LikeBtn /> */}
      <GoToTop />
    </div>
  );
};

export default MainLayout;
