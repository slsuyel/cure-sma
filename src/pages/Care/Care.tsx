import Breadcrumb from "../../components/Breadcrumb";

const Care = () => {
  return (
    <>
      <Breadcrumb />
      <section>
        <div className="container-fluid animated fadeInUp">
          <div className="row">
            <div className="col text-center">
              <h1 className="H1Comon4 pt-4">Care &amp; Support Center</h1>
            </div>
          </div>
          <div className="row my-5" style={{ background: "#" }}>
            <div className="col-md-7 col-12">
              <div id="carestyle" className="cardstyle3 shadow p-md-4">
                <h1 className="">
                  Deams of a subsequent universal healthcare for all.
                </h1>
                <p className="p-md-3">
                  The mission of the Cure SMA Care Center Network is to provide
                  the best healthcare including offering new therapies and to
                  gather and disseminate new knowledge to advance standard of
                  care for pediatric and adult persons with spinal muscular
                  atrophy (SMA).
                </p>
              </div>
            </div>
            <div id="carestyle" className="col">
              <img
                src="https://curesmabangladesh.org/img/blogimg.jpg"
                className=""
                width={800}
                style={{ marginLeft: "-200px", marginTop: 10 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Care;
