const ResearchPaperSection = () => {
  const recommendedPapers = [
    {
      title: "University of Dhaka",
      link: "https://www.scimagoir.com/institution.php?idp=61935",
    },
    {
      title: "University of Chittagong",
      link: "https://www.scimagoir.com/institution.php?idp=445",
    },
    {
      title: "Dhaka Medical College ",
      link: "https://www.scimagoir.com/institution.php?idp=62088",
      author: "Michael Johnson",
    },
    {
      title: "Sylhet Agricultural University",
      link: "https://www.scimagoir.com/institution.php?idp=62455",
    },
    {
      title: "Jahangirnagar University",
      link: "https://www.scimagoir.com/institution.php?idp=414",
    },
    {
      title: "Begum Rokeya University",
      link: "https://www.scimagoir.com/institution.php?idp=432",
    },
    {
      title: "BRAC University",
      link: "https://www.scimagoir.com/institution.php?idp=393",
    },
    {
      title: "Daffodil International University",
      link: "https://www.scimagoir.com/institution.php?idp=398",
    },
    // Add more research papers as needed
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-4">
          Recommended Research Papers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedPapers.map((paper, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>

              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read the Research Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPaperSection;
