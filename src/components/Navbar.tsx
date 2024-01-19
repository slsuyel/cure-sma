import { useState } from "react";
import { Link } from "react-router-dom";
const categories = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "About",
    slug: "/about",
  },
  {
    name: "Care & Support",
    slug: "/care",
  },
  {
    name: "Advocacy",
    slug: "/advocacy",
  },
  {
    name: "Blog",
    slug: "/blog",
  },
  {
    name: "Contact",
    slug: "/contact",
  },
];
const Navbar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

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
          href="/patient-register"
          target="_blank"
          className="border btn btn-outline-secondary btn-sm ml-auto mr-3 nav-link p-2 px-3"
        >
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
          onClick={toggleOffcanvas}
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
          {/*  <li className="nav-item mainNav">
            <Link className="nav-link pb-0 active" to="/">
              Home
            </Link>
          </li> */}

          {categories.map((ct) => (
            <li className="nav-item mainNav">
              <Link className="nav-link pb-0 " to={ct.slug}>
                {ct.name}
              </Link>
            </li>
          ))}

          <li className="nav-item m-2">
            <a
              href="patient-register"
              target="_blank"
              className="btn btn-warning rounded-pill px-3 font-weight-bold"
            >
              {" "}
              Patient Register{" "}
            </a>
          </li>
        </ul>
      </nav>

      <div className="bg-body-secondary d-block d-sm-none me-2 text-end">
        <button
          type="button"
          className="btn btn-primary rounded-0 text-end"
          onClick={toggleOffcanvas}
        >
          <span className="text-white">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>

        <div
          className={`w-50 offcanvas text-start offcanvas-start${
            isOffcanvasOpen ? " show" : ""
          }`}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
            <button
              type="button"
              className="bg-warning btn-close opacity-100 text-reset"
              onClick={toggleOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>
              <img
                width={120}
                src="https://curesmabangladesh.org/img/logocuresma.png"
                alt=""
                className="img-fluid m-2"
              />
            </div>

            <ul className="list-unstyled">
              {categories.map((category) => (
                <li>
                  <Link
                    to={category.slug}
                    className="border-bottom border-secondary fs-5 mb-2 text-center  text-decoration-none"
                  >
                    {" "}
                    {category.name}
                  </Link>
                </li>
              ))}

              <li className="nav-item m-2">
                <a
                  href="patient-register"
                  target="_blank"
                  className="btn btn-warning rounded-pill px-3 font-weight-bold"
                >
                  {" "}
                  Patient Register{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
