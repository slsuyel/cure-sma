import Breadcrumb from "../../components/Breadcrumb";

const Advocacy = () => {
  return (
    <div className="">
      <Breadcrumb title="Advocacy " />

      <h1 className="text-center">Cure SMA Bangladesh Advocacy Page</h1>
      <p>
        Welcome to the Cure SMA Bangladesh Advocacy Page. We strive to raise
        awareness and support for Spinal Muscular Atrophy (SMA) in Bangladesh.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to advocate for those affected by SMA, providing
            resources, support, and promoting research for a cure.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Get Involved</h2>
          <p>
            Join us in our advocacy efforts. You can contribute by volunteering,
            donating, or spreading awareness about SMA in Bangladesh.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Events</h2>
          <p>
            Stay tuned for upcoming events related to SMA awareness and
            fundraising. Your participation can make a significant impact.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Contact Us</h2>
          <p>
            For more information or if you would like to get involved, please
            contact us at{" "}
            <a href="mailto:info@curesmabd.org">info@curesmabd.org</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advocacy;
