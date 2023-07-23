const collegeImageGallery = [
  {
    name: "Ahmed Hossein",
    college: "Dhaka Bishwabidyalay",
    imageURL: "https://i.postimg.cc/8cF7qh8Z/ayman-sadiq.jpg",
  },
  {
    name: "Tasneem Akhtar",
    college: "Rajshahi Bishwabidyalay",
    imageURL: "https://i.postimg.cc/V6fMHrLh/Munzareen-shahid.jpg",
  },
  {
    name: "Rahima Begum",
    college: "Khulna Bishwabidyalay",
    imageURL: "https://i.postimg.cc/V6fMHrLh/Munzareen-shahid.jpg",
  },
  {
    name: "Karim Mia",
    college: "Chittagong Bishwabidyalay",
    imageURL: "https://i.postimg.cc/8cF7qh8Z/ayman-sadiq.jpg",
  },
  {
    name: "Mehrima Khatun",
    college: "Bangladesh Bishwabidyalay",
    imageURL: "https://i.postimg.cc/V6fMHrLh/Munzareen-shahid.jpg",
  },
  {
    name: "Abdul Monnan",
    college: "Khulna Bishwabidyalay",
    imageURL: "https://i.postimg.cc/8cF7qh8Z/ayman-sadiq.jpg",
  },
];

const Gallery = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">College Gallery</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-16">
        {collegeImageGallery.map((graduate, index) => (
          <div key={index} className="m-4">
            <div className="relative overflow-hidden group">
              <img
                src={graduate.imageURL}
                alt={`${graduate.name} from ${graduate.college}`}
                className="w-full h-full object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105 hover:rotate-3"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2 rounded-b-lg">
                <p className="text-lg font-semibold">{graduate.name}</p>
                <p className="text-sm">{graduate.college}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Gallery;
