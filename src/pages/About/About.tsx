import Breadcrumb from "../../components/Breadcrumb";

const About = () => {
  return (
    <>
      <Breadcrumb title="About" />

      <section className="mt-md-3" style={{ background: "#" }}>
        <div className="container animated fadeInUp">
          <div className="row">
            <div className="col text-center border-bottom">
              <h2 className="H1Comon4 pb-3">
                {" "}
                <small>Welcome to Community of</small> <br /> Cure SMA
                Bangladesh
              </h2>
            </div>
          </div>
          <div className="row pt-3" style={{ background: "#FFFEDC" }}>
            <div className="col-md-7 order-2 order-md-1">
              <div className="card-body">
                <h5 className="d-inline-flex SubHeadComon2">
                  A FEW WORDS ABOUT Cure SMA Bangladesh
                </h5>
                <p className="txtbox1 p-md-3">
                  {" "}
                  Cure SMA Bangladesh is a registered public charitable
                  foundation with PAN Bangladesh representation. It is a
                  distinct, apolitical, non-profit, non-sectarian entity. We
                  have just started our journey with 7 SMA families in March
                  2023, and have continuously been expanding our network since
                  then to represent SMA families and individuals across the
                  country. We support SMA families through accurate counselling,
                  rich resource pool, patient advocacy and various direct family
                  support services. We are extensively working to empower SMA
                  patients and enabling them to access existing services.
                  <br />
                  Cure SMA Bangladesh has played a significant role in
                  introducing of Risdiplam, an oral drug for SMA treatment, in
                  Bangladesh. We are relentlessly working with all the stake
                  holders to make the drug available to all the SMA patients. We
                  are committed to all our members, the Bangladeshi SMA
                  community, and to the imminent future where we will be a part
                  of achieving universal and easy access to SMA treatments.
                </p>
              </div>
            </div>
            <div className="col-md-5 order-1 order-md-2">
              <div
                className="text-center"
                style={{ margin: "0 auto", paddingTop: 30 }}
              >
                <img
                  src="./homeSMA Bangladesh_files/curesmaprofile.png"
                  className="img-fluid animated flash delay-1s py-3"
                  width={200}
                />{" "}
                <br />
                <a
                  href="https://curesmabangladesh.org/about.php"
                  className="btn btn-lg btn-outline-info px-4 my-3"
                >
                  CURE SMA BANGLADESH
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#FFFEDC" }}>
        <div className="container py-3">
          <div className="row">
            <div className="col-12">
              <div className="card-header mb-3">
                <div className="text-center border-bottom">
                  <h1 className="H2Comon4 py-4">
                    Our Mission, Vision and Values
                  </h1>
                </div>
                <p
                  className="p-md-5 py-3"
                  style={{ fontSize: 20, fontWeight: 500 }}
                >
                  The core aim of Cure SMA Bangladesh is to ensure accurate and
                  timely diagnosis and treatment of all those who are or will be
                  living in Bangladesh and have been or may be suffering SMA
                  (Spinal Muscular Atrophy), ensuring that diagnosis of any
                  genetic disease including SMA will also be done in Bangladesh.
                  <br />
                  <br />
                  One of our initial key objectives is to help treat the few SMA
                  patients identified so far in Bangladesh. Needless to say, at
                  Cure SMA Bangladesh, everything from our funding urgencies to
                  our daily resolutions are driven by our mission, vision, and
                  values.
                </p>
                <div className="row px-md-5">
                  <div className="col-md-6 col-12 mb-3">
                    <h5 className="d-inline-flex SubHead3">Mission</h5>
                    <p className="txtbox1">
                      We are dedicated to bringing the treatment and cure for
                      SMA to Bangladesh, making the related healthcare
                      available, all-encompassing, and insured for all, while
                      creating awareness about SMA and the impact of genetic
                      screening so that we can eventually reach to a point where
                      there will be no genetic disease in the world.
                    </p>
                  </div>
                  <div className="col-md-6 col-12 mb-3">
                    <h5 className="d-inline-flex SubHead3">Vision</h5>
                    <p className="txtbox1">
                      Cure SMA Bangladesh dreams of a SMA free world and a
                      subsequent universal healthcare for all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#eee" }}>
        <div className="container">
          <div className="row py-5">
            <div className="col-12 text-center mb-3">
              <h5
                className="d-inline-flex H2Comon4 border-bottom mb-3"
                style={{}}
              >
                Our Values
              </h5>
            </div>
            <div className="col-md-3 col-12 mb-3">
              <div className="SubHead4">
                <h4 className="">Integrity</h4>
                <p className="txtbox1 mb-0">
                  {" "}
                  We, at the Cure SMA Bangladesh, carry out all our work with
                  the greatest accountability, transparency, and obligation.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-12 mb-3">
              <div className="SubHead4">
                <h4 className="">Compassion</h4>
                <p className="txtbox1 mb-0">
                  According to the ‘By-Laws’ of Cure SMA Bangladesh, no person
                  is ever unaided in the fight against this dreadful ailment. We
                  offer total care and support to people affected with SMA,
                  while connecting with them openly and honestly, providing them
                  correct information and required data.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="SubHead4">
                <h4 className="">Collaboration</h4>
                <p className="txtbox1">
                  All our works are defined and determined by the direct or
                  indirect inputs of the SMA community. Our achievements,
                  disregarding the scale, would have not been possible without
                  the valuable contributions of our researchers, doctors and SMA
                  families.
                </p>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="SubHead4">
                <h4 className="">Determination</h4>
                <p className="txtbox1">
                  At Cure SMA Bangladesh, our work is not limited to a
                  treatment, remedies, and cure. We are also determined to carry
                  out all our actions towards a world, where there will be no
                  genetic disease. Resilience is our core strength in the fight
                  against the genetic ailments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
