import Hero from "./Hero";  
import { Link } from "react-router-dom";

/// TMDB API KEY = ab166ff82684910ae3565621aea04d62

/// example link for movie searches = 
// https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=star%20wars&page=1&include_adult=false


const MovieCard = (({movie}) => {
    var posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailurl = `/movies/${movie.id}`
    // const a = String(movie.poster_path);
    console.log("this is the link",movie.poster_path)
    if(String(movie.poster_path)=='null')
    {
        console.log(movie.poster_path,'it is undefined')
        posterUrl = 'https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg';
    }
  
    

    return(
        <div className="col-lg3-3 col-md-3 col-2 my-5">
                <div className="card">
            <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <Link to={detailurl} className="btn btn-primary" >Show Details</Link>
            </div>
        </div>
        </div>
        
    )
})

const SearchView = ({ keyword, searchResults }) =>{
    const title =`you are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj,i) =>{
        // return <div key={i}>{obj.original_title}</div>
        return <MovieCard movie={obj} key={i}/>
    })
  
    return(
        <>
        <Hero text={title} />
        {resultsHtml &&
            <div className="container">
                <div className="row">
                    {resultsHtml &&
                    resultsHtml
                    }
                   
                   
                        {/* {console.log('this is empty') */}
                          
                        
                          <Hero text={'it doest exist'} />
                  
        
                    
                </div>
            </div>

             
         }
            
        
        </>
    )
}
export default SearchView;
