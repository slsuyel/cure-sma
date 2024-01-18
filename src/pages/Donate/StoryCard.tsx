import qute from "../../assets/Images/icons/Quote-Marks.png";
const StoryCard = () => {
  return (
    <div className="row w-100 container m-2 bg-white py-5">
      <div className="col-md-6">
        <div className="d-flex gap-2 ">
          <div className="d-flex flex-column flex-wrap w-50 m-2 my-auto">
            <img
              height={240}
              width={250}
              className=" m-1"
              src="https://short-tools.vercel.app/hPclBSAyO"
              alt=""
            />
            <img
              height={240}
              width={250}
              className="  m-1"
              src="https://short-tools.vercel.app/hPclBSAyO"
              alt=""
            />
          </div>

          <div className=" w-50 my-auto">
            <iframe
              width="250px"
              height="490px"
              src="https://www.youtube.com/embed/wRMSNJUCR2k?si=Ezqq3MGy3c35sWXE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="py-5">
          <h2 className="patient-name-carousel">
            Listen to <br /> Faiyadh & Faizan’s story
          </h2>

          <div className="align-items-center d-flex justify-content-center mb-2">
            <img src={qute} className="text-center" alt="" width={80} />
          </div>
          <p style={{ fontSize: "25px" }}>
            our sons were perfectly fine during first year of their births. We
            noticed something wrong with their leg and hand after 1 year. Our
            doubt was created by seeing something wrong in my elder son. He
            could not stand on his feet
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
