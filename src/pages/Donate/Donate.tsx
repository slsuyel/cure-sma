const Donate = () => {
  return (
    <>
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
            <img
              className="w-full h-auto"
              src="./src/images/donate-banner.png"
              alt="Cure SMA Bangladesh"
            />
          </div>
        </div>
      </div>
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
        <div>
          <div>
            <img
              className="rounded-xl"
              src="./src/images/Nabonee.jpg"
              alt="Cure SMA Bangladesh"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold py-2">Nabonee</h2>
            <p className="text-justify pb-4">
              Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
              support to continue her treatment{' '}
              <a
                className="text-red-600 px-2 py-1 bg-red-200 rounded-md hover:shadow-sm hover:shadow-red-600"
                href="#"
              >
                See More
              </a>{' '}
            </p>
            <div className="pb-4">
              <h4 className="font-semibold pb-1 text-base">
                Annual cost: <span>1700$</span>
              </h4>
              <h4 className="font-semibold pb-1 text-base">
                Total Collection: <span>105$</span>
                <span>(Tk. 17000)</span>
              </h4>
            </div>
          </div>
          {/* progress bar */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-8 mb-4 mx-auto rounded-lg border-2 border-red-400 shadow-inner text-center">
              <div className="absolute top-0 left-0 h-full rounded-lg bg-pColor progress-bar-animation">
                {/* Progress Bar */}
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-base font-semibold fadein">
                  $50,000
                </h3>
              </div>
              {/* Goal Text */}
              <h3 className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-pColor text-base font-semibold">
                $100,000
              </h3>
            </div>
          </div>
          <div>
            <button className="btn btn-wide text-2xl bg-orange-600 text-white w-full hover:bg-pColor hover:shadow-md hover:shadow-black hover:translate-y-1 hover:duration-[.5s]">
              Donate
            </button>
          </div>
          {/* Selected child donation modal */}
          <dialog id="SCdonate_modal" className="modal">
            <div className="modal-box bg-slate-200 max-w-full md:max-w-4xl lg:max-w-3xl p-6 mx-auto">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="bg-white p-6 border-4 border-orange-600 rounded-lg">
                <div className="max-w-full flex justify-center mb-4">
                  <img
                    src="./src/images/logo_CSMA.png"
                    alt="Cure SMA Bangladesh"
                    className="w-24 h-auto"
                  />
                </div>
                <h3 className="text-xl pt-3 text-orange-600 text-center font-bold">
                  SELECTED CHILD DONATION FORM
                </h3>
                <p className="text-center font-bold mb-5">
                  Thank you for donating to our cause
                </p>
                <div id="Gdonateform">
                  <form method="post" action="/submit-donation">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col md:flex-row md:gap-4">
                        <div className="flex-1">
                          <label
                            htmlFor="Gdonateform_firstname"
                            className="label text-sm"
                          >
                            First Name
                          </label>
                          <input
                            id="Gdonateform_firstname"
                            type="text"
                            placeholder="First Name"
                            required
                            className="input border-2 border-orange-600 w-full"
                          />
                        </div>
                        <div className="flex-1 mt-4 md:mt-0">
                          <label
                            htmlFor="Gdonateform_lastname"
                            className="label text-sm"
                          >
                            Last Name
                          </label>
                          <input
                            id="Gdonateform_lastname"
                            type="text"
                            placeholder="Last Name"
                            required
                            className="input border-2 border-orange-600 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:gap-4">
                        <div className="flex-1">
                          <label
                            htmlFor="Gdonateform_contactno"
                            className="label text-sm"
                          >
                            Contact Number
                          </label>
                          <input
                            id="Gdonateform_contactno"
                            type="tel"
                            placeholder="+88 01234-567890"
                            required
                            className="input border-2 border-orange-600 w-full"
                          />
                        </div>
                        <div className="flex-1 mt-4 md:mt-0">
                          <label
                            htmlFor="Gdonateform_email"
                            className="label text-sm"
                          >
                            Email
                          </label>
                          <input
                            id="Gdonateform_email"
                            type="email"
                            placeholder="address@email.com"
                            required
                            className="input border-2 border-orange-600 w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="Gdonateform_amount"
                          className="label text-sm"
                        >
                          How much do you want to donate?
                        </label>
                        <div className="flex flex-col md:flex-row">
                          <select
                            id="Gdonateform_amount"
                            required
                            className="input border-2 border-r-0 rounded-r-none border-orange-600 md:w-1/3"
                          >
                            <option>Select</option>
                            <option value="usd">$ USD</option>
                            <option value="bdt">৳ BDT</option>
                          </select>
                          <input
                            id="Gdonateform_amount"
                            type="text"
                            placeholder="Donate Amount"
                            required
                            className="input border-2 border-l-0 rounded-l-none border-orange-600 md:w-2/3 mt-2 md:mt-0"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="Gdonateform_address"
                          className="label text-sm"
                        >
                          Address
                        </label>
                        <input
                          id="Gdonateform_address"
                          type="text"
                          placeholder="Address line 1"
                          required
                          className="input border-2 border-orange-600 w-full"
                        />
                        <input
                          id="Gdonateform_address"
                          type="text"
                          placeholder="Address line 2"
                          className="input border-2 border-orange-600 w-full mt-2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="Gdonateform_purpose"
                          className="label text-sm"
                        >
                          Purpose of Donation
                        </label>
                        <input
                          id="Gdonateform_purpose"
                          type="text"
                          placeholder="Purpose of Donation"
                          className="input border-2 border-orange-600 w-full"
                        />
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 font-bold">
                        <a
                          href="privacy-policy-for-cure-sma-bd.html"
                          className="text-sm text-blue-800 underline"
                        >
                          Privacy Policy
                        </a>
                        <a
                          href="data-protection-for-cure-sma-bd.html"
                          className="text-sm text-blue-800 underline"
                        >
                          Data Protection Statement
                        </a>
                      </div>
                      <div>
                        <h1 className="text-center mt-4">Captcha</h1>
                      </div>
                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          id="Gdonateform_agree"
                          name="Gdonateform_agree"
                          required
                          defaultValue="agree"
                          className="mr-2"
                        />
                        <label htmlFor="Gdonateform_agree" className="text-sm">
                          I agree to make a donation, and proceed to pay.
                        </label>
                      </div>
                      <div className="text-center mt-4">
                        <input
                          type="submit"
                          className="pBtn bg-orange-600 text-white"
                          defaultValue="Donation Submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </dialog>
        </div>
        <div>
          <div>
            <img
              className="rounded-xl"
              src="./src/images/Nabonee.jpg"
              alt="Cure SMA Bangladesh"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold py-2">Nabonee</h2>
            <p className="text-justify pb-4">
              Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
              support to continue her treatment{' '}
              <a
                className="text-red-600 px-2 py-1 bg-red-200 rounded-md hover:shadow-sm hover:shadow-red-600"
                href="#"
              >
                See More
              </a>{' '}
            </p>
            <div className="pb-4">
              <h4 className="font-semibold pb-1 text-base">
                Annual cost: <span>1700$</span>
              </h4>
              <h4 className="font-semibold pb-1 text-base">
                Total Collection: <span>105$</span>
                <span>(Tk. 17000)</span>
              </h4>
            </div>
          </div>
          {/* progress bar */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-8 mb-4 mx-auto rounded-lg border-2 border-red-400 shadow-inner text-center">
              <div className="absolute top-0 left-0 h-full rounded-lg bg-pColor progress-bar-animation">
                {/* Progress Bar */}
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-base font-semibold fadein">
                  $50,000
                </h3>
              </div>
              {/* Goal Text */}
              <h3 className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-pColor text-base font-semibold">
                $100,000
              </h3>
            </div>
          </div>
          <div>
            <button className="btn btn-wide text-2xl bg-orange-600 text-white w-full hover:bg-pColor hover:shadow-md hover:shadow-black hover:translate-y-1 hover:duration-[.5s]">
              Donate
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              className="rounded-xl"
              src="./src/images/Nabonee.jpg"
              alt="Cure SMA Bangladesh"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold py-2">Nabonee</h2>
            <p className="text-justify pb-4">
              Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
              support to continue her treatment{' '}
              <a
                className="text-red-600 px-2 py-1 bg-red-200 rounded-md hover:shadow-sm hover:shadow-red-600"
                href="#"
              >
                See More
              </a>{' '}
            </p>
            <div className="pb-4">
              <h4 className="font-semibold pb-1 text-base">
                Annual cost: <span>1700$</span>
              </h4>
              <h4 className="font-semibold pb-1 text-base">
                Total Collection: <span>105$</span>
                <span>(Tk. 17000)</span>
              </h4>
            </div>
          </div>
          {/* progress bar */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-8 mb-4 mx-auto rounded-lg border-2 border-red-400 shadow-inner text-center">
              <div className="absolute top-0 left-0 h-full rounded-lg bg-pColor progress-bar-animation">
                {/* Progress Bar */}
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-base font-semibold fadein">
                  $50,000
                </h3>
              </div>
              {/* Goal Text */}
              <h3 className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-pColor text-base font-semibold">
                $100,000
              </h3>
            </div>
          </div>
          <div>
            <button className="btn btn-wide text-2xl bg-orange-600 text-white w-full hover:bg-pColor hover:shadow-md hover:shadow-black hover:translate-y-1 hover:duration-[.5s]">
              Donate
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              className="rounded-xl"
              src="./src/images/Nabonee.jpg"
              alt="Cure SMA Bangladesh"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold py-2">Nabonee</h2>
            <p className="text-justify pb-4">
              Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
              support to continue her treatment{' '}
              <a
                className="text-red-600 px-2 py-1 bg-red-200 rounded-md hover:shadow-sm hover:shadow-red-600"
                href="#"
              >
                See More
              </a>{' '}
            </p>
            <div className="pb-4">
              <h4 className="font-semibold pb-1 text-base">
                Annual cost: <span>1700$</span>
              </h4>
              <h4 className="font-semibold pb-1 text-base">
                Total Collection: <span>105$</span>
                <span>(Tk. 17000)</span>
              </h4>
            </div>
          </div>
          {/* progress bar */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-8 mb-4 mx-auto rounded-lg border-2 border-red-400 shadow-inner text-center">
              <div className="absolute top-0 left-0 h-full rounded-lg bg-pColor progress-bar-animation">
                {/* Progress Bar */}
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-base font-semibold fadein">
                  $50,000
                </h3>
              </div>
              {/* Goal Text */}
              <h3 className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-pColor text-base font-semibold">
                $100,000
              </h3>
            </div>
          </div>
          <div>
            <button className="btn btn-wide text-2xl bg-orange-600 text-white w-full hover:bg-pColor hover:shadow-md hover:shadow-black hover:translate-y-1 hover:duration-[.5s]">
              Donate
            </button>
          </div>
        </div>
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
              src="./src/images/why_donate.png"
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
            <a className="text-2xl md:text-4xl leading-normal" href="#">
              Register a Patient
            </a>
          </button>
          <button className="bg-white px-4 py-3 rounded-xl hover:text-white hover:shadow-white hover:shadow-lg hover:bg-cyan-500 hover:translate-y-1 hover:duration-[.5s]">
            <a className="text-2xl md:text-4xl leading-normal" href="#">
              <span className="font-bold underline">Download</span>
              <br />
              SMA Awareness Material
            </a>
          </button>
        </div>
      </div>
      {/* Your money at Work section */}
      <div className="bg-[#F2F2F3] mb-8 md:mb-16 lg:mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-8">
          <div className="w-full md:w-6/12">
            <img
              className="w-full h-auto py-4 md:py-8"
              src="./src/images/donate_at_work.png"
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
              src="./src/images/single_child_1.png"
              alt="Cure SMA Bangladesh"
            />
          </div>
          {/* Center Content */}
          <div className="w-full md:w-1/3 text-center">
            <div className="mb-8">
              <img
                className="w-full py-4 md:py-8"
                src="./src/images/single_child_2.png"
                alt="Cure SMA Bangladesh"
              />
            </div>
            <button className="px-8 py-4 md:px-4 md:py-2 bg-orange-100 rounded-lg shadow-lg shadow-pColor md:shadow-none hover:shadow-lg hover:bg-pColor hover:text-white transition-transform duration-500 transform hover:translate-y-1">
              <a className="text-green-950 text-4xl">Donate</a>
            </button>
            {/* modal form */}
            <dialog id="Gdonate_modal2" className="modal">
              <div className="modal-box bg-slate-200 max-w-full md:max-w-4xl lg:max-w-3xl p-6 mx-auto">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="bg-white p-6 border-4 border-pColor rounded-lg">
                  <div className="max-w-full flex justify-center mb-4">
                    <img
                      src="./src/images/logo_CSMA.png"
                      alt="Cure SMA Bangladesh"
                      className="w-24 h-auto"
                    />
                  </div>
                  <h3 className="text-xl pt-3 text-green-600 text-center font-bold">
                    GENERAL DONATION FORM
                  </h3>
                  <p className="text-center font-bold mb-5">
                    Thank you for donating to our cause
                  </p>
                  <div id="Gdonateform">
                    <form method="post" action="/submit-donation">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="flex-1">
                            <label
                              htmlFor="Gdonateform_firstname"
                              className="label text-sm"
                            >
                              First Name
                            </label>
                            <input
                              id="Gdonateform_firstname"
                              type="text"
                              placeholder="First Name"
                              required
                              className="input border-2 border-green-400 w-full"
                            />
                          </div>
                          <div className="flex-1 mt-4 md:mt-0">
                            <label
                              htmlFor="Gdonateform_lastname"
                              className="label text-sm"
                            >
                              Last Name
                            </label>
                            <input
                              id="Gdonateform_lastname"
                              type="text"
                              placeholder="Last Name"
                              required
                              className="input border-2 border-green-400 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="flex-1">
                            <label
                              htmlFor="Gdonateform_contactno"
                              className="label text-sm"
                            >
                              Contact Number
                            </label>
                            <input
                              id="Gdonateform_contactno"
                              type="tel"
                              placeholder="+88 01234-567890"
                              required
                              className="input border-2 border-green-400 w-full"
                            />
                          </div>
                          <div className="flex-1 mt-4 md:mt-0">
                            <label
                              htmlFor="Gdonateform_email"
                              className="label text-sm"
                            >
                              Email
                            </label>
                            <input
                              id="Gdonateform_email"
                              type="email"
                              placeholder="address@email.com"
                              required
                              className="input border-2 border-green-400 w-full"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="Gdonateform_amount"
                            className="label text-sm"
                          >
                            How much do you want to donate?
                          </label>
                          <div className="flex flex-col md:flex-row">
                            <select
                              id="Gdonateform_amount"
                              required
                              className="input border-2 border-r-0 rounded-r-none border-green-400 md:w-1/3"
                            >
                              <option>Select</option>
                              <option value="usd">$ USD</option>
                              <option value="bdt">৳ BDT</option>
                            </select>
                            <input
                              id="Gdonateform_amount"
                              type="text"
                              placeholder="Donate Amount"
                              required
                              className="input border-2 border-l-0 rounded-l-none border-green-400 md:w-2/3 mt-2 md:mt-0"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="Gdonateform_address"
                            className="label text-sm"
                          >
                            Address
                          </label>
                          <input
                            id="Gdonateform_address"
                            type="text"
                            placeholder="Address line 1"
                            required
                            className="input border-2 border-green-400 w-full"
                          />
                          <input
                            id="Gdonateform_address"
                            type="text"
                            placeholder="Address line 2"
                            className="input border-2 border-green-400 w-full mt-2"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="Gdonateform_purpose"
                            className="label text-sm"
                          >
                            Purpose of Donation
                          </label>
                          <input
                            id="Gdonateform_purpose"
                            type="text"
                            placeholder="Purpose of Donation"
                            className="input border-2 border-green-400 w-full"
                          />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 font-bold">
                          <a
                            href="privacy-policy-for-cure-sma-bd.html"
                            className="text-sm text-blue-800 underline"
                          >
                            Privacy Policy
                          </a>
                          <a
                            href="data-protection-for-cure-sma-bd.html"
                            className="text-sm text-blue-800 underline"
                          >
                            Data Protection Statement
                          </a>
                        </div>
                        <div>
                          <h1 className="text-center mt-4">Captcha</h1>
                        </div>
                        <div className="flex items-center mt-2">
                          <input
                            type="checkbox"
                            id="Gdonateform_agree"
                            name="Gdonateform_agree"
                            required
                            defaultValue="agree"
                            className="mr-2"
                          />
                          <label
                            htmlFor="Gdonateform_agree"
                            className="text-sm"
                          >
                            I agree to make a donation, and proceed to pay.
                          </label>
                        </div>
                        <div className="text-center mt-4">
                          <input
                            type="submit"
                            className="pBtn bg-pColor text-white hover:bg-yColor hover:text-pColor"
                            defaultValue="Donation Submit"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
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
                    <img
                      src="./src/images/faiyadh_story_1.png"
                      alt="Cure SMA Bangladesh"
                    />
                  </div>
                  <div>
                    <img
                      src="./src/images/faiyadh_story_2.png"
                      alt="Cure SMA Bangladesh"
                    />
                  </div>
                </div>
                <div className="mr-4">
                  <img
                    src="./src/images/faiyadh_story_3.png"
                    alt="Cure SMA Bangladesh"
                  />
                </div>
              </div>
              <div>
                <div className="mt-">
                  <a href="https://www.youtube.com/" target="_blank">
                    <img
                      className="py-8 hover:bg-red-600 hover:rounded-xl"
                      src="./src/images/faiyadh_story_4.png"
                      alt="story4"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="absolute text-9xl text-white opacity-70 hover:text-red-700 -mt-80 lg:-mt-64 xl:-mt-80 ml-28 md:ml-24 lg:ml-12 xl:ml-28"
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
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
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
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
              src="./src/images/dif_image_1.png"
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
              src="./src/images/dif_image_2.png"
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
              src="./src/images/dif_image_3.png"
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
          <a href="https://www.youtube.com/" target="_blank">
            <img
              className="py-8 hover:bg-red-600 hover:rounded-xl"
              src="./src/images/child_say_1.png"
              alt="story4"
            />
          </a>
          {/* play button */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="absolute text-9xl text-white opacity-70 hover:text-red-700 -mt-80 md:-mt-64 lg:-mt-80 xl:-mt-[22rem] ml-36 md:ml-28 lg:ml-40 xl:ml-44"
          >
            <i className="fa-brands fa-youtube" />
          </a>
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
            <img
              className="py-8"
              src="./src/images/meet_the_partner.png"
              alt="Cure SMA Bangladesh"
            />
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
      {/* social share for body position */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 mt-6 mr-4 sm:mr-6 md:mr-10 lg:mr-12 ease-in-out duration-1000">
        <div className="w-10 hover:w-14 text-center bg-lime-100/50 border-2 border-pColor rounded-lg drop-shadow-xl hover:bg-slate-200 ease-in-out duration-30">
          <p>
            <i className="fa-solid fa-thumbtack text-red-600 py-2 text-lg sm:text-xl md:text-2xl drop-shadow-lg" />
          </p>
          <hr />
          <hr />
          <hr />
          <p>
            <a href="#">
              <i className="fab social-a fa-facebook py-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#3b5998] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fab social-a fa-linkedin text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#0A66C2] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fab social-a fa-youtube py-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#CD201F] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fab social-a fa-instagram pb-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-orange-500 hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fab social-a fa-whatsapp pb-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#25D366] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Donate;
