
const Awareness = () => {
    return (
        <>
            <main>
                {/* breadcrumbs */}
                <div className="breadcrumbs text-lg bg-pColor text-white px-8 py-0 ">
                    <ul>
                        <li><a className="underline" href="index.html">Home</a></li>
                        <li>Support</li>
                        <li>Awareness Activities</li>
                    </ul>
                </div>
                {/* Banner */}
                <div className="flex justify-between px-16 items-center bg-gray-200 border-b-[12px] lg:border-b-[25px] border-[#08A268] drop-shadow-lg">
                    <div className="text-sky-200 font-semibold px-4 lg:pr-16">
                        <h1 className="text-xl md:text-4xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#08A268] to-green-300 drop-shadow-lg">SMA</h1>
                        <h1 className="text-xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#08A268] to-green-400 drop-shadow-lg">Awareness Activities</h1>
                    </div>
                    <div>
                        <img src="https://forhadhub.github.io/CSMA-Web/src/images/awarness-banner-image.jpg" alt="cure-sma-bd-multidisciplinary-clinic-banner" className="w-[350px] object-cover" />
                    </div>
                </div>
                {/* category selection */}
                <div className="flex flex-col items-center justify-center bg-[#08A268]/20 p-6">
                    <div className="relative w-80">
                        <label htmlFor="photo_category" className="block text-xl font-medium text-[#08A268] mb-2 text-center">Select Activity</label>
                        <select id="photo_category" name="photo_category" className="block w-full bg-green-100/50 h-10 rounded-md shadow-sm text-lg font-semibold text-[#08A268] max-h-32 overflow-y-auto">
                            <option disabled selected>Select</option>
                            <option value="All Awareness">All Awareness</option>
                            <option value="Rare Disease Day-2024">Rare Disease Day-2024</option>
                            <option value="Committee">Committee</option>
                            <option value="Meeting">Meeting</option>
                            <option value="Events 1">Events 1</option>
                            <option value="Events 2">Events 2</option>
                            <option value="Events 3">Events 3</option>
                            <option value="Events 4">Events 4</option>
                            <option value="Treatment">Treatment</option>
                        </select>
                    </div>
                </div>
                {/* photo gallery */}
                <div className="px-8 md:px-8 xl:px-16 flex flex-col items-center justify-center font-sans my-10">
                    {/* category name */}
                    <h1 className="mb-4 text-2xl text-[#08A268] font-bold text-center">Category Name: <span>Rare Disease Day-2024</span></h1>
                    {/* awareness photo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-8 my-10">
                        <div className="flex flex-col items-center border-2 border-[#08A268]  bg-green-100 p-2 rounded-md hover:border-coral hover:shadow-lg">
                            <img className="rounded-md  cursor-pointer" src="https://forhadhub.github.io/CSMA-Web/src/images/aware-activitiy-1.jpeg" alt="cure sma-nabonee" />
                        </div>
                        <div className=" flex flex-col items-center border-2 border-[#08A268]  bg-green-100 p-2 rounded-md  hover:border-coral hover:shadow-lg">
                            <img className="rounded-md  cursor-pointer" src="https://forhadhub.github.io/CSMA-Web/src/images/aware-activitiy-2.jpeg" alt="cure sma-nabonee" />
                        </div>
                        <div className=" flex flex-col items-center border-2 border-[#08A268]  bg-green-100 p-2 rounded-md  hover:border-coral hover:shadow-lg">
                            <img className="rounded-md  cursor-pointer" src="https://forhadhub.github.io/CSMA-Web/src/images/aware-activitiy-3.jpeg" alt="cure sma-nabonee" />
                        </div>
                        <div className=" flex flex-col items-center border-2 border-[#08A268]  bg-green-100 p-2 rounded-md  hover:border-coral hover:shadow-lg">
                            <img className="rounded-md  cursor-pointer" src="https://forhadhub.github.io/CSMA-Web/src/images/aware-activitiy-4.jpeg" alt="cure sma-nabonee" />
                        </div>
                        <div className=" flex flex-col items-center border-2 border-[#08A268]  bg-green-100 p-2 rounded-md  hover:border-coral hover:shadow-lg">
                            <img className="rounded-md  cursor-pointer" src="https://forhadhub.github.io/CSMA-Web/src/images/aware-activitiy-5.jpeg" alt="cure sma-nabonee" />
                        </div>
                        <div className=" flex flex-col items-center border-2 border-[#08A268]  bg-green-100 p-2 rounded-md  hover:border-coral hover:shadow-lg">
                            <img className="rounded-md  cursor-pointer" src="https://forhadhub.github.io/CSMA-Web/src/images/aware-activitiy-6.jpeg" alt="cure sma-nabonee" />
                        </div>
                        <div className=" flex flex-col items-center border-2 border-[#08A268]  bg-green-100 p-2 rounded-md  hover:border-coral hover:shadow-lg">
                            <img className="rounded-md  cursor-pointer" src="https://forhadhub.github.io/CSMA-Web/src/images/aware-activitiy-7.jpeg" alt="cure sma-nabonee" />
                        </div>
                        <div className=" flex flex-col items-center border-2 border-[#08A268]  bg-green-100 p-2 rounded-md  hover:border-coral hover:shadow-lg">
                            <img className="rounded-md  cursor-pointer" src="https://forhadhub.github.io/CSMA-Web/src/images/aware-activitiy-8.jpeg" alt="cure sma-nabonee" />
                        </div>
                        <div className=" flex flex-col items-center border-2 border-[#08A268]  bg-green-100 p-2 rounded-md  hover:border-coral hover:shadow-lg">
                            <img className="rounded-md  cursor-pointer" src="https://forhadhub.github.io/CSMA-Web/src/images/aware-activitiy-9.jpeg" alt="cure sma-nabonee" />
                        </div>
                    </div>
                    {/* canonical number */}
                    <div className="flex justify-center mt-4">
                        <button className="btn join-item">1</button>
                        <button className="btn join-item">2</button>
                        <button className="btn join-item btn-disabled">...</button>
                        <button className="btn join-item">4</button>
                        <button className="btn join-item">5</button>
                    </div>
                </div>



            </main>

        </>
    );
};

export default Awareness;