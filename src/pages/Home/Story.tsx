/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import difImage1 from "/images/dif_image_1.png";
import { useEffect, useState } from "react";
import { callApi } from "../../utilities/functions";
const Story = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await callApi("get", "/api/users");
        setData(result.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {/* Stories of Patients */}
      <div className="pt-16" style={{ background: "#08a26833" }}>
        <div className="bg-pColor/20 pt-16">
          <div className="px-4 sm:px-8 mb-12 sm:mb-20">
            <div>
              <div className="mb-8">
                <h1 className="text-center text-2xl lg:text-4xl font-bold underline">
                  Stories of Patients
                </h1>
              </div>
              <div className="mb-8">
                <p className="text-xl lg:text-2xl text-center leading-8">
                  SMA patient stories are powerful narratives of resilience,
                  perseverance, and hope. These individuals bravely navigate the
                  challenges of Spinal Muscular Atrophy (SMA), a genetic
                  disorder affecting the motor neurons in the spinal cord,
                  leading to muscle weakness and atrophy. Despite the
                  limitations imposed by SMA, patients demonstrate remarkable
                  strength in their daily lives, often overcoming obstacles with
                  unwavering determination. Their stories inspire awareness,
                  advocacy, and progress in SMA research and treatment, offering
                  a glimpse into the human spirit's capacity to thrive amidst
                  adversity.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-10">
              {data.slice(0, 3).map((d: any) => (
                <div
                  key={d.id}
                  className="bg-white w-full hover:bg-yellow-100 hover:drop-shadow-2xl"
                  style={{
                    boxShadow:
                      "4px 4px 8px rgba(10, 214, 3, 0.350), -4px -4px 8px rgba(10, 214, 3, 0.350)",
                  }}
                >
                  <img
                    src={difImage1}
                    alt="Sponsor a child"
                    className="w-full h-auto"
                  />
                  <div className="px-8 text-center my-8">
                    <Link
                      to={`cure-sma-bd-patient-history/${d.id}`}
                      className="text-xl lg:text-2xl leading-8 text-pColor hover:underline"
                    >
                      {d.short_description}
                      <span className="font-bold text-4xl ">
                        {" "}
                        &gt;&gt;{" "}
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-8 pb-16">
              <Link
                to="cure-sma-bd-patient-history"
                className="bg-green-300 pBtn "
              >
                Read all patient stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
