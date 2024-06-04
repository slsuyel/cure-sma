import { Link, useNavigate } from 'react-router-dom';
import bnr from '../../assets/Images/sma-banner.png';
import slide from '../../assets/photos/curesmahomeimage.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id=" homeTopStyle container" className="py-2 mx-3 px-2 ">
        <div className="mx-auto row w-100 top-card-home mt-2 mb-5">
          <div className="col-md-6 p-0 col-12 mb-3 position-relative ">
            <div className="top-card-home-img">
              <img
                src={slide}
                className="img-fluid text-center "
                width="100%"
                alt="slide"
              />
              <div className="my-4 text-center make_a_donation_absolute">
                <button
                  onClick={() => navigate('/donate-now')}
                  className="btn donate-btn"
                >
                  <i className="fas fa-heart"></i> MAKE A DONATION
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 p-0 col-12">
            <div className="cardstyle2">
              <h2 className="drem-h1">
                Dreams of a subsequent universal healthcare for all.
              </h2>
              <div className="text-left px-md-4 card_about_cure">
                <h4 className="d-inline-flex fw-bold text-justify">
                  ABOUT Cure SMA Bangladesh
                </h4>
                <p
                  className="text-justify"
                  style={{
                    fontSize: '22px',
                    fontFamily: '"Poppins"',
                    color: '#000000',
                    fontWeight: 300,
                  }}
                >
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
                  <a className="ps-3 text-danger text-decoration-none" href="/">
                    Read More. . .{' '}
                  </a>
                  <br />
                </p>
              </div>

              <div className="my-4 text-center make_a_donation_in_phone">
                <button
                  onClick={() => navigate('/donate-now')}
                  className="btn donate-btn"
                >
                  <i className="fas fa-heart"></i> MAKE A DONATION
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="line-top-section"></div>

        <div
          className="row mx-auto w-100 py-5"
          style={{ background: '#FAFAFA' }}
        >
          <div className="col-md-6">
            <h3 className="fs-1 fw-bold text-pri"> Learn about SMA</h3>
            <p
              className="text-justify"
              style={{
                fontSize: '22px',
                fontFamily: '"Poppins"',
                color: '#000000',
                fontWeight: 300,
              }}
            >
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
            <img src={bnr} alt="" className="img-fluid  w-100 " />
          </div>

          <div className="text-center">
            <button
              className="fs-5 font-weight-bold px-5 text-black read-more-btn-hbr"
              style={{ background: '#C1E8D9' }}
            >
              Read More
            </button>
          </div>
        </div>

        <div className="line-bottom-section mt-4"></div>
      </section>

      <section className="my-4 mt-5 border-top border-success">
        <div className="text-center px-3 mt-3 ">
          <h3 className="fs-1 mb-1 fw-bold">Stories of Patients</h3>
          <p
            className=" my-3"
            style={{
              fontSize: '22px',
              fontFamily: '"Poppins"',
              color: '#000000',
              fontWeight: 300,
            }}
          >
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
          </p>
        </div>

        <div className="row mx-auto">
          <div className="col-md-4 my-2">
            <div className="pri-border card shadow text-center patient-stories-crd">
              <img
                className="img-fluid "
                src="https://i.ibb.co/D18LbNh/Screenshot-1.png"
                alt=""
              />
              <p className="fs-3 fw-light mt-4 p-2 text-pri">
                {' '}
                SMA patient stories are powerful narratives of resilience,
                perseverance, and hope. These individuals
                <span className="fs-1"> {'>>>'}</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 my-2 ">
            <div className="pri-border card patient-stories-crd shadow text-center ">
              <img
                className="img-fluid "
                src="https://i.ibb.co/D18LbNh/Screenshot-1.png"
                alt=""
              />
              <p className="fs-3 fw-light mt-4 p-2 text-pri">
                {' '}
                SMA patient stories are powerful narratives of resilience,
                perseverance, and hope. These individuals
                <span className="fs-1"> {'>>>'}</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="pri-border card shadow text-center patient-stories-crd">
              <img
                className="img-fluid "
                src="https://i.ibb.co/D18LbNh/Screenshot-1.png"
                alt=""
              />
              <p className="fs-3 fw-light mt-4 p-2 text-pri">
                {' '}
                SMA patient stories are powerful narratives of resilience,
                perseverance, and hope. These individuals
                <span className="fs-1"> {'>>>'}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <button
            style={{ background: '#08A268' }}
            className="read-more-btn-hbr border border-white fs-3 fw-bold my-4 px-5 rounded-3 shadow"
          >
            Read all patient stories
          </button>
        </div>
      </section>

      <section>
        <div className="text-center mt-3 ">
          <h3 className="fs-1 mb-1 fw-bold">Recent Blogs</h3>
        </div>
        <div className="row mx-auto px-2">
          <div className="col-md-4 my-2">
            <div className="bg-pri learn-more-hbr border border-2 border-secondary-subtle shadow text-white">
              <img
                className="img-fluid "
                src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.967060102.1716249600&semt=sph"
                alt=""
              />
              <div className="ps-3 pt-3">
                <h6 className="my-2 fs-4">JANUARY 30, 2024</h6>
                <h4 className="my-2 fs-2">
                  Let's Organize, resist and be aware about SMA
                </h4>
                <h6 className="my-1 fs-4 " style={{ lineHeight: '35px' }}>
                  Spinal Muscular Atrophy (SMA) is a fatal disease. Most of the
                  people have never heard of SMA, a rare genetic disease. But it
                  is the truth that ...
                </h6>
              </div>
              <Link
                className="d-flex d-inline-block fs-3 fw-bold justify-content-end m-2 me-3 text-decoration-none text-white"
                to={''}
              >
                Learn more {'>>'}
              </Link>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="bg-pri learn-more-hbr border border-2 border-secondary-subtle shadow text-white">
              <img
                className="img-fluid "
                src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.967060102.1716249600&semt=sph"
                alt=""
              />
              <div className="ps-3 pt-3">
                <h6 className="my-2 fs-4">JANUARY 30, 2024</h6>
                <h4 className="my-2 fs-2">
                  Let's Organize, resist and be aware about SMA
                </h4>
                <h6 className="my-1 fs-4 " style={{ lineHeight: '35px' }}>
                  Spinal Muscular Atrophy (SMA) is a fatal disease. Most of the
                  people have never heard of SMA, a rare genetic disease. But it
                  is the truth that ...
                </h6>
              </div>
              <Link
                className="d-flex d-inline-block fs-3 fw-bold justify-content-end m-2 me-3 text-decoration-none text-white"
                to={''}
              >
                Learn more {'>>'}
              </Link>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="bg-pri learn-more-hbr border border-2 border-secondary-subtle shadow text-white">
              <img
                className="img-fluid "
                src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.967060102.1716249600&semt=sph"
                alt=""
              />
              <div className="ps-3 pt-3">
                <h6 className="my-2 fs-4">JANUARY 30, 2024</h6>
                <h4 className="my-2 fs-2">
                  Let's Organize, resist and be aware about SMA
                </h4>
                <h6 className="my-1 fs-4 " style={{ lineHeight: '35px' }}>
                  Spinal Muscular Atrophy (SMA) is a fatal disease. Most of the
                  people have never heard of SMA, a rare genetic disease. But it
                  is the truth that ...
                </h6>
              </div>
              <Link
                className="d-flex d-inline-block fs-3 fw-bold justify-content-end m-2 me-3 text-decoration-none text-white"
                to={''}
              >
                Learn more {'>>'}
              </Link>
            </div>
          </div>

          <div className="text-center mt-3">
            <a className="fs-1 text-decoration-none text-pri fw-light" href="">
              See all blogs {'>>'}
            </a>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <h1 className="text-pri fw-bold text-center">
          SUBSCRIBE TO OUR NEWSLETTER
        </h1>
        <div className="subscribe-form w-100">
          <input
            className="subscribe-name fs-4"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="subscribe-email fs-4"
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
