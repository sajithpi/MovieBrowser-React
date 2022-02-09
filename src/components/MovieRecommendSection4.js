import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MovieRecommend from "./MovieRecommend";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

const MovieRecommendSection4 = () => {
  var [movieRecommendation, setMovieRecommendations] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  const backup = {
    page: 1,
    results: [
      {
        original_title: "No Movie Recommandations For This Movie",
        // "backdrop_path": "/r2GAjd4rNOHJh6i6Y0FntmYuPQWs.jpg",
      },
    ],
  };

  // TODO:Movie Recomendations

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=7293f904dd84a92206ed9390d9612045&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data.results);

        console.log("recomendations array length", movieRecommendation.length);
        if (data.total_results >= 1) {
          setMovieRecommendations(data.results);
        } else {
          setMovieRecommendations(backup.results);
        }
      });
  }, [id]);


  // TODO:Fetching Movie Details

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7293f904dd84a92206ed9390d9612045&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        console.log("movie data results from section 4", data);
      });
  }, [id]);

  return (
    <section className="MovieRecommend-Section mt-5">
      <div className="row ">
        <div data-aos="fade-up" className="col-xl-9 col-md-12 pe-0" >
          <MovieRecommend movieRecommendation={movieRecommendation} />
        </div>
        <div className="col-xl-2 col-md-3 col-12 flex-wrap-wrap ">
          <div className="icons-class d-flex flex-wrap-wrap fs-4 my-3 justify-content-center">
         
            <ExternalLink href={`https://facebook.com/sajith.palamanna`}>
              <BsFacebook className="icons  mx-3" />
            </ExternalLink>
            <Link to="https://facebook.com">
              <BsTwitter className="icons  mx-3" />
            </Link>

            <ExternalLink href={`https://instagram.com/sajith_violin_`}>
              <BsInstagram className="icons  mx-3" />
            </ExternalLink>
          
          </div>
         
          <div className="mt-md-3 my-1 text-center ">
            <div className="d-inline-flex flex-xl-column flex-row flex-wrap-wrap justify-content-center">
            <ul className="mt-md-3 my-2 px-1">Status
            <li className="text-secondary my-1 ">{movieDetails.status}</li>
          </ul>
            <ul className=" mt-md-3 my-2 px-2">Language
            <li className="text-secondary .d-none .d-sm-block my-1">
              {movieDetails.original_language}
            </li>
            </ul>
         
          
            <ul className=" mt-md-3 my-2 px-1">Budget
            <li className="text-secondary my-1 px-0">${movieDetails.budget}</li>
            </ul>
          
       
            <ul className=" mt-md-3 my-2 px-1">Revenue
            <li className="text-secondary px-0">${movieDetails.revenue}</li>
            </ul>
        
            </div>
          </div>
          </div>
        </div>
      
    </section>
  );
};
export default MovieRecommendSection4;
