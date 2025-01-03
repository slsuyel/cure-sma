import sppp from '/images/special equipment.jpg';
import about from '/images/about_SMA.png';
import vs2 from '/images/vis-2.png';
import vs1 from '/images/vis-1.png';
import vs3 from '/images/vis-3.png';
import vs4 from '/images/vis-4.png';
import vs5 from '/images/vis-5.jpg';
import vs6 from '/images/vis-6.jpg';
const AboutSmaBd = () => {
  return (
    <main>
      {/* banner */}
      <div className="flex flex-col md:flex-row bg-green-50 p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/12 mb-8 md:mb-0">
            <img
              className="bimg w-full md:w-[600px] border-8 px-4 py-8 border-white rounded-md"
              src={about}
              alt="Overview of Spinal Muscular Atrophy and its impact on individuals"
            />
          </div>
          <div className="w-full md:w-7/12 text-center md:text-left pl-8">
            <p className="lg:text-6xl text-5xl font-bold text-black/70 mb-4 md:mb-0">
              ABOUT SMA
            </p>
            <p className="py-4 text-2xl lg:text-4xl md:text-2xl text-black/70 mb-0">
              Spinal Muscular Atrophy
            </p>
            <p className="lg:text-xl text-lg text-pColor">
              This is a rare genetic disorder that affects the motor neurons in
              the spinal cord, leading to muscle weakness and atrophy. It is
              caused by mutations in the survival motor neuron 1 (SMN1) gene,
              which is essential for the survival of motor neurons that control
              voluntary muscle movements such as crawling, walking, and
              swallowing.
            </p>
            <p className="mt-8">
              <a
                href="#category-btn"
                className="w-full md:w-80 px-8 py-2 rounded-3xl bg-pColor text-white text-center hover:bg-transparent hover:border-2 hover:border-pColor hover:text-pColor font-semibold"
              >
                Start to Learn More..
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* category */}
      <div
        id="category-btn"
        className="flex flex-wrap gap-4 px-4 pt-14 justify-center"
      >
        <div>
          <a href="#sma-type">
            <button className="pBtn drop-shadow-md text-base lg:text-xl bg-green-200 hover:bg-transparent hover:border-2 hover:border-pColor hover:text-pColor">
              SMA Type
            </button>
          </a>
        </div>
        <div>
          <a href="#symptoms">
            <button className="pBtn drop-shadow-md text-base lg:text-xl bg-green-200 hover:bg-transparent hover:border-2 hover:border-pColor hover:text-pColor">
              Symptoms
            </button>
          </a>
        </div>
        <div>
          <a href="#Visualization">
            <button className="pBtn drop-shadow-md text-base lg:text-xl bg-green-200 hover:bg-transparent hover:border-2 hover:border-pColor hover:text-pColor">
              Visualization
            </button>
          </a>
        </div>
        <div>
          <a href="#Supporting">
            <button className="pBtn drop-shadow-md text-base lg:text-xl bg-green-200 hover:bg-transparent hover:border-2 hover:border-pColor hover:text-pColor">
              Supporting
            </button>
          </a>
        </div>
        <div>
          <a href="#Equipment">
            <button className="pBtn drop-shadow-md text-base lg:text-xl bg-green-200 hover:bg-transparent hover:border-2 hover:border-pColor hover:text-pColor">
              Equipment
            </button>
          </a>
        </div>
        <div>
          <a href="#Treatment">
            <button className="pBtn drop-shadow-md text-base lg:text-xl bg-green-200 hover:bg-transparent hover:border-2 hover:border-pColor hover:text-pColor">
              Treatment
            </button>
          </a>
        </div>
      </div>
      {/* SMA Type */}
      <div id="sma-type" className="px-8 my-10 text-base lg:text-xl">
        <div className="collapse collapse-plus bg-base-200/50 border-2 border-pColor rounded-bl-none rounded-tr-none mb-2 hover:drop-shadow-md hover:bg-green-100">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-pColor">
            SMA Type-0 (Most Severe)
          </div>
          <div className="collapse-content">
            <p>
              It is most rare and most severe form of SMA. The symptoms may be
              seen before birth of the child. These children normally survive a
              few few week to few months.{' '}
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200/50 border-2 border-pColor rounded-bl-none rounded-tr-none mb-2 hover:drop-shadow-md hover:bg-green-100">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-pColor">
            SMA Type-1 (also known as Werdnig-Hoffmann disease)
          </div>
          <div className="collapse-content">
            <p>Younger than 6 months</p>
            <p>
              This is the most severe form of SMA, typically appearing within
              the first six months of life. Infants with Type 1 SMA have very
              weak muscles, difficulty swallowing, and often face respiratory
              challenges.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200/50 border-2 border-pColor rounded-bl-none rounded-tr-none mb-2 hover:drop-shadow-md hover:bg-green-100">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-pColor">
            SMA Type-2 (also known as Dubowitz disease)
          </div>
          <div className="collapse-content">
            <p>6 - 18 months</p>
            <p>
              This form of SMA usually manifests between 6 and 18 months of age.
              Children with Type 2 SMA can sit independently but may require
              assistance with mobility and daily activities.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200/50 border-2 border-pColor rounded-bl-none rounded-tr-none mb-2 hover:drop-shadow-md hover:bg-green-100">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-pColor">
            SMA Type-3 (also known as Kugelberg-Welander disease)
          </div>
          <div className="collapse-content">
            <p>18 months - 03 years</p>
            <p>
              SMA typically begins after 18 months of age and allows affected
              individuals to stand and walk independently, although they may
              experience progressive muscle weakness over time.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200/50 border-2 border-pColor rounded-bl-none rounded-tr-none mb-2 hover:drop-shadow-md hover:bg-green-100">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-pColor">
            SMA Type-4 (Adult)
          </div>
          <div className="collapse-content">
            <p>Over 18 years</p>
            <p>
              This is the mildest form of SMA, with symptoms that typically
              appear in adulthood. Individuals with Type 4 SMA may experience
              mild muscle weakness and have a normal lifespan.
            </p>
          </div>
        </div>
      </div>
      {/* symptoms */}
      <div id="symptoms" className="bg-base-200 py-8 my-8">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-2xl lg:text-4xl font-bold underline">
            Symptoms
          </h1>
          <p className="text-lg mb-2 font-semibold">
            SMA symptoms vary depending on the type. Common Symptoms are:
          </p>
          <p className="text-lg mb-4">
            * Progressive loss of muscle control * Difficulty with head
            movements * Difficulty chewing &amp; swallowing * Breathing problems
            * Weak limbs * Scoliosis and kyphosis * Pressure sores * Limited
            mobility * Bone fractures * Floppy arms and legs * Problems running,
            climbing stairs, or getting up from a chair (for SMA Type-3)
          </p>
        </div>
        <div className="mx-4 sm:mx-6 lg:mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-red-100/50 p-6 sm:p-8 lg:p-10 rounded-xl hover:drop-shadow-xl">
            <h2 className="text-xl font-semibold text-center mb-4">
              Symptoms in Infants <br />
              (Type 1 SMA)
            </h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Poor muscle tone (floppiness)</li>
              <li>Lack of reflexes</li>
              <li>Breathing difficulties</li>
            </ul>
          </div>
          <div className="bg-red-100 p-6 sm:p-8 lg:p-10 rounded-xl hover:drop-shadow-xl">
            <h2 className="text-xl font-semibold text-center mb-4">
              Symptoms in Toddlers <br />
              (Type 2 SMA)
            </h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Delayed motor milestones</li>
              <li>Difficulty sitting up</li>
              <li>Weakness in the lower limbs</li>
            </ul>
          </div>
          <div className="bg-red-200 p-6 sm:p-8 lg:p-10 rounded-xl hover:drop-shadow-xl">
            <h2 className="text-xl font-semibold text-center mb-4">
              Symptoms in Older Children <br />
              (Type 3 SMA)
            </h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Difficulty walking</li>
              <li>Muscle fatigue</li>
              <li>Scoliosis (curvature of the spine)</li>
            </ul>
          </div>
          <div className="bg-red-300 p-6 sm:p-8 lg:p-10 rounded-xl hover:drop-shadow-xl">
            <h2 className="text-xl font-semibold text-center mb-4">
              Symptoms in Adults <br />
              (Type 4 SMA)
            </h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Muscle weakness in the limbs</li>
              <li>Tremors</li>
              <li>Difficulty with physical activities</li>
            </ul>
          </div>
        </div>
      </div>
      {/* visualization */}
      <div id="Visualization" className="py-8">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-2xl lg:text-4xl font-bold underline">
            Visualization of Signs &amp; Symptoms
          </h1>
          <p className="text-lg mb-2 font-semibold">
            The symptoms of SMA and when they first appear depend on the type of
            SMA you have.
          </p>
          <p className="text-lg mb-4">Commonly observed symptoms include</p>
        </div>
        <div className="mx-4 sm:mx-6 lg:mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-yellow-200 p-6 sm:p-8 lg:p-10 rounded-full hover:drop-shadow-xl">
            <img
              className="mx-auto w-40 drop-shadow-md"
              src={vs2}
              alt="Cure-sma-bd-visualization1"
            />
            <h2 className="text-xl font-semibold text-center mb-4">
              Floppy of weak arms and legs{' '}
            </h2>
          </div>
          <div className="bg-yellow-200 p-6 sm:p-8 lg:p-10 rounded-full hover:drop-shadow-xl">
            <img
              className="mx-auto w-40 drop-shadow-md"
              src={vs3}
              alt="Cure-sma-bd-visualization1"
            />
            <h2 className="text-xl font-semibold text-center mb-4">
              Mobility problems
            </h2>
          </div>
          <div className="bg-yellow-200 p-6 sm:p-8 lg:p-10 rounded-full hover:drop-shadow-xl">
            <img
              className="mx-auto w-40 drop-shadow-md"
              src={vs4}
              alt="Cure-sma-bd-visualization1"
            />
            <h2 className="text-xl font-semibold text-center mb-4">
              Twitching or shaking muscles
            </h2>
          </div>
          <div className="bg-yellow-200 p-6 sm:p-8 lg:p-10 rounded-full hover:drop-shadow-xl">
            <img
              className="mx-auto w-40 drop-shadow-md"
              src={vs1}
              alt="Cure-sma-bd-visualization1"
            />
            <h2 className="text-xl font-semibold text-center mb-4">
              Bone and joint problems
            </h2>
          </div>
        </div>
        <div className="lg:flex mt-14">
          <div className="px-4 sm:px-6 lg:px-8">
            <img
              className="w-full max-w-screen-md mx-auto"
              src={vs5}
              alt="Cure-sma-bd-visualization1"
            />
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <img
              className="w-full max-w-screen-md mx-auto"
              src={vs6}
              alt="Cure-sma-bd-visualization1"
            />
          </div>
        </div>
      </div>
      {/* Supporting */}
      <div id="Supporting" className="py-8 bg-base-200 my-8">
        <div className="text-center px-4 sm:px-6 lg:px-8 mb-8">
          <h1 className="mb-4 text-2xl lg:text-4xl font-bold underline">
            Supporting Medicines &amp; Equipment are needed for SMA Patients
          </h1>
          <p className="text-lg mb-2 font-semibold">
            (These Medicinnes &amp; Instruments may very depend on a Person’s
            Individual Needs)
          </p>
        </div>
        <div id="Equipment" className="px-8 lg:flex">
          <div className="w-full lg:w-5/12">
            <img
              className="w-full max-w-screen-md mx-auto"
              src={sppp}
              alt="cure-sma-bd-special-equipment"
            />
          </div>
          {/* content */}
          <div className="w-full lg:w-7/12 lg:pl-4">
            <div className="text-center lg:text-left">
              <p>
                Supporting medicines and equipment are crucial for managing
                Spinal Muscular Atrophy (SMA) and improving the quality of life
                for patients. While there's no cure for SMA, various treatments,
                medications, and assistive devices can help manage symptoms and
                support daily activities. Here's a list of some key medicines
                and equipment that are commonly used:
              </p>
              <br />
              <p>
                * Physical, Speech &amp; Occupational Therapy * Therapy
                Instruments * Proper Nutrition * Orthopedic Devices(AFO, KAFO,
                braces, crutches, walkers etc) * Cough Assistive Devices *
                Electric &amp; Manual Wheelchair * Bathing Chair * Adult Diapers
                * Bone fractures
              </p>
            </div>
            <div className="bg-sky-100">
              <h2 className="mt-4 text-xl font-bold">
                Medicines for SMA Patients
              </h2>
              <p className="mt-2 text-lg font-semibold">
                1. Spinraza (Nusinersen):
              </p>
              <p>
                ๏ An FDA-approved drug that has been shown to improve motor
                function in SMA patients. It works by increasing the production
                of the SMN protein, which is deficient in SMA patients.
              </p>
              <p className="mt-2 text-lg font-semibold">
                2. Evrysdi (Risdiplam):
              </p>
              <p>
                ๏ A medication that is taken orally and works by helping the
                body produce more of the SMN protein, which is essential for
                motor neuron survival.
              </p>
              <p className="mt-2 text-lg font-semibold">3. Zolgensma:</p>
              <p>
                ๏ A gene therapy for treating SMA in children under two years
                old. It delivers a functional copy of the SMN1 gene to replace
                the faulty or missing gene.
              </p>
              <p className="mt-2 text-lg font-semibold">
                4. Antispasmodic Drugs:
              </p>
              <p>
                ๏ Medications like Baclofen or Diazepam may be prescribed to
                manage muscle stiffness and spasms.
              </p>
              <p className="mt-2 text-lg font-semibold">5. Pain Relievers:</p>
              <p>
                ๏ Nonsteroidal anti-inflammatory drugs (NSAIDs) or other pain
                relievers may be used to manage discomfort and pain associated
                with SMA symptoms.
              </p>
            </div>
            {/* Equipment for SMA Patients */}
            <div className="bg-blue-100">
              <h2 className="mt-4 text-xl font-bold">
                Equipment for SMA Patients
              </h2>
              <p className="mt-2 text-lg font-semibold">
                1. Respiratory Support Devices:
              </p>
              <p>
                ๏ BiPAP/CPAP Machines: These devices help with breathing,
                especially during sleep, by providing positive airway pressure.
              </p>
              <p>
                ๏ Cough Assist Machines: Help patients clear mucus from their
                lungs, reducing the risk of respiratory infections.
              </p>
              <p className="mt-2 text-lg font-semibold">2. Mobility Aids:</p>
              <p>
                ๏ Wheelchairs: Electric or manual wheelchairs tailored to the
                patient's needs, allowing for greater independence.
              </p>
              <p>
                ๏ Standing Frames: Assist with standing exercises to maintain
                bone density and muscle strength.
              </p>
              <p className="mt-2 text-lg font-semibold">3. Feeding Aids:</p>
              <p>
                ๏ Gastrostomy Tube (G-Tube): For patients who have difficulty
                swallowing, a G-tube can ensure they receive proper nutrition.
              </p>
              <p>
                ๏ Adaptive Utensils: Specialized utensils can help patients with
                limited hand strength feed themselves more easily.
              </p>
              <p className="mt-2 text-lg font-semibold">
                4. Orthopedic Supports:
              </p>
              <p>
                ๏ Braces: Spinal braces or orthotic devices can help manage
                scoliosis, support weak joints, and prevent contractures.
              </p>
              <p>
                ๏ Orthopedic Shoes: Customized shoes or inserts can provide
                additional support for patients with foot deformities or
                weakness.
              </p>
              <p className="mt-2 text-lg font-semibold">
                5. Communication Devices:
              </p>
              <p>
                ๏ Speech Generating Devices (SGDs): For patients with severe
                muscle weakness affecting speech, SGDs can help them communicate
                effectively.
              </p>
              <p>
                ๏ Switches and Adaptive Keyboards: Allow patients with limited
                mobility to use computers and other devices.
              </p>
              <p className="mt-2 text-lg font-semibold">
                6. Physical Therapy Equipment:
              </p>
              <p>
                ๏ Exercise Balls and Mats: Used in physical therapy to improve
                strength, balance, and coordination.
              </p>
              <p>
                ๏ Therapeutic Bands: Resistance bands help in maintaining and
                improving muscle strength.
              </p>
              <p className="mt-2 text-lg font-semibold">
                7. Assistive Technology:
              </p>
              <p>
                ๏ Environmental Control Units (ECUs): These systems allow
                patients to control lights, televisions, and other electronic
                devices through voice commands or switches.
              </p>
              <p>
                ๏ Robotic Arms: Assist patients in performing daily tasks like
                eating or drinking independently.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="Treatment" className="my-10">
        <div className="text-center px-4 sm:px-6 lg:px-8 mb-8">
          <h1 className="mb-4 text-2xl lg:text-4xl font-bold underline">
            Available Treatments of SMA
          </h1>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-8 xl:px-8 items-center rounded-tr-[160px] rounded-tl-[160px] bg-gradient-to-b from-blue-300 to-blue-100">
            <div className="w-full lg:w-1/4">
              <img
                src="https://forhadhub.github.io/CSMA-Web/src/images/Treatment-1.png"
                className="w-40 drop-shadow-lg max-w-screen-md mx-auto"
                alt="cure-sma-bd-treatment1"
              />
            </div>
            <div className="w-3/4 py-4">
              <h2 className="text-xl font-bold lg:pr-20">
                Risdiplam is the only oral solution, non-invasive, at-home
                treatment with proven results in adults, children, and infants
                with SMA
              </h2>
              <p className="mt-2 text-lg">
                ✓ Risdiplam is a prescription medicine used to treat spinal
                muscular atrophy (SMA) in children and adults. <br />
                ✓ Manufactured by Roche Pharmaceuticals <br />
                ✓ Risdiplam is designed to help produce SMN protein throughout
                the body <br />
                ✓ No needles, sedation, no required monitoring or laboratory
                testing or hospital stays required to take Risdiplam <br />
                ✓ Can be taken anywhere <br />
                ✓ FDA approved <br />
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-8 xl:px-8 my-8 items-center bg-blue-100">
            <div className="w-3/4 py-4 lg:pl-20">
              <h2 className="text-xl font-bold">
                Onasemnogene abeparvovec, the only one-time gene therapy that
                stops the progression of SMA
              </h2>
              <p className="mt-2 text-lg">
                ✓ Onasemnogene abeparvovec-xioi is an essential one-time
                treatment option that targets the genetic root cause of SMA{' '}
                <br />
                ✓ Manufactured by Novartis Pharmaceuticals <br />✓ Onasemnogene
                abeparvovec-xioi is a prescription gene therapy for the
                treatment of SMA in children less than 2 years old <br />
                ✓ Solution for infusion <br />✓ FDA approved
              </p>
            </div>
            <div className="w-full lg:w-1/4">
              <img
                src="https://forhadhub.github.io/CSMA-Web/src/images/Treatment-2.png"
                className="w-40 drop-shadow-lg max-w-screen-md mx-auto"
                alt="cure-sma-bd-treatment1"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-8 xl:px-8 items-center rounded-bl-[160px] rounded-br-[160px] bg-gradient-to-b from-blue-100 to-blue-300">
            <div className="w-full lg:w-1/4">
              <img
                src="https://forhadhub.github.io/CSMA-Web/src/images/Treatment-3.png"
                className="w-40 drop-shadow-lg max-w-screen-md mx-auto"
                alt="cure-sma-bd-treatment1"
              />
            </div>
            <div className="w-3/4 py-4 pb-10 lg:pl-20">
              <h2 className="text-xl font-bold">
                Nusinersen may offer improvements for important motor milestones
              </h2>
              <p className="mt-2 text-lg">
                ✓ Nusinersen works by specifically targeting an underlying cause
                of muscle weakness in SMA <br />
                ✓ Manufactured by Biogen Pharmaceuticals <br />
                ✓ Solution for infusion <br />✓ Nusinersen&nbsp;is a
                prescription medicine used to treat spinal muscular atrophy
                (SMA) in pediatric and adult patients <br />
                ✓ Nusinersen has been studied for over 8 years in the longest
                clinical trial program in SMA to date <br />✓ Solution for
                injection
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 mb-20 text-center">
        <button className="px-4 py-3 rounded-xl bg-sky-200 text-pfont hover:text-white hover:drop-shadow-lg hover:bg-cyan-500 hover:translate-y-1 hover:duration-[.5s]">
          <a
            target="_blank"
            className="text-2xl md:text-4xl leading-normal"
            href="https://drive.google.com/file/d/1ezZGPlkdI5aPawGrOooSTAn9fPgxXGZb/view?usp=sharing"
          >
            <span className="font-bold">
              <i
                className="fa-solid fa-download fa-bounce"
                aria-hidden="true"
              />{' '}
              Download:{' '}
            </span>
            About SMA Leaflet
          </a>
        </button>
      </div>
    </main>
  );
};

export default AboutSmaBd;
