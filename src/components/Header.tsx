const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-[9999]">
        {/* top header section*/}
        <div className="flex md:flex lg:flex-row justify-between md:justify-between md:h-12 items-center bg-pColor px-2 md:px-8 lg:px-8">
          <div className="flex justify-center text-lg text-center ml-6 md:ml-5 lg:ml-0">
            <a
              className="text-decoration-none pr-4 md:pr-10 text-white hover:text-yColor"
              href="mailto:info@curesmabangladesh.org"
            >
              <i className="fas fa-envelope" />
              <span className="hidden lg:inline">
                &nbsp;info@curesmabangladesh.org
              </span>
            </a>
            <a
              className="flex-1 text-decoration-none text-white hover:text-yColor"
              href="tel:+8801841118486"
            >
              <i className="fas fa-phone" />
              <span className="hidden md:inline">&nbsp;+88 0184 111 84 86</span>
            </a>
          </div>
          <div className="flex justify-center text-base text-center items-center md:mt-0">
            {/* Uncomment this line if needed for Google Translate */}
            {/* <div id="google_translate_element"></div> */}
            <a
              className="flex text-decoration-none text-white border-x-2 p-2 md:p-3"
              href="#"
            >
              Language
            </a>
            <a
              className="flex text-decoration-none text-white p-2 md:p-3 hover:text-yColor"
              href="cure-sma-bd-blog.html"
            >
              Blog
            </a>
            <a
              className="flex text-decoration-none text-white border-x-2 p-2 md:p-3 hover:text-yColor"
              href="cure-sma-bd-member-registration.html"
            >
              Registration
            </a>
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
                    <a href="index.html" className="hover:text-pColor">
                      Home
                    </a>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <a href="#" className="hover:text-pColor">
                      About <i className="fa-solid fa-angle-down" />
                    </a>
                    <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                      <li>
                        <a
                          href="cure-sma-bd-about-sma.html"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o About SMA
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o About Cure SMA Bangladesh
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                        >
                          o Executive Committee
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <a href="#" className="hover:text-pColor">
                      Health Care Team <i className="fa-solid fa-angle-down" />
                    </a>
                    <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                      <li>
                        <a
                          href="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Dr. Mizanur Rahman
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o - - - - - - - - - -
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <a href="#" className="hover:text-pColor">
                      Care <i className="fa-solid fa-angle-down" />
                    </a>
                    <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                      <li>
                        <a
                          href="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o General Care Guideline
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Care for Winter Season
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                        >
                          o Nutrition
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <a href="#" className="hover:text-pColor">
                      Support <i className="fa-solid fa-angle-down" />
                    </a>
                    <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-80 p-2 shadow-lg">
                      <li>
                        <a
                          href="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Multidisciplinary Clinic
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o About multidisciplinary Clinic
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Address of multidisciplinary Clinic
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                        >
                          o Picture of multidisciplinary Clinic
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                        >
                          o Conference/Meetings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                        >
                          o Awareness Activities
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <a href="#" className="hover:text-pColor">
                      Gallery <i className="fa-solid fa-angle-down" />
                    </a>
                    <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                      <li>
                        <a
                          href="cure-sma-bd-photos.html"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Photos
                        </a>
                      </li>
                      <li>
                        <a
                          href="cure-sma-bd-videos.html"
                          className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                        >
                          o Videos
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                    <a
                      href="cure-sma-bd-contact.html"
                      className="hover:text-pColor"
                    >
                      Contact{' '}
                    </a>
                  </li>
                </ul>
              </div>
              {/* site logo */}
              <div>
                <a href="#">
                  <img
                    className="w-24 md:max-w-32"
                    src="./src/images/logo_CSMA.png"
                    alt="Cure SMA Bangladesh"
                  />
                </a>
              </div>
            </div>
            {/* large display menu */}
            <div className="navbar-center hidden lg:flex font-poppins px-5">
              <ul className="flex space-x-4 px-1 lg:text-base gap-6 lg:gap-0 xl:gap-6">
                <li>
                  <a href="index.html" className="hover:text-pColor">
                    Home
                  </a>
                </li>
                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <a href="#" className="hover:text-pColor">
                    About <i className="fa-solid fa-angle-down" />
                  </a>
                  <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                    <li>
                      <a
                        href="cure-sma-bd-about-sma.html"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o About SMA
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o About Cure SMA Bangladesh
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                      >
                        o Executive Committee
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <a href="#" className="hover:text-pColor">
                    Health Care Team <i className="fa-solid fa-angle-down" />
                  </a>
                  <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                    <li>
                      <a
                        href="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Dr. Mizanur Rahman
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o - - - - - - - - - -
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <a href="#" className="hover:text-pColor">
                    Care <i className="fa-solid fa-angle-down" />
                  </a>
                  <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                    <li>
                      <a
                        href="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o General Care Guideline
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Care for Winter Season
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                      >
                        o Nutrition
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <a href="#" className="hover:text-pColor">
                    Support <i className="fa-solid fa-angle-down" />
                  </a>
                  <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-80 p-2 shadow-lg">
                    <li>
                      <a
                        href="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Multidisciplinary Clinic
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o About multidisciplinary Clinic
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Address of multidisciplinary Clinic
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                      >
                        o Picture of multidisciplinary Clinic
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                      >
                        o Conference/Meetings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 rounded-xl hover:bg-pColor hover:text-white"
                      >
                        o Awareness Activities
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <a href="#" className="hover:text-pColor">
                    Gallery <i className="fa-solid fa-angle-down" />
                  </a>
                  <ul className="absolute overflow-hidden left-0 hidden group-hover:block bg-pColor bg-opacity-75 rounded-md border-2 border-pColor text-white text-sm w-72 p-2 shadow-lg">
                    <li>
                      <a
                        href="cure-sma-bd-photos.html"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Photos
                      </a>
                    </li>
                    <li>
                      <a
                        href="cure-sma-bd-videos.html"
                        className="block rounded-xl px-4 py-2 hover:bg-pColor hover:text-white"
                      >
                        o Videos
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative group hover:translate-y-1 hover:duration-[2s] ">
                  <a
                    href="cure-sma-bd-contact.html"
                    className="hover:text-pColor"
                  >
                    Contact{' '}
                  </a>
                </li>
              </ul>
            </div>
            {/* button */}
            <div className="flex gap-4 lg:gap-1 xl:gap-4 2xl:gap-4">
              <div>
                <a
                  className="pBtn text-sm md:text-xl"
                  href="cure-sma-bd-member-registration.html"
                >
                  <i className="fa-solid fa-box" />{' '}
                  <span className="hidden md:inline lg:hidden xl:inline">
                    Patient
                  </span>{' '}
                  <span className="inline lg:hidden xl:inline">
                    Registration
                  </span>
                </a>
              </div>
              <div>
                <a className="pBtn bg-rColor text-white " href="#">
                  <i className="fa-solid fa-heart-circle-check" />{' '}
                  <span className="text-base md:text-xl hidden md:inline lg:hidden xl:inline">
                    Donate
                  </span>
                </a>
              </div>
              {/* modal form */}
              <dialog id="Gdonate_modal" className="modal">
                <div className="modal-box bg-slate-200 max-w-full md:max-w-4xl lg:max-w-3xl p-6 mx-auto">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="bg-white p-6 border-4 border-pColor rounded-lg">
                    <div className="max-w-full flex justify-center mb-4">
                      <img
                        src="./src/images/logo_CSMA.png"
                        alt="Cure SMA Bangladesh"
                        className="w-24 h-auto"
                      />
                    </div>
                    <h3 className="text-xl pt-3 text-green-600 text-center font-bold">
                      GENERAL DONATION FORM
                    </h3>
                    <p className="text-center font-bold mb-5">
                      Thank you for donating to our cause
                    </p>
                    <div id="Gdonateform">
                      <form method="post" action="/submit-donation">
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col md:flex-row md:gap-4">
                            <div className="flex-1">
                              <label
                                htmlFor="Gdonateform_firstname"
                                className="label text-sm"
                              >
                                First Name
                              </label>
                              <input
                                id="Gdonateform_firstname"
                                type="text"
                                placeholder="First Name"
                                required
                                className="input border-2 border-green-400 w-full"
                              />
                            </div>
                            <div className="flex-1 mt-4 md:mt-0">
                              <label
                                htmlFor="Gdonateform_lastname"
                                className="label text-sm"
                              >
                                Last Name
                              </label>
                              <input
                                id="Gdonateform_lastname"
                                type="text"
                                placeholder="Last Name"
                                required
                                className="input border-2 border-green-400 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row md:gap-4">
                            <div className="flex-1">
                              <label
                                htmlFor="Gdonateform_contactno"
                                className="label text-sm"
                              >
                                Contact Number
                              </label>
                              <input
                                id="Gdonateform_contactno"
                                type="tel"
                                placeholder="+88 01234-567890"
                                required
                                className="input border-2 border-green-400 w-full"
                              />
                            </div>
                            <div className="flex-1 mt-4 md:mt-0">
                              <label
                                htmlFor="Gdonateform_email"
                                className="label text-sm"
                              >
                                Email
                              </label>
                              <input
                                id="Gdonateform_email"
                                type="email"
                                placeholder="address@email.com"
                                required
                                className="input border-2 border-green-400 w-full"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="Gdonateform_amount"
                              className="label text-sm"
                            >
                              How much do you want to donate?
                            </label>
                            <div className="flex flex-col md:flex-row">
                              <select
                                id="Gdonateform_amount"
                                required
                                className="input border-2 border-r-0 rounded-r-none border-green-400 md:w-1/3"
                              >
                                <option>Select</option>
                                <option value="usd">$ USD</option>
                                <option value="bdt">৳ BDT</option>
                              </select>
                              <input
                                id="Gdonateform_amount"
                                type="text"
                                placeholder="Donate Amount"
                                required
                                className="input border-2 border-l-0 rounded-l-none border-green-400 md:w-2/3 mt-2 md:mt-0"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="Gdonateform_address"
                              className="label text-sm"
                            >
                              Address
                            </label>
                            <input
                              id="Gdonateform_address"
                              type="text"
                              placeholder="Address line 1"
                              required
                              className="input border-2 border-green-400 w-full"
                            />
                            <input
                              id="Gdonateform_address"
                              type="text"
                              placeholder="Address line 2"
                              className="input border-2 border-green-400 w-full mt-2"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="Gdonateform_purpose"
                              className="label text-sm"
                            >
                              Purpose of Donation
                            </label>
                            <input
                              id="Gdonateform_purpose"
                              type="text"
                              placeholder="Purpose of Donation"
                              className="input border-2 border-green-400 w-full"
                            />
                          </div>
                          <div className="flex flex-col md:flex-row gap-4 font-bold">
                            <a
                              href="privacy-policy-for-cure-sma-bd.html"
                              className="text-sm text-blue-800 underline"
                            >
                              Privacy Policy
                            </a>
                            <a
                              href="data-protection-for-cure-sma-bd.html"
                              className="text-sm text-blue-800 underline"
                            >
                              Data Protection Statement
                            </a>
                          </div>
                          <div>
                            <h1 className="text-center mt-4">Captcha</h1>
                          </div>
                          <div className="flex items-center mt-2">
                            <input
                              type="checkbox"
                              id="Gdonateform_agree"
                              name="Gdonateform_agree"
                              required
                              defaultValue="agree"
                              className="mr-2"
                            />
                            <label
                              htmlFor="Gdonateform_agree"
                              className="text-sm"
                            >
                              I agree to make a donation, and proceed to pay.
                            </label>
                          </div>
                          <div className="text-center mt-4">
                            <a href="redirect.html">
                              <input
                                type="submit"
                                className="pBtn bg-pColor text-white hover:bg-yColor hover:text-pColor"
                                defaultValue="Donation Submit"
                              />
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
