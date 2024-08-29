const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row text-center lg:text-left lg:mx-8">
      <div className="relative overflow-hidden rounded-lg shadow-lg flex-1">
        <iframe
          className="w-full h-64 lg:h-[580px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7303.072520458382!2d90.41155483766285!3d23.76391100157907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71a5d28354f%3A0xbdbe60b01311a645!2sWest%20rampura!5e0!3m2!1sen!2sbd!4v1722946086964!5m2!1sen!2sbd"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="bg-[#F2F2F3] lg:pl-8 py-12 flex-1">
        <div>
          <h1 className="pb-3 text-3xl font-semibold">MEET US</h1>
          <div className="text-lg font-light">
            <h2 className="text-xl font-semibold my-2">
              <i className="fa-solid fa-phone" /> Phone
            </h2>
            <p className="pb-2">
              <a
                className="flex-1 text-decoration-none hover:text-pColor hover:text-2xl"
                href="tel:+8801841118486"
              >
                +88 0184 111 84 86
              </a>
            </p>
            <h2 className="text-xl font-semibold my-2">
              <i className="fa-solid fa-address-book" /> Address
            </h2>
            <p className="pb-2">
              154/6/4, Jhilkanan R/A, West Rampura, <br /> Dhaka-1219,
              Bangladesh
            </p>
            <h2 className="text-xl font-semibold my-2">
              <i className="fa-solid fa-envelope" /> Email
            </h2>
            <p>
              <a
                className="flex-1 text-decoration-none hover:text-pColor  hover:text-2xl"
                href="mailto:info@curesmabangladesh.org"
              >
                info@curesmabangladesh.org
              </a>
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center lg:justify-start gap-4 my-4">
            <a
              target="_blank"
              href="https://www.facebook.com/CureSMABangladesh"
            >
              <i className="fab social-a fa-facebook text-4xl rounded hover:text-[#3b5998]" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/CureSMABangladesh"
            >
              <i className="fab social-a fa-linkedin text-4xl rounded hover:text-[#0A66C2]" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@CureSMABangladesh"
            >
              <i className="fab social-a fa-youtube text-4xl rounded hover:text-[#CD201F]" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/@CureSMABangladesh"
            >
              <i className="fab social-a fa-instagram text-4xl rounded hover:text-orange-500" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-12 flex-1">
        <div className="mx-8 gap-2">
          <h1 className="pb-3 text-3xl font-semibold">
            SIMPLY MAIL US <br /> JUST FILL THE FORM
          </h1>
          <div className="mb-4">
            <label htmlFor="con_name" />
            <input
              type="text"
              id="con_name"
              placeholder="Full Name"
              className="border-2 border-pColor h-14 w-full bg-pColor/10 rounded-xl pl-4 placeholder-pColor/50 text-xl focus:placeholder-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="con_email" />
            <input
              type="text"
              id="con_email"
              placeholder="emailaddress@example.com"
              className="border-2 border-pColor h-14 w-full bg-pColor/10 rounded-xl pl-4 placeholder-pColor/50 focus:placeholder-white text-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="con_help" />
            <textarea
              placeholder="How can we help?"
              id="con_help"
              className="border-2 border-pColor h-32 w-full bg-pColor/10 rounded-xl pl-4 placeholder-pColor/50 focus:placeholder-white text-xl"
            />
          </div>
          <div>
            <button className="pBtn bg-slate-200 text-pColor border-2 border-pColor hover:border-white px-8 hover:bg-pColor hover:text-white font-bold hover:border-2 w-full">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
