/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { callApi } from '../../utilities/functions';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await callApi('get', `/api/blogs/${id}`);
      setBlog(res.data);
    };
    fetchBlog();
  }, [id]);

  console.log(blog);
  //  id:         number;
  //   image:      string;
  //   title:      string;
  //   content:    string;
  //   category:   string;
  //   created_at: Date;
  //   updated_at: Date;
  //   image_url:  string;

  return (
    <>
      <div className="bg-pColor font-poppins py-4 md:py-16 my-2 rounded-xl">
        <div className="drop-shadow-2xl bg-white">
          <h1 className="text-center px-8 font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-pColor gradient-text drop-shadow-xl">
            Cure SMA Launches Request for Proposals for SMA Research Projects
            and Postdoctoral Fellowships
          </h1>
        </div>
      </div>

      <div className="md:flex flex-row mx-8">
        {/* Left side */}
        <div className="xl:w-9/12 flex flex-col gap-6 my-8 items-center lg:mr-12">
          <div className="border-2 rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-[#F2F2F3] hover:bg-lime-200/20 hover:border-2 hover:border-pColor">
            {/* Image */}
            <div className="w-full overflow-hidden lg:rounded-bl-[50px] rounded-tr-[50px]">
              <img
                src={blog?.image_url}
                alt={blog.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-4 lg:pr-20 lg:pl-8">
              <div className="flex gap-4">
                <h3 className="text-sm lg:text-base">{blog?.created_at}</h3>
                <h3 className="italic text-sm lg:text-base">
                  Posting Category:{' '}
                  <a href="#" className="text-pColor underline">
                    {blog?.category}
                  </a>
                </h3>
              </div>
              <br />
              <hr />
              <br />
              <div
                className="py-2 text-justify text-sm lg:text-base"
                dangerouslySetInnerHTML={{
                  __html: blog?.content,
                }}
              />
              {/* social */}
              <div className="flex gap-4 font-bold justify-end items-center">
                <div>
                  <h4>Share:</h4>
                </div>
                <div>
                  <a href="#">
                    <i className="fab social-a fa-facebook text-3xl pr-5 hover:text-[#3b5998]" />
                  </a>
                  <a href="#">
                    <i className="fab social-a fa-linkedin text-3xl pr-5 hover:text-[#0A66C2]" />
                  </a>
                  <a href="#">
                    <i className="fab social-a fa-youtube text-3xl pr-5 hover:text-[#CD201F]" />
                  </a>
                  <a href="#">
                    <i className="fab social-a fa-instagram text-3xl hover:text-orange-500" />
                  </a>
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
              <li>
                <a href="#" className="hover:underline hover:text-black/50">
                  Conference
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-black/50">
                  Rally
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-black/50">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl lg:text-4xl mt-20 mb-4 font-light">
              Recent Post
            </h1>
            <hr />
            <ul className="mt-5 pl-5 list-disc text-lg lg:text-xl text-pColor">
              <li>
                <a href="#" className="hover:underline hover:text-black/50">
                  Cure SMA Launches Request for Proposals for SMA Research
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-black/50">
                  Cure SMA Launches Request for Proposals for SMA Research
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-black/50">
                  Cure SMA Launches Request for Proposals for SMA Research
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* recommended category post */}
      <div className="py-10">
        <div className="text-center">
          <h1 className="text-4xl font-light">Recommended Category Post</h1>{' '}
          <br />
          <hr />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 px-8 py-10">
          {/* news cart 1 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full overflow-hidden rounded-tr-[50px]"
                src="https://forhadhub.github.io/CSMA-Web/src/images/10.%20Multidisciplinary%20Clinic.jpg"
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="#">Let's Organize, resist and be aware about SMA</a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
          {/* news cart 2 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full overflow-hidden rounded-tr-[50px]"
                src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg"
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="#">Let's Organize, resist and be aware about SMA</a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
          {/* news cart 3 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full overflow-hidden rounded-tr-[50px]"
                src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg"
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="blog_single.html">
                  Let's Organize, resist and be aware about SMA
                </a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
          {/* news cart 4 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full overflow-hidden rounded-tr-[50px]"
                src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg"
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="blog_single.html">
                  Let's Organize, resist and be aware about SMA
                </a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
          {/* news cart 1 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full overflow-hidden rounded-tr-[50px]"
                src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg"
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="blog_single.html">
                  Let's Organize, resist and be aware about SMA
                </a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
          {/* news cart 2 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full overflow-hidden rounded-tr-[50px]"
                src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg"
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="blog_single.html">
                  Let's Organize, resist and be aware about SMA
                </a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
          {/* news cart 3 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full overflow-hidden rounded-tr-[50px]"
                src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg"
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="#">
                  {' '}
                  {/* blog_single.html */}
                  Let's Organize, resist and be aware about SMA
                </a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
          {/* news cart 4 */}
          <div className="rounded-tr-[50px] rounded-bl-[50px] drop-shadow-xl bg-pColor/10 hover:bg-[#F2F2F3] hover:border-2 hover:border-pColor">
            <div>
              <img
                className="w-full overflow-hidden rounded-tr-[50px]"
                src="https://forhadhub.github.io/CSMA-Web/src/images/1.%20Multidisciplinary%20Clinic.jpg"
                alt="Cure SMA Bangladesh"
              />
            </div>
            <div className="p-4">
              <p className="italic text-sm lg:text-base">January 30, 2024</p>
              <p className="italic text-sm lg:text-base">
                Posting Category:{' '}
                <a href="#" className="text-pColor underline">
                  Events
                </a>
              </p>
              <h2 className="text-2xl font-bold py-2 text-pColor text-justify hover:underline">
                <a href="blog_single.html">
                  Let's Organize, resist and be aware about SMA
                </a>
              </h2>
              <a href="#" className="text-base leading-relaxed">
                Little angel OLIVIA SANCHAREE NABONEE suffering from SMA needs
                support to continue her treatment
              </a>
              <h4 className="text-right ">
                <a
                  href="#"
                  className="text-pColor hover:underline text-xl lg:text-2xl"
                >
                  Read More &gt;{' '}
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
