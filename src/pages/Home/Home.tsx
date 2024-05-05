import { Link, useNavigate } from "react-router-dom";
import bnr from "../../assets/Images/sma-banner.png";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id=" homeTopStyle" className="py-2">
        <div className="">
          <div className="mx-auto row w-100">
            <div className="col-md-5 col-12 mb-3">
              <img
                src="https://curesmabangladesh.org/img/curesmahomeimage.jpg"
                className="img-fluid text-center"
                width="100%"
                alt="slide"
              />

              <div className="my-4 text-center">
                <button
                  onClick={() => navigate("/donate-now")}
                  className="btn donate-btn"
                >
                  <i className="fas fa-heart"></i> MAKE A DONATION
                </button>
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="cardstyle2 shadow">
                <h1 className="p-md-3 drem-h1">
                  Dreams of a subsequent universal healthcare for all.
                </h1>
                <div className="text-left px-md-4">
                  <h4 className="d-inline-flex fw-bold  mb-4">
                    ABOUT Cure SMA Bangladesh
                  </h4>
                  <p className="fs-5">
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
                    existing services. <a href="/">Read More. . . </a>
                    <br />
                    {/* Cure SMA Bangladesh has played a significant role in
                    introducing of Risdiplam, an oral drug for SMA treatment, in
                    Bangladesh. We are relentlessly working with all the stake
                    holders to make the drug available to all the SMA patients.
                    We are committed to all our members, the Bangladeshi SMA
                    community, and to the imminent future where we will be a
                    part of achieving universal and easy access to SMA
                    treatments. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-auto w-100 ">
          <div className="col-md-6">
            <h3 className="fs-1 fw-bold text-success"> Learn about SMA</h3>
            <p className="fs-5">
              Spinal Muscular Atrophy (SMA) is a rare genetic neuromuscular
              condition, affecting approximately about 1 in 10,000 people.
              Muscle wasting and gradual mobility loss are symptoms of spinal
              muscular atrophy. It is brought on by degeneration of the nerve
              cells (motor neurons) that link the brain, spinal cord, and
              muscles of the body. The muscles used for movements like crawling,
              walking, sitting up, moving the head, and even swallowing
              gradually weaken and shrink (atrophied) as the connection between
              the nerves and muscles is interrupted.
            </p>
          </div>
          <div className="col-md-6">
            <img src={bnr} alt="" />
          </div>

          <div className="text-center">
            <button>Read More</button>
          </div>
        </div>
      </section>

      <section className="my-4 mt-5 border-top border-success">
        <div className="text-center px-3 mt-3 ">
          <h3 className="fs-1 mb-1 fw-bold">Stories of Patients</h3>
          <h6 style={{ lineHeight: "40px" }}>
            SMA patient stories are powerful narratives of resilience,
            perseverance, and hope. These individuals bravely navigate the
            challenges of Spinal Muscular Atrophy (SMA), a genetic disorder
            affecting the motor neurons in the spinal cord, leading to muscle
            weakness and atrophy. Despite the limitations imposed by SMA,
            patients demonstrate remarkable strength in their daily lives, often
            overcoming obstacles with unwavering determination. Their stories
            inspire awareness, advocacy, and progress in SMA research and
            treatment, offering a glimpse into the human spirit's capacity to
            thrive amidst adversity.
          </h6>
        </div>

        <div className="row mx-auto">
          <div className="col-md-4 my-2">
            <div className="border-3 border-success-subtle card p-3 shadow-lg text-center">
              <img
                className="img-fluid "
                src="https://www.curesmaindia.org/wp-content/uploads/2021/08/h1-banner05-1.png"
                alt=""
              />
              <h4 className="text-success">
                {" "}
                SMA patient stories are powerful narratives of resilience,
                perseverance, and hope. These individuals
              </h4>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="border-3 border-success-subtle card p-3 shadow-lg text-center">
              <img
                className="img-fluid "
                src="https://www.curesmaindia.org/wp-content/uploads/2021/08/h1-banner05-1.png"
                alt=""
              />
              <h4 className="text-success">
                {" "}
                SMA patient stories are powerful narratives of resilience,
                perseverance, and hope. These individuals
              </h4>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="border-3 border-success-subtle card p-3 shadow-lg text-center">
              <img
                className="img-fluid "
                src="https://www.curesmaindia.org/wp-content/uploads/2021/08/h1-banner05-1.png"
                alt=""
              />
              <h4 className="text-success">
                {" "}
                SMA patient stories are powerful narratives of resilience,
                perseverance, and hope. These individuals
              </h4>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <button className="bg-success border border-warning-subtle fs-2 fw-bold my-4 rounded-4 shadow-lg">
            Read all patient stories
          </button>
        </div>
      </section>

      <section>
        <div className="text-center px-3 mt-3 ">
          <h3 className="fs-1 mb-1 fw-bold">Recent Blogs</h3>
        </div>
        <div className="row mx-auto ">
          <div className="col-md-4 my-2">
            <div className="bg-success card p-3 shadow-lg text-white">
              <img src="https://curesmabangladesh.org/img/blogimg.jpg" alt="" />
              <h6 className="my-2">JANUARY 30, 2024</h6>
              <h4 className="my-2">
                Let's Organize, resist and be aware about SMA
              </h4>
              <h6 className="my-1">
                Spinal Muscular Atrophy (SMA) is a fatal disease. Most of the
                people have never heard of SMA, a rare genetic disease. But it
                is the truth that ...
              </h6>
              <Link
                className="d-flex d-inline-block fs-3 fw-bold justify-content-end text-decoration-none text-white"
                to={""}
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="bg-success card p-3 shadow-lg text-white">
              <img src="https://curesmabangladesh.org/img/blogimg.jpg" alt="" />
              <h6 className="my-2">JANUARY 30, 2024</h6>
              <h4 className="my-2">
                Let's Organize, resist and be aware about SMA
              </h4>
              <h6 className="my-1">
                Spinal Muscular Atrophy (SMA) is a fatal disease. Most of the
                people have never heard of SMA, a rare genetic disease. But it
                is the truth that ...
              </h6>
              <Link
                className="d-flex d-inline-block fs-3 fw-bold justify-content-end text-decoration-none text-white"
                to={""}
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="bg-success card p-3 shadow-lg text-white">
              <img src="https://curesmabangladesh.org/img/blogimg.jpg" alt="" />
              <h6 className="my-2">JANUARY 30, 2024</h6>
              <h4 className="my-2">
                Let's Organize, resist and be aware about SMA
              </h4>
              <h6 className="my-1">
                Spinal Muscular Atrophy (SMA) is a fatal disease. Most of the
                people have never heard of SMA, a rare genetic disease. But it
                is the truth that ...
              </h6>
              <Link
                className="d-flex d-inline-block fs-3 fw-bold justify-content-end text-decoration-none text-white"
                to={""}
              >
                Read more
              </Link>
            </div>
          </div>

          <div className="text-center mt-3">
            <button className="bg-success border border-warning-subtle fs-2 fw-bold my-4 rounded-4 shadow-lg">
              See all blogs
            </button>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <h2 className="text-success fw-bold text-center">
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <div className="subscribe-form w-100">
          <input
            className="subscribe-name"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="subscribe-email"
            type="email"
            placeholder="Email Address"
          />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
      </section>
    </>
  );
};

export default Home;
