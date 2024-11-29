import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { callApi } from '../../utilities/functions';
import SelectedDonateModal from '../../components/SelectedDonateModal';
export interface TUser {
  id: number;
  image?: null;
  name?: string;
  mobile?: string;
  blood_group?: null;
  email?: string;
  gander?: string;
  gardiant_phone?: null;
  last_donate_date?: null;
  whatsapp_number?: null;
  division?: null;
  district?: null;
  thana?: null;
  union?: null;
  org?: null;
  email_verified_at?: null;
  role?: null;
  role_id?: null;
  created_at?: Date;
  updated_at?: Date;
  fullName?: string;
  relationship?: null;
  diagnosedForSMA?: boolean;
  symptoms?: boolean;
  typeOfSMA?: string;
  doctorName?: string;
  fatherMobile?: string;
  motherMobile?: string;
  emergencyContact?: string;
  presentAddress?: string;
  permanentAddress?: string;
  agreement?: boolean;
  dateOfBirth?: Date;
  annual_cost?: null;
  total_cost?: null;
  cost_donated?: string;
  short_description?: string;
  long_description?: string;
  profile_image?: null;
}
const SinglePatient = () => {
  const { id } = useParams();
  const [data, setData] = useState<TUser>();
  const [loading, setLoading] = useState(true);
  const [gModal, setGModal] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const result = await callApi('get', `/api/users/${id}`);
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="px-8 bg-gradient-to-r from-gray-100 to-gray-200 font-poppins py-8 drop-shadow-lg">
        <Link
          to="/cure-sma-bd-patient-history"
          className="text-lg rounded-lg bg-gray-500 text-white py-2 px-4 hover:bg-gray-200 hover:text-pColor hover:border-2 hover:border-pColor ease-in-out duration-1000"
        >
          <button className="pb-8">
            <i
              className="fa-solid fa-arrow-left drop-shadow-lg"
              aria-hidden="true"
            />{' '}
            All patient History
          </button>
        </Link>
        <h1 className="text-2xl md:text-5xl mb-8 font-bold">Patient History</h1>
        <a className="w-full drop-shadow-lg md:w-80 px-8 py-2 rounded-3xl text-pColor text-center hover:bg-pColor hover:text-white border-2 border-pColor font-semibold ease-in-out duration-1000">
          <i
            className="fa-solid fa-stethoscope fa-beat-fade "
            aria-hidden="true"
          />{' '}
          Find a Doctor
        </a>
        <p className="border-2 mt-12 border-pColor" />
      </div>
      <div className="bg-lime-100/50 px-4 md:px-8">
        <div className="mx-4 md:mx-12">
          <p className="italic font-semibold py-4 text-center lg:text-left">
            Updated on:
          </p>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2">
              <img
                src={data?.profile_image || ''}
                className="rounded-xl drop-shadow-lg  lg:w-auto"
                alt="Naboni"
              />
              <h1 className="text-4xl lg:text-5xl py-4 text-center lg:text-left">
                {data?.fullName}
              </h1>
            </div>
            <div className="w-full lg:w-1/2 mt-8 md:mt-0">
              <h2 className="text-xl pb-4 drop-shadow-md text-center md:text-left">
                <i
                  className="fa-solid fa-quote-left text-5xl"
                  aria-hidden="true"
                />{' '}
                {data?.short_description}
              </h2>
              <h4 className="font-semibold text-xl pb-4 text-red-500">
                Annual cost: <span>{data?.annual_cost}$</span>
              </h4>
              {/* Progress Bar */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="relative w-full h-8 mb-4 mx-auto rounded-lg border-2 border-red-400 shadow-inner text-center">
                  <div className="absolute top-0 left-0 h-full w-2/4 rounded-lg progress-bar-animation bg-green-700">
                    {/* Progress Bar */}
                    <h3 className=" text-white mb-0">${data?.annual_cost}</h3>
                  </div>
                  {/* Goal Text */}
                  <h3 className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-pColor text-sm md:text-base font-semibold">
                    ${data?.total_cost}
                  </h3>
                </div>
              </div>
              {/* Donate Button */}
              <div>
                <button
                  onClick={() => {
                    setGModal(true);
                  }}
                  className="btn  text-xl lg:text-2xl bg-orange-600 text-white w-full hover:bg-pColor hover:translate-y-1 hover:duration-[.5s]"
                >
                  Donated
                </button>
              </div>
            </div>
          </div>
          {/* Content Section */}
          <div className=" mb-20  border-black/50 rounded-lg p-6 lg:p-12 drop-shadow-md mt-8">
            <div
              className="long-description-content h-full  mb-28 "
              dangerouslySetInnerHTML={{ __html: data?.long_description || '' }}
            />
          </div>
        </div>
        {/* Pagination Buttons */}
        {/* <div className="w-full lg:w-1/4 join grid grid-cols-2 gap-4 py-8 mx-auto">
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div> */}
      </div>

      {gModal && id && (
        <SelectedDonateModal
          selectedId={Number(id)}
          closeModal={() => setGModal(false)}
        />
      )}
    </div>
  );
};

export default SinglePatient;
