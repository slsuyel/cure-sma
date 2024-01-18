// RegiForm.tsx
import React, { useState } from "react";
import "./RegiForm.css";

type FormData = {
  fullName: string;
  relationship: string;
  age: string;
  diagnosedForSMA: boolean;
  symptoms: boolean;
  typeOfSMA: string;
  doctorName: string;
  fatherMobile: string;
  motherMobile: string;
  emergencyContact: string;
  email: string;
  presentAddress: string;
  permanentAddress: string;
  agreement: boolean;
};

const RegiForm: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    relationship: "",
    age: "",
    diagnosedForSMA: false,
    symptoms: false,
    typeOfSMA: "",
    doctorName: "",
    fatherMobile: "",
    motherMobile: "",
    emergencyContact: "",
    email: "",
    presentAddress: "",
    permanentAddress: "",
    agreement: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <div className="membership-form-container">
      <h2>Cure SMA Bangladesh Membership Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Have you/Your Family Member diagnosed for SMA (আপনার/আপনার পরিবারের
          সদস্যদের এসএমএ রোগ নির্ণয় করা হয়েছে কি ?)
          <select
            name="diagnosedForSMA"
            value={formData.diagnosedForSMA ? "Yes" : "No"}
            onChange={handleChange}
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label>
          Have Symptoms
          <select
            name="symptoms"
            value={formData.symptoms ? "Yes" : "No"}
            onChange={handleChange}
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label>
          Type of SMA (if diagnosed) (SMA এর প্রকার - যদি নির্ণয় করা হয়ে থাকে)
          <select
            name="typeOfSMA"
            value={formData.typeOfSMA}
            onChange={handleChange}
            required
          >
            <option value="Type 0">Type 0</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
            <option value="Type 3">Type 3</option>
            <option value="Type 4">Type 4</option>
            <option value="Suspected">Suspected</option>
          </select>
        </label>

        <label>
          Name of the Doctor (ডাক্তারের নাম)
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mobile Number of Father (বাবার মোবাইল নম্বর)
          <input
            type="tel"
            name="fatherMobile"
            value={formData.fatherMobile}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mobile Number of Mother (মায়ের মোবাইল নম্বর)
          <input
            type="tel"
            name="motherMobile"
            value={formData.motherMobile}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Emergency Contact Number (জরুরী যোগাযোগ নাম্বার)
          <input
            type="tel"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Present Address (বর্তমান ঠিকানা)
          <textarea
            name="presentAddress"
            value={formData.presentAddress}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Permanent Address (স্থায়ী ঠিকানা)
          <textarea
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
          />
        </label>

        <div className="d-flex checkbox-c">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              required
            />
          </label>
          <p style={{ marginLeft: "15px" }}>
            The information provided above is correct. I agree to be a general
            member of Cure SMA Bangladesh. I will abide by the rules and
            regulations of this foundation.
          </p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegiForm;
