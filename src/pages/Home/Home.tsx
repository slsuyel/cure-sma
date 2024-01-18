import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id=" homeTopStyle" className="py-2">
        <div className="">
          <div className="row">
            <div className="col-md-5 col-12 mb-3">
              <img
                src="https://curesmabangladesh.org/img/curesmahomeimage.jpg"
                className="img-fluid text-center"
                width="100%"
                alt="slide"
              />
            </div>
            <div className="col-md-7 col-12">
              <div className="cardstyle2 shadow">
                <h1 className="p-md-3 drem-h1">
                  Dreams of a subsequent universal healthcare for all.
                </h1>
                <div className="text-left px-md-4">
                  <h4 className="d-inline-flex">ABOUT Cure SMA Bangladesh</h4>
                  <p className="">
                    {" "}
                    Cure SMA Bangladesh is a registered public charitable
                    foundation with PAN Bangladesh representation. It is a
                    distinct, apolitical, non-profit, non-sectarian entity. We
                    have just started our journey with 7 SMA families in March
                    2023, and have continuously been expanding our network since
                    then to represent SMA families and individuals across the
                    country. We support SMA families through accurate
                    counselling, rich resource pool, patient advocacy and
                    various direct family support services. We are extensively
                    working to empower SMA patients and enabling them to access
                    existing services.
                    <br />
                    Cure SMA Bangladesh has played a significant role in
                    introducing of Risdiplam, an oral drug for SMA treatment, in
                    Bangladesh. We are relentlessly working with all the stake
                    holders to make the drug available to all the SMA patients.
                    We are committed to all our members, the Bangladeshi SMA
                    community, and to the imminent future where we will be a
                    part of achieving universal and easy access to SMA
                    treatments.
                  </p>
                </div>
                <div className="my-4 text-center">
                  <button
                    onClick={() => navigate("/donate-now")}
                    className="btn donate-btn"
                  >
                    DONATE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 cardstyle2">
              <p className="dailogSection p-md-5">
                <span className="font-weight-bold">
                  Spinal Muscular Atrophy (SMA)
                </span>{" "}
                is a rare genetic neuromuscular condition, affecting
                approximately about 1 in 10,000 people. Muscle wasting and
                gradual mobility loss are symptoms of spinal muscular atrophy.
                It is brought on by degeneration of the nerve cells (motor
                neurons) that link the brain, spinal cord, and muscles of the
                body. The muscles used for movements like crawling, walking,
                sitting up, moving the head, and even swallowing gradually
                weaken and shrink (atrophied) as the connection between the
                nerves and muscles is interrupted.
                <br />
                <br />
                Although it is a rare disorder, 1 in 40 persons (called
                carriers) is estimated to carry the defective gene. There is a
                one in four probability that a kid born to two carriers will
                have SMA during every single pregnancy.
                <br />
                <br />
                No changes are experienced in sensation or the emotional
                ability. Intellectual activity is normal, and most SMA patients
                have a tendency to be especially bright and social.
                <br />
                <br />
                SMA has four different types since the severity of the condition
                differs widely from person to person. The terms SMA type I, SMA
                type II, SMA type III, and SMA type IV are used to indicate
                these. The age at which symptoms start, the degree of muscle
                weakness associated with them, and the highest level of motor
                function a child reaches are used to identify the specific type
                of SMA. Given that SMA has a variable impact on each individual,
                there is a wide range of severity even among these categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className=" container my-md-5 my-3">
        <div className="row py-3">
          <div className="col-12">
            <h2 className="H2Comon4">Latest News</h2>
          </div>
        </div>
        <div className="row">
          <a href="#" className="text-decoration-none text-dark"></a>
          <div className="col-md-4 col-12 mb-3">
            <a href="#" className="text-decoration-none text-dark"></a>
            <div className="card-header" style={{}}>
              <a href="#" className="text-decoration-none text-dark">
                <img
                  src="https://curesmabangladesh.org/img/blogimg2.jpg"
                  className="img-fluid py-2"
                />
                <h4>Let's Organize, resist and be aware about SMA</h4>
              </a>
              <p className="p-2">
                <a href="#" className="text-decoration-none text-dark">
                  Spinal Muscular Atrophy (SMA) is a fatal disease. Most of the
                  people have never heard of SMA, a rare genetic disease. But it
                  is the truth that many children are born with the rare disease
                  around the world{" "}
                </a>
                <a href="#">
                  {" "}
                  <em>Read more</em>{" "}
                </a>{" "}
              </p>
              <hr />
              <div className="form-row text-muted">
                <div className="col">
                  <span>Writer</span>
                </div>
                <div className="col text-right">
                  <span>0 Comments</span>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="text-decoration-none text-dark"></a>
          <div className="col-md-4 col-12 mb-3">
            <a href="#" className="text-decoration-none text-dark"></a>
            <div className="card-header" style={{}}>
              <a href="#" className="text-decoration-none text-dark">
                <img
                  src="https://curesmabangladesh.org/img/blogimg2.jpg"
                  className="img-fluid py-2"
                />
                <h4>Let's Organize, resist and be aware about SMA</h4>
              </a>
              <p className="p-2">
                <a href="#" className="text-decoration-none text-dark">
                  Spinal Muscular Atrophy (SMA) is a fatal disease. Most of the
                  people have never heard of SMA, a rare genetic disease. But it
                  is the truth that many children are born with the rare disease
                  around the world
                </a>
                <a href="#">
                  {" "}
                  <em>Read more</em>{" "}
                </a>{" "}
              </p>
              <hr />
              <div className="form-row text-muted">
                <div className="col">
                  <span>Writer</span>
                </div>
                <div className="col text-right">
                  <span>0 Comments</span>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="text-decoration-none text-dark"></a>
          <div className="col-md-4 col-12 mb-3">
            <a href="#" className="text-decoration-none text-dark"></a>
            <div className="card-header" style={{}}>
              <a href="#" className="text-decoration-none text-dark">
                <img
                  src="https://curesmabangladesh.org/img/blogimg2.jpg"
                  className="img-fluid py-2"
                />
                <h4>Let's Organize, resist and be aware about SMA</h4>
              </a>
              <p className="p-2">
                <a href="#" className="text-decoration-none text-dark">
                  Spinal Muscular Atrophy (SMA) is a fatal disease. Most of the
                  people have never heard of SMA, a rare genetic disease. But it
                  is the truth that many children are born with the rare disease
                  around the world
                </a>
                <a href="#">
                  {" "}
                  <em>Read more</em>{" "}
                </a>{" "}
              </p>
              <hr />
              <div className="form-row text-muted">
                <div className="col">
                  <span>Writer</span>
                </div>
                <div className="col text-right">
                  <span>0 Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
