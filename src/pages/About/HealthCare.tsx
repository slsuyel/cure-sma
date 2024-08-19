import banner from '/images/banner-health-care-team.jpg';
import dr1 from '/images/dr1.jpg';
import dr2 from '/images/dr2.jpg';
import dr3 from '/images/dr3.jpg';
import dr4 from '/images/dr4.jpg';
import dr5 from '/images/dr5.png';
import dr6 from '/images/dr6.jpg';
import dr7 from '/images/dr7.jpg';

const HealthCare = () => {
  return (
    <>
      <div className="relative">
        <img
          src={banner}
          alt="Health Care Team"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 bg-gradient-to-br from-pColor/20 via-yellow-100/70 to-pColor/20 px-4 md:px-8 lg:px-16 py-10">
        <div className="flex hover:scale-95 ease-in-out duration-1000">
          <div className="bg-white/25 border border-white/10 rounded-xl p-4 shadow-lg items-center text-center">
            <img
              className="rounded-xl drop-shadow-lg mx-auto"
              src={dr1}
              alt=""
            />
            <h1 className="text-xl font-semibold uppercase py-2">
              Prof. Dr. Muhammad Mizanur Rahman
            </h1>
            <h3 className="text-lg font-semibold underline">Neurologist</h3>
            <h3 className="py-2">
              MBBS (RMC), D- Card (BSMMU), CCD (BIRDEM), Diploma in Emergency
              Medicine (UK)
            </h3>
            <p>Former Chairman (Pediatric Neurology Dept.), BSMMU</p>
          </div>
        </div>
        <div className="flex hover:scale-95 ease-in-out duration-1000">
          <div className="bg-white/25 border border-white/10 rounded-xl p-4 shadow-lg items-center text-center">
            <img
              className="rounded-xl drop-shadow-lg mx-auto"
              src={dr2}
              alt=""
            />
            <h1 className="text-xl font-semibold uppercase py-2">
              Prof (Dr) ARM Luthful Kabir
            </h1>
            <h3 className="text-lg font-semibold underline">
              Respiratory Medicine
            </h3>
            <h3 className="py-2">
              MBBS, FCPS (Pediatrics)
              <p />
              <p>
                Professor of Pediatrics, Ad-din Women’s Medical College,
                Moghbazar, Dhaka. Former Executive Director, ICMH, Matuail,
                Dhaka. Former Head of Pediatrics, Sylhet MAG Osmani Medical
                College, Faridpur Medical College, Sir Salimullah Medical
                College, Dhaka.
              </p>
            </h3>
          </div>
        </div>
        <div className="flex hover:scale-95 ease-in-out duration-1000">
          <div className="bg-white/25 border border-white/10 rounded-xl p-4 shadow-lg items-center text-center">
            <img
              className="rounded-xl drop-shadow-lg mx-auto"
              src={dr3}
              alt=""
            />
            <h1 className="text-xl font-semibold uppercase py-2">
              Prof. Dr. Sarwar Ibne Salam Romel
            </h1>
            <h3 className="text-lg font-semibold underline">
              Pediatric Orthopedics
            </h3>
            <h3 className="py-2">
              MBBS, MS (Ortho)
              <p />
              <p>
                Associate Professor, Dhaka Medical College Hospital's Department
                of Orthopaedics
              </p>
            </h3>
          </div>
        </div>
        <div className="flex hover:scale-95 ease-in-out duration-1000">
          <div className="bg-white/25 border border-white/10 rounded-xl p-4 shadow-lg items-center text-center">
            <img
              className="rounded-xl drop-shadow-lg mx-auto"
              src={dr4}
              alt=""
            />
            <h1 className="text-xl font-semibold uppercase py-2">
              Dr. Shaoli Sarker
            </h1>
            <h3 className="text-lg font-semibold underline">
              Pediatric Neurology
            </h3>
            <h3 className="py-2">MBBS, FCPS(Child)</h3>
            <p>
              Assistant Professor, Bangladesh Shishu Hospital &amp; Institute.
            </p>
          </div>
        </div>
        <div className="flex hover:scale-95 ease-in-out duration-1000">
          <div className="bg-white/25 border border-white/10 rounded-xl p-4 shadow-lg items-center text-center">
            <img
              className="rounded-xl drop-shadow-lg mx-auto"
              src={dr5}
              alt=""
            />
            <h1 className="text-xl font-semibold uppercase py-2">
              Dr. Dipa Saha
            </h1>
            <h3 className="text-lg font-semibold underline">Neurologist</h3>
            <h3 className="py-2">MBBS, FCPS (Ped), FCPS </h3>
            <p>
              Assistant Professor, Ped. Neurology &amp; Development, Ad-din
              Medical College Hospital
            </p>
          </div>
        </div>
        <div className="flex hover:scale-95 ease-in-out duration-1000">
          <div className="bg-white/25 border border-white/10 rounded-xl p-4 shadow-lg items-center text-center">
            <img
              className="rounded-xl drop-shadow-lg mx-auto"
              src={dr6}
              alt=""
            />
            <h1 className="text-xl font-semibold uppercase py-2">
              Dr. Shudipta Roy
            </h1>
            <h3 className="text-lg font-semibold underline">
              Respiratory Medicine
            </h3>
            <h3 className="py-2">BCS (Health), MBBS (Dhaka), FCPS (Child)</h3>
            <p>-</p>
          </div>
        </div>
        <div className="flex hover:scale-95 ease-in-out duration-1000">
          <div className="bg-white/25 border border-white/10 rounded-xl p-4 shadow-lg items-center text-center">
            <img
              className="rounded-xl drop-shadow-lg mx-auto"
              src={dr7}
              alt=""
            />
            <h1 className="text-xl font-semibold uppercase py-2">
              Dr. Jubaida Parvin
            </h1>
            <h3 className="text-lg font-semibold underline">
              Pediatric Neurologist
            </h3>
            <h3 className="py-2">BCS (Health), MBBS (Dhaka), FCPS (Child)</h3>
            <p>-</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthCare;
