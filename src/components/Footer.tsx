import logo from "../assets/photos/logo-png-shadow.png";
const Footer = () => {
  return (
    <section
      className="py-4 fffffffffff"
      style={{ borderRadius: "120px 0px 0px 0px" }}
    >
      <div className=" pt-5">
        <div className="row mx-auto  border-bottom pb-5">
          <div className="align-items-center col-md-2 d-flex justify-content-center my-2">
            <img width={160} src={logo} alt="" />
          </div>

          <div className="col-md-4 my-2 ">
            <h4 className="font-weight-bold text-light fs-2">
              CURE SMA BANGLADESH
            </h4>
            <div className="fw-medium">
              <p className="mb-0 fs-5 text-white ">
                <strong />
                154/6/4, Jhilkanan R/A, West Rampura, Dhaka-1219, Bangladesh
              </p>
              <p className="my-3 fs-5 text-white ">
                <strong>Tel: </strong>+88 0184 111 84 86
              </p>
              <p className="mb-0 fs-5 text-white ">
                <a className="text-white social-a" href="">
                  info@curesmabangladesh.org
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-3 my-2 ">
            {" "}
            <h4 className="text-white fs-1 mb-3">
              <strong>Follow Us</strong>
            </h4>
            <div>
              <div className="d-flex gap-2 mb-1">
                {" "}
                <i className="fab social-a fa-facebook bg-white  fs-1 p-2 mb-1 rounded "></i>
                <i className="fab social-a fa-linkedin bg-white  fs-1 p-2 mb-1 rounded "></i>
              </div>
              <div className="d-flex gap-2 mb-1">
                <i className="align-items-center bg-white d-flex fa-youtube fab social-a fs-2 mb-1 p-2 rounded"></i>
                <i
                  style={{ padding: "7px 10px" }}
                  className="fab social-a fa-instagram bg-white  fs-1 mb-1 rounded "
                ></i>
              </div>
            </div>
          </div>

          <div className="col-md-3 my-2  cstmFoterStyle">
            <h4 className="text-white fs-1">
              <strong>Get Involved</strong>
            </h4>
            <ul className="list-unstyled text-white fw-medium fs-5">
              <li>
                <a
                  href="#patient-registration"
                  className="text-white text-decoration-none social-a"
                >
                  Patient Registration
                </a>
              </li>
              <li>
                <a
                  href="#donation"
                  className="text-white text-decoration-none social-a"
                >
                  Donation
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="text-white text-decoration-none social-a"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#patient-history"
                  className="text-white text-decoration-none social-a"
                >
                  Patient History
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="fs-5 fw-medium mt-2 row text-center text-white mx-auto ">
          <div className="col-md-4">
            <p>Copyright © 2024 curesmabangladesh.org</p>
          </div>
          <div className="col-md-4">
            <p>
              <a className="text-decoration-none text-white social-a" href="">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Developed by:{" "}
              <a
                className="text-decoration-none text-white social-a"
                href="http://www.codecursor.com"
              >
                Code Cursor
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
