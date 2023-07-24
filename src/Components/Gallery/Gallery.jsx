const collegeImageGallery = [
  {
    college: "Dhaka Bishwabidyalay",
    imageURL:
      "https://i.postimg.cc/X782jZSb/stock-photo-a-group-of-graduates-gather-to-expressing-their-delight-of-the-curzon-hall-at-university.jpg",
  },
  {
    college: "Rajshahi Bishwabidyalay",
    imageURL:
      "https://i.postimg.cc/Gm6vdr2R/16229812595c68187b-e769-4ce0-af61-c787c4c0687e.jpg",
  },
  {
    college: "Khulna Bishwabidyalay",
    imageURL: "https://i.postimg.cc/RFJS95Nk/DU20140407111153.jpg",
  },
  {
    college: "Chittagong Bishwabidyalay",
    imageURL:
      "https://i.postimg.cc/kXbbszsh/depositphotos-249398572-stock-photo-group-graduates-expressing-delight-front.webp",
  },
  {
    college: "Bangladesh Bishwabidyalay",
    imageURL: "https://i.postimg.cc/85f6YYD5/Education35.jpg",
  },
  {
    college: "Khulna Bishwabidyalay",
    imageURL: "https://i.postimg.cc/rwYzL9ft/Image00034.jpg",
  },
];

const Gallery = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">College Gallery</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3  my-16">
        {collegeImageGallery.map((graduate, index) => (
          <div key={index} className="m-4">
            <div className="relative overflow-hidden group">
              <img
                src={graduate.imageURL}
                alt={`${graduate.name} from ${graduate.college}`}
                className="w-full h-9/12 object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105 hover:rotate-3"
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
