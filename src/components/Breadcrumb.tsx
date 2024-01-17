const Breadcrumb = () => {
  return (
    <section className="">
      <div className="container px-0 pt-md-4">
        <nav aria-label="breadcrumb">
          <ol className="bg-transparent breadcrumb">
            <li className="breadcrumb-item">
              <a href="https://curesmabangladesh.org/index.php">HOME</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              ABOUT US
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
