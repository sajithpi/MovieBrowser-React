import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { Route, Routes } from "react-router";
import MovieView from "./components/MovieView";
import NotFound from "./components/NotFound";
import Genre from "./components/Genre";
import Search from "./components/Search";

function App() {
  // console.log(searchText)

  return (
    <div>
      <Navbar class="nav-shadow" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/genre/:id" element={<Genre />} />z
        {/* <Route path="/search" element={<SearchView authed={true} keyword={searchText} searchResults={searchResults}/>}/> */}
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
