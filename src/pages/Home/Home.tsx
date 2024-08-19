import about from '/images/about_SMA.png';
import img from '/images/Logo-curesmaindia.jpg';
import banner from '/images/banner_image.png';
import btn from '/images/button_ani.gif';
import difImage1 from '/images/dif_image_1.png';
import logo from '/images/Logo-SMA Asia.jpg';
import tech from '/images/bio-tech-logo.jpg';
import relianceLab from '/images/Logo-RelianceLab.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <section className="mx-8 xl:mt-12 mb-20 lg:relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left side */}
          <div className="lg:absolute bottom-6 xl:bottom-0 ">
            <div>
              <img
                className="w-[600px] md:w-full lg:w-[400px] xl:w-[600px] h-full object-cover rounded-tr-[100px]"
                src={banner}
                alt="Cure SMA Bangladesh"
              />
              <div className="flex items-center justify-center -mt-4">
                <Link to="/donate-cure-sma-bd">
                  <button className="flex items-center text-white font-bold text-2xl pBtn border-lg border-red-400 hover:border-pColor border-2 bg-gradient-to-b from-red-500 via-red-500 to-white hover:bg-gradient-to-b hover:from-green-700 hover:via-green-700 hover:to-white shadow-lg">
                    <img className="w-14" src={btn} alt="Animation" />
                    <h4>MAKE A DONATION</h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="rounded-tr-[100px] bg-gradient-to-b from-green-600 to-white">
            <div>
              <h2 className="font-bold lg:leading-normal xl:leading-normal text-3xl md:text-4xl xl:text-5xl text-white mb-4 mt-8 pl-6 xl:pl-[650px]">
                Dreams of a subsequent <br /> universal healthcare for all.
              </h2>
              <div className="rounded-tr-[100px] pr-5 lg:pr-20 pl-6 lg:pl-[450px] xl:pl-[650px] banner-bgw">
                <h4 className="font-bold text-xl xl:text-2xl mb-4 pt-6">
                  ABOUT Cure SMA Bangladesh
                </h4>
                <p className="font-normal lg:leading-8 xl:leading-8 text-justify text-base lg:text-lg xl:text-xl">
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
                  <a className="ps-3 text-red-500 hover:text-pColor" href="/">
                    Read More...
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* partner section */}
      <div className="mb-20">
        <div className="mb-10">
          <h1 className="text-center text-2xl lg:text-4xl font-bold underline">
            Partners
          </h1>
        </div>
        <div className="w-full h-full flex justify-between px-8 items-center">
          <a href="https://www.curesmaindia.org" target="_blank">
            <img
              className="shadow-none hover:shadow-xl"
              src={img}
              alt="Cure SMA Bangladesh"
            />
          </a>
          <a href="https://www.smaasia.org/" target="_blank">
            <img
              className="shadow-none hover:shadow-xl"
              src={logo}
              alt="Cure-SMA_Asia"
            />
          </a>
          <a href="https://maps.app.goo.gl/nvFrX2B7xdiTj7cw8" target="_blank">
            <img
              className="shadow-none hover:shadow-xl"
              src={tech}
              alt="Cure SMA Bangladesh"
            />
          </a>
          <a href="" target="_blank">
            <img
              className="shadow-none hover:shadow-xl"
              src={relianceLab}
              alt="Cure SMA Bangladesh"
            />
          </a>
        </div>
      </div>
      {/* Learn about SMA */}
      <div
        className="bg-pColor/50 rounded-xl py-8 my-8"
        style={{ background: '#08a26880' }}
      >
        <div className="px-8 py-8 bg-[#F2F2F3] drop-shadow-lg">
          <div className="lg:flex justify-between items-center text-center">
            <div className="w-full lg:w-1/2 mr-16">
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-pColor">
                Learn about SMA
              </h1>
              <p className="text-sm leading-normal lg:text-lg xl:leading-8 text-justify">
                Spinal Muscular Atrophy (SMA) is a rare genetic neuromuscular
                condition, affecting approximately about 1 in 10,000 people.
                Muscle wasting and gradual mobility loss are symptoms of spinal
                muscular atrophy. It is brought on by degeneration of the nerve
                cells (motor neurons) that link the brain, spinal cord, and
                muscles of the body. The muscles used for movements like
                crawling, walking, sitting up, moving the head, and even
                swallowing gradually weaken and shrink (atrophied) as the
                connection between the nerves and muscles is interrupted.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={about} alt="Cure SMA Bangladesh" />
            </div>
          </div>
          <div className="text-center py-8">
            <a href="" className="pBtn bg-pColor/50">
              Read More
            </a>
          </div>
        </div>
      </div>
      {/* Stories of Patients */}
      <div className="pt-16" style={{ background: '#08a26833' }}>
        <div className="bg-pColor/20 pt-16">
          <div className="px-4 sm:px-8 mb-12 sm:mb-20">
            <div>
              <div className="mb-8">
                <h1 className="text-center text-2xl lg:text-4xl font-bold underline">
                  Stories of Patients
                </h1>
              </div>
              <div className="mb-8">
                <p className="text-xl lg:text-2xl text-center leading-8">
                  SMA patient stories are powerful narratives of resilience,
                  perseverance, and hope. These individuals bravely navigate the
                  challenges of Spinal Muscular Atrophy (SMA), a genetic
                  disorder affecting the motor neurons in the spinal cord,
                  leading to muscle weakness and atrophy. Despite the
                  limitations imposed by SMA, patients demonstrate remarkable
                  strength in their daily lives, often overcoming obstacles with
                  unwavering determination. Their stories inspire awareness,
                  advocacy, and progress in SMA research and treatment, offering
                  a glimpse into the human spirit's capacity to thrive amidst
                  adversity.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-10">
              <div
                className="bg-white w-full sm:w-1/3 hover:bg-yellow-100 hover:drop-shadow-2xl"
                style={{
                  boxShadow:
                    '4px 4px 8px rgba(10, 214, 3, 0.350), -4px -4px 8px rgba(10, 214, 3, 0.350)',
                }}
              >
                <img
                  src={difImage1}
                  alt="Sponsor a child"
                  className="w-full h-auto"
                />
                <div className="px-8 text-center my-8">
                  <a
                    href=""
                    className="text-xl lg:text-2xl leading-8 text-pColor hover:underline"
                  >
                    SMA patient stories are powerful narratives of resilience,
                    perseverance, and hope. These individuals{' '}
                    <span className="font-bold text-4xl font-light">
                      {' '}
                      &gt;&gt;{' '}
                    </span>{' '}
                  </a>
                </div>
              </div>
              <div
                className="bg-white w-full sm:w-1/3 hover:bg-yellow-100 hover:drop-shadow-2xl"
                style={{
                  boxShadow:
                    '4px 4px 8px rgba(10, 214, 3, 0.350), -4px -4px 8px rgba(10, 214, 3, 0.350)',
                }}
              >
                <img
                  src={difImage1}
                  alt="Cure SMA Bangladesh"
                  className="w-full h-auto"
                />
                <div className="px-8 text-center my-8">
                  <a
                    href=""
                    className="text-xl lg:text-2xl leading-8 text-pColor hover:underline"
                  >
                    SMA patient stories are powerful narratives of resilience,
                    perseverance, and hope. These individuals{' '}
                    <span className="font-bold text-4xl font-light">
                      {' '}
                      &gt;&gt;{' '}
                    </span>{' '}
                  </a>
                </div>
              </div>
              <div
                className="bg-white w-full sm:w-1/3 hover:bg-yellow-100 hover:drop-shadow-2xl"
                style={{
                  boxShadow:
                    '4px 4px 8px rgba(10, 214, 3, 0.350), -4px -4px 8px rgba(10, 214, 3, 0.350)',
                }}
              >
                <img
                  src={difImage1}
                  alt="Cure SMA Bangladesh"
                  className="w-full h-auto"
                />
                <div className="px-8 text-center my-8">
                  <a
                    href=""
                    className="text-xl lg:text-2xl leading-8 text-pColor hover:underline"
                  >
                    SMA patient stories are powerful narratives of resilience,
                    perseverance, and hope. These individuals{' '}
                    <span className="font-bold text-4xl font-light">
                      {' '}
                      &gt;&gt;{' '}
                    </span>{' '}
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center pt-8 pb-16">
              <a href="" className="pBtn bg-pColor/50">
                Read all patient stories
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Blog post */}
      <div className="px-8">
        <div className="mb-16">
          <h1 className="text-center text-2xl lg:text-4xl font-bold underline">
            Recent Blogs
          </h1>
        </div>
        <div
          id="child_Section"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 mb-10"
        >
          {/* news cart 1 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full lg:w-[800px] h-[220px] lg:h-[300px] xl:h-[220px] overflow-hidden rounded-tr-[50px]"
                src={difImage1}
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="blog_single.html">
                  Let's Organize, resist and be aware about SMA
                </a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
          {/* news cart 2 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full lg:w-[800px] h-[220px] lg:h-[300px] xl:h-[220px] overflow-hidden rounded-tr-[50px]"
                src={difImage1}
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="blog_single.html">
                  Let's Organize, resist and be aware about SMA
                </a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
          {/* news cart 3 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full lg:w-[800px] h-[220px] lg:h-[300px] xl:h-[220px] overflow-hidden rounded-tr-[50px]"
                src={difImage1}
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="blog_single.html">
                  Let's Organize, resist and be aware about SMA
                </a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
          {/* news cart 4 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full lg:w-[800px] h-[220px] lg:h-[300px] xl:h-[220px] overflow-hidden rounded-tr-[50px]"
                src={difImage1}
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="blog_single.html">
                  Let's Organize, resist and be aware about SMA
                </a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="text-center">
            <a
              href=""
              className="text-4xl font-light text-pColor hover:underline "
            >
              See all blogs &gt;&gt;
            </a>
          </div>
        </div>
      </div>
      {/* Subscribe Newsletter */}
      <div className="bg-pColor/20">
        <div className="mb-10">
          <div className="px-8 py-16 drop-shadow-lg">
            <div>
              <h1 className="text-center text-2xl lg:text-4xl font-bold text-pColor">
                SUBSCRIBE TO OUR NEWSLETTER
              </h1>
            </div>
            <div className="lg:flex justify-center mt-8 gap-2">
              <div className="border-4 border-pColor rounded-l-full ">
                <label htmlFor="sub_name" />
                <input
                  type="text"
                  id="sub_name"
                  placeholder="Full Name"
                  className="h-10 lg:h-16 w-full lg:w-96 pl-4 rounded-l-full placeholder-pColor/50 text-xl focus:placeholder-white"
                />
              </div>
              <div className="border-4 border-pColor my-4 lg:my-0">
                <label htmlFor="sub_email" />
                <input
                  type="text"
                  id="sub_email"
                  placeholder="emailaddress@example.com"
                  className="h-10 lg:h-16 w-full lg:w-96 pl-4 placeholder-pColor/50 focus:placeholder-white text-xl"
                />
              </div>
              <div>
                <a href="">
                  <button
                    style={{ background: '#08a268' }}
                    className="pBtn py-3 lg:py-5 bg-pColor text-white rounded-l-none rounded-r-full px-8 hover:bg-yColor hover:text-black font-bold hover:border-2 border-pColor "
                  >
                    SUBSCRIBE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* others section add */}
    </main>
  );
};

export default Home;
