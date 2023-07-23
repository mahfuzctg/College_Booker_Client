import "./Review.css";

const collegeReviews = [
  {
    name: "Ahmed Hosen",
    college: "Dhaka Bishwabidyalay",
    review:
      "Oshadharon bishwabidyalay jekhane atyuttam subidha ebong sohokari odbhut adhyapokbrindo!",
    rating: 5,
    profilePicURL: "https://i.postimg.cc/8cF7qh8Z/ayman-sadiq.jpg",
  },
  {
    name: "Tasnin Aktar",
    college: "Rajshahi Bishwabidyalay",
    review:
      "Ei bishwabidyalaye ami ashchorjo abhijnota peyechi. Atyanto bhalobasha kora hoy!",
    rating: 4,
    profilePicURL: "https://i.postimg.cc/8cF7qh8Z/ayman-sadiq.jpg",
  },
  {
    name: "Rahim Alam",
    college: "Khulna Bishwabidyalay",
    review:
      "Bishesh bishwabidyalay jekhane akarshak shikkhokgana o upokari sadasya!",
    rating: 4.5,
    profilePicURL: "https://i.postimg.cc/8cF7qh8Z/ayman-sadiq.jpg",
  },
  {
    name: "Nadia Khanom",
    college: "Chittagong Bishwabidyalay",
    review:
      "Ei bishwabidyalaye ami amar shomoye bhison priti kori. Shikshan er jonno dhonyobad!",
    rating: 5,
    profilePicURL: "https://i.postimg.cc/8cF7qh8Z/ayman-sadiq.jpg",
  },
  {
    name: "Karim Mia",
    college: "Barisal Bishwabidyalay",
    review:
      "Ekta shundor bishwabidyalay jekhane onk valo sadasya ebong kormokorta royeche!",
    rating: 4,
    profilePicURL: "https://i.postimg.cc/8cF7qh8Z/ayman-sadiq.jpg",
  },
  {
    name: "Tahmina Rahman",
    college: "Sylhet Bishwabidyalay",
    review:
      "Ami eto khushi je ei bishwabidyalaye admission peyeche. Ekhane shikhte onk khusi!",
    rating: 4.8,
    profilePicURL: "https://i.postimg.cc/8cF7qh8Z/ayman-sadiq.jpg",
  },
];

const Review = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">College Reviews</h2>
      <div className="flex overflow-hidden">
        <div className="flex animate-scrolling space-x-4">
          {collegeReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md w-96"
            >
              <div className="mb-4">
                <img
                  src={review.profilePicURL}
                  alt={review.name}
                  className="rounded-full w-16 h-16 mx-auto mb-4"
                />
                <p className="text-lg font-semibold text-center">
                  {review.name}
                </p>
                <p className="text-sm text-gray-500 text-center">
                  {review.college}
                </p>
              </div>
              <p className="text-gray-800">{review.review}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {/* Star SVG code remains the same */}
                    </svg>
                  ))}
                </span>
                <span className="ml-1 text-gray-600">
                  Ratings ({review.rating})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
