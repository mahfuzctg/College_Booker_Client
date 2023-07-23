import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import History from "../History/History";

const Home = () => {
  return (
    <div>
      <img
        className="w-full"
        src="https://i.postimg.cc/3NTd2rZr/school-design-g88b6d30e5-1280.png"
        alt=""
      />
      <>
        <Gallery></Gallery>
        <Review></Review>
        <History></History>
      </>
    </div>
  );
};

export default Home;
