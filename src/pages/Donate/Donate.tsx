import donateBnr from "../../assets/Images/donate-banner.png";
import arrow from "../../assets/Images/icons/arrow.png";
import why from "../../assets/Images/why.png";

const Donate = () => {
  return (
    <div className="mx-auto w-100">
      <div style={{ background: "#E6E6E6" }} className="row mx-auto pt-5 ">
        <div className="col-md-6 my-auto">
          <div className="m-5">
            <h1
              style={{ fontWeight: "900", color: "#3E4E38", fontSize: "55px" }}
              className=""
            >
              CURE SMA <br /> BANGLADESH
            </h1>
            <p
              style={{ fontWeight: "500", color: "#3E4E38", fontSize: "20px" }}
            >
              A REGISTERED PUBLIC CHARITABLE FOUNDATION
            </p>

            <br />
            <br />
            <br />
          </div>
        </div>

        <div className="col-md-6 p-0">
          <img className="img-fluid w-100" src={donateBnr} alt="" />
        </div>
      </div>

      <div className="row my-auto w-100">
        <div className="col-md-6 ">
          <h1 style={{ fontWeight: "900" }} className=" show-care">
            Show you care. <br /> Change lives.
          </h1>
        </div>
        <div className="col-md-6 my-auto">
          <div className="my-2">
            <button
              style={{
                background: "rgb(219, 60, 179)",
                fontWeight: 500,
              }}
              className="border-0 text-white w-100 sponsor-a-child-btn"
            >
              Sponsor a child today <img src={arrow} width={80} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="row m-auto w-100">
        <div className="col-md-3 mx-auto">
          <div className="m-2 px-3 mx-auto">
            <img
              className="img-fluid text-center mb-2"
              src="https://cdn.midjourney.com/2e00986c-4576-4e04-87b2-e809c4658fdf/grid_0_640_N.webp"
              alt=""
            />

            <h1 style={{ color: "#3E4E38", fontWeight: "800" }}> Nabonee </h1>
            <p className="mb-4">
              Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
              support to continue her treatment
            </p>

            <input
              type="range"
              id="vol"
              className="form-control-range my-2"
              name="vol"
              min="0"
              max="50"
            />

            <button
              className="border-0 my-2 py-1 rounded text-white w-100"
              style={{ background: "#FF914D", fontSize: "25px" }}
            >
              Donate
            </button>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="m-2 px-3 mx-auto">
            <img
              className="img-fluid text-center mb-2"
              src="https://cdn.midjourney.com/2e00986c-4576-4e04-87b2-e809c4658fdf/grid_0_640_N.webp"
              alt=""
            />

            <h1 style={{ color: "#3E4E38", fontWeight: "800" }}> Nabonee </h1>
            <p className="mb-4">
              Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
              support to continue her treatment
            </p>

            <input
              type="range"
              id="vol"
              className="form-control-range my-2"
              name="vol"
              min="0"
              max="50"
            />

            <button
              className="border-0 my-2 py-1 rounded text-white w-100"
              style={{ background: "#FF914D", fontSize: "25px" }}
            >
              Donate
            </button>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="m-2 px-3 mx-auto">
            <img
              className="img-fluid text-center mb-2"
              src="https://cdn.midjourney.com/2e00986c-4576-4e04-87b2-e809c4658fdf/grid_0_640_N.webp"
              alt=""
            />

            <h1 style={{ color: "#3E4E38", fontWeight: "800" }}> Nabonee </h1>
            <p className="mb-4">
              Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
              support to continue her treatment
            </p>

            <input
              type="range"
              id="vol"
              className="form-control-range my-2"
              name="vol"
              min="0"
              max="50"
            />

            <button
              className="border-0 my-2 py-1 rounded text-white w-100"
              style={{ background: "#FF914D", fontSize: "25px" }}
            >
              Donate
            </button>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="m-2 px-3 mx-auto">
            <img
              className="img-fluid text-center mb-2"
              src="https://cdn.midjourney.com/2e00986c-4576-4e04-87b2-e809c4658fdf/grid_0_640_N.webp"
              alt=""
            />

            <h1 style={{ color: "#3E4E38", fontWeight: "800" }}> Nabonee </h1>
            <p className="mb-4">
              Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
              support to continue her treatment
            </p>

            <input
              type="range"
              id="vol"
              className="form-control-range my-2"
              name="vol"
              min="0"
              max="50"
            />

            <button
              className="border-0 my-2 py-1 rounded text-white w-100"
              style={{ background: "#FF914D", fontSize: "25px" }}
            >
              Donate
            </button>
          </div>
        </div>
      </div>

      <hr />

      <div className="row m-auto w-100 my-5 container">
        <div className="col-md-7 ">
          <h1 className="why"> Why donate?</h1>
          <p className="why-p">
            Our spinal muscular atrophy (SMA) community has made great progress,
            but our work is not over! Through your generous donations, we can
            fund the treatment of SMA babies. Your philanthropy powers our
            mission.
          </p>
        </div>

        <div className="col-md-5 p-0">
          <img className="img-fluid w-100" src={why} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Donate;
