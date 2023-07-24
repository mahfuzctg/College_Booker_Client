import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import History from "../History/History";
import CollegePage from "../Colleges/CollegeHomeCard";
import CollegeCard from "../Colleges/CollegeCard";

const Home = () => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <>
          <img
            className="lg:w-5/12"
            src="https://i.postimg.cc/bYMdDmSr/46500217-school-building-isometric-icons-set-with-field-bus-and-benches-isolated-vector-illustration.webp"
            alt="Album"
          />
        </>
        <div className="card-body text-center">
          <h2 className="text-center">
            Simplify Your College Bookings and Events!
          </h2>
          <p className=" text-justify">
            Welcome to CollegeBooker! Your one-stop destination for hassle-free
            college bookings and event planning. Discover a seamless experience,
            where you can easily book college facilities, host events, and
            connect with your campus community. Get ready to elevate your
            college life with CollegeBooker!
          </p>
        </div>
      </div>
      {/*  */}

      <Gallery></Gallery>
      <Review></Review>
      <History></History>
    </>
  );
};

export default Home;
