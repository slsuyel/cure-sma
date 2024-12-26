/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from '/images/logo_CSMA.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DonateModal from './DonateModal';

interface SubChildItem {
  label: string;
  to: string;
}

interface SubMenuItem {
  label: string;
  to: string;
  subChild?: SubChildItem[];
}

interface HeaderItem {
  label: string;
  to: string;
  subMenu: SubMenuItem[];
}

const headerData: HeaderItem[] = [
  {
    label: 'Home',
    to: '/',
    subMenu: [],
  },
  {
    label: 'About',
    to: '#',
    subMenu: [
      { label: 'About SMA', to: 'cure-sma-bd-about-sma' },
      { label: 'About Cure SMA Bangladesh', to: '/cure-sma-bangladesh' },
      { label: 'Executive Committee', to: '/executive-committee' },
    ],
  },
  {
    label: 'Health Care Team',
    to: '/cure-sma-bd-health-care-team',
    subMenu: [],
  },
  {
    label: 'Care',
    to: '#',
    subMenu: [
      {
        label: 'General Care Guideline',
        to: '/cure-sma-bd-general-care-guideline',
      },
      {
        label: 'Care for Winter Season',
        to: '/cure-sma-bd-care-for-winter-season',
      },
      { label: 'Nutrition', to: '/cure-sma-bd-care-for-nutrition-care' },
    ],
  },
  {
    label: 'Support',
    to: '#',
    subMenu: [
      {
        label: 'Multidisciplinary Clinic',
        to: '#',
        subChild: [
          {
            label: 'About multidisciplinary Clinic',
            to: '/support/about-multidisciplinary',
          },
          {
            label: 'Address of multidisciplinary Clinic',
            to: '/support/cure-sma-bd-address-multidisciplinary-clinic',
          },
          {
            label: 'Picture of multidisciplinary Clinic',
            to: '/support/cure-sma-bd-picture-multidisciplinary-clinic',
          },
        ],
      },
      {
        label: 'Conference/Meetings',
        to: '/conference-meetings',
      },
      { label: 'Awareness Activities', to: 'awareness-activities' },
    ],
  },
  {
    label: 'Gallery',
    to: '#',
    subMenu: [
      { label: 'Photos', to: 'cure-sma-bd-photos' },
      { label: 'Videos', to: 'cure-sma-bd-videos' },
    ],
  },
  {
    label: 'Contact',
    to: 'cure-sma-bd-contact',
    subMenu: [],
  },
];

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[999] bg-pColor">
        <div className="max-w-[1440px] mx-auto flex md:flex lg:flex-row justify-between md:justify-between md:h-12 items-center px-2 md:px-8 lg:px-8">
          <div className="flex justify-center text-lg text-center ml-6 md:ml-5 lg:ml-0">
            <Link
              className="text-decoration-none pr-4 md:pr-10 text-white hover:text-yColor"
              to="mailto:info@curesmabangladesh.org"
            >
              <i className="fas fa-envelope" />
              <span className="hidden lg:inline">
                &nbsp;info@curesmabangladesh.org
              </span>
            </Link>
            <Link
              className="flex-1 text-decoration-none text-white hover:text-yColor"
              to="tel:+8801841118486"
            >
              <i className="fas fa-phone" />
              <span className="hidden md:inline">&nbsp;+88 0184 111 84 86</span>
            </Link>
          </div>
          <div className="flex justify-center text-base text-center items-center md:mt-0">
            <Link
              className="flex text-decoration-none text-white border-x-2 p-2 md:p-3"
              to="#"
            >
              Language
            </Link>
            <Link
              className="flex text-decoration-none text-white p-2 md:p-3 hover:text-yColor"
              to="cure-sma-bd-blog"
            >
              Blog
            </Link>
            <Link
              className="flex text-decoration-none text-white border-x-2 p-2 md:p-3 hover:text-yColor"
              to="cure-sma-bd-member-registration"
            >
              Registration
            </Link>
            <i className="fa-solid fa-hand-holding-medical text-white text-3xl pl-2 md:pl-3" />
          </div>
        </div>

        {/* Navbar Section */}
        <nav className="bg-lime-200">
          <div className="flex flex-row justify-between max-w-[1440px] mx-auto py-0 lg:px-8 md:px-8 font-poppins text-pfont font-medium text-base shadow-lg shadow-white/40 navbar bg-pblack bg-opacity-55">
            <div>
              {/* Mobile Menu */}
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-lime-200 rounded-box w-80 bg-pblack bg-opacity-55 border-r-2 border-pred shadow-lg shadow-pColor/40"
                >
                  {headerData.map((item, index) => (
                    <li
                      key={index}
                      className="relative group hover:translate-y-1 hover:duration-[2s]"
                    >
                      <Link to={item.to} className="hover:text-pColor">
                        {item.label}{' '}
                        {item.subMenu.length > 0 && (
                          <i className="fa-solid fa-angle-down" />
                        )}
                      </Link>
                      {item.subMenu.length > 0 && (
                        <ul className="absolute left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm  p-2 shadow-lg  text-nowrap">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.to}
                                className="block px-4 py-2 hover:bg-pColor hover:text-white  text-nowrap"
                              >
                                {subItem.label}
                              </Link>
                              {/* Check for subChild and render them */}
                              {subItem?.subChild && (
                                <ul className="pl-4 bg-opacity-50 mt-2">
                                  {subItem?.subChild?.map(
                                    (subChildItem: any, subChildIndex: any) => (
                                      <li key={subChildIndex}>
                                        <Link
                                          to={subChildItem.to}
                                          className="block rounded-xl  py-2 hover:bg-pColor hover:text-white text-nowrap"
                                        >
                                          <i className="fa-solid fa-check border border-white rounded p-1"></i>{' '}
                                          {subChildItem.label}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Site Logo */}
              <div>
                <Link to="/">
                  <img
                    className=" w-20 md:w-24 md:max-w-32"
                    src={logo}
                    alt="Cure SMA Bangladesh"
                  />
                </Link>
              </div>
            </div>

            {/* Large Display Menu */}
            <div className="navbar-center hidden lg:flex font-poppins px-5">
              <ul className="flex space-x-4 px-1 lg:text-base gap-6 lg:gap-0 xl:gap-6">
                {headerData.map((item, index) => (
                  <li
                    key={index}
                    className="relative group hover:translate-y-1 hover:duration-[2s]"
                  >
                    <Link to={item.to} className="hover:text-pColor">
                      {item.label}{' '}
                      {item.subMenu.length > 0 && (
                        <i className="fa-solid fa-angle-down" />
                      )}
                    </Link>
                    {item.subMenu.length > 0 && (
                      <ul className="absolute overflow-hidden left-0 hidden group-hover:block text-nowrap bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm  p-2 shadow-lg">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.to}
                              className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                            >
                              {subItem.label}
                            </Link>
                            {/* Render subChild items */}
                            {subItem.subChild && (
                              <ul className="pl-4 bg-opacity-50 mt-2">
                                {subItem.subChild.map(
                                  (subChildItem, subChildIndex) => (
                                    <li key={subChildIndex}>
                                      <Link
                                        to={subChildItem.to}
                                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white text-nowrap"
                                      >
                                        <i className="fa-solid fa-check border border-white rounded p-1"></i>{' '}
                                        {subChildItem.label}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button Section */}
            <div className="flex gap-4 lg:gap-1 xl:gap-4 2xl:gap-4">
              <div>
                <Link
                  className="bg-yellow-400 pBtn p-1 text-sm md:text-xl flex items-center md:gap-2"
                  to="cure-sma-bd-member-registration"
                >
                  <i className="fa-solid fa-box  hidden md:block" />

                  <span className=" text-base"> Patient Registration</span>
                </Link>
              </div>

              <div>
                <button
                  onClick={() => setModal(true)}
                  className="pBtn bg-red-500 text-white "
                >
                  <i className="fa-solid fa-heart-circle-check" />{' '}
                  <span className="text-base md:text-xl hidden md:inline lg:hidden xl:inline">
                    Donate
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Donate Modal */}
      {modal && <DonateModal closeModal={() => setModal(false)} />}
    </>
  );
};

export default Header;
