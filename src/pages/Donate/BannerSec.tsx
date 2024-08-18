import img1 from '/images/donate-banner.png';
const BannerSec = () => {
  return (
    <div className="bg-[#F2F2F3] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            CURE SMA <br />
            BANGLADESH
          </h1>
          <h4 className="text-lg xl:text-xl mt-3">
            A REGISTERED PUBLIC CHARITABLE FOUNDATION
          </h4>
        </div>
        <div className="md:w-1/2">
          <img className="w-full h-auto" src={img1} alt="Cure SMA Bangladesh" />
        </div>
      </div>
    </div>
  );
};

export default BannerSec;
