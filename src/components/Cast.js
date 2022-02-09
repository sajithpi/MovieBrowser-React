import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MovieCastCard from "./MovieCastCard";

const Cast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [headName,setHeadname] = useState([]);
  // var headName;
  
  var TrailerUrl = "";

  // TODO:Fetching  Movie casts by using UseEffect

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7293f904dd84a92206ed9390d9612045&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Movie id name", data.id);
        // setMovieCrew(data.crew);
        setTimeout(() => {
          setMovieCast(data.cast);
          setHeadname("Cast")
          // console.log("Movie cast name ", data.cast);
          // console.log("movie crew", data.crew);
       
        }, 1500);

      });
  }, [id]);

  const movieCastResultHtml = movieCast.map((obj, key) => {
  
    return <MovieCastCard cast={obj} key={key} />;
  });

  // TODO fetching of Movie Trailer

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7293f904dd84a92206ed9390d9612045&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        // setMovieCredits(data);
        setTimeout(() => {
          setMovieTrailer(data.results);
       
        }, 2000);
      
        // if (notfound.current === 1) setMovieReview(data.results);
        console.log("Movie trailers ", data.results);
      });
  }, [id]);

  const movieTrailerHtml = movieTrailer.map((obj, index) => {
    TrailerUrl = `https://www.youtube.com/embed/${obj.key}`;
    return console.log("Trailer Url", TrailerUrl);
  });

  return (
      <>

         <h3 className=" px-4 pt-4  content-sizing " id="cast">{headName}</h3>
         
    <section className="Cast-Section row my-3 ms-3">
      {/* Left Side */}
      <div className=" col-xl-7 col-md-11 col-12   d-flex overflow-auto mx-md-4 align-center  ">
        {movieCastResultHtml}
      </div>

      {/* Right Side */}
      <div className=" d-flex overflow-auto col-xl-4 col-12 mb-0 mt-md-0 me-md-0 px-md-3 mt-5 px-4 mb-md-1 text-white ms-1 ">
        <iframe
          id="trailer"

          width="100%"
          height="315"
          src={TrailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          // allowFullScreen
        ></iframe>
      </div>
    </section>
    </>
  );
};
export default Cast;
