import React, { FormEvent, useState } from 'react';
import logo from '/images/logo_CSMA.png';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { message } from 'antd';
import { callApi } from '../utilities/functions';

interface SelectedDonateModalProps {
  selectedId: number | null;
  closeModal: () => void;
}

const SelectedDonateModal: React.FC<SelectedDonateModalProps> = ({
  selectedId,
  closeModal,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    currency: 'USD',
    amount: '',
    address: '',
    address2: '',
    donatePurpose: '',
    agree: false,
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [loader, setLoader] = useState(false);
  const setCap = () => {
    setCaptchaVerified(true);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoader(true);
    event.preventDefault();

    const res = await callApi(
      'Post',
      `/api/patients/donate/${selectedId}`,
      formData
    );
    console.log(res);

    return;
    if (res) {
      window.location.href = res.data;
      setLoader(false);
    } else {
      message.error('Something went wrong  ! Please try again');
      setLoader(false);
    }
  };
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50 outline-none focus:outline-none">
      <div className="relative w-full max-h-[80vh] overflow-y-auto max-w-2xl mx-auto my-6 bg-white border rounded-lg shadow-lg">
        <div className="bg-white p-6 border-4 border-orange-600 rounded-lg">
          <div className="flex items-start justify-between">
            <button
              className="text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="block text-black opacity-50 h-6 w-6 text-2xl outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="max-w-full flex justify-center mb-4">
            <img src={logo} alt="Cure SMA Bangladesh" className="w-24 h-auto" />
          </div>
          <h3 className="text-xl pt-3 text-orange-600 text-center font-bold">
            SELECTED CHILD DONATION FORM
          </h3>
          <p className="text-center font-bold mb-5">
            Thank you for donating to our cause
          </p>
          <div id="Gdonateform">
            <form
              method="post"
              action="/submit-donation"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:gap-4">
                  <div className="flex-1">
                    <label htmlFor="firstname" className="label text-sm">
                      First Name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={e =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                      className="input border-2 border-orange-600 w-full"
                    />
                  </div>
                  <div className="flex-1 mt-4 md:mt-0">
                    <label htmlFor="lastname" className="label text-sm">
                      Last Name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={e =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                      className="input border-2 border-orange-600 w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <div className="flex-1">
                    <label htmlFor="contactno" className="label text-sm">
                      Contact Number
                    </label>
                    <input
                      id="contactno"
                      type="tel"
                      placeholder="+88 01234-567890"
                      value={formData.phoneNumber}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      required
                      className="input border-2 border-orange-600 w-full"
                    />
                  </div>
                  <div className="flex-1 mt-4 md:mt-0">
                    <label htmlFor="email" className="label text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="address@email.com"
                      value={formData.email}
                      onChange={e =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="input border-2 border-orange-600 w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="amountCurrency" className="label text-sm">
                    How much do you want to donate?
                  </label>
                  <div className="flex flex-col md:flex-row">
                    <select
                      id="amountCurrency"
                      value={formData.currency}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          currency: e.target.value,
                        })
                      }
                      required
                      className="input border-2 border-r-0 rounded-r-none border-orange-600 md:w-1/3"
                    >
                      <option disabled>Select</option>
                      <option value="usd">$ USD</option>
                      <option value="bdt">৳ BDT</option>
                    </select>
                    <input
                      id="amount"
                      type="text"
                      placeholder="Donate Amount"
                      value={formData.amount}
                      onChange={e =>
                        setFormData({ ...formData, amount: e.target.value })
                      }
                      required
                      className="input border-2 border-l-0 rounded-l-none border-orange-600 md:w-2/3 mt-2 md:mt-0"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address1" className="label text-sm">
                    Address
                  </label>
                  <input
                    id="address1"
                    type="text"
                    placeholder="Address line 1"
                    value={formData.address}
                    onChange={e =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    required
                    className="input border-2 border-orange-600 w-full"
                  />
                  <input
                    id="address2"
                    type="text"
                    placeholder="Address line 2"
                    value={formData.address2}
                    onChange={e =>
                      setFormData({ ...formData, address2: e.target.value })
                    }
                    className="input border-2 border-orange-600 w-full mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="purpose" className="label text-sm">
                    Purpose of Donation
                  </label>
                  <input
                    id="purpose"
                    type="text"
                    placeholder="Purpose of Donation"
                    value={formData.donatePurpose}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        donatePurpose: e.target.value,
                      })
                    }
                    className="input border-2 border-orange-600 w-full"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 font-bold">
                  <Link
                    target="_blank"
                    to="/privacy-policy-for-cure-sma-bd"
                    className="text-sm text-blue-800 underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    target="_blank"
                    to="/data-protection-for-cure-sma-bd"
                    className="text-sm text-blue-800 underline"
                  >
                    Data Protection Statement
                  </Link>
                </div>
                <div className="flex justify-center items-center">
                  <ReCAPTCHA
                    sitekey="6LfWVwoqAAAAAPhNbTuMMgNToxKK7-nd4VszWLEA"
                    onChange={() => setCap()}
                  />
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="agree"
                    name="Gdonateform_agree"
                    checked={formData.agree}
                    onChange={e =>
                      setFormData({ ...formData, agree: e.target.checked })
                    }
                    required
                    className="mr-2"
                  />
                  <label htmlFor="agree" className="text-sm">
                    I agree to make a donation, and proceed to pay.
                  </label>
                </div>
                <div className="text-center mt-4">
                  <button
                    disabled={!captchaVerified}
                    type="submit"
                    className="pBtn bg-orange-600 text-white"
                  >
                    {loader ? 'Loading' : 'Donation Submit'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedDonateModal;
