import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div
      className="d-flex justify-content-between px-3"
      style={{ background: "#08a268" }}
    >
      <div className=" d-flex fw-semibold gap-3 fs-5 justify-content-start text-white">
        <div className="d-flex gap-1 align-items-center ">
          <i className="fas fa-envelope mt-1"></i>
          {/* Updated email to use mailto link */}
          <a
            className="d-none d-sm-flex text-decoration-none  text-white "
            href="mailto:info@curesmabangladesh.org"
          >
            info@curesmabangladesh.org
          </a>
        </div>
        <div className="d-flex gap-1 align-items-center ">
          <i className="fas fa-phone"></i>
          {/* Updated phone number to use tel link */}
          <a
            className="d-none d-sm-flex text-decoration-none  text-white "
            href="tel:+8801841118486"
          >
            +88 0184 111 84 86
          </a>
        </div>
      </div>
      <div className="align-items-center d-flex gap-2 me-2">
        <div className="border-2 border-end border-start px-2 py-2 ">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle bg-transparent border-0"
              type="button"
              id="languageDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Language
            </button>
            <div className="dropdown-menu" aria-labelledby="languageDropdown">
              <a className="dropdown-item" href="#" data-value="English">
                English
              </a>
              <a className="dropdown-item" href="#" data-value="Bangla">
                Bangla
              </a>
            </div>
          </div>
        </div>
        <Link
          className="fs-6 fw-semibold text-decoration-none text-white pe-3"
          to={"/"}
        >
          Contact
        </Link>
        <div>
          <i className="fa-shopping-cart fas fs-3 text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
