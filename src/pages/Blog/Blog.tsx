import { Link } from 'react-router-dom';
import difImage1 from '/images/dif_image_1.png';

const Blog = () => {
  return (
    <>
      {/* text banner */}
      <div className="bg-pColor font-poppins md:py-16 my-2 skeleton">
        <div className="drop-shadow-2xl bg-gradient-to-r from-white/20 via-white to-white/20 ...">
          <h1 className="text-center text-2xl md:text-5xl pb-5">
            CURE SMA BANGLADESH
          </h1>
          <h1 className="text-center font-bold text-4xl md:text-6xl text-pColor gradient-text drop-shadow-xl">
            BLOG
          </h1>
        </div>
      </div>
      {/* blog section */}
      <div className="flex flex-col xl:flex-row mx-8">
        {/* Left side */}
        <div className="w-full xl:w-9/12 flex flex-col gap-6 my-8 items-center lg:mr-12">
          {/* Card Component */}
          <div className="flex flex-col lg:flex-row border-2 rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-[#F2F2F3] hover:bg-lime-200/20 hover:border-2 hover:border-pColor">
            {/* Image */}
            <div className="w-full overflow-hidden lg:rounded-bl-[50px] rounded-tr-[50px] md:rounded-tr-[0px] rounded-tr-[50px] md:rounded-tr-[0px] ">
              <img
                src={difImage1}
                alt="Cure SMA Bangladesh"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-4 lg:pr-20 lg:pl-8">
              <Link to={`/cure-sma-bd-blog/1`}
               
                className="text-lg lg:text-xl text-pColor text-justify hover:underline"
              >
                Cure SMA Launches Request for Proposals for SMA Research
                Projects and Postdoctoral Fellowships
              </Link>
              <h3 className="text-sm lg:text-base py-2">August 2, 2024</h3>
              <h4 className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <Link to={`/cure-sma-bd-blog-category/category`} className="text-pColor underline">
                  Events
                </Link>
              </h4>
              <p className="py-2 text-justify text-sm lg:text-base">
                Whether you have SMA, have a loved one with SMA, are a
                researcher, care provider, industry partner, or are new to the
                SMA community, SMA Awareness Month is a time to come […]
              </p>
              <a
                href="cure_sma_bd_cure-sma-bd-blog-single "
                className="hover:text-pColor text-sm lg:text-base"
              >
                Read More &gt;{' '}
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-2 rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-[#F2F2F3] hover:bg-lime-200/20 hover:border-2 hover:border-pColor">
            {/* Image */}
            <div className="w-full overflow-hidden lg:rounded-bl-[50px] rounded-tr-[50px] md:rounded-tr-[0px] rounded-tr-[50px] md:rounded-tr-[0px] ">
              <img
                src={difImage1}
                alt="Cure SMA Bangladesh"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-4 lg:pr-20 lg:pl-8">
              <a
                href="#"
                className="text-lg lg:text-xl text-pColor text-justify hover:underline"
              >
                Cure SMA Launches Request for Proposals for SMA Research
                Projects and Postdoctoral Fellowships
              </a>
              <h3 className="text-sm lg:text-base py-2">August 2, 2024</h3>
              <h4 className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </h4>
              <p className="py-2 text-justify text-sm lg:text-base">
                Whether you have SMA, have a loved one with SMA, are a
                researcher, care provider, industry partner, or are new to the
                SMA community, SMA Awareness Month is a time to come […]
              </p>
              <a href="#" className="hover:text-pColor text-sm lg:text-base">
                Read More &gt;{' '}
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-2 rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-[#F2F2F3] hover:bg-lime-200/20 hover:border-2 hover:border-pColor">
            {/* Image */}
            <div className="w-full overflow-hidden lg:rounded-bl-[50px] rounded-tr-[50px] md:rounded-tr-[0px] rounded-tr-[50px] md:rounded-tr-[0px] ">
              <img
                src={difImage1}
                alt="Cure SMA Bangladesh"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-4 lg:pr-20 lg:pl-8">
              <a
                href="#"
                className="text-lg lg:text-xl text-pColor text-justify hover:underline"
              >
                Cure SMA Launches Request for Proposals for SMA Research
                Projects and Postdoctoral Fellowships
              </a>
              <h3 className="text-sm lg:text-base py-2">August 2, 2024</h3>
              <h4 className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </h4>
              <p className="py-2 text-justify text-sm lg:text-base">
                Whether you have SMA, have a loved one with SMA, are a
                researcher, care provider, industry partner, or are new to the
                SMA community, SMA Awareness Month is a time to come […]
              </p>
              <a href="#" className="hover:text-pColor text-sm lg:text-base">
                Read More &gt;{' '}
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-2 rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-[#F2F2F3] hover:bg-lime-200/20 hover:border-2 hover:border-pColor">
            {/* Image */}
            <div className="w-full overflow-hidden lg:rounded-bl-[50px] rounded-tr-[50px] md:rounded-tr-[0px] rounded-tr-[50px] md:rounded-tr-[0px] ">
              <img
                src={difImage1}
                alt="Cure SMA Bangladesh"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-4 lg:pr-20 lg:pl-8">
              <a
                href="#"
                className="text-lg lg:text-xl text-pColor text-justify hover:underline"
              >
                Cure SMA Launches Request for Proposals for SMA Research
                Projects and Postdoctoral Fellowships
              </a>
              <h3 className="text-sm lg:text-base py-2">August 2, 2024</h3>
              <h4 className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </h4>
              <p className="py-2 text-justify text-sm lg:text-base">
                Whether you have SMA, have a loved one with SMA, are a
                researcher, care provider, industry partner, or are new to the
                SMA community, SMA Awareness Month is a time to come […]
              </p>
              <a href="#" className="hover:text-pColor text-sm lg:text-base">
                Read More &gt;{' '}
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-2 rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-[#F2F2F3] hover:bg-lime-200/20 hover:border-2 hover:border-pColor">
            {/* Image */}
            <div className="w-full overflow-hidden lg:rounded-bl-[50px] rounded-tr-[50px] md:rounded-tr-[0px] rounded-tr-[50px] md:rounded-tr-[0px] ">
              <img
                src={difImage1}
                alt="Cure SMA Bangladesh"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-4 lg:pr-20 lg:pl-8">
              <a
                href="#"
                className="text-lg lg:text-xl text-pColor text-justify hover:underline"
              >
                Cure SMA Launches Request for Proposals for SMA Research
                Projects and Postdoctoral Fellowships
              </a>
              <h3 className="text-sm lg:text-base py-2">August 2, 2024</h3>
              <h4 className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </h4>
              <p className="py-2 text-justify text-sm lg:text-base">
                Whether you have SMA, have a loved one with SMA, are a
                researcher, care provider, industry partner, or are new to the
                SMA community, SMA Awareness Month is a time to come […]
              </p>
              <a href="#" className="hover:text-pColor text-sm lg:text-base">
                Read More &gt;{' '}
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="btn join-item">1</button>
            <button className="btn join-item">2</button>
            <button className="btn join-item btn-disabled">...</button>
            <button className="btn join-item">4</button>
            <button className="btn join-item">5</button>
          </div>
        </div>
        {/* Right side */}
        <div className="w-full xl:w-3/12 my-8 border-l-2 border-fColor pl-12 lg:pl-8">
          <div>
            <h1 className="text-2xl lg:text-4xl mb-4 font-light">Category</h1>
            <hr />
            <ul className="mt-5 pl-5 list-disc text-lg lg:text-xl text-pColor">
              <li>
                <a
                  href="cure_sma_bd_blog_category "
                  className="hover:underline hover:text-black/50"
                >
                  Conference
                </a>
              </li>
              <li>
                <a
                  href="cure_sma_bd_blog_category "
                  className="hover:underline hover:text-black/50"
                >
                  Rally
                </a>
              </li>
              <li>
                <a
                  href="cure_sma_bd_blog_category "
                  className="hover:underline hover:text-black/50"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl lg:text-4xl mt-20 mb-4 font-light">
              Recent Post
            </h1>
            <hr />
            <ul className="mt-5 pl-5 list-disc text-lg lg:text-xl text-pColor">
              <li>
                <a
                  href="cure-sma-bd-blog-single "
                  className="hover:underline hover:text-black/50"
                >
                  Cure SMA Launches Request for Proposals for SMA Research
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="cure-sma-bd-blog-single "
                  className="hover:underline hover:text-black/50"
                >
                  Cure SMA Launches Request for Proposals for SMA Research
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="cure-sma-bd-blog-single "
                  className="hover:underline hover:text-black/50"
                >
                  Cure SMA Launches Request for Proposals for SMA Research
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
