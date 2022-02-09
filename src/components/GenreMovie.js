import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import { useParams } from "react-router";


var genreName = "";
var posterUrl

const GenreCard = ({ genre ,index}) => {
   posterUrl = `https://image.tmdb.org/t/p/w500/${genre.poster_path}`;
  const movieUrl = `/movies/${genre.id}`;

    // TODO: Scrolling
    const scrollTop = () => {
   
      window.scrollTo({ top: 0, behavior: "smooth"});
      setTimeout(() => {
        window.location.reload(true)
       
       
      }, 500);
    };

  return (
    <div className=" col-sm-5 col-md-4 col-lg-2 col-12 my-3">
      <div className="card card-custom  ">
        <Link to={movieUrl} className="  ">
          <img
            src={posterUrl}
            className="card-img-top card-image "
            alt={genre.original_title}
            onClick={scrollTop}
          />
        </Link>
        <div className="card-body  " style={{ padding: `1rem.0.5rem` }}>
          <div className="col-10">
            <h6 className="card-title card-title-custom container-fluid">
              {genre.original_title}
            </h6>
            {/* <div className="col-10 d-flex flex-lg-row flex-column align-items-lg-end"> */}
            <div className="row  container-fluid">
              <div className="col-8 px-0 mx-0 ">
                <h6 className="card-release-date text-muted px-0 w-75">
                  {genre.release_date}
                </h6>
              </div>
              <div className="col-4">
                <div className="  ">
                  {" "}
                  <span className="badge border border-light ratings">
                    {genre.vote_average}
                    <BsStar className="ms-2" />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
    </div>
  );
};

const GenreMovie = () => {
  const { id } = useParams();
  const [genre, setGenre] = useState([]);
  console.log(id);


  switch (id) {
    case "28":
      genreName = "Action";
      break;
    case "12":
      genreName = "Adventure";
      break;
    case "16":
      genreName = "Animation";
      break;
    case "35":
      genreName = "Comedy";
      break;
    case "14":
      genreName = "Fantasy";
      break;
    case "27":
      genreName = "Horror";
      break;
    case "878":
      genreName = "ScienceFiction";
      break;
    case "53":
      genreName = "Thriller";
      break;
    case "10752":
      genreName = "War";
      break;
    case "10749":
      genreName = "Romance";
      break;
    case "9648":
      genreName = "Mystery";
      break;
    case "10402":
      genreName = "Music";
      break;
    case "36":
      genreName = "History";
      break;
    case "18":
      genreName = "Drama";
      break;
    case "80":
      genreName = "Crime";
      break;
    case "99":
      genreName = "Documentary";
      break;




    default:
    genreName = "Genre";
  }

  useEffect(() => {
    console.log("id", id);
  }, [id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7293f904dd84a92206ed9390d9612045&with_genres=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("genre list", data.results);
        setGenre(data.results);
      });
  }, [id]);

  const resultGenreHtml = genre.map((obj,key) => {
    return <GenreCard genre={obj} index={key} />;
  });

  return (
    <>
   
      <h1 className="text-dark mt-md-5 mt-3">{genreName}</h1>
      {/* <Searchbar imgSrc={posterUrl} /> */}
    
      <div className="d-flex flex-wrap">{resultGenreHtml}</div>
    </>
  );
};

export default GenreMovie;
