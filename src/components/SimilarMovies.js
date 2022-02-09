import { Link } from "react-router-dom";
import Tilt from "react-vanilla-tilt";

const SimilarMovies = ({ similarMoviesId,headName }) => {
  const similarmovieMap = similarMoviesId.map((obj, index) => {
    var poster_path = `https://image.tmdb.org/t/p/w500/${obj.backdrop_path}`;
    const path = `/movies/${obj.id}`;
    // TODO: Scrolling
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        window.location.reload(true);
      }, 500);
    };
    return (
      <>
        <div>
        <Tilt className="tilt" options={{ scale: 2, max: 25 ,speed:400,glare:true,"max-glare":1}} style={{height:`auto`, width:`195px`, background:`inherit`,boxShadow:`rgba(20, 26, 40, 0.0) 0px 7px 42px`,borderRadius:`15px`}}>
            <div className="card similar-movie-Card" onClick={scrollTop}>
              <Link to={path}>
                {" "}
                <img
                  src={poster_path}
                  className="card-img-top similar-movie-Card-img"
                  alt={obj.poster_path}
                />
              </Link>
              <div className="">
                <p className="card-title movie-Recomend-Card-title fs-6 fw-bold">
                  <small>{obj.original_title}</small>
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </>
    );
  });

  return (
    <div>
      <h4 className=" d-block mb-0">{headName}</h4>
      <div className="d-flex overflow-auto mx-0 my-2 align-items-cente flex-nowrap">
        {similarmovieMap}
      </div>
    </div>
  );
};
export default SimilarMovies;
