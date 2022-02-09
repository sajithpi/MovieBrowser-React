import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import SetMovieReview from "./SetMovieReview";
import SimilarMovies from "./SimilarMovies";
import AOS from "aos";

const MovieReviewsSimilarMovies = ({ filmName }) => {
  const { id } = useParams();
  var [movieReview, setMovieReview] = useState([]);
  var [movieReviewTotalResults, setMovieReviewTotalResults] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);
  const [headName,setHeadName]=useState();
  const [notFoundValue,setNotFoundValue]=useState();
  const notfound = useRef(0);

  // TODO:Movie Reviews

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7293f904dd84a92206ed9390d9612045&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("movie reviews", data.results);
        setMovieReviewTotalResults(data.total_results);
        setHeadName("Similar Movies")
        console.log("total results", data.total_results);
        if (data.total_results > 1) {
          setMovieReview(data.results);
          console.log("data exists")
          notfound.current = 0;
          setNotFoundValue( notfound.current)
        } else {
          console.log("No data")
          notfound.current = 1;
          setNotFoundValue( notfound.current)
        }
      }, 1000)

      .catch((error) => {
        console.log("Error is", error);
      });
  }, [id]);
  // End of Fetching Film Reviews

  // TODO:Similar Movies

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=7293f904dd84a92206ed9390d9612045&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("similar movies", data.results);
        setSimilarMovie(data.results);
      });
  }, [id]);



  // TODO:Animation Aos

  useEffect(() => {
    AOS.init({
      duration: 355,
      easing: "ease-in-sine",
      disable: "mobile",
      delay: 100,
    });
  }, []);

  return (
    <section
      data-aos="fade"
      className="SimilarMovie-Section mt-md-4 py-1 "
    >
      <div className="row  mx-1 " >
        <div id="trailerDiv" className="col-lg-3">
      
              <SetMovieReview
              movie={movieReview}
              filmname={"movie"}
              notFoundValue={notFoundValue}
              // rating={movieDetails.vote_average}
            />
        
        
        </div>
        <div
          data-aos="fade-up"
          className="col-lg-8 col-12 mt-1 d-flex overflow-auto pe-md-5 "
          style={{ height: "fit-content", alignSelf: "center" ,boxSizing:`content-box`}}
        >
          {/* <h1>  {MovieRec}</h1> */}
          
          <SimilarMovies similarMoviesId={similarMovie} headName={headName} />
        </div>
      </div>
    </section>
  );
};
export default MovieReviewsSimilarMovies;
