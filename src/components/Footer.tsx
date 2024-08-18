import { Link } from 'react-router-dom';
import logo from '/images/logo_CSMA.png';
const Footer = () => {
  return (
    <footer
      className="pt-4 bg-gradient-to-b from-green-600 to-black"
      style={{ borderRadius: '120px 0px 0px' }}
    >
      {/* footer body */}
      <div className="px-8 md:pt-14 pb-4 md:pb-14">
        <div className="flex flex-col sm:flex-row text-center lg:text-left md:justify-between">
          <div className="w-32 md:w-48 ml-28 md:ml-0">
            <img src={logo} alt="CURE SMA BANGLADESH Logo" />
          </div>
          <div>
            <h1 className="pb-3 text-xl font-semibold text-white">
              CURE SMA BANGLADESH
            </h1>
            <div className="text-lg font-light text-white">
              <p className="pb-2">
                154/6/4, Jhilkanan R/A, West Rampura, <br /> Dhaka-1219,
                Bangladesh
                <br />
              </p>
              <p className="pb-2">
                <Link
                  className="flex-1 text-decoration-none text-white hover:text-yColor"
                  to="tel:+8801841118486"
                >
                  +88 0184 111 84 86
                </Link>
              </p>
              <p>
                <Link
                  className="flex-1 text-decoration-none text-white hover:text-yColor"
                  to="e"
                >
                  info@curesmabangladesh.org
                </Link>
              </p>
              <Link to="mailto:info@curesmabangladesh.org" />
            </div>
          </div>
          <div className="mb-6 sm:mb-0 text-center ml-32 md:ml-0">
            <h1 className="flex pb-3 text-xl font-semibold text-white">
              FOLLOW US
            </h1>
            <div>
              <div className="mb-4 flex">
                <Link to="#">
                  <i className="fab social-a fa-facebook bg-white text-4xl py-1 px-[6px] rounded mr-[14px] hover:text-[#3b5998]" />
                </Link>
                <Link to="#">
                  <i className="fab social-a fa-linkedin bg-white text-4xl py-1 px-2 rounded hover:text-[#0A66C2]" />
                </Link>
              </div>
              <div className="flex">
                <Link to="#">
                  <i className="fab social-a fa-youtube bg-white text-4xl py-[6px] px-1 rounded mr-[14px] hover:text-[#CD201F]" />
                </Link>
                <Link to="#">
                  <i
                    className="fab social-a fa-instagram bg-white text-4xl py-1 px-1 rounded hover:text-orange-500"
                    style={{ padding: '6px 8px' }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="pb-3 text-xl font-semibold text-white">
              Get Involved
            </h1>
            <ul>
              <li>
                <Link
                  to="cure-sma-bd-member-registration"
                  className="text-lg font-light text-white text-decoration-none hover:text-yColor"
                >
                  Patient Registration
                </Link>
              </li>
              <li>
                <Link
                  to="donate-cure-sma-bd"
                  className="text-lg font-light text-white text-decoration-none hover:text-yColor "
                >
                  Donation
                </Link>
              </li>
              <li>
                <Link
                  to="#about-us"
                  className="text-lg font-light text-white text-decoration-none hover:text-yColor"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#patient-history"
                  className="text-lg font-light text-white text-decoration-none hover:text-yColor"
                >
                  Patient History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <span>
          <hr className="h-3" />
        </span>
        <div className="px-8 text-base pb-4 pt-2 flex justify-between text-center text-white mx-auto">
          <div>
            <p>Copyright © 2024 Code Cursor</p>
          </div>
          <div>
            <p>
              <Link
                className="text-decoration-none text-white hover:text-yColor"
                to="privacy-policy-for-cure-sma-bd"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
          <div>
            <p>
              Developed by:{' '}
              <Link
                className="text-decoration-none text-white hover:text-yColor"
                to="http://www.codecursor.com"
                target="_blank"
              >
                Code Cursor
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
