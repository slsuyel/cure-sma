import logo from '/images/logo_CSMA.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DonateModal from './DonateModal';

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[999]">
        <div className="flex md:flex lg:flex-row justify-between md:justify-between md:h-12 items-center bg-pColor px-2 md:px-8 lg:px-8">
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
        {/* navbar section*/}
        <nav>
          <div className="flex flex-row justify-between bg-lime-200 py-0 lg:px-8 md:px-8 font-poppins text-pfont font-medium text-base shadow-lg shadow-white/40 navbar bg-pblack bg-opacity-55">
            <div>
              {/* mobile menu */}
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
                  <li>
                    <Link to="/" className="hover:text-pColor">
                      Home
                    </Link>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <Link to="#" className="hover:text-pColor">
                      About <i className="fa-solid fa-angle-down" />
                    </Link>
                    <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                      <li>
                        <Link
                          to="cure-sma-bd-about-sma"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o About SMA
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cure-sma-bangladesh"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o About Cure SMA Bangladesh
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                        >
                          o Executive Committee
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <Link
                      to="cure-sma-bd-health-care-team"
                      className="hover:text-pColor"
                    >
                      Health Care Team
                    </Link>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <Link to="#" className="hover:text-pColor">
                      Care <i className="fa-solid fa-angle-down" />
                    </Link>
                    <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                      <li>
                        <Link
                          to="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o General Care Guideline
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Care for Winter Season
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                        >
                          o Nutrition
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <Link to="#" className="hover:text-pColor">
                      Support <i className="fa-solid fa-angle-down" />
                    </Link>
                    <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-80 p-2 shadow-lg">
                      <li>
                        <Link
                          to="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Multidisciplinary Clinic
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o About multidisciplinary Clinic
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Address of multidisciplinary Clinic
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                        >
                          o Picture of multidisciplinary Clinic
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                        >
                          o Conference/Meetings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                        >
                          o Awareness Activities
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <Link to="#" className="hover:text-pColor">
                      Gallery <i className="fa-solid fa-angle-down" />
                    </Link>
                    <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                      <li>
                        <Link
                          to="cure-sma-bd-photos"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Photos
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="cure-sma-bd-videos"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Videos
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <Link
                      to="cure-sma-bd-contact"
                      className="hover:text-pColor"
                    >
                      Contact{' '}
                    </Link>
                  </li>
                </ul>
              </div>
              {/* site logo */}
              <div>
                <Link to="/">
                  <img
                    className="w-24 md:max-w-32"
                    src={logo}
                    alt="Cure SMA Bangladesh"
                  />
                </Link>
              </div>
            </div>
            {/* large display menu */}
            <div className="navbar-center hidden lg:flex font-poppins px-5">
              <ul className="flex space-x-4 px-1 lg:text-base gap-6 lg:gap-0 xl:gap-6">
                <li>
                  <Link to="/" className="hover:text-pColor">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cure-sma-bd-health-care-team"
                    className="hover:text-pColor"
                  >
                    Health Care Team
                  </Link>
                </li>

                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <Link to="#" className="hover:text-pColor">
                    About <i className="fa-solid fa-angle-down" />
                  </Link>
                  <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                    <li>
                      <Link
                        to="cure-sma-bd-about-sma"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o About SMA
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cure-sma-bangladesh"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o About Cure SMA Bangladesh
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/executive-committee"
                        className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                      >
                        o Executive Committee
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <Link to="#" className="hover:text-pColor">
                    Care <i className="fa-solid fa-angle-down" />
                  </Link>
                  <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                    <li>
                      <Link
                        to="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o General Care Guideline
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Care for Winter Season
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                      >
                        o Nutrition
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <Link to="#" className="hover:text-pColor">
                    Support <i className="fa-solid fa-angle-down" />
                  </Link>
                  <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-80 p-2 shadow-lg">
                    <li>
                      <Link
                        to="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Multidisciplinary Clinic
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o About multidisciplinary Clinic
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Address of multidisciplinary Clinic
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                      >
                        o Picture of multidisciplinary Clinic
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                      >
                        o Conference/Meetings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                      >
                        o Awareness Activities
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <Link to="#" className="hover:text-pColor">
                    Gallery <i className="fa-solid fa-angle-down" />
                  </Link>
                  <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                    <li>
                      <Link
                        to="cure-sma-bd-photos"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Photos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="cure-sma-bd-videos"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Videos
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <Link to="cure-sma-bd-contact" className="hover:text-pColor">
                    Contact{' '}
                  </Link>
                </li>
              </ul>
            </div>
            {/* button */}
            <div className="flex gap-4 lg:gap-1 xl:gap-4 2xl:gap-4">
              <div>
                <Link
                  className="bg-yellow-400 pBtn text-sm md:text-xl"
                  to="cure-sma-bd-member-registration"
                >
                  <i className="fa-solid fa-box" />{' '}
                  <span className="hidden md:inline lg:hidden xl:inline">
                    Patient
                  </span>{' '}
                  <span className="inline lg:hidden xl:inline">
                    Registration
                  </span>
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

      {modal && <DonateModal closeModal={() => setModal(false)} />}
    </>
  );
};

export default Header;
