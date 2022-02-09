import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import MovieCard from "./MovieCard";
import AOS from "aos";

const TrendingHead = () => {
  return (
    <>
      <div className="d-flex">
        <h3 className=" px-4 pt-4 d-flex flex-fill">Trending</h3>
        <span className=" text-primary d-flex  align-items-center">
          <Link to="/ViewAll/trending" className="text-decoration-none viewAll">ViewAll</Link>
        </span>
      </div>
    </>
  );
};

const HomeTrendingC2 = () => {
  const { type } = useParams();
  const [trending, setTrending] = useState([]);
  // TODO: API OF TRENDING FILMS OF THIS WEEK :https://api.themoviedb.org/3/trending/all/day?api_key=7293f904dd84a92206ed9390d9612045

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=7293f904dd84a92206ed9390d9612045"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("treding",data)
        setTrending(data.results);
      });
  }, []);

  const TrendingResultHtml = trending.map((obj, index) => {
    return <MovieCard movie={obj} key={index} />;
  });

  // TODO:Animation Aos

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-sine",
      disable: "mobile",
      delay: 100,
    });
  }, []);

  if (type === "trending") {
    return (
      <>
        <TrendingHead />
        <div data-aos="fade-up" className="d-flex card-col flex-wrap">
          {TrendingResultHtml}
        </div>
      </>
    );
  } else {
    return (
      <>
        <TrendingHead />
        <div data-aos="fade-up" className="d-flex card-col">
          {TrendingResultHtml}
        </div>
      </>
    );
  }
};
export default HomeTrendingC2;
