import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsStar } from "react-icons/bs";

var movieId = 1;
var searchMovieurl = "";
var posterUrl = '';
const MovieSearchCard = ({ movie }) => {

  const movieUrl = `/movies/${movie.id}`;

  const textChange = () => {
    document.getElementById("inputnav").value = movie.original_title;
    console.log("movie Id", movie.original_title);
    movieId = movie.id;
    searchMovieurl = `/movies/${movieId}`;
  };
  if (movie.poster_path === null) {
    posterUrl =
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  } else {
    posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }

  if (movie) {
    return (
      <div className="card  searchViewFromHome">
        <div className=" row d-flex bg-white">
          <div className="col-3">
            <img
              src={posterUrl}
              className="m-1"
              alt={movie.original_title}
              style={{ width: `55px`, height: `55px` }}
              onClick={textChange}
            />
            {/* </Link> */}
          </div>
          <div className="col-9">
            <p className="text-dark text-start m-1 fs-6 ">
              {movie.original_title}
            </p>
            {/* <span className="mx-3 my-3 text-dark fw-bold text-start mx-0">Oveview</span> */}
            <small className="badge bg-success p-2 mx-3 ">
              {movie.vote_average}
              <BsStar className="ms-2" />
            </small>
            <small className="text-dark mini-text text-start fw-normal">
              {movie.release_date}
            </small>
            <small className="text-secondary fw-bold mx-3">
              {movie.original_language}
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    return <small>search</small>;
  }
};

const Navbar = () => {
  var movieID = 1;
  const [searchResults, setSearchResults] = useState([""]);
  const [searchText, setSearchText] = useState("");
  var movieUrl = "";
  var posterUrl;
  const navigate = useNavigate();

  const ActionGenre = `/genre/${28}`
  const AdventureGenre = `/genre/${12}`
  const AnimationGenre = `/genre/${16}`
  const ComedyGenre = `/genre/${35}`
  const FantasyGenre = `/genre/${14}`
  const HorrorGenre = `/genre/${27}`
  const ScienceFictionGenre = `/genre/${878}`
  const ThrillerGenre = `/genre/${53}`
  const WarGenre = `/genre/${10752}`

  const redirect = () => {
    navigate(searchMovieurl);
  };

  useEffect(() => {
    // console.log(searchText,"is the new search text")
    if (searchText) {
      // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  const UpdateSearchText = (e) => {
    // navigate('/search')
    setSearchText(e.target.value);
  };

  const resultsHtml = searchResults.map((obj, index) => {
    posterUrl = `https://image.tmdb.org/t/p/w500/${obj.poster_path}`;
    movieUrl = `/movies/${obj.id}`;
    // movieUrl = `/movies/${document.getElementById("inputnav").value}`;
    movieID = obj.id;
    // console.log("navbar search text",searchText)

    if (searchText.length > 0) {
      return (
        <li className="moviecardNavBar ">
          <MovieSearchCard movie={obj} key={index} />;
        </li>
      );
    } else {
      return console.log("no search text");
    }
  });

  return (
    <>
      <nav className="navbar nav-bar- navbar-expand-md nav-color">
        <div className="container-fluid">
          <Link className="navbar-brand nav-logo  main-item nav-shadow" to="/">
            Movie Browser
          </Link>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBar"
            className="navbar-toggler ms-auto btn btn-outline-light"
            aria-controls="navBar"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="bi bi-list"> </span>
          </button>

          <div className="collapse navbar-collapse" id="navBar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item main-item">
                <Link
                  className="nav-link  nav-links"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>

              <div class="dropdown navbar-item main-item ">
                <span class="nav-link dropdown-toggle text-white fw-bold " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"   aria-current="page">
                  Genres
                </span>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className="dropdown dropend">
                    <Link to={ActionGenre} className="dropdown-item">Action</Link>
                  </li>
                  <li><Link to={AdventureGenre} className="dropdown-item">Adventure</Link></li>
                  <li><Link to={AnimationGenre} className="dropdown-item">Animation</Link></li>
                  <li><Link to={ComedyGenre} className="dropdown-item">Comedy</Link></li>
                  <li><Link to={FantasyGenre} className="dropdown-item">Fantasy</Link></li>
                  <li><Link to={HorrorGenre} className="dropdown-item">Horror</Link></li>
                  <li><Link to={ScienceFictionGenre} className="dropdown-item">Science Fiction</Link></li>
                  <li><Link to={ThrillerGenre} className="dropdown-item">Thriller</Link></li>
                  <li><Link to={WarGenre} className="dropdown-item">War</Link></li>
                </ul>
              </div>
              <li className="nav-item main-item">
                <Link className="nav-link nav-links" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex main-item d-none d-md-flex" autoComplete="off">
              <input
                className="form-control me-2"
                id="inputnav"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={UpdateSearchText}
              />

              <button className="btn btn-outline-light" onClick={redirect}>
                Search
              </button>

            </form>
          </div>
        </div>
      </nav>

      <div className="overflow-auto dropdownlist me-md-5 pt-md-1 d-none d-md-flex">
        <ul className="list-unstyled" id="resultdropdown">
          {resultsHtml}
        </ul>
      </div>
    </>
  );
};
export default Navbar;
