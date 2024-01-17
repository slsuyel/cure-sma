const Footer = () => {
  return (
    <section
      className="py-4"
      style={{ background: "#222", borderRadius: "0px 120px 0px 0px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5" style={{ color: "#ccc" }}>
            <h4 className="font-weight-bold text-light">CURE SMA BANGLADESH</h4>
            <div className="">
              <p className="">
                {" "}
                <strong />
                154/6/4, Jhilkanan R/A, West Rampura, Dhaka-1219, Bangladesh
              </p>
              <p className="">
                {" "}
                <strong>Tel: </strong>+88 0184 111 84 86
              </p>
              <p className="">
                {" "}
                <strong>Fax: </strong>+88 0184 111 84 86
              </p>
            </div>
          </div>
          <div className="col-md-3 cstmFoterStyle">
            <h5 className="text-white">
              <strong>COMPANY</strong>
            </h5>
            <ul className="nav-item p-0">
              <a href="https://curesmabangladesh.org/#" className="nav-link">
                ➧ About Us
              </a>
              <a href="https://curesmabangladesh.org/#" className="nav-link">
                ➧ Contact Us
              </a>
              <a href="https://curesmabangladesh.org/#" className="nav-link">
                ➧ Gallary
              </a>
              <a href="https://curesmabangladesh.org/#" className="nav-link">
                ➧ Video Gallary
              </a>
              <a href="https://curesmabangladesh.org/#" className="nav-link">
                ➧ Press
              </a>
            </ul>
          </div>
          <div className="col-md-4 cstmFoterStyle">
            <h5 className="text-white">
              <strong>HELP</strong>
            </h5>
            <ul className="nav-item p-0">
              <a href="https://curesmabangladesh.org/#" className="nav-link">
                ➧ <strong> Email : </strong>info@curesmabangladesh.org
              </a>
              <a href="https://curesmabangladesh.org/" className="nav-link">
                ➧ <strong> Web : </strong> www.curesmabangladesh.org
              </a>
            </ul>
            <div className="row">
              <div className="col styleFollowUs">
                <h5 className="text-uppercase text-white">
                  <strong>Follow Us</strong>
                </h5>
                <div className="social-buttons py-3">
                  <a
                    href="https://www.facebook.com/CureSMABangladesh"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.facebook.com/CureSMABangladesh"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.facebook.com/CureSMABangladesh"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.facebook.com/CureSMABangladesh"
                    target="_blank"
                  >
                    <i className="fab fa-youtube" />
                  </a>
                  <a
                    href="https://www.facebook.com/CureSMABangladesh"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-center">
            <h5 className="text-light font-weight-bold">
              CURE SMA BANGLADESH © 2023{" "}
            </h5>
            <hr />
            <p className="text-light">
              Developed by:
              <a href="" target="_blank" className="text-light">
                {" "}
                <em className="font-weight-bold"> SoftWeb System </em>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
