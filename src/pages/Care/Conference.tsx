
const Conference = () => {
    return (
        <div>
            <main>
                {/* breadcrumbs */}
                <div className="breadcrumbs text-lg bg-pColor text-white px-8 py-0 ">
                    <ul>
                        <li><a className="underline" href="index.html">Home</a></li>
                        <li>Support</li>
                        <li>Meeting</li>
                    </ul>
                </div>
                {/* Banner */}
                <div className="flex justify-between px-8 mx:px-16 items-center bg-[#000009] border-b-[12px] lg:border-b-[25px] border-[#08A268] drop-shadow-lg">
                    <div className="text-white font-semibold px-4 lg:pr-16">
                        <h1 className="text-xl md:text-4xl lg:text-7xl drop-shadow-lg">SMA</h1>
                        <h1 className="text-xl md:text-4xl lg:text-5xl drop-shadow-lg">Conferences / Meetings</h1>
                    </div>
                    <div>
                        <img src="./src/images/conference-banner-image.jpg" alt="cure-sma-bd-multidisciplinary-clinic-banner" className="w-[350px] object-cover" />
                    </div>
                </div>
                {/* category selection */}
                <div className="flex flex-col items-center justify-center bg-[#08A268]/20 p-6">
                    <div className="relative w-80">
                        <label htmlFor="photo_category" className="block text-xl font-medium text-[#08A268] mb-2 text-center">Select Activity</label>
                        <select id="photo_category" name="photo_category" className="block w-full bg-green-100/50 h-10 rounded-md shadow-sm text-lg font-semibold text-[#08A268] max-h-32 overflow-y-auto">
                            <option disabled selected>Select</option>
                            <option value="All Awareness">All Meetings</option>
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
                {/* category name */}
                <h1 className="pt-10 text-2xl text-[#08A268] font-bold text-center">Category Name: <span>Conference-2024</span></h1>
                {/* meeting videos */}
                <div className="mx-16 grid grid-cols-1 xl:grid-cols-2 gap-4 py-10">
                    {/* meeting Card 1 */}
                    <div className="drop-shadow-lg hover:shadow-xl p-2 border-2 bg-green-100/50">
                        <div className="flex flex-col lg:flex-row bg-white/75 rounded-lg drop-shadow-lg items-center lg:pr-2 h-full transform transition-transform duration-1000 hover:bg-green-100/50">
                            <div className="w-full lg:w-3/5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105">
                                <iframe width="100%" height={315} src="https://www.youtube.com/embed/wmKtQ_aRdqg?si=wshrAdfFZmYv3h5_" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                            <div className="text-center lg:text-left px-4 w-full lg:w-2/5">
                                {/* Title */}
                                <h2 className="text-lg lg:text-2xl font-semibold text-green-600">2024 HCU Conference Keynote</h2>
                                <div className="py-2">
                                    <p className="font-semibold">Meeting Date:</p>
                                    <p>31 July 2024</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Meeting Type:</p>
                                    <p>Live Programme</p>
                                </div>
                                <div className="py-2">
                                    <p className="font-semibold">Sponsor/Arrange by:</p>
                                    <p>HCU Network America</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* meeting card 2 */}
                    <div className="drop-shadow-lg hover:shadow-xl p-2 border-2 bg-green-100/50">
                        <div className="flex flex-col lg:flex-row bg-white/75 rounded-lg drop-shadow-lg items-center lg:pr-2 h-full transform transition-transform duration-1000 hover:bg-green-100/50">
                            <div className="w-full lg:w-3/5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105">
                                <iframe width="100%" height={315} src="https://www.youtube.com/embed/JQC4nW_oQHU?si=ZIgDlk_ydxOZpl0O" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                            <div className="text-center lg:text-left px-4 w-full lg:w-2/5">
                                {/* Title */}
                                <h2 className="text-lg lg:text-2xl font-semibold text-green-600"> Challenge of Rare Disease in the Family</h2>
                                <div className="py-2">
                                    <p className="font-semibold">Meeting Date:</p>
                                    <p>24 July 2024</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Meeting Type:</p>
                                    <p>Online</p>
                                </div>
                                <div className="py-2">
                                    <p className="font-semibold">Sponsor/Arrange by:</p>
                                    <p>CTNNB1 Foundation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* meeting Card 3 */}
                    <div className="drop-shadow-lg hover:shadow-xl p-2 border-2 bg-green-100/50">
                        <div className="flex flex-col lg:flex-row bg-white/75 rounded-lg drop-shadow-lg items-center lg:pr-2 h-full transform transition-transform duration-1000 hover:bg-green-100/50">
                            <div className="w-full lg:w-3/5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105">
                                <iframe width="100%" height={315} src="https://www.youtube.com/embed/wmKtQ_aRdqg?si=wshrAdfFZmYv3h5_" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                            <div className="text-center lg:text-left px-4 w-full lg:w-2/5">
                                {/* Title */}
                                <h2 className="text-lg lg:text-2xl font-semibold text-green-600">2024 HCU Conference Keynote</h2>
                                <div className="py-2">
                                    <p className="font-semibold">Meeting Date:</p>
                                    <p>31 July 2024</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Meeting Type:</p>
                                    <p>Live Programme</p>
                                </div>
                                <div className="py-2">
                                    <p className="font-semibold">Sponsor/Arrange by:</p>
                                    <p>HCU Network America</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* meeting card 4 */}
                    <div className="drop-shadow-lg hover:shadow-xl p-2 border-2 bg-green-100/50">
                        <div className="flex flex-col lg:flex-row bg-white/75 rounded-lg drop-shadow-lg items-center lg:pr-2 h-full transform transition-transform duration-1000 hover:bg-green-100/50">
                            <div className="w-full lg:w-3/5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105">
                                <iframe width="100%" height={315} src="https://www.youtube.com/embed/JQC4nW_oQHU?si=ZIgDlk_ydxOZpl0O" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                            <div className="text-center lg:text-left px-4 w-full lg:w-2/5">
                                {/* Title */}
                                <h2 className="text-lg lg:text-2xl font-semibold text-green-600"> Challenge of Rare Disease in the Family</h2>
                                <div className="py-2">
                                    <p className="font-semibold">Meeting Date:</p>
                                    <p>24 July 2024</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Meeting Type:</p>
                                    <p>Online</p>
                                </div>
                                <div className="py-2">
                                    <p className="font-semibold">Sponsor/Arrange by:</p>
                                    <p>CTNNB1 Foundation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* meeting Card 5 */}
                    <div className="drop-shadow-lg hover:shadow-xl p-2 border-2 bg-green-100/50">
                        <div className="flex flex-col lg:flex-row bg-white/75 rounded-lg drop-shadow-lg items-center lg:pr-2 h-full transform transition-transform duration-1000 hover:bg-green-100/50">
                            <div className="w-full lg:w-3/5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105">
                                <iframe width="100%" height={315} src="https://www.youtube.com/embed/wmKtQ_aRdqg?si=wshrAdfFZmYv3h5_" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                            <div className="text-center lg:text-left px-4 w-full lg:w-2/5">
                                {/* Title */}
                                <h2 className="text-lg lg:text-2xl font-semibold text-green-600">2024 HCU Conference Keynote</h2>
                                <div className="py-2">
                                    <p className="font-semibold">Meeting Date:</p>
                                    <p>31 July 2024</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Meeting Type:</p>
                                    <p>Live Programme</p>
                                </div>
                                <div className="py-2">
                                    <p className="font-semibold">Sponsor/Arrange by:</p>
                                    <p>HCU Network America</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* meeting card 6 */}
                    <div className="drop-shadow-lg hover:shadow-xl p-2 border-2 bg-green-100/50">
                        <div className="flex flex-col lg:flex-row bg-white/75 rounded-lg drop-shadow-lg items-center lg:pr-2 h-full transform transition-transform duration-1000 hover:bg-green-100/50">
                            <div className="w-full lg:w-3/5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105">
                                <iframe width="100%" height={315} src="https://www.youtube.com/embed/JQC4nW_oQHU?si=ZIgDlk_ydxOZpl0O" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                            <div className="text-center lg:text-left px-4 w-full lg:w-2/5">
                                {/* Title */}
                                <h2 className="text-lg lg:text-2xl font-semibold text-green-600"> Challenge of Rare Disease in the Family</h2>
                                <div className="py-2">
                                    <p className="font-semibold">Meeting Date:</p>
                                    <p>24 July 2024</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Meeting Type:</p>
                                    <p>Online</p>
                                </div>
                                <div className="py-2">
                                    <p className="font-semibold">Sponsor/Arrange by:</p>
                                    <p>CTNNB1 Foundation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* meeting Card 7 */}
                    <div className="drop-shadow-lg hover:shadow-xl p-2 border-2 bg-green-100/50">
                        <div className="flex flex-col lg:flex-row bg-white/75 rounded-lg drop-shadow-lg items-center lg:pr-2 h-full transform transition-transform duration-1000 hover:bg-green-100/50">
                            <div className="w-full lg:w-3/5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105">
                                <iframe width="100%" height={315} src="https://www.youtube.com/embed/wmKtQ_aRdqg?si=wshrAdfFZmYv3h5_" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                            <div className="text-center lg:text-left px-4 w-full lg:w-2/5">
                                {/* Title */}
                                <h2 className="text-lg lg:text-2xl font-semibold text-green-600">2024 HCU Conference Keynote</h2>
                                <div className="py-2">
                                    <p className="font-semibold">Meeting Date:</p>
                                    <p>31 July 2024</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Meeting Type:</p>
                                    <p>Live Programme</p>
                                </div>
                                <div className="py-2">
                                    <p className="font-semibold">Sponsor/Arrange by:</p>
                                    <p>HCU Network America</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* meeting card 8 */}
                    <div className="drop-shadow-lg hover:shadow-xl p-2 border-2 bg-green-100/50">
                        <div className="flex flex-col lg:flex-row bg-white/75 rounded-lg drop-shadow-lg items-center lg:pr-2 h-full transform transition-transform duration-1000 hover:bg-green-100/50">
                            <div className="w-full lg:w-3/5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105">
                                <iframe width="100%" height={315} src="https://www.youtube.com/embed/JQC4nW_oQHU?si=ZIgDlk_ydxOZpl0O" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                            <div className="text-center lg:text-left px-4 w-full lg:w-2/5">
                                {/* Title */}
                                <h2 className="text-lg lg:text-2xl font-semibold text-green-600"> Challenge of Rare Disease in the Family</h2>
                                <div className="py-2">
                                    <p className="font-semibold">Meeting Date:</p>
                                    <p>24 July 2024</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Meeting Type:</p>
                                    <p>Online</p>
                                </div>
                                <div className="py-2">
                                    <p className="font-semibold">Sponsor/Arrange by:</p>
                                    <p>CTNNB1 Foundation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* meeting Card 9 */}
                    <div className="drop-shadow-lg hover:shadow-xl p-2 border-2 bg-green-100/50">
                        <div className="flex flex-col lg:flex-row bg-white/75 rounded-lg drop-shadow-lg items-center lg:pr-2 h-full transform transition-transform duration-1000 hover:bg-green-100/50">
                            <div className="w-full lg:w-3/5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105">
                                <iframe width="100%" height={315} src="https://www.youtube.com/embed/wmKtQ_aRdqg?si=wshrAdfFZmYv3h5_" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                            <div className="text-center lg:text-left px-4 w-full lg:w-2/5">
                                {/* Title */}
                                <h2 className="text-lg lg:text-2xl font-semibold text-green-600">2024 HCU Conference Keynote</h2>
                                <div className="py-2">
                                    <p className="font-semibold">Meeting Date:</p>
                                    <p>31 July 2024</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Meeting Type:</p>
                                    <p>Live Programme</p>
                                </div>
                                <div className="py-2">
                                    <p className="font-semibold">Sponsor/Arrange by:</p>
                                    <p>HCU Network America</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* meeting card 10 */}
                    <div className="drop-shadow-lg hover:shadow-xl p-2 border-2 bg-green-100/50">
                        <div className="flex flex-col lg:flex-row bg-white/75 rounded-lg drop-shadow-lg items-center lg:pr-2 h-full transform transition-transform duration-1000 hover:bg-green-100/50">
                            <div className="w-full lg:w-3/5 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105">
                                <iframe width="100%" height={315} src="https://www.youtube.com/embed/JQC4nW_oQHU?si=ZIgDlk_ydxOZpl0O" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                            <div className="text-center lg:text-left px-4 w-full lg:w-2/5">
                                {/* Title */}
                                <h2 className="text-lg lg:text-2xl font-semibold text-green-600"> Challenge of Rare Disease in the Family</h2>
                                <div className="py-2">
                                    <p className="font-semibold">Meeting Date:</p>
                                    <p>24 July 2024</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Meeting Type:</p>
                                    <p>Online</p>
                                </div>
                                <div className="py-2">
                                    <p className="font-semibold">Sponsor/Arrange by:</p>
                                    <p>CTNNB1 Foundation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* canonical number */}
                <div className="flex justify-center text-center mb-8">
                    <button className="btn join-item">1</button>
                    <button className="btn join-item">2</button>
                    <button className="btn join-item btn-disabled">...</button>
                    <button className="btn join-item">4</button>
                    <button className="btn join-item">5</button>
                </div>

            </main>

        </div>
    );
};

export default Conference;