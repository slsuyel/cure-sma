import { Link } from "react-router-dom";

const SupportAddress = () => {
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
                    <h1>Address-Multidisciplinary Clinic</h1>
                </div>
            </div>
            <section className="bg-gray-200 pb-8">
                <div className="flex items-center px-16 py-8">
                    <h1 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold text-blue-950">ADDRESS- MULTIDISCIPLINARY CLINIC</h1>
                    <div className="bg-blue-800 pb-1 w-40 lg:w-60 xl:w-[570px] mx-2" />
                    <div className="flex gap-2">
                        <div className="bg-red-500 pb-4 w-4 h-4" />
                        <div className="bg-blue-400 pb-4 w-4 h-4" />
                        <div className="bg-blue-900 pb-4 w-4 h-4" />
                        <div className="bg-green-400 pb-4 w-4 h-4" />
                        <div className="bg-yellow-400 pb-4 w-4 h-4" />
                    </div>
                </div>
                <div className="lg:flex px-8 gap-16 ml-8 pr-16 ">
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
                    <div className="w-full lg:w-8/12 py-4 bg-white/50 border-l-8 border-blue-900 rounded-md mt-8">
                        <div className="md:flex">
                            <img className="w-48 h-48" src="https://forhadhub.github.io/CSMA-Web/src/images/barakah-foundation.jpeg" alt="cure-sma-bd-multidisciplinary-clinic" />
                            <div className="pl-4">
                                <h1 className="text-2xl font-semibold pb-2">The Barakah General Hospital Ltd.</h1>
                                <h2 className="text-md xl:text-lg text-bold font-semibold"><i className="fa-solid fa-location-dot" aria-hidden="true" /> Address: </h2>
                                <h2 className="text-md xl:text-lg pl-4 pb-2">No. 2, Opposite, Police line Gate, 937 Outer Circular Rd, Dhaka 1000</h2>
                                <h2 className="text-md xl:text-lg"><span className="font-semibold"><i className="fa-solid fa-earth-americas" aria-hidden="true" /> Website:</span> N/A </h2>
                                <h2 className="text-md xl:text-lg"><span className="font-semibold"><i className="fa-solid fa-earth-americas" aria-hidden="true" /> Social:</span> N/A </h2>
                                <h2 className="text-md xl:text-lg"><span className="font-semibold"><i className="fa-solid fa-earth-americas" aria-hidden="true" /> Contact:</span>  +88 01720-045769 </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    );
};

export default SupportAddress;