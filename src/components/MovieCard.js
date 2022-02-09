import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import Tilt from "react-vanilla-tilt";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const movieUrl = `/movies/${movie.id}`;

  // TODO: Scrolling
  const scrollTop = () => {
    // setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // }, 500);
  };

  return (
  
    <div className=" col-sm-7 col-md-3 col-lg-2 col-5 filmcol">
      <div className="card card-custom  ">
        <Tilt
          className="tilt"
          options={{
            scale: 2,
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1,
          }}
          style={{
            height: `197px`,
            width: `-webkit-fill-available`,
            background: `inherit`,
            boxShadow : `0px 0px`,
            // boxShadow: `rgba(20, 26, 40, 0.0) 0px 7px 42px`,
            borderRadius: `15px`,
          }}
        >
          <Link to={movieUrl} className="home-movie">
            <img
              src={posterUrl}
              className="card-img-top card-image "
              alt={movie.original_title}
              onClick={scrollTop}
            />
          </Link>
          </Tilt>
          <div className="card-body  my-1 py-0" style={{width:`-webkit-fill-available`}}>
            <div className="col-12">
              <h6 className="card-title card-title-custom container-fluid px-0">
                <small>{movie.original_title}</small>
              </h6>
              {/* <div className="col-10 d-flex flex-lg-row flex-column align-items-lg-end"> */}
              <div className="row   mx-0 align-items-center">
                <div className="col-6 px-0 mx-0 ">
                  <h6 className="card-release-date text-muted px-0 w-100">
                  <small>{movie.release_date} </small>
                  </h6>
                </div>
                <div className="col-4 px-0">
                  <div className="  ">
                
                    <span className="badge border ratings ">
                      <small>{movie.vote_average}</small>
                      <BsStar className="ms-2" />
                    </span>
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
export default MovieCard;
