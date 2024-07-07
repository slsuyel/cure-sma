import { Link } from 'react-router-dom';
import donateBnr from '../../assets/Images/donate-banner.png';
import arrow from '../../assets/Images/icons/arrow.png';
import why from '../../assets/Images/why.png';
import money from '../../assets/Images/your-money.png';
import path from '../../assets/Images/path.png';
import SliderStory from './SliderStory';
import MakeDifference from './MakeDifference';
import { useState } from 'react';
import DonateModal from '../../components/DonateModal';

const data = [1, 2, 3, 4];
const Donate = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="mx-auto w-100">
        <div style={{ background: '#E6E6E6' }} className="row mx-auto pt-1 ">
          <div className="col-md-6 my-auto">
            <div className="m-5">
              <h1
                style={{
                  fontWeight: '900',
                  color: '#3E4E38',
                  fontSize: '55px',
                }}
                className=""
              >
                CURE SMA <br /> BANGLADESH
              </h1>
              <p
                style={{
                  fontWeight: '500',
                  color: '#3E4E38',
                  fontSize: '20px',
                }}
              >
                A REGISTERED PUBLIC CHARITABLE FOUNDATION
              </p>

              <br />
            </div>
          </div>

          <div className="col-md-6 p-0">
            <img className="img-fluid w-100" src={donateBnr} alt="" />
          </div>
        </div>

        <div className="row my-auto w-100">
          <div className="col-md-6 ">
            <h1 style={{ fontWeight: '900' }} className=" show-care">
              Show you care. <br /> Change lives.
            </h1>
          </div>
          <div className="col-md-6 my-auto">
            <div className="my-2">
              <button
                style={{
                  background: 'rgb(219, 60, 179)',
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
          {data.map(d => (
            <div key={d} className="col-md-3 mx-auto">
              <div className="m-2 px-3 mx-auto">
                <img
                  className="img-fluid text-center mb-2"
                  src="https://cdn.midjourney.com/2e00986c-4576-4e04-87b2-e809c4658fdf/grid_0_640_N.webp"
                  alt=""
                />

                <h1 style={{ color: '#3E4E38', fontWeight: '800' }}>
                  {' '}
                  Nabonee{' '}
                </h1>
                <div>
                  <p className="mb-4">
                    Little angel OLIVIA SANCHAREE NABONEE suffering from SMA
                    needs support to continue her treatment
                    <Link className="see-more-btn" to={''}>
                      see more
                    </Link>
                  </p>
                  <div className="my-3">
                    <h6>Annual cost : 1700$</h6>
                    <h6>Total Collections : 105$ (17000tk)</h6>
                  </div>
                </div>

                <input
                  type="range"
                  disabled
                  value="20"
                  id="vol"
                  className="form-control-range my-2"
                  name="vol"
                  min="0"
                  max="50"
                />

                <button
                  onClick={showModal}
                  className="border-0 my-2 py-1 rounded text-white w-100"
                  style={{ background: '#FF914D', fontSize: '25px' }}
                >
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>

        <hr />

        <div className="row m-auto w-100 my-5 container">
          <div className="col-md-7 ">
            <h1 className="why"> Why donate?</h1>
            <p className="why-p">
              Our spinal muscular atrophy (SMA) community has made great
              progress, but our work is not over! Through your generous
              donations, we can fund the treatment of SMA babies. Your
              philanthropy powers our mission.
            </p>
          </div>

          <div className="col-md-5 p-0">
            <img className="img-fluid w-100" src={why} alt="" />
          </div>
        </div>

        {/* Community Support */}
        <div className="bg-secondary text-center py-5">
          <h1 style={{ fontSize: '60px' }} className="text-white mb-3">
            Community Support
          </h1>

          <button
            style={{ fontSize: '33px' }}
            className="rounded bg-white border my-3 px-5 py-1 text-dark"
          >
            Register a patient
          </button>
          <br />
          <button
            style={{ fontSize: '33px' }}
            className="rounded bg-white border my-3 px-5 py-1 text-dark"
          >
            Download SMA awareness material
          </button>
        </div>

        {/* Your money at Work */}

        <div
          style={{ background: '#F5F5EF' }}
          className="row w-100 mx-auto py-5"
        >
          <div className="col-md-6 m-auto">
            <img src={money} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 my-2">
            <h1 className="why">Your money at Work</h1>
            <p className="why-p">
              Your donations are felt at every level of our organization and
              have a realworld impact on our SMA community. 90% of every taka
              donated is spent for the treatment of these babies. Rest goes to{' '}
              <Link to="/">Community Support</Link> and{' '}
              <Link to="/">SMA awareness</Link> in Bangladesh
            </p>
          </div>
        </div>

        <div
          style={{ background: '#3E4E38' }}
          className="row w-100 mx-auto py-5"
        >
          <div className="col-md-6 m-auto text-center">
            <img src={path} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 my-2">
            <h1 className="path">
              The path to change begins with a single child
            </h1>
            <p className="why-p text-white">
              Cure SMA Bangladesh has played a significant role in introducing
              of Risdiplam, an oral drug for SMA treatment, in Bangladesh. We
              are relentlessly working with all the stake holders to make the
              drug available to all the SMA patients. We are committed to all
              our members, the Bangladeshi SMA community, and to the imminent
              future where we will be a part of achieving universal and easy
              access to SMA treatments.
            </p>
          </div>
        </div>
      </div>

      <SliderStory />

      <MakeDifference />
      <DonateModal visible={isModalVisible} onClose={handleCancel} />
    </>
  );
};

export default Donate;
