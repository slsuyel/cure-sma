/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { callApi } from '../../utilities/functions';

const RegiForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    relationship: '',
    diagnosedForSMA: false,
    symptoms: false,
    typeOfSMA: 'no',
    doctorName: '',
    fatherMobile: '',
    motherMobile: '',
    emergencyContact: '',
    email: '',
    presentAddress: '',
    permanentAddress: '',
    agreement: false,
    dateOfBirth: '',
  });

  const handleInputChange = (e: any) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await callApi('post', '/api/patients/register', formData);
      if (res.status === 201) {
        alert('Patient Registration Successfully');
      } else {
        alert('Patient registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again later.');
    }
  };

  return (
    <>
      {/* registration form */}
      <div
        className="bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: 'url("/images/bg_registration.jpg")' }}
      >
        <div className="bg-pblack max-w-full md:max-w-4xl lg:max-w-3xl p-6 mx-auto">
          <div className="bg-lime-200/90 p-6 shadow-lg rounded-xl">
            <h3 className="text-3xl pt-3 text-pblack text-center font-bold">
              CURE SMA BANGLADESH
            </h3>
            <h3 className="text-2xl text-pblack text-center font-medium underline">
              Member Registration Form
            </h3>
            {/* rest of the static form content */}

            <div id="Reg_form" className="mt-8">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="fullName" className="label font-bold">
                    Full Name of Patient (রোগীর পূর্ণ নাম)
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Full Name (পূর্ণ নাম)"
                    required
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="dateOfBirth" className="label font-bold">
                    Date of Birth of the Patient (রোগীর জন্ম তারিখ)
                  </label>
                  <input
                    id="dateOfBirth"
                    type="date"
                    required
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="relationship" className="label font-bold">
                    Your Relationship (সম্পর্ক)
                  </label>
                  <select
                    id="relationship"
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  >
                    <option value="Patient">SMA Patient</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Guardian">Legal Guardian</option>
                  </select>

                  <label htmlFor="diagnosedForSMA" className="label font-bold">
                    Diagnosed for SMA (এসএমএ রোগ নির্ণয় করা হয়েছে কি?)
                  </label>
                  <select
                    id="diagnosedForSMA"
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>

                  <label htmlFor="symptoms" className="label font-bold">
                    Have Symptoms? (কোন উপসর্গ আছে কি?)
                  </label>
                  <select
                    id="symptoms"
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>

                  <label htmlFor="typeOfSMA" className="label font-bold">
                    Type of SMA (if diagnosed) (SMA এর প্রকার)
                  </label>
                  <select
                    id="typeOfSMA"
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  >
                    <option value="no">Not Diagnosed</option>
                    <option value="Type 0">Type 0</option>
                    <option value="Type 1">Type 1</option>
                    <option value="Type 2">Type 2</option>
                    <option value="Type 3">Type 3</option>
                    <option value="Type 4">Type 4</option>
                    <option value="Suspected">Suspected</option>
                  </select>

                  {/* Other fields */}
                  <label htmlFor="doctorName" className="label font-bold">
                    Doctor Full Name (চিকিৎসকের পূর্ণ নাম)
                  </label>
                  <input
                    id="doctorName"
                    type="text"
                    placeholder="Doctor Name"
                    required
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  />

                  <label htmlFor="fatherMobile" className="label font-bold">
                    Mobile Number of Father (বাবার মোবাইল নম্বর)
                  </label>
                  <input
                    id="fatherMobile"
                    type="tel"
                    placeholder="+88 01234-567890"
                    required
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  />

                  <label htmlFor="motherMobile" className="label font-bold">
                    Mobile Number of Mother (মায়ের মোবাইল নম্বর)
                  </label>
                  <input
                    id="motherMobile"
                    type="tel"
                    placeholder="+88 01234-567890"
                    required
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  />

                  <label htmlFor="emergencyContact" className="label font-bold">
                    Emergency Contact Number (জরুরী যোগাযোগের নম্বর)
                  </label>
                  <input
                    id="emergencyContact"
                    type="tel"
                    placeholder="+88 01234-567890"
                    required
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  />

                  <label htmlFor="email" className="label font-bold">
                    Email (ইমেইল)
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="address@email.com"
                    required
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  />

                  <label htmlFor="presentAddress" className="label font-bold">
                    Present Address (বর্তমান ঠিকানা)
                  </label>
                  <input
                    id="presentAddress"
                    type="text"
                    placeholder="Address line 1"
                    required
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  />
                  <input
                    id="presentAddress2"
                    type="text"
                    placeholder="Address line 2"
                    className="input border-2 border-slate-400 w-full mt-2"
                  />

                  <label htmlFor="permanentAddress" className="label font-bold">
                    Permanent Address (স্থায়ী ঠিকানা)
                  </label>
                  <input
                    id="permanentAddress"
                    type="text"
                    placeholder="Address line 1"
                    required
                    className="input border-2 border-slate-400 w-full"
                    onChange={handleInputChange}
                  />
                  <input
                    id="permanentAddress2"
                    type="text"
                    placeholder="Address line 2"
                    className="input border-2 border-slate-400 w-full mt-2"
                  />

                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      style={{ width: '50px', height: '50px' }}
                      required
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label htmlFor="agreement" className="text-lg">
                      The information provided above is correct. I agree to be a
                      general member of Cure SMA Bangladesh.
                    </label>
                  </div>

                  <div className="text-center mt-4">
                    <button className="pBtn bg-pColor text-white hover:bg-yColor hover:text-pColor">
                      Registration Request Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegiForm;
