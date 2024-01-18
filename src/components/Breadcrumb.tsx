import { Link } from "react-router-dom";

const Breadcrumb = ({ title }: { title: string }) => {
  return (
    <section className="">
      <div className="container px-0 pt-md-4">
        <nav aria-label="breadcrumb">
          <ol className="bg-transparent breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
