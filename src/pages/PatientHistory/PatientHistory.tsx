import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { callApi } from '../../utilities/functions';
import { TUser } from '../Donate/Donate';
import SelectedDonateModal from '../../components/SelectedDonateModal';

const PatientHistory = () => {
  const [id, setId] = useState<number | null>(null);
  const [gModal, setGModal] = useState(false);
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await callApi('get', '/api/users');
      setUsers(res.data.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="px-8 bg-gradient-to-r from-gray-100 to-gray-200 font-poppins py-8 drop-shadow-lg">
        <h1 className="text-2xl md:text-5xl mb-8 font-bold">Patient History</h1>
        <a
          className="w-full drop-shadow-lg md:w-80 px-8 py-2 rounded-3xl text-pColor text-center hover:bg-pColor hover:text-white border-2 border-pColor font-semibold ease-in-out duration-1000"
          href="cure-sma-bd-health-care-team.html"
        >
          <i
            className="fa-solid fa-stethoscope fa-beat-fade"
            aria-hidden="true"
          />{' '}
          Find a Doctor
        </a>
        <p className="border-2 mt-12 border-pColor" />
      </div>

      <div className="bg-lime-100/50">
        {/* Patient short */}
        <div className="flex justify-center gap-2 md:gap-16 pt-10 px-8">
          <a href="">
            <button className="pBtn bg-gray-300">
              <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Latest
              to Previous
            </button>
          </a>
          <a href="">
            <button className="pBtn bg-pink-200">
              <i
                className="fa-solid fa-up-down-left-right fa-flip"
                aria-hidden="true"
              />{' '}
              Popular
            </button>
          </a>
          <a href="">
            <button className="pBtn bg-gray-300">
              Previous to Latest{' '}
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </button>
          </a>
        </div>

        {/* Patient card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 px-8 pb-20 py-10 drop-shadow-md hover:drop-shadow-lg">
          {users?.map(patient => (
            <div
              key={patient.id}
              className="bg-gray-100 border-b-4 border-pColor hover:border-2"
            >
              <div>
                <img src={patient.profile_image} alt={patient.name} />
              </div>
              <div className="my-8 px-4">
                <h2 className="text-2xl font-bold pb-4">{patient.name}</h2>
                <div className="flex justify-between">
                  <p>
                    <Link
                      to={`/cure-sma-bd-patient-history/${patient.id}`}
                      className="text-lg font-bold border-b-4 border-red-500 hover:text-red-500"
                    >
                      <i
                        className="fa-brands fa-readme fa-flip"
                        aria-hidden="true"
                      />{' '}
                      Read Story
                    </Link>
                  </p>
                  <p>
                    <button
                      onClick={() => {
                        setId(patient.id);
                        setGModal(true);
                      }}
                      className="text-lg font-bold border-b-4 border-red-500 hover:text-red-500"
                    >
                      <i
                        className="fa-solid fa-heart-crack fa-beat text-red-500"
                        aria-hidden="true"
                      />{' '}
                      Donate
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Canonical number */}
        <div className="flex justify-center pb-10">
          <button className="btn join-item">1</button>
          <button className="btn join-item">2</button>
          <button className="btn join-item btn-disabled">...</button>
          <button className="btn join-item">4</button>
          <button className="btn join-item">5</button>
        </div>
      </div>

      {gModal && (
        <SelectedDonateModal
          selectedId={id}
          closeModal={() => setGModal(false)}
        />
      )}
    </div>
  );
};

export default PatientHistory;
