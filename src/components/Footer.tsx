import logo from "../assets/Images/logocuresma.png";
const Footer = () => {
  return (
    <section
      className="py-4 fffffffffff"
      style={{ borderRadius: "120px 0px 0px 0px" }}
    >
      <div className=" pt-5 ">
        <div className="row mx-auto  border-bottom">
          <div className="col-md-3 my-2 ">
            <img width={150} src={logo} alt="" />
          </div>

          <div className="col-md-3 my-2 ">
            <h4 className="font-weight-bold text-light">CURE SMA BANGLADESH</h4>
            <div className="fw-medium">
              <p className="mb-0 text-white ">
                <strong />
                154/6/4, Jhilkanan R/A, West Rampura, Dhaka-1219, Bangladesh
              </p>
              <p className="mb-0 text-white ">
                <strong>Tel: </strong>+88 0184 111 84 86
              </p>
              <p className="mb-0 text-white ">
                {" "}
                <strong>Fax: </strong>+88 0184 111 84 86
              </p>
            </div>
          </div>

          <div className="col-md-3 my-2 ">
            {" "}
            <h4 className="text-white">
              <strong>Follow Us</strong>
            </h4>
            <div>
              <div className="d-flex gap-2 mb-1">
                {" "}
                <i className="fab fa-facebook bg-white  fs-1 p-2 mb-1 rounded "></i>
                <i className="fab fa-linkedin bg-white  fs-1 p-2 mb-1 rounded "></i>
              </div>
              <div className="d-flex gap-2 mb-1">
                <i className="align-items-center bg-white d-flex fa-youtube fab fs-2 mb-1 p-2 rounded"></i>
                <i className="fab fa-instagram bg-white  fs-1 p-2 mb-1 rounded "></i>
              </div>
            </div>
          </div>

          <div className="col-md-3 my-2  cstmFoterStyle">
            <h4 className="text-white">
              <strong>Get Involved</strong>
            </h4>

            <ul className="list-unstyled text-white fw-medium">
              <li>Patient Registration</li>
              <li>Donation</li>
              <li> About Us</li>
              <li> Patient History</li>
            </ul>
          </div>
        </div>

        <div className="fs-5 fw-medium mt-2 row text-center text-white">
          <div className="col-md-4">
            <p>Copyright © 2024 curesmabangladesh.org</p>
          </div>
          <div className="col-md-4">
            <p>Privacy Policy</p>
          </div>
          <div className="col-md-4">
            <p>Developed by: Code Cursor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
