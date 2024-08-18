import { FormEvent } from 'react';
import logo from '/images/logo_CSMA.png';
interface DonateModalProps {
  closeModal: () => void;
}

const DonateModal = ({ closeModal }: DonateModalProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
  };

  return (
    <dialog id="" open className="modal " style={{ zIndex: 1024 }}>
      <div className="modal-box bg-slate-200 max-w-full md:max-w-4xl lg:max-w-3xl p-6 mx-auto">
        <button
          type="button"
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <div className="bg-white p-6 border-4 border-pColor rounded-lg">
          <div className="max-w-full flex justify-center mb-4">
            <img src={logo} alt="Cure SMA Bangladesh" className="w-24 h-auto" />
          </div>
          <h3 className="text-xl pt-3 text-green-600 text-center font-bold">
            GENERAL DONATION FORM
          </h3>
          <p className="text-center font-bold mb-5">
            Thank you for donating to our cause
          </p>
          <form method="post" action="/submit-donation" onSubmit={handleSubmit}>
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
                    name="firstname"
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
                    name="lastname"
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
                    name="contactno"
                    type="tel"
                    placeholder="+88 01234-567890"
                    required
                    className="input border-2 border-green-400 w-full"
                  />
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                  <label htmlFor="Gdonateform_email" className="label text-sm">
                    Email
                  </label>
                  <input
                    id="Gdonateform_email"
                    name="email"
                    type="email"
                    placeholder="address@email.com"
                    required
                    className="input border-2 border-green-400 w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Gdonateform_amount" className="label text-sm">
                  How much do you want to donate?
                </label>
                <div className="flex flex-col md:flex-row">
                  <select
                    id="Gdonateform_amount_currency"
                    name="currency"
                    required
                    className="input border-2 border-r-0 rounded-r-none border-green-400 md:w-1/3"
                  >
                    <option>Select Currency</option>
                    <option value="usd">$ USD</option>
                    <option value="bdt">৳ BDT</option>
                  </select>
                  <input
                    id="Gdonateform_amount_value"
                    name="amount"
                    type="text"
                    placeholder="Donate Amount"
                    required
                    className="input border-2 border-l-0 rounded-l-none border-green-400 md:w-2/3 mt-2 md:mt-0"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Gdonateform_address" className="label text-sm">
                  Address
                </label>
                <input
                  id="Gdonateform_address1"
                  name="address1"
                  type="text"
                  placeholder="Address line 1"
                  required
                  className="input border-2 border-green-400 w-full"
                />
                <input
                  id="Gdonateform_address2"
                  name="address2"
                  type="text"
                  placeholder="Address line 2"
                  className="input border-2 border-green-400 w-full mt-2"
                />
              </div>
              <div>
                <label htmlFor="Gdonateform_purpose" className="label text-sm">
                  Purpose of Donation
                </label>
                <input
                  id="Gdonateform_purpose"
                  name="purpose"
                  type="text"
                  placeholder="Purpose of Donation"
                  className="input border-2 border-green-400 w-full"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 font-bold">
                <a
                  href="/privacy-policy-for-cure-sma-bd"
                  className="text-sm text-blue-800 underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="/data-protection-for-cure-sma-bd"
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
                  name="agree"
                  required
                  className="mr-2"
                />
                <label htmlFor="Gdonateform_agree" className="text-sm">
                  I agree to make a donation, and proceed to pay.
                </label>
              </div>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="pBtn bg-pColor text-white hover:bg-yColor hover:text-pColor"
                >
                  Donation Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default DonateModal;
