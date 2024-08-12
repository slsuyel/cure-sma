const RegiForm = () => {
  return (
    <>
      {/*registration form */}
      <div
        className="bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: 'url("./src/images/bg_registration.jpg")' }}
      >
        <div className="bg-pblack max-w-full md:max-w-4xl lg:max-w-3xl p-6 mx-auto">
          <div className="bg-lime-200/90 p-6 shadow-lg rounded-xl">
            <h3 className="text-3xl pt-3 text-pblack text-center font-bold">
              CURE SMA BANGLADESH
            </h3>
            <h3 className="text-2xl text-pblack text-center font-medium underline">
              Member Registration Form
            </h3>
            <p className="text-lg text-justify pt-3">
              This form will be used for the registration of the general members
              of Cure SMA Bangladesh. The General Member of this foundation must
              be:
            </p>
            <p className="text-lg text-justify pt-3">
              (এই ফর্মটি Cure SMA বাংলাদেশের সাধারণ সদস্যদের নিবন্ধনের জন্য
              ব্যবহার করা হবে। এই ফাউন্ডেশনের সাধারণ সদস্য হতে পারবে:)
            </p>
            <ul className="pt-3 text-lg list-disc pl-8">
              <li>SMA Patient (SMA রোগী)</li>
              <li>Parents of SMA Patient (এসএমএ রোগীর পিতামাতা)</li>
              <li>Legal Guardian Of SMA Patient (SMA রোগীর আইনি অভিভাবক)</li>
            </ul>
            <p className="text-lg text-justify pt-3">
              * Each Patient/Parents/Legal Guardian must fill up separate form.
            </p>
            <p className="text-lg text-justify pt-3">
              *(প্রত্যেক রোগী/মাতাপিতা/আইন অভিভাবককে আলাদা ফর্ম পূরণ করতে হবে)
            </p>
            <div id="Reg_form" className="mt-8">
              <form method="post" action="/submit-registration">
                <div className="flex flex-col gap-1">
                  <label htmlFor="Reg_form_name" className="label font-bold">
                    Full Name of Patient (রোগীর পূর্ণ নাম)
                  </label>
                  <input
                    id="Reg_form_name"
                    type="text"
                    placeholder="Full Name (পূর্ণ নাম)"
                    required
                    className="input border-2 border-slate-400 w-full"
                  />
                  <label htmlFor="Reg_form_dob" className="label font-bold">
                    Date of Birth of the Patient (রোগীর জন্ম তারিখ)
                  </label>
                  <input
                    id="Reg_form_dob"
                    type="date"
                    required
                    className="input border-2 border-slate-400 w-full"
                  />
                  <label htmlFor="Reg_form_MSMA" className="label font-bold">
                    Have you/Your Family Member diagnosed for SMA (আপনার/আপনার
                    পরিবারের সদস্যদের এসএমএ রোগ নির্ণয় করা হয়েছে কি ?)
                  </label>
                  <select
                    name="SMA Member"
                    id="Reg_form_MSMA"
                    className="input border-2 border-slate-400 w-full"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                  <label htmlFor="Reg_form_sym" className="label font-bold">
                    Have Symptoms? (কোন উপসর্গ আছে কি?)
                  </label>
                  <select
                    name="symptoms"
                    id="Reg_form_sym"
                    className="input border-2 border-slate-400 w-full"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                  <label htmlFor="Reg_form_type" className="label font-bold">
                    Type of SMA (if diagnosed) (SMA এর প্রকার - যদি নির্ণয় করা
                    হয়ে থাকে)
                  </label>
                  <select
                    name="SMA Type"
                    id="Reg_form_type"
                    className="input border-2 border-slate-400 w-full"
                  >
                    <option value="no">Type 0</option>
                    <option value="yes">Type 1</option>
                    <option value="yes">Type 2</option>
                    <option value="yes">Type 3</option>
                    <option value="yes">Type 4</option>
                    <option value="yes">Suspected</option>
                  </select>
                  <label htmlFor="Reg_form_Dname" className="label font-bold">
                    Doctor Full Name (চিকিৎসাধীন ডাক্তারের পূর্ণ নাম)
                  </label>
                  <input
                    id="Reg_form_Dname"
                    type="text"
                    placeholder="Doctor Name"
                    required
                    className="input border-2 border-slate-400 w-full"
                  />
                  <label htmlFor="Reg_form_FCont" className="label font-bold">
                    Mobile Number of Father (বাবার মোবাইল নম্বর)
                  </label>
                  <input
                    id="Reg_form_FCont"
                    type="tel"
                    placeholder="+88 01234-567890"
                    required
                    className="input border-2 border-slate-400 w-ful"
                  />
                  <label htmlFor="Reg_form_MCont" className="label font-bold">
                    Mobile Number of Mother (মায়ের মোবাইল নম্বর)
                  </label>
                  <input
                    id="Reg_form_MCont"
                    type="tel"
                    placeholder="+88 01234-567890"
                    required
                    className="input border-2 border-slate-400 w-ful"
                  />
                  <label
                    htmlFor="Reg_form_emer_cont"
                    className="label font-bold"
                  >
                    Emergency Contact Number (জরুরী যোগাযোগের নম্বর)
                  </label>
                  <input
                    id="Reg_form_emer_cont"
                    type="tel"
                    placeholder="+88 01234-567890"
                    required
                    className="input border-2 border-slate-400 w-ful"
                  />
                  <label htmlFor="Reg_form_email" className="label font-bold">
                    Email (ইমেইল)
                  </label>
                  <input
                    id="Reg_form_email"
                    type="email"
                    placeholder="address@email.com"
                    required
                    className="input border-2 border-slate-400 w-full"
                  />
                  <label
                    htmlFor="Reg_form_Paddress"
                    className="label font-bold"
                  >
                    Present Address (বর্তমান ঠিকানা)
                  </label>
                  <input
                    id="Reg_form_Paddress"
                    type="text"
                    placeholder="Address line 1"
                    required
                    className="input border-2 border-slate-400 w-full"
                  />
                  <input
                    id="Reg_form_address"
                    type="text"
                    placeholder="Address line 2"
                    className="input border-2 border-slate-400 w-full mt-2"
                  />
                  <label
                    htmlFor="Reg_form_Par_address"
                    className="label font-bold"
                  >
                    Permanent Address (স্থায়ী ঠিকানা)
                  </label>
                  <input
                    id="Reg_form_Par_address"
                    type="text"
                    placeholder="Address line 1"
                    required
                    className="input border-2 border-slate-400 w-full"
                  />
                  <input
                    id="Reg_form_address"
                    type="text"
                    placeholder="Address line 2"
                    className="input border-2 border-slate-400 w-full mt-2"
                  />
                  <div>
                    <h1 className="text-center mt-4">Captcha</h1>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="Reg_form_agree"
                      name="Reg_form_agree"
                      style={{ width: '50px', height: '50px' }}
                      required
                      defaultValue="agree"
                      className="mr-2"
                    />
                    <label htmlFor="Reg_form_agree" className="text-lg">
                      The information provided above is correct. I agree to be a
                      general member of Cure SMA Bangladesh. I will abide by the
                      rules and regulations of this foundation.
                    </label>
                  </div>
                  <div className="text-center mt-4">
                    <input
                      type="submit"
                      className="pBtn bg-pColor text-white hover:bg-yColor hover:text-pColor"
                      defaultValue="Registration Request Submit"
                    />
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
