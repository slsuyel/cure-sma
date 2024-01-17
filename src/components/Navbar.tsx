import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <b className="screen-overlay" />
      <div className="d-lg-none navbar navbar-light fixed-top bg-light py-3">
        <a className="navbar-brand p-0" href="/">
          <img
            src="https://curesmabangladesh.org/img/logocuresma.png"
            width={60}
            alt="CURE SMA Bangladesh"
          />
        </a>
        <a
          href="https://forms.gle/Pgx2wPUqE9ZFZm9o7"
          target="_blank"
          className="nav-link btn btn-sm btn-outline-secondary ml-auto mr-3"
        >
          {" "}
          {/* https://curesmabangladesh.org/icons/userlogin.svg */}
          Patient Register{" "}
          <img
            src="https://curesmabangladesh.org/icons/userlogin.svg"
            width={16}
          />{" "}
        </a>
        <button
          className="navbar-toggler navbar-light"
          style={{}}
          type="button"
          data-toggle="collapse"
          data-trigger="#navbar145"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>

      <nav
        id="navbar145"
        className="mobile-offcanvas navbar navbar-light navbar-expand-lg fixed-top mb-2 px-md-5"
        style={{ background: "rgb(255, 255, 255)" }}
      >
        <div className="offcanvas-header">
          <div className="row p-1">
            <Link to="/">
              <button className="navbar-toggler border-0 mt-0">
                <img
                  src="https://curesmabangladesh.org/img/logocuresma.png"
                  className=""
                  width={50}
                  alt="Brand Logo"
                />
              </button>
            </Link>
            <div className="d-md-none ml-auto">
              <button className="btn btn-danger btn-close text-right mt-2 mr-2">
                ×
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav d-none d-sm-block">
          <Link id="navbar1" className="fixed-top" to="/">
            <img
              src="https://curesmabangladesh.org/img/logocuresma.png"
              id="logo"
              alt="Logo"
              style={{ width: 80 }}
            />
          </Link>
        </ul>
        <ul
          id="navbar144"
          className="navbar-nav ml-auto "
          style={{ height: 50, padding: 0, background: "none" }}
        >
          <li className="nav-item mainNav">
            <Link className="nav-link pb-0 active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item mainNav">
            <Link className="nav-link pb-0" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item mainNav">
            <Link className="nav-link pb-0" to="/care">
              Care &amp; Support
            </Link>
          </li>
          <li className="nav-item mainNav">
            <Link className="nav-link pb-0" to="advocacy">
              Advocacy
            </Link>
          </li>
          <li className="nav-item mainNav">
            <Link className="nav-link pb-0" to="blog">
              Blog
            </Link>
          </li>
          <li className="nav-item mainNav">
            <Link className="nav-link pb-0" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item m-2">
            <a
              href="https://forms.gle/Pgx2wPUqE9ZFZm9o7"
              target="_blank"
              className="btn btn-warning rounded-pill px-3 font-weight-bold"
            >
              {" "}
              Patient Register
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
