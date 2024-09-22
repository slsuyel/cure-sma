const SingleBlog = () => {
  return (
 
    <>
  <div className="md:flex flex-row mx-8">
    {/* Left side */}
    <div className="xl:w-9/12 flex flex-col gap-6 my-8 items-center lg:mr-12">
      <div className="border-2 rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-[#F2F2F3] hover:bg-lime-200/20 hover:border-2 hover:border-pColor">
        {/* Image */}
        <div className="w-full overflow-hidden lg:rounded-bl-[50px] rounded-tr-[50px]">
          <img src="https://forhadhub.github.io/CSMA-Web/src/images/10.%20Multidisciplinary%20Clinic.jpg" alt="Cure SMA Bangladesh" className="w-full h-full object-cover" />
        </div>
        {/* Content */}
        <div className="p-4 lg:pr-20 lg:pl-8">
          <div className="flex gap-4">
            <h3 className="text-sm lg:text-base">August 2, 2024</h3>
            <h3 className="italic text-sm lg:text-base">Posting Category: <a href="#" className="text-pColor underline">Events</a></h3>
          </div>
          <br /><hr /><br />
          <p className="py-2 text-justify text-sm lg:text-base">It has no known cure; thus, most care for the patient with SMA is focused on symptomatic control and preventative rehabilitation. Physical therapy and occupational therapy help play a critical role in maximizing the physical functioning of people with SMA. Physiotherapy mainly consist of exercises to help improve flexibility and overall function, independence and quality of life.</p>
          <p className="py-2 text-justify text-sm lg:text-base font-bold">ITreatments are done with a focus on the following:</p>
          <p className="py-2 text-justify text-sm lg:text-2xl font-bold">Therapeutic exercises</p>
          <p className="py-2 text-justify text-sm lg:text-base">Therapeutic exercises help children maintain and improve their mobility. These will be tailored to the child’s needs, depending on the severity of their SMA. They consist of any movement or position one would like to strengthen in order to improve their activities of daily living, for example rolling, reaching, sitting and maybe even walking. These activities are dependent on age, amount of neuromuscular involvement, and developmental stage. Although exercise is important, excessive exercising may cause over fatigue and damage.</p>
          <p className="py-2 text-justify text-sm lg:text-2xl font-bold">Therapeutic exercises</p>
          <p className="py-2 text-justify text-sm lg:text-base">Therapeutic exercises help children maintain and improve their mobility. These will be tailored to the child’s needs, depending on the severity of their SMA. They consist of any movement or position one would like to strengthen in order to improve their activities of daily living, for example rolling, reaching, sitting and maybe even walking. These activities are dependent on age, amount of neuromuscular involvement, and developmental stage. Although exercise is important, excessive exercising may cause over fatigue and damage.</p>
          <p className="py-2 text-justify text-sm lg:text-2xl font-bold">Therapeutic exercises</p>
          <p className="py-2 text-justify text-sm lg:text-base">Therapeutic exercises help children maintain and improve their mobility. These will be tailored to the child’s needs, depending on the severity of their SMA. They consist of any movement or position one would like to strengthen in order to improve their activities of daily living, for example rolling, reaching, sitting and maybe even walking. These activities are dependent on age, amount of neuromuscular involvement, and developmental stage. Although exercise is important, excessive exercising may cause over fatigue and damage.</p>
          <p className="py-2 text-justify text-sm lg:text-2xl font-bold">Therapeutic exercises</p>
          <p className="py-2 text-justify text-sm lg:text-base">Therapeutic exercises help children maintain and improve their mobility. These will be tailored to the child’s needs, depending on the severity of their SMA. They consist of any movement or position one would like to strengthen in order to improve their activities of daily living, for example rolling, reaching, sitting and maybe even walking. These activities are dependent on age, amount of neuromuscular involvement, and developmental stage. Although exercise is important, excessive exercising may cause over fatigue and damage.</p>
          <p className="py-2 text-justify text-sm lg:text-2xl font-bold">Therapeutic exercises</p>
          <p className="py-2 text-justify text-sm lg:text-base">Therapeutic exercises help children maintain and improve their mobility. These will be tailored to the child’s needs, depending on the severity of their SMA. They consist of any movement or position one would like to strengthen in order to improve their activities of daily living, for example rolling, reaching, sitting and maybe even walking. These activities are dependent on age, amount of neuromuscular involvement, and developmental stage. Although exercise is important, excessive exercising may cause over fatigue and damage.</p>
          <br /><hr /><br />
          {/* social */}
          <div className="flex gap-4 font-bold justify-end items-center">
            <div>
              <h4>Share:</h4>
            </div>
            <div >
              <a href="#"><i className="fab social-a fa-facebook text-3xl pr-5 hover:text-[#3b5998]" /></a>
              <a href="#"><i className="fab social-a fa-linkedin text-3xl pr-5 hover:text-[#0A66C2]" /></a>
              <a href="#"><i className="fab social-a fa-youtube text-3xl pr-5 hover:text-[#CD201F]" /></a>
              <a href="#"><i className="fab social-a fa-instagram text-3xl hover:text-orange-500" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="btn join-item">Prev.</button>
        <button className="btn join-item btn-disabled">...</button>
        <button className="btn join-item">Next</button>
      </div>
    </div>
    {/* Right side */}
    <div className="xl:w-3/12 my-8 border-l-2 border-fColor pl-12 lg:pl-8">
      <div>
        <h1 className="text-2xl lg:text-4xl mb-4 font-light">Category</h1>
        <hr />
        <ul className="mt-5 pl-5 list-disc text-lg lg:text-xl text-pColor">
          <li><a href="cure_sma_bd_blog_category.html" className="hover:underline hover:text-black/50">Conference</a></li>
          <li><a href="cure_sma_bd_blog_category.html" className="hover:underline hover:text-black/50">Rally</a></li>
          <li><a href="cure_sma_bd_blog_category.html" className="hover:underline hover:text-black/50">Events</a></li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl lg:text-4xl mt-20 mb-4 font-light">Recent Post</h1>
        <hr />
        <ul className="mt-5 pl-5 list-disc text-lg lg:text-xl text-pColor">
          <li><a href="blog_single.html" className="hover:underline hover:text-black/50">Cure SMA Launches Request for Proposals for SMA Research Projects</a></li>
          <li><a href="blog_single.html" className="hover:underline hover:text-black/50">Cure SMA Launches Request for Proposals for SMA Research Projects</a></li>
          <li><a href="blog_single.html" className="hover:underline hover:text-black/50">Cure SMA Launches Request for Proposals for SMA Research Projects</a></li>
        </ul>
      </div>
    </div>
  </div>
  {/* recommended category post */}
  <div className="py-10">
    <div className="text-center">
      <h1 className="text-4xl font-light">Recommended Category Post</h1> <br /><hr />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 px-8 py-10">
      {/* news cart 1 */}
      <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
        <div>
          <img className="w-full overflow-hidden rounded-tr-[50px]" src="https://forhadhub.github.io/CSMA-Web/src/images/10.%20Multidisciplinary%20Clinic.jpg" alt="Cure SMA Bangladesh" />
        </div>
        <div className="p-4">
          <p className="italic text-sm lg:text-base">January 30, 2024</p>
          <p className="italic text-sm lg:text-base">Posting Category: <a href="#" className="text-pColor underline">Events</a></p>
          <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline"><a href="blog_single.html">Let's Organize, resist and be aware about SMA</a></h2>
          <a href="#" className="text-base leading-relaxed">Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs support to continue her treatment</a>
          <h4 className="text-right "><a href="#" className="text-pColor hover:underline text-xl lg:text-2xl">Read More &gt; </a></h4>            
        </div>
      </div>
      {/* news cart 2 */}
      <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
        <div>
          <img className="w-full overflow-hidden rounded-tr-[50px]" src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg" alt="Cure SMA Bangladesh" />
        </div>
        <div className="p-4">
          <p className="italic text-sm lg:text-base">January 30, 2024</p>
          <p className="italic text-sm lg:text-base">Posting Category: <a href="#" className="text-pColor underline">Events</a></p>
          <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline"><a href="blog_single.html">Let's Organize, resist and be aware about SMA</a></h2>
          <a href="#" className="text-base leading-relaxed">Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs support to continue her treatment</a>
          <h4 className="text-right "><a href="#" className="text-pColor hover:underline text-xl lg:text-2xl">Read More &gt; </a></h4>            
        </div>
      </div>
      {/* news cart 3 */}
      <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
        <div>
          <img className="w-full overflow-hidden rounded-tr-[50px]" src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg" alt="Cure SMA Bangladesh" />
        </div>
        <div className="p-4">
          <p className="italic text-sm lg:text-base">January 30, 2024</p>
          <p className="italic text-sm lg:text-base">Posting Category: <a href="#" className="text-pColor underline">Events</a></p>
          <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline"><a href="blog_single.html">Let's Organize, resist and be aware about SMA</a></h2>
          <a href="#" className="text-base leading-relaxed">Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs support to continue her treatment</a>
          <h4 className="text-right "><a href="#" className="text-pColor hover:underline text-xl lg:text-2xl">Read More &gt; </a></h4>            
        </div>
      </div>
      {/* news cart 4 */}
      <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
        <div>
          <img className="w-full overflow-hidden rounded-tr-[50px]" src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg" alt="Cure SMA Bangladesh" />
        </div>
        <div className="p-4">
          <p className="italic text-sm lg:text-base">January 30, 2024</p>
          <p className="italic text-sm lg:text-base">Posting Category: <a href="#" className="text-pColor underline">Events</a></p>
          <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline"><a href="blog_single.html">Let's Organize, resist and be aware about SMA</a></h2>
          <a href="#" className="text-base leading-relaxed">Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs support to continue her treatment</a>
          <h4 className="text-right "><a href="#" className="text-pColor hover:underline text-xl lg:text-2xl">Read More &gt; </a></h4>            
        </div>
      </div>
      {/* news cart 1 */}
      <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
        <div>
          <img className="w-full overflow-hidden rounded-tr-[50px]" src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg" alt="Cure SMA Bangladesh" />
        </div>
        <div className="p-4">
          <p className="italic text-sm lg:text-base">January 30, 2024</p>
          <p className="italic text-sm lg:text-base">Posting Category: <a href="#" className="text-pColor underline">Events</a></p>
          <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline"><a href="blog_single.html">Let's Organize, resist and be aware about SMA</a></h2>
          <a href="#" className="text-base leading-relaxed">Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs support to continue her treatment</a>
          <h4 className="text-right "><a href="#" className="text-pColor hover:underline text-xl lg:text-2xl">Read More &gt; </a></h4>            
        </div>
      </div>
      {/* news cart 2 */}
      <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
        <div>
          <img className="w-full overflow-hidden rounded-tr-[50px]" src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg" alt="Cure SMA Bangladesh" />
        </div>
        <div className="p-4">
          <p className="italic text-sm lg:text-base">January 30, 2024</p>
          <p className="italic text-sm lg:text-base">Posting Category: <a href="#" className="text-pColor underline">Events</a></p>
          <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline"><a href="blog_single.html">Let's Organize, resist and be aware about SMA</a></h2>
          <a href="#" className="text-base leading-relaxed">Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs support to continue her treatment</a>
          <h4 className="text-right "><a href="#" className="text-pColor hover:underline text-xl lg:text-2xl">Read More &gt; </a></h4>            
        </div>
      </div>
      {/* news cart 3 */}
      <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
        <div>
          <img className="w-full overflow-hidden rounded-tr-[50px]" src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg" alt="Cure SMA Bangladesh" />
        </div>
        <div className="p-4">
          <p className="italic text-sm lg:text-base">January 30, 2024</p>
          <p className="italic text-sm lg:text-base">Posting Category: <a href="#" className="text-pColor underline">Events</a></p>
          <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline"><a href="blog_single.html">Let's Organize, resist and be aware about SMA</a></h2>
          <a href="#" className="text-base leading-relaxed">Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs support to continue her treatment</a>
          <h4 className="text-right "><a href="#" className="text-pColor hover:underline text-xl lg:text-2xl">Read More &gt; </a></h4>            
        </div>
      </div>
      {/* news cart 4 */}
      <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
        <div>
          <img className="w-full overflow-hidden rounded-tr-[50px]" src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg" alt="Cure SMA Bangladesh" />
        </div>
        <div className="p-4">
          <p className="italic text-sm lg:text-base">January 30, 2024</p>
          <p className="italic text-sm lg:text-base">Posting Category: <a href="#" className="text-pColor underline">Events</a></p>
          <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline"><a href="blog_single.html">Let's Organize, resist and be aware about SMA</a></h2>
          <a href="#" className="text-base leading-relaxed">Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs support to continue her treatment</a>
          <h4 className="text-right "><a href="#" className="text-pColor hover:underline text-xl lg:text-2xl">Read More &gt; </a></h4>            
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default SingleBlog;