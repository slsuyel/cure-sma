import { Link } from 'react-router-dom';

import img1 from '../assets/Images/under-development-page-image.jpg';

function ErrorPage() {
  return (
    <div className="error-page  mt-5 text-center pt-5">
      <img src={img1} alt="" className="img-fluid img-thumbnail mx-auto w-25" />
      {/* <h1>Oops!</h1> */}
      <br />
      <br />
      <p>Sorry, an unexpected error has occurred.</p>
      {/*  <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <br />
      <br />
      <Link className="btn btn-outline-danger fw-bold" to="/">
        Let's Back to home
      </Link>
    </div>
  );
}

export default ErrorPage;
