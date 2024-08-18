import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';

import Care from '../pages/Care/Care';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import ErrorPage from '../components/ErrorPage';
import Advocacy from '../pages/Advocacy/Advocacy';
import Donate from '../pages/Donate/Donate';
import RegiForm from '../pages/RegiForm/RegiForm';
import ScrollToTop from '../components/ScrollToTop';
import AboutSmaBd from '../pages/About/AboutSmaBd';
import PhotoGallery from '../pages/About/PhotoGallery';
import VideoGallery from '../pages/About/VideoGallery';
import AboutCureSMABd from '../pages/About/AboutCureSMABd';
import Executive from '../pages/About/Executive';
import Privacy from '../pages/About/Privacy';
import DataProtection from '../pages/About/DataProtection';
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ScrollToTop>
        <MainLayout />
      </ScrollToTop>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cure-sma-bd-about-sma',
        element: <AboutSmaBd />,
      },
      {
        path: '/cure-sma-bangladesh',
        element: <AboutCureSMABd />,
      },
      {
        path: '/executive-committee',
        element: <Executive />,
      },
      {
        path: '/privacy-policy-for-cure-sma-bd',
        element: <Privacy />,
      },
      {
        path: '/care',
        element: <Care />,
      },
      {
        path: '/cure-sma-bd-photos',
        element: <PhotoGallery />,
      },
      {
        path: '/cure-sma-bd-videos',
        element: <VideoGallery />,
      },
      {
        path: '/cure-sma-bd-blog',
        element: <Blog />,
      },
      {
        path: '/cure-sma-bd-contact',
        element: <Contact />,
      },
      {
        path: '/advocacy',
        element: <Advocacy />,
      },
      {
        path: '/donate-cure-sma-bd',
        element: <Donate />,
      },
      {
        path: '/data-protection-for-cure-sma-bd',
        element: <DataProtection />,
      },
      {
        path: '/cure-sma-bd-member-registration',
        element: <RegiForm />,
      },
    ],
  },
]);
