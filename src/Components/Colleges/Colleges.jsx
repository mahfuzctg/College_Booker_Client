import CollegeCard from "./CollegeCard";

const colleges = [
  {
    name: "Dhaka College",
    image:
      "https://i.postimg.cc/PxYMNLDM/1678020660-fb5b2132b0545c91b086e71b6ef1807f.webp",
    rating: 4.5,
    admissionDate: "August 2023",
    researchCount: 25,
    events: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sports: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Chattagram College",
    image:
      "https://i.postimg.cc/tgtTTpTx/Chittagong-Medical-College-Hopital.jpg",
    rating: 4.5,
    admissionDate: "August 2023",
    researchCount: 25,
    events: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sports: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jahangirnagar University",
    image: "https://i.postimg.cc/P5HNkCfj/download.jpg",
    rating: 4.5,
    admissionDate: "August 2023",
    researchCount: 25,
    events: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sports: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Begum Rokeya University",
    image: "https://i.postimg.cc/BZhCbGLk/download.jpg",
    rating: 4.5,
    admissionDate: "August 2023",
    researchCount: 25,
    events: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sports: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "BRAC University",
    image: "https://i.postimg.cc/7PQgDMjy/download.jpg",
    rating: 4.5,
    admissionDate: "August 2023",
    researchCount: 25,
    events: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sports: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Daffodil International University",
    image: "https://i.postimg.cc/hPshcSXQ/download.jpg",
    rating: 4.5,
    admissionDate: "August 2023",
    researchCount: 25,
    events: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sports: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more colleges here...
];

const Colleges = () => {
  return (
    <div className="container my-8 mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold mb-8">Colleges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colleges.map((college, index) => (
          <CollegeCard key={index} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
