import { Link } from "react-router-dom";

const SinglePatient = () => {
  return (
    <div>
  <div className="px-8 bg-gradient-to-r from-gray-100 to-gray-200 font-poppins py-8 drop-shadow-lg">
  <Link to="/cure-sma-bd-patient-history" className="text-lg rounded-lg bg-gray-500 text-white py-2 px-4 hover:bg-gray-200 hover:text-pColor hover:border-2 hover:border-pColor ease-in-out duration-1000"><button className="pb-8"><i className="fa-solid fa-arrow-left drop-shadow-lg" aria-hidden="true" /> All patient History</button></Link>
  <h1 className="text-2xl md:text-5xl mb-8 font-bold">Patient History</h1>
  <a className="w-full drop-shadow-lg md:w-80 px-8 py-2 rounded-3xl text-pColor text-center hover:bg-pColor hover:text-white border-2 border-pColor font-semibold ease-in-out duration-1000" ><i className="fa-solid fa-stethoscope fa-beat-fade " aria-hidden="true" />  Find a Doctor</a>
  <p className="border-2 mt-12 border-pColor" />      
</div>
<div className="bg-lime-100/50 px-4 md:px-8">
  <div className="mx-4 md:mx-12">
    <p className="italic font-semibold py-4 text-center lg:text-left">Updated on: 01 Apr 2024</p>
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-1/2">
        <img src="https://forhadhub.github.io/CSMA-Web/src/images/Story1.png"  className="rounded-xl drop-shadow-lg  lg:w-auto" alt="Naboni" />
        <h1 className="text-4xl lg:text-5xl py-4 text-center lg:text-left">Naboni</h1>
      </div>
      <div className="w-full lg:w-1/2 mt-8 md:mt-0">
        <h2 className="text-xl pb-4 drop-shadow-md text-center md:text-left">
          <i className="fa-solid fa-quote-left text-5xl" aria-hidden="true" /> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum a placeat, amet obcaecati deleniti recusandae ullam inventore, sint tempore officia,
          labore nam dicta quaerat fugit.
        </h2>
        <h4 className="font-semibold text-xl pb-4 text-red-500">Annual cost: <span>1700$</span></h4>
        {/* Progress Bar */}
        <div className="flex items-center justify-center md:justify-start">
          <div className="relative w-full h-8 mb-4 mx-auto rounded-lg border-2 border-red-400 shadow-inner text-center">
            <div className="absolute top-0 left-0 h-full w-2/4 rounded-lg progress-bar-animation bg-green-700">
              {/* Progress Bar */}
              <h3 className=" text-white mb-0">
                $50,000
              </h3>
            </div>
            {/* Goal Text */}
            <h3 className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-pColor text-sm md:text-base font-semibold">
              $100,000
            </h3>
          </div>
        </div>
        {/* Donate Button */}
        <div>
          <button className="btn  text-xl lg:text-2xl bg-orange-600 text-white w-full hover:bg-pColor hover:translate-y-1 hover:duration-[.5s]" >Donate</button>
        </div>
      </div>
    </div>
    {/* Content Section */}
    <div className="border-2 border-black/50 rounded-lg p-6 lg:p-12 drop-shadow-md mt-8">
      <p className="text-sm md:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo corporis asperiores eaque exercitationem
        veritatis eveniet animi ut dicta, non cum, distinctio iusto sint consectetur inventore quos commodi dolor, quod
        suscipit. Tempore, similique debitis. Officia corporis minima ad perferendis suscipit dolore expedita
        consectetur inventore adipisci laudantium ab culpa laborum repellendus cupiditate, tempore asperiores dicta iure
        dolorum veritatis provident nobis molestiae tempora! Pariatur consectetur porro beatae earum provident possimus
        debitis, quae sunt consequatur, ad tenetur commodi animi aut officia nobis deleniti, iusto ducimus accusamus
        libero! Illo nostrum maxime aspernatur voluptatibus alias autem quaerat saepe aperiam facere fugiat repudiandae,
        fuga ex eveniet iusto dignissimos molestiae qui eos facilis error excepturi quo nemo esse. Possimus, voluptates
        id. Quo eligendi suscipit deserunt reiciendis quia rerum voluptatibus ratione voluptatem sint quis, iusto
        maiores nesciunt excepturi? Amet suscipit, voluptatum quibusdam sapiente perspiciatis natus facilis commodi,
        ipsum, eligendi dolore temporibus culpa? Fugiat temporibus quis illo atque iusto tempora, fugit provident cum
        sit quam assumenda iste eligendi ullam perspiciatis praesentium? Accusamus eius laudantium quia repellat esse
        quos vel maiores! Error similique reprehenderit recusandae facere, culpa provident atque cumque? Maxime aut ad
        iusto esse modi laudantium quidem minima id, quo ipsam non perspiciatis nobis similique numquam cupiditate
        excepturi praesentium cum dolorem! Nemo similique quasi dolor, vel id perferendis nisi ullam beatae rem nam
        porro quibusdam nihil fuga eligendi ipsa nobis hic sunt pariatur quam consequatur vero soluta ipsam! Pariatur
        dolorum aperiam voluptatibus quidem fugit esse corporis iure deleniti aliquam harum mollitia incidunt voluptas
        itaque sit facere numquam amet, eaque laboriosam dolore quo? Ducimus dolor exercitationem aliquid minus quaerat
        cum fugiat error quod accusamus adipisci praesentium ea totam, nostrum eligendi illo corporis veritatis a saepe
        suscipit sunt accusantium architecto voluptatum iste sed. Iste aperiam, atque excepturi, commodi rerum odio
        reprehenderit fugit voluptatem velit voluptates, repellat temporibus earum nostrum ipsa eius molestias?
      </p>
    </div>
  </div>
  {/* Pagination Buttons */}
  <div className="w-full lg:w-1/4 join grid grid-cols-2 gap-4 py-8 mx-auto">
    <button className="join-item btn btn-outline">Previous page</button>
    <button className="join-item btn btn-outline">Next</button>
  </div>
</div>

    </div>
  );
};

export default SinglePatient;