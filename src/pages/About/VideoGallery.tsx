import { useState } from 'react';

const videoData = [
  {
    id: 1,
    category: 'Patients',
    title: 'Cure SMA Bangladesh',
    url: 'https://www.youtube.com/embed/j3EnPwyxHuA?si=xyqUh3mzwo3KJf-3',
  },
  {
    id: 2,
    category: 'Committee',
    title: 'দেশেই প্রতিকার সম্ভব এসএমএ রোগের',
    url: 'https://www.youtube.com/embed/J2PkxSPN7Gw?si=B6yXRuop_7v6uzg9',
  },
  {
    id: 3,
    category: 'Meeting',
    title: 'বিরল রোগে আক্রান্ত ১৬৫ শিশু | SMA',
    url: 'https://www.youtube.com/embed/QzQSaYWi1zE?si=vTxu4pGxoezLT_O6',
  },
  {
    id: 4,
    category: 'Patients',
    title: 'Cure SMA Bangladesh',
    url: 'https://www.youtube.com/embed/j3EnPwyxHuA?si=xyqUh3mzwo3KJf-3',
  },
  {
    id: 5,
    category: 'Committee',
    title: 'দেশেই প্রতিকার সম্ভব এসএমএ রোগের',
    url: 'https://www.youtube.com/embed/J2PkxSPN7Gw?si=B6yXRuop_7v6uzg9',
  },
  {
    id: 6,
    category: 'Meeting',
    title: 'বিরল রোগে আক্রান্ত ১৬৫ শিশু | SMA',
    url: 'https://www.youtube.com/embed/QzQSaYWi1zE?si=vTxu4pGxoezLT_O6',
  },
  {
    id: 7,
    category: 'Patients',
    title: 'Cure SMA Bangladesh',
    url: 'https://www.youtube.com/embed/j3EnPwyxHuA?si=xyqUh3mzwo3KJf-3',
  },
  {
    id: 8,
    category: 'Committee',
    title: 'দেশেই প্রতিকার সম্ভব এসএমএ রোগের',
    url: 'https://www.youtube.com/embed/J2PkxSPN7Gw?si=B6yXRuop_7v6uzg9',
  },
  {
    id: 9,
    category: 'Meeting',
    title: 'বিরল রোগে আক্রান্ত ১৬৫ শিশু | SMA',
    url: 'https://www.youtube.com/embed/QzQSaYWi1zE?si=vTxu4pGxoezLT_O6',
  },
];

const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Videos');

  const filteredVideos =
    selectedCategory === 'All Videos'
      ? videoData
      : videoData.filter(video => video.category === selectedCategory);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-pColor/25 p-6 skeleton">
        <div className="relative w-80">
          <label
            htmlFor="photo_category"
            className="block text-xl font-medium text-pColor mb-2 text-center"
          >
            Video Category
          </label>
          <select
            id="photo_category"
            name="photo_category"
            className="block w-full border border-pColor/50 h-10 rounded-md shadow-sm focus:ring-coral focus:border-coral sm:text-sm"
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="All Videos">All Videos</option>
            <option value="Patients">Patients</option>
            <option value="Committee">Committee</option>
            <option value="Meeting">Meeting</option>
            {/* Add more categories as needed */}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center font-sans my-10">
        <h1 className="mb-4 text-2xl underline text-pColor font-bold">
          {selectedCategory}
        </h1>

        <div className="px-8 my-10">
          <div className="flex flex-wrap justify-center gap-6">
            {filteredVideos.map(video => (
              <div
                key={video.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{video.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination can be handled here if needed */}
        <div className="flex justify-center mt-4">
          <button className="btn join-item">1</button>
          <button className="btn join-item">2</button>
          <button className="btn join-item btn-disabled">...</button>
          <button className="btn join-item">4</button>
          <button className="btn join-item">5</button>
        </div>
      </div>

      {/* Social share icons */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 mt-6 mr-4 sm:mr-6 md:mr-10 lg:mr-12 ease-in-out duration-1000">
        <div className="w-10 hover:w-14 text-center bg-lime-100/50 border-2 border-pColor rounded-lg drop-shadow-xl hover:bg-slate-200 ease-in-out duration-30">
          {/* Social Icons */}
          <p>
            <i className="fa-solid fa-thumbtack text-red-600 py-2 text-lg sm:text-xl md:text-2xl drop-shadow-lg" />
          </p>
          <hr />
          <p>
            <a href="#">
              <i className="fab social-a fa-facebook py-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#3b5998] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fab social-a fa-linkedin text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#0A66C2] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fab social-a fa-youtube py-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#CD201F] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fab social-a fa-instagram pb-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-orange-500 hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fab social-a fa-whatsapp pb-2 text-lg sm:text-xl md:text-2xl hover:text-3xl lg:hover:text-5xl hover:text-[#25D366] hover:drop-shadow-xl ease-in-out duration-1000" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
