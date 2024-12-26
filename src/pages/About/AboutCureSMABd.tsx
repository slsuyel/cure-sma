import img1 from '/images/fnd-focus-1.png';
import img2 from '/images/fnd-focus-2.png';
import img3 from '/images/fnd-focus-3.png';
import img4 from '/images/fnd-focus-4.png';
import img5 from '/images/fnd-focus-5.png';
const AboutCureSMABd = () => {
  return (
    <>
      <div className="curve py-8 text-center bg-gradient-to-r from-lime-100 via-white/50 to-lime-100">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-pfont mb-8">
            About Cure SMA
          </h1>
          <p className="text-base lg:text-xl px-10 lg:px-40 text-pfont mb-10">
            Cure SMA Bangladesh is a registered public charitable foundation
            with PAN Bangladesh representation. It is a distinct, apolitical,
            non-profit, non-sectarian entity. It has started its journey with 7
            SMA families in March 2023, and have continuously been expanding our
            network since then to represent SMA families and individuals across
            the country. We support SMA families through accurate counselling,
            rich resource pool, patient advocacy and various direct family
            support services. We are extensively working to empower SMA patients
            and enabling them to access existing services.
          </p>
          <p className="mt-8 pb-32">
            <a
              href="#focus"
              className="w-full md:w-80 px-8 py-3 rounded-3xl text-lg bg-white text-pfont border-2 border-black text-center drop-shadow-lg hover:bg-lime-200 hover:border-2 font-semibold"
            >
              Read More{' '}
              <i
                className="fa-solid fa-circle-arrow-right"
                aria-hidden="true"
              />
            </a>
          </p>
        </div>
      </div>
      <div id="focus" className="mb-16">
        <div className=" text-center px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="mb-4 text-2xl lg:text-4xl font-bold underline">
            Focus of Cure SMA Foundation
          </h1>
          <p className="text-lg mb-2 font-semibold">
            The foundation likely focuses on several key areas:
          </p>
          <p className="text-lg mb-2">
            Organizations like Cure SMA Bangladesh Foundation play a crucial
            role in improving the quality of life for SMA patients and their
            families by providing support, raising awareness, and advocating for
            better healthcare services.
          </p>
        </div>
        <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 ">
          <div className="flex flex-col items-center text-center">
            <div className="h-40 w-40 border-2 rounded-full border-pColor mb-4 flex items-center justify-center">
              <img
                className="mx-auto"
                src={img1}
                alt="cure-sma-bd-awareness-and-education"
              />
            </div>
            <h2 className="text-lg font-semibold text-pColor">
              Awareness and Education
            </h2>
            <div>
              <p>
                Raising awareness about SMA within Bangladesh, educating the
                public and healthcare professionals about the condition, its
                symptoms, and available treatments.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-40 w-40 border-2 rounded-full border-pColor mb-4 flex items-center justify-center">
              <img
                className="mx-auto"
                src={img2}
                alt="cure-sma-bd-awareness-and-education"
              />
            </div>
            <h2 className="text-lg font-semibold text-pColor">
              Support Services
            </h2>
            <div>
              <p>
                Providing support to individuals and families affected by SMA,
                including emotional support, information on care options, and
                connecting families with resources.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-40 w-40 border-2 rounded-full border-pColor mb-4 flex items-center justify-center">
              <img
                className="mx-auto"
                src={img3}
                alt="cure-sma-bd-awareness-and-education"
              />
            </div>
            <h2 className="text-lg font-semibold text-pColor">Advocacy</h2>
            <div>
              <p>
                Advocating for improved healthcare services and access to
                treatment for SMA patients in Bangladesh. This might involve
                lobbying for inclusion of SMA treatments in healthcare policies
                and programs.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-40 w-40 border-2 rounded-full border-pColor mb-4 flex items-center justify-center">
              <img
                className="mx-auto"
                src={img4}
                alt="cure-sma-bd-awareness-and-education"
              />
            </div>
            <h2 className="text-lg font-semibold text-pColor">Research</h2>
            <div>
              <p>
                Supporting or conducting research initiatives aimed at better
                understanding SMA, improving treatment options, and ultimately
                finding a cure.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-40 w-40 border-2 rounded-full border-pColor mb-4 flex items-center justify-center">
              <img
                className="mx-auto"
                src={img5}
                alt="cure-sma-bd-awareness-and-education"
              />
            </div>
            <h2 className="text-lg font-semibold text-pColor">Fundraising</h2>
            <div>
              <p>
                Organizing fundraising events and campaigns to support the
                foundation's activities and initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 bg-[#F2F2F3] py-10">
        <div className="text-center">
          <h1 className="mb-4 text-2xl lg:text-4xl font-bold underline">
            Vision and mission
          </h1>
          <p className="text-base lg:text-xl px-4 md:px-8">
            Cure SMA Bangladesh has played a significant role in introducing SMA
            treatment in Bangladesh. We are relentlessly working with all the
            stakeholders to make the drug available to all SMA patients.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-4 md:px-8">
          <div className="text-center bg-white rounded-2xl shadow-md shadow-yellow-300 text-pfont mb-4">
            <h2 className="text-2xl font-bold py-4">
              <i
                className="fa-solid fa-vector-square fa-beat"
                aria-hidden="true"
              />{' '}
              Mission
            </h2>
            <h2 className="border-4 border-pColor" />
            <h4 className="text-base leading-tight p-6 text-justify">
              We are dedicated to bringing the treatment and cure for SMA to
              Bangladesh, making the related healthcare available,
              all-encompassing, and insured for all, while creating awareness
              about SMA and the impact of genetic screening so that we can
              eventually reach to a point where there will be no genetic disease
              in the world.
            </h4>
          </div>
          <div className="text-center bg-white rounded-2xl shadow-md shadow-yellow-300 text-pfont mb-4">
            <h2 className="text-2xl font-bold py-4">
              <i className="fa-solid fa-glasses fa-flip" aria-hidden="true" />{' '}
              Vision
            </h2>
            <h2 className="border-4 border-pColor" />
            <h4 className="text-base leading-tight p-6 text-justify">
              Cure SMA Bangladesh dreams of an SMA-free world and subsequent
              universal healthcare for all.
            </h4>
          </div>
          <div className="text-center bg-white rounded-2xl shadow-md shadow-yellow-300 text-pfont mb-4">
            <h2 className="text-2xl font-bold py-4">
              <i
                className="fa-brands fa-staylinked fa-beat-fade"
                aria-hidden="true"
              />{' '}
              Integrity
            </h2>
            <h2 className="border-4 border-pColor" />
            <h4 className="text-base leading-tight p-6 text-justify">
              We, at Cure SMA Bangladesh, carry out all our work with the
              greatest accountability, transparency, and obligation.
            </h4>
          </div>
          <div className="text-center bg-white rounded-2xl shadow-md shadow-yellow-300 text-pfont mb-4">
            <h2 className="text-2xl font-bold py-4">
              <i className="fa-solid fa-life-ring fa-spin" aria-hidden="true" />{' '}
              Compassion
            </h2>
            <h2 className="border-4 border-pColor" />
            <h4 className="text-base leading-tight p-6 text-justify">
              According to the ‘By-Laws’ of Cure SMA Bangladesh, no person is
              ever unaided in the fight against this dreadful ailment. We offer
              total care and support to people affected by SMA, while connecting
              with them openly and honestly, providing them with the correct
              information and required data.
            </h4>
          </div>
          <div className="text-center bg-white rounded-2xl shadow-md shadow-yellow-300 text-pfont mb-4">
            <h2 className="text-2xl font-bold py-4">
              <i
                className="fa-solid fa-group-arrows-rotate fa-beat"
                aria-hidden="true"
              />{' '}
              Collaboration
            </h2>
            <h2 className="border-4 border-pColor" />
            <h4 className="text-base leading-tight p-6 text-justify">
              All our works are defined and determined by the direct or indirect
              inputs of the SMA community. Our achievements, regardless of
              scale, would not have been possible without the valuable
              contributions of our researchers, doctors, and SMA families.
              Currently, we have collaborations with Cure SMA USA, SMA Europe,
              Cure SMA Poland, Cure SMA India, Bangladesh Shishu Hospital &amp;
              Institute, National Institute of Neurosciences &amp; Hospital,
              Bangabandhu Sheikh Mujib Medical University (BSMMU), BIRDEM
              General Hospital, and Roche Bangladesh Ltd.
            </h4>
          </div>
        </div>
      </div>
      <div className="mb-20 mb-10">
        <div className="text-center">
          <h1 className="mb-10 text-2xl lg:text-4xl font-bold underline">
            Current Activities
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mx-4 md:mx-8">
          {/* left side */}
          <div className="w-full md:w-1/2 drop-shadow-lg">
            <div className="lg:h-32 bg-pColor/20 px-6 md:px-10 py-5 rounded-xl lg:rounded-tr-full mb-5  border-r-4 border-l-8 border-pColor">
              <h2 className="text-xl md:text-2xl font-bold">
                Preparation of Details
              </h2>
              <h2 className="text-lg md:text-xl">Patient Database</h2>
            </div>
            <div className="lg:h-32 bg-[#F2F2F3] px-6 md:px-10 py-5 rounded-xl lg:rounded-tr-full mb-5 border-r-4 border-l-8 border-pColor">
              <h2 className="text-xl md:text-2xl font-bold">
                Build SMA Awareness
              </h2>
              <h2 className="text-lg md:text-xl">
                Publications, Workshops, Training, Seminar &amp; Social
                Networking
              </h2>
            </div>
            <div className="lg:h-32 bg-green-100 px-6 md:px-10 py-5 rounded-xl lg:rounded-tr-full mb-5 border-r-4 border-l-8 border-pColor">
              <h2 className="text-xl md:text-2xl font-bold">
                Patients Advocacy
              </h2>
              <h2 className="text-lg md:text-xl">
                Meet SMA families to know more about the challenges &amp;
                remedial actions
              </h2>
            </div>
            <div className="lg:h-32 bg-[#F2F2F3] px-6 md:px-10 py-5 rounded-xl lg:rounded-tr-full mb-5 border-r-4 border-l-8 border-pColor">
              <h2 className="text-xl md:text-2xl font-bold">
                Formation of Advisory &amp; <br /> Health Care Provider Team
              </h2>
            </div>
          </div>
          {/* right side */}
          <div className="w-full md:w-1/2 drop-shadow-lg">
            <div className="lg:h-32 bg-pColor/20 px-6 md:px-10 py-5 rounded-xl lg:rounded-tl-full mb-5 text-right border-l-4 border-r-8 border-pColor">
              <h2 className="text-xl xl:text-2xl font-bold">
                Ensure Effective Involvement
              </h2>
              <h2 className="text-lg md:text-xl">
                Government, hospitals, doctors, therapists, pharmaceuticals,
                NGOs
              </h2>
            </div>
            <div className="lg:h-32 bg-[#F2F2F3] px-6 md:px-10 py-5 rounded-xl lg:rounded-tl-full mb-5 text-right border-l-4 border-r-8 border-pColor">
              <h2 className="text-xl md:text-2xl font-bold">
                Connect with International <br /> SMA Community
              </h2>
            </div>
            <div className="lg:h-32 bg-pColor/20 px-6 md:px-10 py-5 rounded-xl lg:rounded-tl-full mb-5 text-right border-l-4 border-r-8 border-pColor">
              <h2 className="text-xl md:text-2xl font-bold">
                Ensure Complete Therapy <br className="hidden md:block" />{' '}
                Facilities
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 mb-20 text-center">
        <button className="px-4 py-3 rounded-xl bg-lime-200 text-pfont hover:drop-shadow-lg hover:bg-cyan-500 hover:translate-y-1 hover:duration-[.5s]">
          <a
            target="_blank"
            className="text-2xl md:text-4xl leading-normal"
            href="https://drive.google.com/file/d/1EhsEw2lUj05225RV7FAJ4hOx46pkdUuB/view?usp=sharing"
          >
            <span className="font-bold">
              <i
                className="fa-solid fa-download fa-bounce"
                aria-hidden="true"
              />{' '}
              Download:{' '}
            </span>
            About SMA Leaflet
          </a>
        </button>
      </div>
    </>
  );
};

export default AboutCureSMABd;
