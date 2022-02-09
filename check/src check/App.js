import "./App.css";
import { useState, useEffect} from 'react';
import AboutView from "./components/AboutView";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchView from './components/SearchView'
import MovieView  from "./components/MovieView";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";


function App() {

  const [searchResults,setSearchResults] = useState([]);
  const [searchText,setSearchText] = useState('');

  useEffect( () =>{
    // console.log(searchText,"is the new search text")
    if(searchText){

      // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then((response) => response.json())
      .then(data =>{
        console.log(data)
        setSearchResults(data.results)
      })
    }

  },[searchText])

console.log(searchText)

  return (
    <div>
      <Navbar searchText={searchText}  setSearchText={setSearchText}/>
      <Routes>
      <Route path="/"  element={<Home />} />
        <Route path="/home"  element={<Home />} />
        {/* <Home/> */}
        <Route path="/about" element={<AboutView />} />
   
        {/* element={<SearchView />} */}
        <Route path="/search" element={<SearchView authed={true} keyword={searchText} searchResults={searchResults}/>}/>
        <Route path="/movies/:id" element={<MovieView />} />

        {/* <Route path="/notfound" element={<NotFound/>}/> */}
        <Route path='*' exact={true} element={<NotFound/>}/>
      </Routes> 
    </div>
  );
}

export default App;
