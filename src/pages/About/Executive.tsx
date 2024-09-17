import img1 from '/images/1.-Mohammad-Shahadat-Hossain,-President.jpg';
import img2 from '/images/2.-Hasan-Mahmud,-Vice-President.jpg';
import img3 from '/images/3.-MST-Tanzina-Afrin,-General-Secretary.jpg';
import img4 from '/images/4.-Md-Omar-Faruq,-Treasurer.jpg';
import img5 from '/images/5.-Prof.-Md-Maksudur-Rahman-Sarker,-FCMA,-Executive-Member.jpg';
import img6 from '/images/6.-Md-Saiful-Alam,-Executive-Member.jpg';
import img7 from '/images/7.-Shahin-Akter-Shanu,-Executive-Member.jpg';

const Executive = () => {
  return (
    <div>
      {/* Banner */}
      <div className="bg-lime-300 font-poppins md:py-16">
        <div className="drop-shadow-2xl bg-gradient-to-r from-white/20 via-white to-white/20 ...">
          <h1 className="text-center text-2xl md:text-5xl">
            EXECUTIVE COMMITTEE
          </h1>
        </div>
      </div>
      {/* Executive committee */}
      <div className="mx-8 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between py-20">
        <div className="bg-lime-200 p-4 drop-shadow-lg hover:bg-black/10 hover:shadow-xl ease-in-out duration-1000">
          <div className="lg:flex bg-white/75 rounded-b-xl lg:rounded-r-xl drop-shadow-lg items-center lg:pr-4">
            <div className="lg:mr-6 lg:border-r-8 lg:border-pColor">
              <img
                className="w-full lg:w-40"
                src={img1}
                alt="cure-sma-bd-hasan-mahmud"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-lg lg:text-2xl font-semibold">
                <span className="hidden xl:inline">Mohammad </span>Shahadat
                Hossain
              </h2>
              <h3 className="text-lg lg:text-xl font-semibold">President</h3>
              <h3 className="text-base lg:text-lg font-semibold">
                Contact: +880 1716-912288
              </h3>
              <div className="flex gap-3 justify-center lg:justify-start font-bold mt-2 items-center">
                <a href="#">
                  <i
                    className="fab social-a fa-facebook text-3xl pr-5 hover:text-[#3b5998]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-linkedin text-3xl pr-5 hover:text-[#0A66C2]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-youtube text-3xl pr-5 hover:text-[#CD201F]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-instagram text-3xl hover:text-orange-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lime-200 p-4 drop-shadow-lg hover:bg-black/10 hover:shadow-xl ease-in-out duration-1000">
          <div className="lg:flex bg-white/75 rounded-b-xl lg:rounded-r-xl drop-shadow-lg items-center lg:pr-4">
            <div className="lg:mr-6 lg:border-r-8 lg:border-pColor">
              <img
                className="w-full lg:w-40"
                src={img2}
                alt="cure-sma-bd-hasan-mahmud"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-lg lg:text-2xl font-semibold">
                Hasan Mahmud
              </h2>
              <h3 className="text-lg lg:text-xl font-semibold">
                Vice-President
              </h3>
              <h3 className="text-base lg:text-lg font-semibold">
                Contact: +880 1911-272172
              </h3>
              <div className="flex gap-3 justify-center lg:justify-start font-bold mt-2 items-center">
                <a href="#">
                  <i
                    className="fab social-a fa-facebook text-3xl pr-5 hover:text-[#3b5998]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-linkedin text-3xl pr-5 hover:text-[#0A66C2]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-youtube text-3xl pr-5 hover:text-[#CD201F]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-instagram text-3xl hover:text-orange-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lime-200 p-4 drop-shadow-lg hover:bg-black/10 hover:shadow-xl ease-in-out duration-1000">
          <div className="lg:flex bg-white/75 rounded-b-xl lg:rounded-r-xl drop-shadow-lg items-center lg:pr-4">
            <div className="lg:mr-6 lg:border-r-8 lg:border-pColor">
              <img
                className="w-full lg:w-40"
                src={img3}
                alt="cure-sma-bd-mst-tanzina-afrin"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-lg lg:text-2xl font-semibold">
                MST Tanzina Afrin
              </h2>
              <h3 className="text-lg lg:text-xl font-semibold">
                General Secretary
              </h3>
              <h3 className="text-base lg:text-lg font-semibold">
                Contact: +880 1770-740187
              </h3>
              <div className="flex gap-3 justify-center lg:justify-start font-bold mt-2 items-center">
                <a href="#">
                  <i
                    className="fab social-a fa-facebook text-3xl pr-5 hover:text-[#3b5998]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-linkedin text-3xl pr-5 hover:text-[#0A66C2]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-youtube text-3xl pr-5 hover:text-[#CD201F]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-instagram text-3xl hover:text-orange-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lime-200 p-4 drop-shadow-lg hover:bg-black/10 hover:shadow-xl ease-in-out duration-1000">
          <div className="lg:flex bg-white/75 rounded-b-xl lg:rounded-r-xl drop-shadow-lg items-center lg:pr-4">
            <div className="lg:mr-6 lg:border-r-8 lg:border-pColor">
              <img
                className="w-full lg:w-40"
                src={img4}
                alt="cure-sma-bd-md-omar-faruq"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-lg lg:text-2xl font-semibold">
                Md Omar Faruq
              </h2>
              <h3 className="text-lg lg:text-xl font-semibold">Treasurer</h3>
              <h3 className="text-base lg:text-lg font-semibold">
                Contact: +880 1914-450546
              </h3>
              <div className="flex gap-3 justify-center lg:justify-start font-bold mt-2 items-center">
                <a href="#">
                  <i
                    className="fab social-a fa-facebook text-3xl pr-5 hover:text-[#3b5998]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-linkedin text-3xl pr-5 hover:text-[#0A66C2]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-youtube text-3xl pr-5 hover:text-[#CD201F]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-instagram text-3xl hover:text-orange-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lime-200 p-4 drop-shadow-lg hover:bg-black/10 hover:shadow-xl ease-in-out duration-1000">
          <div className="lg:flex bg-white/75 rounded-b-xl lg:rounded-r-xl drop-shadow-lg items-center lg:pr-4">
            <div className="lg:mr-6 lg:border-r-8 lg:border-pColor">
              <img
                className="w-full lg:w-40"
                src={img5}
                alt="cure-sma-bd-prof.-Md-Maksudur-Rahman-Sarker"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-lg lg:text-2xl font-semibold">
                Prof. Md Maksudur Rahman Sarker,FCMA
              </h2>
              <h3 className="text-lg lg:text-xl font-semibold">
                Executive Member
              </h3>
              <h3 className="text-base lg:text-lg font-semibold">
                Contact: +880 1711-319215
              </h3>
              <div className="flex gap-3 justify-center lg:justify-start font-bold mt-2 items-center">
                <a href="#">
                  <i
                    className="fab social-a fa-facebook text-3xl pr-5 hover:text-[#3b5998]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-linkedin text-3xl pr-5 hover:text-[#0A66C2]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-youtube text-3xl pr-5 hover:text-[#CD201F]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-instagram text-3xl hover:text-orange-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lime-200 p-4 drop-shadow-lg hover:bg-black/10 hover:shadow-xl ease-in-out duration-1000">
          <div className="lg:flex bg-white/75 rounded-b-xl lg:rounded-r-xl drop-shadow-lg items-center lg:pr-4">
            <div className="lg:mr-6 lg:border-r-8 lg:border-pColor">
              <img
                className="w-full lg:w-40"
                src={img6}
                alt="cure-sma-bd-md-saiful-alam"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-lg lg:text-2xl font-semibold">
                Md Saiful Alam
              </h2>
              <h3 className="text-lg lg:text-xl font-semibold">
                Executive Member
              </h3>
              <h3 className="text-base lg:text-lg font-semibold">
                Contact: +880 1724-991133
              </h3>
              <div className="flex gap-3 justify-center lg:justify-start font-bold mt-2 items-center">
                <a href="#">
                  <i
                    className="fab social-a fa-facebook text-3xl pr-5 hover:text-[#3b5998]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-linkedin text-3xl pr-5 hover:text-[#0A66C2]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-youtube text-3xl pr-5 hover:text-[#CD201F]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-instagram text-3xl hover:text-orange-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lime-200 p-4 drop-shadow-lg hover:bg-black/10 hover:shadow-xl ease-in-out duration-1000">
          <div className="lg:flex bg-white/75 rounded-b-xl lg:rounded-r-xl drop-shadow-lg items-center lg:pr-4">
            <div className="lg:mr-6 lg:border-r-8 lg:border-pColor">
              <img
                className="w-full lg:w-40"
                src={img7}
                alt="cure-sma-bd-shahin-akter-shanu"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-lg lg:text-2xl font-semibold">
                Shahin Akter <span className="hidden xl:inline">Shanu</span>
              </h2>
              <h3 className="text-lg lg:text-xl font-semibold">
                Executive Member
              </h3>
              <h3 className="text-base lg:text-lg font-semibold">
                Contact: +880 1553-350892
              </h3>
              <div className="flex gap-3 justify-center lg:justify-start font-bold mt-2 items-center">
                <a href="#">
                  <i
                    className="fab social-a fa-facebook text-3xl pr-5 hover:text-[#3b5998]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-linkedin text-3xl pr-5 hover:text-[#0A66C2]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-youtube text-3xl pr-5 hover:text-[#CD201F]"
                    aria-hidden="true"
                  />
                </a>
                <a href="#">
                  <i
                    className="fab social-a fa-instagram text-3xl hover:text-orange-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Executive;
