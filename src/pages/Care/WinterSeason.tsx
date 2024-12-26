const WinterSeason = () => {
  return (
    <section className="md:mx-8 bg-gradient-to-r from-white via-red-200 to white/50 font-tirobangla">
      <div className="lg:px-16">
        {/* Title */}
        <div className="py-8">
          <img
            className="mx-auto w-24 md:w-48"
            src="https://forhadhub.github.io/CSMA-Web/src/images/logo_CSMA.png"
            alt="logo-cure-sma-bangladesh"
          />
          <p className="border-b-4 border-red-400 my-4" />
          <h1 className="text-2xl md:text-3xl text-center text-red-500 font-semibold drop-shadow-lg">
            Care for Winter Season
          </h1>
        </div>
        {/* এসএমএ রোগীদের জন্য শীতের প্রস্তুতি */}
        <div>
          <h2 className="w-full text-base lg:text-lg text-center px-8 py-2 text-white bg-gradient-to-r from-white via-red-600 to-white font-bold">
            এসএমএ রোগীদের জন্য শীতের প্রস্তুতি
          </h2>
        </div>
        <div className="px-8 py-4">
          <p className="text-center font-semibold text-sm md:text-lg ">
            শীত মানেই উৎসবের ঋতু। শীত এলেই চারপাশে দেখা যায় ছুটির আমেজ। এসএমএ
            রোগী ও তাদের পরিবারের জন্য শীতকাল হলো আশু ঠান্ডা ও এ থেকে সম্ভাব্য
            রোগের আক্রমণ থেকে নিরাপত্তা প্রস্তুতির জন্য গুরুতর সতর্ক বার্তা। শীত
            মৌসুম শুরুর আগেই প্রস্তুতি নিতে হবে। আর এ প্রস্তুতি অক্টোবরের শেষে
            বা নভেম্বরের শুরুতেই সম্পন্ন হওয়া উচিত। চিকিৎসকদের সাথে পরামর্শ করে
            একটি পরিপূর্ণ পরিকল্পনা তৈরি করা প্রয়োজন।
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between py-10 px-10 relative gap-4">
          <div className="md:flex items-center">
            <div className="drop-shadow-lg">
              <img
                className="w-48 mx-auto rounded-full border-8 border-red-400 p-2 bg-red-200"
                src="https://forhadhub.github.io/CSMA-Web/src/images/wc-cure-sma-bd-avoid-people.jpg"
                alt="cure-sma-bd-avoid-people"
              />
            </div>
            <div className="-mt-14 md:-mt-0 md:-ml-14 w-full bg-white/50 md:w-[550px] pl-2 pt-16 md:pt-4 md:pl-16 pr-2 rounded-2xl border-4 border-red-400 py-4 text-center md:text-left text-sm md:text-lg ">
              <h2 className="font-semibold pb-2 text-red-500 underline">
                অসুস্থ ব্যক্তিদের এড়িয়ে চলা
              </h2>
              <p>
                এসএমএ রোগীদের জন্য ফ্লু ভাইরাস প্রাণঘাতী হতে পারে। একজন থেকে
                অন্যজনের মধ্যে ফ্লু ভাইরাস ছড়াতে পারে। প্রায়শই এ ভাইরাসটি
                নিউমোনিয়ায় পরিণত হয়। ঠান্ডাজনিত রোগে ভুগছে এমন ব্যক্তির কাছ
                থেকে এসএমএ রোগীকে নিরাপদ দূরত্বে রাখতে হবে।
              </p>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="drop-shadow-lg">
              <img
                className="w-48 mx-auto rounded-full border-8 border-red-400 p-2 bg-red-200"
                src="https://forhadhub.github.io/CSMA-Web/src/images/wc-cure-sma-bd-injection.jpg"
                alt="cure-sma-bd-avoid-people"
              />
            </div>
            <div className="-mt-14 md:-mt-0 md:-ml-14 w-full bg-white/50  md:w-[550px] pl-2 pt-16 md:pt-4 md:pl-16 pr-2 rounded-2xl border-4 border-red-400 py-4 text-center md:text-left text-sm md:text-lg ">
              <h2 className="font-semibold pb-2 text-red-500 underline">
                টিকা নিশ্চিত করুন
              </h2>
              <p>
                নিচের ভাইরাসগুলোর জন্য টিকা নিশ্চিত করুন যা রোগীকে শীতকালে সুস্থ
                রাখবে। <br /> -ইনফ্লুয়েঞ্জা -কোভিড -নিউমোনিয়া <br />
                *নিউমোনিয়ার টিকা বছরে একবার বা ডাক্তারের পরামর্শ অনুযায়ী
                দেওয়া যায়
              </p>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="drop-shadow-lg">
              <img
                className="w-48 mx-auto rounded-full border-8 border-red-400 p-2 bg-red-200"
                src="https://forhadhub.github.io/CSMA-Web/src/images/wc-cure-sma-bd-mask.jpg"
                alt="cure-sma-bd-avoid-people"
              />
            </div>
            <div className="-mt-14 md:-mt-0 md:-ml-14 w-full  bg-white/50 md:w-[550px] pl-2 pt-16 md:pt-4 md:pl-16 pr-2 rounded-2xl border-4 border-red-400 py-4 text-center md:text-left text-sm md:text-lg ">
              <h2 className="font-semibold pb-2 text-red-500 underline">
                মাস্ক পরিধান করা
              </h2>
              <p>
                মুখে মাস্ক পরলে বিভিন্ন সংক্রমণ থেকে রক্ষা পাওয়া যায়। রোগ
                প্রতিরোধ ক্ষমতা কম থাকার কারণে এসএমএ রোগীদের গুরুতর অসুস্থতার
                ঝুঁকি থাকে। শীতকালে ধুলাবালি থেকেও রক্ষা করে ফেস—মাস্ক।
              </p>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="drop-shadow-lg">
              <img
                className="w-48 mx-auto rounded-full border-8 border-red-400 p-2 bg-red-200"
                src="https://forhadhub.github.io/CSMA-Web/src/images/wc-cure-sma-bd-winter-drug.jpg"
                alt="cure-sma-bd-avoid-people"
              />
            </div>
            <div className="-mt-14 md:-mt-0 md:-ml-14 w-full bg-white/50  md:w-[550px] pl-2 pt-16 md:pt-4 md:pl-16 pr-2 rounded-2xl border-4 border-red-400 py-4 text-center md:text-left text-sm md:text-lg ">
              <h2 className="font-semibold pb-2 text-red-500 underline">
                শীতের জন্য ওষুধ
              </h2>
              <p>
                পুরো শীতকাল জুড়ে ডাক্তারের পরামর্শ অনুযায়ী ও প্রয়োজন মোতাবেক
                কিছু জরুরি ওষুধ, নেবুলাইজার ও ইনহেলার কাছে রাখুন।
              </p>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="drop-shadow-lg">
              <img
                className="w-48 mx-auto rounded-full border-8 border-red-400 p-2 bg-red-200"
                src="https://forhadhub.github.io/CSMA-Web/src/images/wc-cure-sma-bd-winter-dress.jpg"
                alt="cure-sma-bd-avoid-people"
              />
            </div>
            <div className="-mt-14 md:-mt-0 md:-ml-14 w-full bg-white/50  md:w-[550px] pl-2 pt-16 md:pt-4 md:pl-16 pr-2 rounded-2xl border-4 border-red-400 py-4 text-center md:text-left text-sm md:text-lg ">
              <h2 className="font-semibold pb-2 text-red-500 underline">
                ঠান্ডায় পরিধেয়
              </h2>
              <p>
                রোগীকে সঠিক কাপড় পরান যা শরীর, বিশেষ করে বুক ও মাথা উষ্ণ রাখে।
              </p>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="drop-shadow-lg">
              <img
                className="w-48 mx-auto rounded-full border-8 border-red-400 p-2 bg-red-200"
                src="https://forhadhub.github.io/CSMA-Web/src/images/wc-cure-sma-bd-winter-guard.jpg"
                alt="cure-sma-bd-avoid-people"
              />
            </div>
            <div className="-mt-14 md:-mt-0 md:-ml-14 w-full bg-white/50  md:w-[550px] pl-2 pt-16 md:pt-4 md:pl-16 pr-2 rounded-2xl border-4 border-red-400 py-4 text-center md:text-left text-sm md:text-lg">
              <h2 className="font-semibold pb-2 text-red-500 underline">
                রোগ প্রতিরোধ ক্ষমতা ঠিক রাখুন
              </h2>
              <p>
                প্রয়োজনীয় ভিটামিন প্রদান করুন, প্রচুর তরল পান করান এবং
                স্বাস্থ্যকর খাবার খাওয়ান যা রোগীর রোগ প্রতিরোধ ক্ষমতা ঠিক
                রাখবে।
              </p>
            </div>
          </div>
        </div>
        {/* Download About SMA Leaflet */}
        <div className="px-8 pt-10 pb-20 text-center">
          <button className="px-4 py-3 rounded-xl bg-red-300 text-pfont drop-shadow-lg hover:bg-green-800 hover:text-white hover:translate-y-1 hover:duration-1000">
            <a
              target="_blank"
              className="text-2xl md:text-4xl leading-normal"
              href="https://drive.google.com/file/d/1IUirRndaFA_wRRBffvmDAiMiYRtDj65p/view?usp=sharing"
            >
              <span className="font-bold">
                <i className="fa-solid fa-download fa-bounce" /> Download:{' '}
              </span>
              <br />
              <span className="text-lg md:text-2xl">
                Care for Winter Season Leaflet
              </span>
            </a>
          </button>
        </div>
        <div className="px-8 py-4 drop-shadow-md">
          <p className="bg-yellow-100/75 p-2 rounded-2xl text-red-500 text-center font-medium italic text-sm md:text-lg ">
            উক্ত নির্দেশিকাটি ‘কিউর এসএমএ বাংলাদেশ ফাউন্ডেশন’ দ্বারা
            প্রস্তুতকৃত। এই নির্দেশিকা অনুসরণ করার পূর্বে চিকিৎসকের পরামর্শ
            নেওয়ার জন্য অনুরোধ করা হচ্ছে। - কিউর এসএমএ বাংলাদেশ ফাউন্ডেশন
          </p>
        </div>
      </div>
    </section>
  );
};

export default WinterSeason;
