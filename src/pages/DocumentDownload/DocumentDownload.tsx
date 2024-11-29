const DocumentDownload = () => {
  // Define an array of documents with necessary details
  const documents = [
    {
      name: 'About SMA',
      updateDate: '18 Aug 2024',
      pdfLink: './src/doc/About SMA.pdf',
    },
    {
      name: 'About Cure SMA',
      updateDate: '18 Aug 2024',
      pdfLink: './src/doc/About SMA.pdf',
    },
    {
      name: 'General Care for SMA',
      updateDate: '18 Aug 2024',
      pdfLink: './src/doc/General Care in SMA.pdf',
    },
    {
      name: 'Care for Winter Season',
      updateDate: '18 Aug 2024',
      pdfLink: './src/doc/Care for Winter Season.pdf',
    },
    {
      name: 'Nutrition Guideline',
      updateDate: '18 Aug 2024',
      pdfLink: './src/doc/Nutrition & Food Habit in SMA.pdf',
    },
  ];

  return (
    <div>
      {/* breadcrumbs */}
      <div className="breadcrumbs text-lg bg-pColor text-white px-8 py-0">
        <ul>
          <li>Document Download</li>
        </ul>
      </div>

      {/* Banner Title */}
      <div className="py-16 text-center text-4xl lg:text-5xl font-bold bg-gradient-to-b from-green-200 via-white to-green-200 border-b-8 border-grey-500">
        <h1>All Documents</h1>
      </div>

      {/* documents */}
      <div className="grid grid-cols-1 px-8 xl:px-16 md:grid-cols-2 gap-8 justify-between my-10 drop-shadow-lg">
        {documents.map((doc, index) => (
          <div key={index} className="flex gap-1 items-center md:mx-auto">
            <div
              className="text-4xl xl:text-6xl py-2 px-4 rounded-l-2xl text-red-500 font-bold bg-yColor/25"
              style={{ background: '#ffd60040' }}
            >
              <p>
                <i className="fa-solid fa-file-pdf" aria-hidden="true" />
              </p>
            </div>
            <div
              className="py-4 w-72 xl:w-96 px-2 font-bold "
              style={{ background: '#08a26833' }}
            >
              <h3 className="text-sm font-medium italic">
                Update: <span>{doc.updateDate}</span>
              </h3>
              <h2 className="text-base underline font-medium">
                Document Name:
              </h2>
              <h2 className="text-lg lg:text-xl font-semibold">{doc.name}</h2>
            </div>
            <div className="text-4xl xl:text-6xl py-2 px-4 rounded-r-2xl text-sky-500 font-bold bg-sky-100">
              <p>
                <a href={doc.pdfLink}>
                  <i
                    className="fa-solid fa-cloud-arrow-down fa-beat"
                    aria-hidden="true"
                  />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentDownload;
