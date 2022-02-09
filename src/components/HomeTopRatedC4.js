
import { useState,useEffect } from "react";
import MovieCard from "./MovieCard";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import AOS from "aos";
const TopRatedHead = () => {
  return (
    <>
      <div className="d-flex">
        <h3 className=" px-4 pt-4 d-flex flex-fill">TopRated</h3>
        <span className=" text-primary d-flex align-items-center">
          <Link to="/ViewAll/upcoming" className="text-decoration-none viewAll">ViewAll</Link>
        </span>
      </div>
    </>
  );
};
const HomeTopRatedC4 = () => {
  const [topRated, setTopRated] = useState([]);
  const { type } = useParams();
  // TODO: API TOP RATED :https://api.themoviedb.org/3/movie/top_rated?api_key=7293f904dd84a92206ed9390d9612045&language=en-US&page=1
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=7293f904dd84a92206ed9390d9612045&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setTopRated(data.results);
      });
  }, []);
  const topRatedResultHtml = topRated.map((obj, index) => {
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
  if (type === "toprated") {
    return (
      <>
        <TopRatedHead />
        <div data-aos="fade-up" className="d-flex flex-wrap card-col nav-shadow">
        {topRatedResultHtml}
      </div>
      </>
    );
  }
  else{
    return (
      <>
         <TopRatedHead />
        <div data-aos="fade-up" className="d-flex card-col nav-shadow">
        {topRatedResultHtml}
      </div>
      </>
    );
  }

};
export default HomeTopRatedC4;