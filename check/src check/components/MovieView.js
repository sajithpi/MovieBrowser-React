import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams()
  console.log(id)

  const [movieDetails, setMovieDetails] = useState({})
  const [movieLoading, setMovieLoading] = useState(true)

  useEffect(()=>{
    console.log('make an api request',id)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`)
      .then((response)=>response.json())
      .then(data =>{
        setMovieDetails(data)
        setMovieLoading(false)
      })

  },[id])

  function renderMovieDetails(){
    if(movieLoading){
      return <Hero text="Loading.."/>
    }
    else if(movieDetails){
      // TODO: deal with a possible missing image 
      var posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
      console.log(posterPath,"this is the link")

      if(String(movieDetails.poster_path)=='null')
      {
        console.log("true")
        posterPath = `https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg`
      }
     
      
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return(
          <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
            <div className="container my-5">
              <div className="row">
                <div className="col-md-3">
                    <img src={posterPath} alt="left image" className="img-fluid shadow rounded"/>
                </div>
                <div className="col-md-9">
                    <h2>{movieDetails.original_title}</h2>
                    <p className="lead">{movieDetails.overview}</p>
                </div>
              </div>
            </div>
          </>
     ) 
    }
  }


 return renderMovieDetails()
};
export default MovieView;
