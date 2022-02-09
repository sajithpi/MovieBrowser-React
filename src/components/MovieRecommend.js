import { Link } from "react-router-dom";
import Tilt from 'react-vanilla-tilt';


const MovieRecommend = ({ movieRecommendation,key }) => {


  console.log("movie title",movieRecommendation.original_title)
  const MovieRec = movieRecommendation.map((obj, key) => {
      var poster_path=`https://image.tmdb.org/t/p/w500/${obj.backdrop_path}`
      const path=`/movies/${obj.id}`
      // console.log("original title",obj.original_title.length)
    // TODO: Scrolling
 const scrollTop = () => {
   
  window.scrollTo({ top: 0, behavior: "smooth"});
  setTimeout(() => {
    window.location.reload(true)
   
   
  }, 500);
};
    return (

      <>
        <div >
        <Tilt className="tilt" options={{ scale: 2, max: 25 ,speed:400,glare:true,"max-glare":1}} style={{height:`auto`, width:`195px`, background:`inherit`,boxShadow:`rgba(20, 26, 40, 0.0) 0px 7px 42px`,borderRadius:`15px`}}>
          <div className="card movie-Recomend-Card" onClick={scrollTop}>
          
            
    <Link to={path}> <img src={poster_path} className="card-img-top movie-Recomend-Card-img" alt={obj.poster_path}/></Link>
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


if(MovieRec){
  return (
    <div>
     <h4 className=" d-block m-md-3">Movie Recomendations</h4>
     <div className="d-flex overflow-auto mx-0 flex-wrap-wrap">
     {MovieRec}
     </div>

    </div>
)
}
else{
  return <div><h1>There is No Movie Recomendations</h1></div>
}
 
      
};
export default MovieRecommend;
