import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";

var title = "";
var resultsHtml;
var posterUrl='';

const MovieSearchCard = ({ movie }) => {
   posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const movieUrl = `/movies/${movie.id}`;
  if (movie.poster_path === null) {
    posterUrl =
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  } else {
    posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  }
    // TODO: Scrolling
    const scrollTop = () => {
   
      window.scrollTo({ top: 0, behavior: "smooth"});
      setTimeout(() => {
        window.location.reload(true)
       
       
      }, 500);
    };
  if (movie) {
    return (
      <div className=" col-sm-5 col-md-4 col-lg-2 col-12 my-3">
      <div className="card card-custom  ">
        <Link to={movieUrl} className="  ">
          <img
            src={posterUrl}
            className="card-img-top card-image "
            alt={movie.original_title}
            onClick={scrollTop}
          />
        </Link>
        <div className="card-body  " style={{ padding: `1rem.0.5rem` }}>
          <div className="col-10">
            <h6 className="card-title card-title-custom container-fluid">
              {movie.original_title}
            </h6>
            {/* <div className="col-10 d-flex flex-lg-row flex-column align-items-lg-end"> */}
            <div className="row  container-fluid">
              <div className="col-8 px-0 mx-0 ">
                <h6 className="card-release-date text-muted px-0 w-75">
                  {movie.release_date}
                </h6>
              </div>
              <div className="col-4">
                <div className="  ">
                  {" "}
                  <span className="badge border border-light ratings">
                    {movie.vote_average}
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
  } else {
    return <small>search</small>;
  }
};

const SearchViewFromHome = ({ keyword, searchResults }) => {
  // title = `you are searching for ${keyword}`;
  if (searchResults) {
    resultsHtml = searchResults.map((obj, index) => {
      if (searchResults) {
        console.log("obj val", obj.id);
      }

      if (keyword.length > 0) {
        return (
           
            <MovieSearchCard movie={obj} key={index} />
         
         
        
        );
      } else {
        return console.log("There is no keyword to");
      }
    });
  }

  return (
    <div className="flex">
      <div className="d-flex flex-wrap ">
        <SearchList text={title} />

        {resultsHtml}
      </div>
    </div>
  );
};
export default SearchViewFromHome;
