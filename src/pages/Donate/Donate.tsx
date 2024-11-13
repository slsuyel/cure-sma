/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import part from '/images/meet_the_partner.png';
import noboni from '/images/Nabonee.jpg';
import BannerSec from './BannerSec';
import img3 from '/images/donate_at_work.png';
import img4 from '/images/why_donate.png';
import img5 from '/images/single_child_1.png';
import img6 from '/images/single_child_2.png';
import img7 from '/images/faiyadh_story_1.png';
import img8 from '/images/faiyadh_story_2.png';
import img9 from '/images/faiyadh_story_3.png';
import img10 from '/images/faiyadh_story_4.png';
import difImage1 from '/images/dif_image_1.png';
import dm2 from '/images/dif_image_2.png';
import dm3 from '/images/dif_image_3.png';
import ccc from '/images/child_say_1.png';
import { useEffect, useState } from 'react';
import SelectedDonateModal from '../../components/SelectedDonateModal';
import DonateModal from '../../components/DonateModal';
import { callApi } from '../../utilities/functions';

export interface TUser {
  id: number;
  image: string;
  name: string;
  mobile: string;
  blood_group: string;
  email: string;
  gander: string;
  gardiant_phone: string;
  last_donate_date: string;
  whatsapp_number: string;
  division: string;
  district: string;
  thana: string;
  union: string;
  org: null;
  email_verified_at: Date;
  role: string;
  role_id: number;
  created_at: Date;
  updated_at: Date;
  fullName: string;
  relationship: string;
  diagnosedForSMA: boolean;
  symptoms: boolean;
  typeOfSMA: string;
  doctorName: string;
  fatherMobile: string;
  motherMobile: string;
  emergencyContact: string;
  presentAddress: string;
  permanentAddress: null;
  agreement: boolean;
  dateOfBirth: Date;
  annual_cost: string;
  total_cost: string;
  cost_donated: string;
  short_description: string;
  long_description: string;
  profile_image: string;
}

const Donate = () => {
  const [id, setId] = useState<number | null>(null);
  const [modal, setModal] = useState(false);
  const [gModal, setGModal] = useState(false);
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await callApi('get', '/api/users');
      setUsers(res.data.data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <BannerSec />
      {/* sponsor a child today */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-normal">
            Show you Care. <br /> Change lives.
          </h1>
        </div>
        <button className="bg-[#DB3CB3] px-4 py-2 md:px-5 md:py-3 text-white rounded-xl hover:bg-pColor hover:shadow-lg hover:shadow-yellow-500 hover:translate-y-1 transition-transform duration-500">
          <a
            className="text-lg md:text-xl lg:text-3xl xl:text-4xl leading-normal flex items-center"
            href="#child_Section"
          >
            Sponsor a child today <i className="fa-solid fa-right-long ml-2" />
          </a>
        </button>
      </div>
      {/* card section */}
      <div
        id="child_Section"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 px-8 mb-20 bg-[#F2F2F3] py-10"
      >
        {users?.map(d => (
          <div key={d.id}>
            <div>
              <img
                className="rounded-xl"
                src={d.profile_image || noboni}
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold py-2">{d.fullName}</h2>
              <p className="text-justify pb-4">
                {d.short_description}
                <Link
                  className="text-red-600 px-2 py-1 bg-red-200 rounded-md hover:shadow-sm hover:shadow-red-600"
                  to={`/cure-sma-bd-patient-history-single/${d.id}`}
                >
                  See More
                </Link>{' '}
              </p>
              <div className="pb-4">
                <h4 className="font-semibold pb-1 text-base">
                  Annual cost: <span>{d.annual_cost}</span>
                </h4>
                <h4 className="font-semibold pb-1 text-base">
                  Total Collection: <span>{d.total_cost}</span>
                </h4>
              </div>
            </div>
            {/* progress bar */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-8 mb-4 mx-auto rounded-lg border-2 border-red-400 shadow-inner text-center">
                <div className="absolute top-0 left-0 h-full rounded-lg bg-pColor progress-bar-animation">
                  {/* Progress Bar */}
                  <h3 className="px-5 pt-1 inset-0 flex items-center justify-center text-white text-base font-semibold fadein">
                    {d.total_cost}
                  </h3>
                </div>
                {/* Goal Text */}
                <h3 className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-pColor text-base font-semibold">
                  {d.annual_cost}
                </h3>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  setId(d.id);
                  setGModal(true);
                }}
                className="btn text-2xl bg-orange-600 text-white w-full hover:bg-pColor hover:shadow-md hover:shadow-black hover:translate-y-1 hover:duration-[.5s]"
              >
                Donate
              </button>
            </div>
            {/*  */}
          </div>
        ))}
      </div>
      {/* Why Donate Section */}
      <div className="bg-[#F2F2F3] mb-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="md:w-7/12 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-extrabold leading-snug">
              Why Donate?
            </h1>
            <h4 className="text-xl md:text-2xl mt-3 leading-relaxed">
              Our spinal muscular atrophy (SMA) community has made great
              progress, but our work is not over! Through your generous
              donations, we can fund the treatment of SMA babies. Your
              philanthropy powers our mission.
            </h4>
          </div>
          <div className="md:w-5/12 flex justify-center">
            <img
              className="w-full h-auto py-4 md:py-8"
              src={img4}
              alt="Cure SMA Bangladesh"
            />
          </div>
        </div>
      </div>
      {/* support section */}
      <div
        id="support"
        className="bg-stone-700 px-4 py-8 text-center mb-8 md:px-8 md:py-16 md:mb-20"
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-normal mb-8 md:mb-16">
          Community Support
        </h1>
        <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-16">
          <button className="bg-white px-4 py-3 rounded-xl mb-4 hover:text-white hover:shadow-yellow-400 hover:shadow-lg hover:bg-pColor hover:translate-y-1 hover:duration-[.5s]">
            <Link
              target="_blank"
              className="text-2xl md:text-4xl leading-normal"
              to="/cure-sma-bd-member-registration"
            >
              Register a Patient
            </Link>
          </button>
          <button className="bg-white px-4 py-3 rounded-xl hover:text-white hover:shadow-white hover:shadow-lg hover:bg-cyan-500 hover:translate-y-1 hover:duration-[.5s]">
            <Link
              className="text-2xl md:text-4xl leading-normal"
              to="/cure-sma-bd-document-download"
            >
              <span className="font-bold underline">
                <i className="fa-solid fa-download"></i> Download
              </span>
              <br />
              SMA Awareness Material
            </Link>
          </button>
        </div>
      </div>
      {/* Your money at Work section */}
      <div className="bg-[#F2F2F3] mb-8 md:mb-16 lg:mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-8">
          <div className="w-full md:w-6/12">
            <img
              className="w-full h-auto py-4 md:py-8"
              src={img3}
              alt="Cure SMA Bangladesh"
            />
          </div>
          <div className="w-full md:w-7/12 lg:pl-8 py-4 md:py-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-normal">
              Your Money <br className="hidden md:block" /> at Work
            </h1>
            <h4 className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 md:mt-3 leading-normal">
              Your donations are felt at every level of our organization and
              have a real-world impact on our SMA community. 90% of every taka
              donated is spent on the treatment of these babies. The rest goes
              to
              <a
                className="text-lg md:text-xl lg:text-2xl underline text-orange-600 font-bold hover:text-pColor"
                href="#support"
              >
                Community Support
              </a>{' '}
              and
              <a
                className="text-lg md:text-xl lg:text-2xl underline text-cyan-500 font-bold hover:text-pColor"
                href="#support"
              >
                SMA Awareness
              </a>{' '}
              in Bangladesh.
            </h4>
          </div>
        </div>
      </div>
      {/* path to change section */}
      <div className="bg-green-950 text-white mb-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-10">
            <img
              className="w-full py-4 md:py-8"
              src={img5}
              alt="Cure SMA Bangladesh"
            />
          </div>
          {/* Center Content */}
          <div className="w-full md:w-1/3 text-center">
            <div className="mb-8">
              <img
                className="w-full py-4 md:py-8"
                src={img6}
                alt="Cure SMA Bangladesh"
              />
            </div>
            <button
              onClick={() => setModal(true)}
              className="px-8 py-4 md:px-4 md:py-2 bg-orange-100 rounded-lg shadow-lg shadow-pColor md:shadow-none hover:shadow-lg hover:bg-pColor hover:text-white transition-transform duration-500 transform hover:translate-y-1"
            >
              <span className="text-green-950 text-4xl"> Donate</span>
            </button>
          </div>
          {/* Right Text Content */}
          <div className="w-full md:w-1/3 pl-0 md:pl-8 py-4 md:py-8 order-first md:order-3">
            <h1 className="text-3xl xl:text-6xl font-extrabold mb-4">
              The path to change begins with a single child
            </h1>
            <h4 className="text-lg xl:text-2xl leading-relaxed md:leading-snug xl:leading-relaxed">
              Cure SMA Bangladesh has played a significant role in introducing
              Risdiplam, an oral drug for SMA treatment, in Bangladesh. We are
              relentlessly working with all the stakeholders to make the drug
              available to all SMA patients. We are committed to all our
              members, the Bangladeshi SMA community, and to the imminent future
              where we will be a part of achieving universal and easy access to
              SMA treatments.
            </h4>
          </div>
        </div>
      </div>
      {/* listen story slide section */}
      <div className="mt-8 carousel">
        <div
          id="slide1"
          className="carousel-item relative w-[100%] md:w-full h-2/3"
        >
          <div className="bg-[#F2F2F3] mb-20 lg:flex justify-between px-8 py-16 items-center relative">
            {/* left side */}
            <div className="lg:w-1/2 flex justify-between items-center md:mr-12">
              <div className="hidden md:inline">
                <div className="flex justify-between mr-4 gap-4 mb-4">
                  <div>
                    <img src={img7} alt="Cure SMA Bangladesh" />
                  </div>
                  <div>
                    <img src={img8} alt="Cure SMA Bangladesh" />
                  </div>
                </div>
                <div className="mr-4">
                  <img src={img9} alt="Cure SMA Bangladesh" />
                </div>
              </div>
              <div>
                <div className="mt-">
                  <Link to="https://www.youtube.com/" target="_blank">
                    <img
                      className="py-8 hover:bg-red-600 hover:rounded-xl"
                      src={img10}
                      alt="story4"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/"
                    target="_blank"
                    className="absolute text-9xl text-white opacity-70 hover:text-red-700 -mt-80 lg:-mt-64 xl:-mt-80 ml-28 md:ml-24 lg:ml-12 xl:ml-28"
                  >
                    <i className="fa-brands fa-youtube" />
                  </Link>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-6xl font-extrabold text-center lg:text-left">
                Listen to <br /> Faiyadh &amp; <br /> Faizan’s story
              </h1>
              <div className="text-6xl md:text-8xl text-center">
                <i className="fa-solid fa-quote-left" />
              </div>
              <h4 className="text-xl md:text-2xl mt-3 leading-normal text-center lg:text-left">
                our sons were perfectly fine during first year of their births.
                We noticed something wrong with their leg and hand after 1 year.
                Our doubt was created by seeing something wrong in my elder son.
                He could not stand on his feet.
              </h4>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link to="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link to="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link to="#slide2" className="btn btn-circle">
            ❮
          </Link>
          <Link to="#slide3" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      {/* make a difference */}
      <div className="px-4 sm:px-8 mb-12 sm:mb-20">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-12 sm:mb-20">
          How to make a difference?
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-10">
          <div className="w-full sm:w-1/3">
            <img
              src={difImage1}
              alt="Cure SMA Bangladesh"
              className="w-full h-auto"
            />
            <h2 className="text-2xl sm:text-3xl font-bold py-4 sm:py-8 text-center lg:text-left">
              Sponsor a child
            </h2>
            <h4 className="text-xl lg:text-2xl text-center lg:text-left">
              Provide monetary assistance to a child with SMA
            </h4>
          </div>
          <div className="w-full sm:w-1/3">
            <img
              src={dm2}
              alt="Cure SMA Bangladesh"
              className="w-full h-auto"
            />
            <h2 className="text-2xl md:text-3xl font-bold py-4 sm:py-8 text-center lg:text-left">
              Volunteer your time
            </h2>
            <h4 className="text-xl lg:text-2xl text-center lg:text-left">
              Help us organize a variety of awareness sessions, seminars &amp;
              medical camps and more to enrich the lives of our kids.
            </h4>
          </div>
          <div className="w-full sm:w-1/3">
            <img
              src={dm3}
              alt="Cure SMA Bangladesh"
              className="w-full h-auto"
            />
            <h2 className="text-2xl md:text-3xl font-bold py-4 sm:py-8 text-center lg:text-left">
              Go the extra mile
            </h2>
            <h4 className="text-xl lg:text-2xl text-center lg:text-left">
              We collaborate to raise funds and awareness for our cause.
            </h4>
          </div>
        </div>
      </div>
      {/* our kids have to say section */}
      <div className="md:flex justify-between items-center bg-green-950 text-white mb-20 relative">
        <div className="md:w-5/12">
          <Link to="https://www.youtube.com/" target="_blank">
            <img
              className="py-8 hover:bg-red-600 hover:rounded-xl"
              src={ccc}
              alt="story4"
            />
          </Link>
          {/* play button */}
          <Link
            to="https://www.youtube.com/"
            target="_blank"
            className="absolute text-9xl text-white opacity-70 hover:text-red-700 -mt-80 md:-mt-64 lg:-mt-80 xl:-mt-[22rem] ml-36 md:ml-28 lg:ml-40 xl:ml-44"
          >
            <i className="fa-brands fa-youtube" />
          </Link>
        </div>
        <div className="md:w-7/12 py-8 px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-normal mb-8">
            See what our kids <br /> have to say
          </h1>
          <h4 className="text-xl md:text-lg xl:text-xl font-light italic mt-3 leading-normal md:leading-0 xl:leading-normal pb-4">
            "When I visited Faiyadh, I was blown away by the gratitude I
            received. Seeing how my small monthly donation changed his life was
            a heartwarming experience."
          </h4>
          <h4 className="text-2xl md:text-xl lg:text-2xl font-bold pb-8">
            Mr. Jamal Ahmed, sponsor since 2023
          </h4>
          <h4 className="text-xl md:text-lg xl:text-xl font-light italic mt-3 leading-normal md:leading-0 xl:leading-normal pb-4">
            "Spending time with the kids and seeing their happiness is a
            rewarding experience. Knowing I am helping make their life better in
            such a small way is an amazing feeling."
          </h4>
          <h4 className="text-2xl md:text-xl lg:text-2xl font-bold pb-8">
            Dr. Shamima Khan, volunteer physician since 2021
          </h4>
        </div>
      </div>
      {/* Meet the partners */}
      <div className="mb-20">
        <div className="md:flex justify-between items-center mx-8">
          <div className="md:w-6/12">
            <img className="py-8" src={part} alt="Cure SMA Bangladesh" />
          </div>
          <div className="md:w-6/12 pl-10 py-0 md:py-8">
            <h1 className="text-4xl xl:text-6xl font-extrabold">
              Meet the partners who help us transform lives
            </h1>
            <h4 className="text-xl xl:text-2xl mt-5">
              Medical Institutions and companies have given their time and
              support to help us make a difference in children's lives.
            </h4>
            <ul className="text-xl xl:text-2xl list-disc pl-10 mt-5">
              <li>National Institute of Neuroscience</li>
              <li>Bangladesh Shishu Hospital</li>
              <li>BSMMU</li>
              <li>Roche Bangladesh Limited</li>
            </ul>
          </div>
        </div>
      </div>
      {gModal && (
        <SelectedDonateModal
          selectedId={id}
          closeModal={() => setGModal(false)}
        />
      )}
      {modal && <DonateModal closeModal={() => setModal(false)} />}
    </>
  );
};

export default Donate;
