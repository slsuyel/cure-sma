import { useState } from 'react';
import DonateModal from './DonateModal';

const SocialShare = () => {
  const [modal, setModal] = useState(false);

  return (
    <div style={{ zIndex: 10000 }}>
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 mt-6 mr-4 sm:mr-6 md:mr-10 lg:mr-12 ease-in-out duration-1000">
        <div className="w-10 hover:w-14 text-center bg-lime-100/50 border-2 border-pColor rounded-lg drop-shadow-xl hover:bg-slate-200 ease-in-out duration-30 ]">
          <p>
            <i className="fa-solid fa-thumbtack text-red-600 py-2 text-lg sm:text-xl md:text-2xl drop-shadow-lg" />
          </p>
          <hr />
          <hr />
          <hr />
          <p>
            <a
              href="https://www.facebook.com/CureSMABangladesh"
              target="_blank"
            >
              <i className="fab social-a fa-facebook py-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#3b5998] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/CureSMABangladesh"
              target="_blank"
            >
              <i className="fab social-a fa-linkedin text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#0A66C2] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/@CureSMABangladesh"
              target="_blank"
            >
              <i className="fab social-a fa-youtube py-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#CD201F] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/@CureSMABangladesh"
              target="_blank"
            >
              <i className="fab social-a fa-instagram pb-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-orange-500 hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a
              href="https://api.whatsapp.com/send?phone=8801841118486"
              target="_blank"
            >
              <i className="fab social-a fa-whatsapp pb-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#25D366] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
        </div>
      </div>
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 mt-6  drop-shadow-xl transition duration-300 hover:scale-125 hover:translate-x-2 ease-in-out duration-1000">
        <div className="text-center bg-white/40 rounded-r-lg hover:text-pColor hover:bg-yellow-100/50 hover:border-pColor ease-in-out duration-30 px-1 pt-2 text-red-500 border-r-4 border-t-2 border-b-2 border-lg border-red-500 ease-in-out duration-1000">
          <button className="text-md font-bold" onClick={() => setModal(true)}>
            <p className="text-4xl">
              <i className="fa-solid fa-hand-holding-heart fa-beat" />
            </p>
            <span className="hidden md:inline">Save Us</span>
          </button>
        </div>
      </div>
      {modal && <DonateModal closeModal={() => setModal(false)} />}
    </div>
  );
};

export default SocialShare;
