import Nabonee from '/images/1. Nabonee.png';
import TwoBrothers from '/images/3. Two brothers.png';
import Shahreen from '/images/4. SHAHREEN.png';
import ChildSay1 from '/images/child_say_1.png';
import ChildSay2 from '/images/single_child_2.png';

// Step 2: Create an array of objects
const photos = [
  { src: Nabonee, alt: 'cure sma-nabonee', caption: 'Nabonee' },
  { src: TwoBrothers, alt: 'cure sma-two brothers', caption: 'Two Brothers' },
  { src: Shahreen, alt: 'cure sma-shahreen', caption: 'Shahreen' },
  { src: ChildSay1, alt: 'cure sma-child say 1', caption: 'Child Say 1' },
  { src: ChildSay2, alt: 'cure sma-child say 2', caption: 'Child Say 2' },
  // Add more photos as needed
];

const PhotoGallery = () => {
  return (
    <main>
      {/* category selection */}
      <div className="flex flex-col items-center justify-center bg-pColor/25 p-6 skeleton">
        <div className="relative w-80">
          <label
            htmlFor="photo_category"
            className="block text-xl font-medium text-pColor mb-2 text-center"
          >
            Photo Category
          </label>
          <select
            id="photo_category"
            name="photo_category"
            className="block w-full border border-pColor/50 h-10 rounded-md shadow-sm focus:ring-coral focus:border-coral sm:text-sm"
          >
            <option disabled selected>
              All Photos
            </option>
            <option value="Patients">Patients</option>
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
      <div className="flex flex-col items-center justify-center font-sans my-10">
        {/* category name */}
        <h1 className="mb-4 text-2xl underline text-pColor font-bold">
          Cure SMA Bangladesh
        </h1>

        {/* Step 3: Map over the array to generate the gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-auto px-8 my-10">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center border-2 border-black p-2 rounded-md shadow-md hover:border-coral hover:shadow-lg"
            >
              <img
                className="w-full rounded-md filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110 cursor-pointer"
                src={photo.src}
                alt={photo.alt}
              />
              <p className="mt-2 text-center italic">"{photo.caption}"</p>
            </div>
          ))}
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

      {/* Image Viewer Modal */}
      <div
        id="imageViewer"
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center hidden"
      >
        <div className="relative">
          <img
            id="viewerImage"
            className="max-w-full max-h-full object-contain rounded-md"
          />
          <button className="absolute top-4 right-4 bg-white text-red-500 p-2 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300">
            ×
          </button>
          <button className="absolute left-4 inset-y-1/2 transform -translate-y-1/2 text-white text-3xl">
            ←
          </button>
          <button className="absolute right-4 inset-y-1/2 transform -translate-y-1/2 text-white text-3xl">
            →
          </button>
        </div>
      </div>

      {/* social share for body position */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 mt-6 mr-4 sm:mr-6 md:mr-10 lg:mr-12 ease-in-out duration-1000">
        <div className="w-10 hover:w-14 text-white bg-pColor rounded-l-md cursor-pointer">
          {/* Social Media Icons */}
          {/* Add your social media icons here */}
        </div>
      </div>
    </main>
  );
};

export default PhotoGallery;
