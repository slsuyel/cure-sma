import { Select } from "antd";
import { Link } from "react-router-dom";

const TopBar = () => {
  const onChange = (value: string) => {
    console.log(value);
  };

  return (
    <div
      className="d-flex justify-content-between px-3 py-1 "
      style={{ background: "#08a268" }}
    >
      <div className=" d-flex fw-semibold gap-3 fs-6 justify-content-start text-white">
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
      <div className="align-items-center  d-flex gap-2 align-items-baseline">
        <div className="top-bar-top">
          <Select
            placeholder="Language"
            optionFilterProp="children"
            onChange={onChange}
            options={[
              {
                value: "English",
                label: "English",
              },
              {
                value: "Bangla",
                label: "Bangla",
              },
            ]}
          />
        </div>

        <div>
          <Link
            className="fs-6 fw-semibold text-decoration-none text-white pe-3"
            to={"/"}
          >
            Contact
          </Link>
          <i className="fa-shopping-cart fas fs-3 text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
