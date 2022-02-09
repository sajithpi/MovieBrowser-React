import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import MovieCard from "./MovieCard";
import AOS from "aos";

const UpcomingHead = () => {
  return (
    <>
      <div className="d-flex">
        <h3 className=" px-4 pt-4 d-flex flex-fill">Upcoming</h3>
        <span className=" text-primary d-flex align-items-center">
          <Link to="/ViewAll/upcoming" className="text-decoration-none viewAll">ViewAll</Link>
        </span>
      </div>
    </>
  );
};

const HomeUpcomingC3 = () => {
  const [upComing, setUpcoming] = useState([]);
  const { type } = useParams();
  // TODO :Upcoming Movie Data Fetching
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=7293f904dd84a92206ed9390d9612045&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setUpcoming(data.results);
      });
  }, []);

  // TODO:Animation Aos

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-sine",
      disable: "mobile",
      delay: 100,
    });
  }, []);

  const resultUpcomingHtml = upComing.map((obj, index) => {
    return <MovieCard movie={obj} key={index} />;
  });
  if (type === "upcoming") {
    return (
      <>
        <UpcomingHead />

        <div data-aos="fade-up" className="d-flex flex-wrap card-col">
          {resultUpcomingHtml}
        </div>
      </>
    );
  } else {
    return (
      <>
      <UpcomingHead/>
      <div data-aos="fade-up" className="d-flex card-col">
        {resultUpcomingHtml}
      </div>
      </>
    );
  }
};

export default HomeUpcomingC3;
