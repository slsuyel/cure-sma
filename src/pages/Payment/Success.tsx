import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const transId = searchParams.get('transId');
  console.log(transId);

  useEffect(() => {}, []);

  return (
    <div className="text-center my-10">
      <div className="flex flex-col items-center">
        <img
          src="https://forhadhub.github.io/CSMA-Web/src/images/thank_you.jpg"
          alt="Cure SMA Bangladesh"
          className="mb-5"
        />

        <h1 className="text-pink-500 text-xl md:text-3xl drop-shadow-md pb-5 italic">
          <i className="fa-solid fa-heart-circle-check" /> for you invaluable
          contribution <i className="fa-solid fa-heart-circle-check" />
        </h1>

        <Link to={''}>
          <button className="text-xl md:text-2xl btn bg-pink-500/25 hover:bg-pink-500 btn-lg drop-shadow-lg border-2 border-pink-500 hover:text-white">
            <i className="fa-solid fa-receipt" /> Click here &amp; get your
            invoice
          </button>
        </Link>
        <h2 className="py-5 text-pfont text-lg">
          Please check the email for further instruction
        </h2>

        <div className="flex space-x-4 mb-5">
          <a href="#">
            <i className="fab fa-facebook bg-white text-5xl hover:text-[#3b5998]" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin bg-white text-5xl hover:text-[#0A66C2]" />
          </a>
          <a href="#">
            <i className="fab fa-youtube bg-white text-5xl hover:text-[#CD201F]" />
          </a>
          <a href="#">
            <i className="fab fa-instagram bg-white text-5xl hover:text-orange-500" />
          </a>
        </div>

        <h2 className="py-5 text-pfont text-lg">
          Didn't receive the email yet?{' '}
          <a
            href="cure-sma-bd-member-registration.html"
            className="text-blue-400"
          >
            Click here to try again
          </a>{' '}
          or,{' '}
          <a href="contactus.html" className="text-blue-400">
            Contact us
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Success;
