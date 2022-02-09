import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import MovieCard from "./MovieCard";

const PopularHead = ()=>{
  return(
    <>
<div className="d-flex">
      <h3 className=" px-4 pt-4 d-flex flex-fill">Most Popular</h3>
      <span className=" text-primary d-flex align-items-center"><Link to="/ViewAll/mostpopular" className="text-decoration-none viewAll">ViewAll</Link></span>
      </div>
    </>
  )
}



const HomeMostPopularC1 = () => {
  const { type } = useParams();
  const [popularFilm, setPopularFilm] = useState([]);

  // TODO:Fetching data of popularfilms
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7293f904dd84a92206ed9390d9612045&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setPopularFilm(data.results);
      });
  }, []);

  // TODO: passing the popular data to the movie card

  const popularResultHtml = popularFilm.map((obj, index) => {
    // return<div key={index}>{obj.original_title}</div>
    return <MovieCard movie={obj} key={index} />;
  });



  if(type==='mostpopular'){
    return (
      <>
       
        <PopularHead/>
        <div className="d-flex card-col flex-md-wrap nav-shadow position-relative justify-content-center mt-3">{popularResultHtml}</div>
      </>
    );
  }
  else{
    return (
      <>
        
        <PopularHead/>
        <div className="d-flex card-col nav-shadow position-relative " >{popularResultHtml}</div>
      </>
    );
  }

 
};
export default HomeMostPopularC1;
