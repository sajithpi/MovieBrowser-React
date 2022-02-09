import { useEffect, useState,useRef } from "react";
import { useParams } from "react-router";
import { ExternalLink } from "react-external-link";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const Movies = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCrew, setMovieCrew] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [isLoading, setLoading] = useState(true);
  var Director = "";
  var ScreenPlayWriting = "";
  var VisualStory = "";
  var job2 = "";
  var job3 = "";
  var poster_path = "";
  var backdrop_path = "";
  const keyVal = useRef(0);


  // TODO: Fetching of the movie details by ID
  useEffect(() => {
    console.log("make an api request", id);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7293f904dd84a92206ed9390d9612045&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
        setMovieDetails(data);
        setMovieGenres(data.genres);
        console.log("movie genres", data.genres);
        setLoading(false);
        keyVal.current=keyVal+1;
        }, 1000);
      });
  }, [id]);

// End of Fetching Movie Details

//   TODO:Movie Crew Fetching
useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7293f904dd84a92206ed9390d9612045&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("Movie id name", data.id);
        setMovieCrew(data.crew);
        // console.log("Movie cast name ", data.cast);
        // console.log("movie crew", data.crew);
      });
  }, [id]);

  // TODO Crew Results

  const movieCrewResultHtml = movieCrew.map((obj,key) => {
    if (obj.job === "Director") Director = obj.name;
    if (obj.job === "Story") {
      // VisualStory = obj.name;
      job2 = "Story";
    } else if (obj.job === "Visual Effects") {
      VisualStory = obj.name;
      job2 = "Visual Effects";
    } else if (obj.department === "Sound") {
      if (VisualStory === "") VisualStory = obj.name;
      VisualStory = VisualStory + "," + obj.name;
      job2 = "Sound";
    }
    if (obj.job === "Screenplay") {
      ScreenPlayWriting = obj.name;
      job3 = "ScreenPlay";
    } else if (obj.job === "Writing") {
      ScreenPlayWriting = obj.name;
      job3 = "Writing";
    }

    return <div></div>;
  });

  // Returning list items from genre array
  const GenreCard = ({ genre,key }) => {
    return (
      <Link to="/search" className="text-decoration-none  text-muted ps-3">
        {genre.name}
      </Link>
    );
  };

  // TODO:Mapping items of genre list
  const movieGenresHtml = movieGenres.map((obj,key) => {
    return <GenreCard genre={obj} key={key} />;
  });



  if (isLoading) {
    return (
      <>
      
        <div className="spinner-border text-primary position-absolute top-50 start-50 fs-3" role="status">
        </div>

       
       
  
            {/* <span className="visually-hidden text-dark w-100 fs-3 h-100 position-absolute top-50 start-50">Loading Films</span> */}
          */
        
        {/* <h1 className="text-white">Loading</h1> */}
      </>
    );
  } else {
    if (
      movieDetails.backdrop_path === null ||
      movieDetails.backdrop_path === "undefined"
    ) {
      backdrop_path =
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    } else {
      backdrop_path = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
    }
    <Hero
      // a={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}

      a={backdrop_path}
      text="is loading"
    />;
  }
  if (movieDetails.backdrop_path === null) {
    backdrop_path =
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  } else {
    backdrop_path = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
  }

  if (movieDetails.poster_path === null) {
    poster_path =
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  } else {
    poster_path = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`;
  }
  const movieWatchUrl = `https://www.themoviedb.org/movie/${id}-${movieDetails.original_title}/watch?locale=IN`;
  return (
    <>
      <div
        className="nav-shadow"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 15, 35, 1.3), rgba(19, 15, 17, 0.7)),url(${poster_path})`,
          backgroundSize: `cover`,
          height: `auto`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* <section className="Main-Section container content-sizing "> */}
      <div
        className="nav-shadow"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 15, 35, 1.3), rgba(19, 15, 17, 0.7)),url(${poster_path})`,
          backgroundSize: `cover`,
          height: `auto`,
          backgroundAttachment: "fixed",
        }}
      >
        <section className="Main-Section container content-sizing ">
          <div className="row">
            <div className="row">
              <div className="col-md-3 col-10  m-md-0 mx-4 p-0">
                <div className="card movie-card">
                  <img
                    className="movie-img-card nav-shadow  "
                    src={poster_path}
                    alt={movieDetails.backdrop_path}
                  />
                  <div className="card-body btn movie-card-title nav-shadow">
                    <ExternalLink href={movieWatchUrl}>
                      <h4 className="text-dark text-center "> Watch Movie</h4>
                    </ExternalLink>
                  </div>
                </div>
              </div>
              <div className="col-md-8 ms-md-3 movie-details">
                <div>
                  <div className="d-flex mx-md-3 m-sm-2 mt-md-5  mb-md-1 text-white">
                    <h3 className=" text-white">
                      {movieDetails.original_title}
                    </h3>

                    <span className="fs-5 fw-bold mt-2 ps-1">
                      ({`${movieDetails.release_date}`.substr(0, 4)})
                    </span>
                  </div>

                  <div className="d-flex flex-md-row flex-column text-white  ">
                    <h6 className="d-flex flex-md-row flex-column nav-shadow">
                      {" "}
                      {movieGenresHtml}
                    </h6>
                  </div>

                  <div className="d-flex mt-md-5 ">
                    <h4 className="mx-3 my-1 mb-md-4 mb-2 text-white ">
                      {movieDetails.tagline}
                    </h4>
                    <div class=" mx-3 mt-2 ">
                      {" "}
                      <span class="badge bg-success p-2 ">
                        {movieDetails.vote_average}
                        <BsStar className="ms-2" />
                      </span>{" "}
                    </div>
                  </div>
                  <div>
                    <h4 className="mx-3 my-3 text-secondary  ">Oveview</h4>
                    <p className="fs-6 text-white">{movieDetails.overview}</p>
                  </div>
                  <div className="row w-100 mx-0">
                    <div className="col-md-4 col-sm-6 col-12 mx-0">
                      <h4 className="text-light ">Director</h4>
                      <h6 className="text-light fw-normal mt-md-2 my-1">
                        {Director}
                      </h6>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mx-0">
                      <h4 className="text-light">{job2}</h4>
                      <h6 className="text-light fw-normal mt-md-2 my-1">
                        {VisualStory}
                      </h6>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mx-0">
                      <h4 className="text-light">{job3}</h4>
                      <h6 className="text-light fw-normal mt-md-2 my-1">
                        {ScreenPlayWriting}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </>End row */}
          </div>
        </section>
      </div>
      {/* First row */}
      {/* </section> */}
    </>
  );
};

export default Movies;
