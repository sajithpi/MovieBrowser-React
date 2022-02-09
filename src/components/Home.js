import { useState, useEffect, Suspense, lazy, useRef } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
var random;
var a = "";
var arrayLength = "";

const Home = () => {
  const [backDrop, setBackDrop] = useState([]);
  const HomeMostPopularC1 = lazy(() => import("./HomeMostPopularC1"));
  const HomeTrendingC2 = lazy(() => import("./HomeTrendingC2"));
  const HomeUpcomingC3 = lazy(() => import("./HomeUpcomingC3"));
  const HomeTopRatedC4 = lazy(() => import("./HomeTopRatedC4"));
  const Hero = lazy(() => import("./Hero"));
  const [isLoading, setLoading] = useState(true);
  const length = useRef(0);

  // TODO:Fetching data of backDrops
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=7293f904dd84a92206ed9390d9612045"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setBackDrop(data.results);
        length.current = backDrop.length;
        arrayLength = length.current;
        // arrayLength = backDrop.length;
        setLoading(false);
      });
  }, []);

  // TODO: passing the popular data to the movie card

  const popularResultHtml = backDrop.map((obj, index) => {
    // arrayLength = 20;
    // return<div key={index}>{obj.original_title}</div>
    random = Math.floor(Math.random() * 20);
    console.log("popular film array length", arrayLength);

    if (arrayLength === random) {
      console.log("random number", random);
      a = `https://image.tmdb.org/t/p/original/${obj.backdrop_path}`;
    }
    return <></>;
  });

  if (isLoading) {
    return (
      <>
        <div
          className="spinner-border text-primary position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden text-dark w-100 h-100">
            Loading Films
          </span>

        </div>
        {/* <h1 className="text-white">Loading</h1>; */}
      </>
    );
  } else {
    return (
      <>
        {/* {imageResultHtml} */}
        <Suspense
          fallback={
            <div
              className="spinner-border text-primary position-absolute top-50 start-50"
              role="status"
            >
              <span className="visually-hidden text-dark">Loading Films</span>
            </div>
          }
        >
          <Hero className="position-absolute" a={a} text="" />
        </Suspense>
        <Link to="/search" className="text-decoration-none">
          <Searchbar />
        </Link>

        <div className="container-fluid">
          <Suspense
            fallback={
              <div
                className="spinner-border text-primary position-absolute top-50 start-50"
                role="status"
              >
                <span className="visually-hidden text-dark">Loading Films</span>
              </div>
            }
          >
            <div className="d-flex card-col nav-shadow">
              {popularResultHtml}
            </div>
            <HomeMostPopularC1 />
          </Suspense>
          <Suspense
            fallback={
              <div
                className="spinner-border text-primary position-absolute top-50 start-50"
                role="status"
              >
                <span className="visually-hidden text-dark">Loading Films</span>
              </div>
            }
          >
            {/* <h3 className=" px-4 pt-4">Trending</h3> */}

            <HomeTrendingC2 />
          </Suspense>

          <Suspense
            fallback={
              <div
                className="spinner-border text-primary position-absolute top-50 start-50"
                role="status"
              >
                <span className="visually-hidden text-dark">Loading Films</span>
              </div>
            }
          >
            <HomeUpcomingC3 />
          </Suspense>
          <Suspense
            fallback={
              <div
                className="spinner-border text-primary position-absolute top-50 start-50"
                role="status"
              >
                <span className="visually-hidden text-dark">Loading Films</span>
              </div>
            }
          >
               <HomeUpcomingC3 />
            <HomeTopRatedC4 />
            <Footer />
          </Suspense>

          {/* <Upcoming /> */}
        </div>

      
        {/* {popularResultHtml} */}
      </>
    );
  }
};
export default Home;
