import { Link } from "react-router-dom";

const SupportAbout = () => {
    return (
        <main>
            {/* breadcrumbs */}
            <div className="breadcrumbs text-lg bg-pColor text-white px-8 py-0 ">
                <ul>
                    <li><Link className="underline" to="/">Home</Link></li>
                    <li>Support</li>
                    <li>Multidisciplinary Clinic</li>
                    <li>Address of Multidisciplinary Clinic</li>
                </ul>
            </div>
            {/* Banner */}
            <div className="flex justify-between pl-16 items-center bg-gradient-to-r from-black via-black to-blue-900 border-b-[12px] lg:border-b-[25px] border-blue-950 drop-shadow-lg">
                <div>
                    <img src="https://forhadhub.github.io/CSMA-Web/src/images/Multidisciplinary-%20clinic-banner.jpg" alt="cure-sma-bd-multidisciplinary-clinic-banner" className="w-[450px] object-cover" />
                </div>
                <div className="text-sky-200 font-semibold px-4 lg:pr-16 text-xl md:text-4xl lg:text-5xl text-right">
                    <h1>About Multidisciplinary Clinic</h1>
                </div>
            </div>
            <section className="bg-gray-200 pb-8">
                <div className="flex items-center px-16 py-8">
                    <h1 className="text-base md:text-xl lg:text-3xl xl:text-4xl font-semibold text-blue-950">ABOUT MULTIDISCIPLINARY CLINIC</h1>
                    <div className="bg-blue-800 pb-1 w-40 lg:w-60 xl:w-[570px] mx-2" />
                    <div className="flex gap-2">
                        <div className="bg-red-500 pb-4 w-4 h-4" />
                        <div className="bg-blue-400 pb-4 w-4 h-4" />
                        <div className="bg-blue-900 pb-4 w-4 h-4" />
                        <div className="bg-green-400 pb-4 w-4 h-4" />
                        <div className="bg-yellow-400 pb-4 w-4 h-4" />
                    </div>
                </div>
                <div className="lg:flex px-8 gap-16 ml-8 pr-16">
                    <div className="w-full lg:w-4/12">
                        <div>
                            <Link to="/support/about-multidisciplinary"><h1 className="text-lg lg:text-xl pl-2 py-4 border-b-4 border-white bg-blue-950 text-white hover:text-blue-950 hover:border-2 hover:border-blue-950 hover:bg-transparent">About Multidisciplinary Clinic</h1></Link>
                        </div>
                        <div>
                            <Link to="/support/cure-sma-bd-address-multidisciplinary-clinic"><h1 className="text-lg lg:text-xl pl-2 py-4 border-b-4 border-white bg-blue-200 text-white hover:text-blue-950 hover:border-2 hover:border-blue-950 hover:bg-transparent">Address of Multidisciplinary Clinic</h1></Link>
                        </div>
                        <div>
                            <Link to="/support/cure-sma-bd-picture-multidisciplinary-clinic"><h1 className="text-lg lg:text-xl pl-2 py-4 border-b-4 border-white bg-blue-200 text-white hover:text-blue-950 hover:border-2 hover:border-blue-950 hover:bg-transparent">Pictures of Multidisciplinary Clinic</h1></Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-8/12">
                        <p className="my-4 font-medium text-lg">A Multidisciplinary Spinal Muscular Atrophy (SMA) Clinic is a specialized healthcare facility designed to provide comprehensive care for individuals affected by SMA. SMA is a genetic neuromuscular disorder that affects the motor neurons in the spinal cord, leading to muscle weakness and atrophy. A multidisciplinary approach is crucial in managing SMA because it involves various aspects of medical, rehabilitative, and supportive care.</p>
                        <p className="my-4">Key features of a multidisciplinary SMA clinic typically include:</p>
                        <p className="my-4"><span className="font-bold">1.	Medical Management: </span>This involves the medical evaluation and treatment by neurologists, physiatrists (rehabilitation specialists), and other medical specialists who are experienced in managing SMA.</p>
                        <p className="my-4"><span className="font-bold">2.	Rehabilitation Services: </span>Physical therapists and occupational therapists play a significant role in helping individuals with SMA maintain mobility, prevent contractures (muscle tightness), and improve overall functional abilities.</p>
                        <p className="my-4"><span className="font-bold">3.	Nutritional Support: </span>Dietitians or nutritionists may be involved to ensure that individuals with SMA receive adequate nutrition, as swallowing and feeding difficulties can be common.</p>
                        <p className="my-4"><span className="font-bold">4.	Respiratory Care: </span>Respiratory therapists and pulmonologists are essential for managing respiratory complications that can arise due to muscle weakness affecting the lungs and diaphragm.</p>
                        <p className="my-4"><span className="font-bold">5.	Genetic Counseling: </span>Genetic counselors provide information about the genetic aspects of SMA, including inheritance patterns and family planning options.</p>
                        <p className="my-4"><span className="font-bold">6.	Psychosocial Support: </span>Social workers, psychologists, or counselors offer support to individuals with SMA and their families to address emotional, social, and practical challenges associated with the condition.</p>
                        <p className="my-4"><span className="font-bold">7.	Coordination of Care: </span>A key role of the clinic is to coordinate the efforts of various specialists involved in the care of individuals with SMA to ensure that all aspects of their health and well-being are addressed comprehensively.</p>
                        <p className="my-4"><span className="font-bold">8.	Research and Clinical Trials: </span>Some multidisciplinary SMA clinics may also be involved in research and offer access to clinical trials, providing patients with opportunities to participate in advancing treatments for SMA.</p>
                        <p className="my-4">Overall, the goal of a multidisciplinary SMA clinic is to improve the quality of life for individuals with SMA by providing integrated, holistic care that addresses the complex medical, functional, and psychosocial needs associated with the condition. These clinics often serve as a centralized resource for families affected by SMA, offering expertise and support throughout the course of the disease.</p>
                    </div>
                </div>
            </section>

        </main>

    );
};

export default SupportAbout;