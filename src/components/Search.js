import Hero from "./Hero";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import SearchViewFromHome from "./SearchViewFromHome";
import SearchList from "./SearchList";
import GenreGlassCard from "./GenreGlassCard";

const Search = ({ a }) => {
  const [searchHomeResults, setSearchHomeResults] = useState([""]);
  const [searchHomeText, setSearchHomeText] = useState("");

  function scrollWin() {
    window.scrollTo(0, 501);
    // setScrollState(false);
  }
  useEffect(() => {
    // var a='';
    // console.log(searchText,"is the new search text")
    if (searchHomeText) {
      // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchHomeText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("hero data", data);
          setSearchHomeResults(data.results);
        });
    }
  }, [searchHomeText]);

  console.log("a value", a);

  return (
    <>
      <section className="search-genre">
        <div>
          <Hero searchHomeText={searchHomeText} />
          {/* <SearchList text={}/> */}
        </div>
        {/* TODO:Importing glass card genres */}
        <GenreGlassCard />
        <div onClick={scrollWin()}>
          <Searchbar
            class="nav-shadow position-absolute"
            searchHomeText={searchHomeText}
            setSearchHomeText={setSearchHomeText}
          />
        </div>

        <div className="position-absolute d-flex ps-3">
          <SearchList
            className=""
            text={searchHomeText}
            head="Showing Result for"
          />
        </div>

        <div className="d-block mt-md-5 mt-3  pt-md-5 pt-3">
          <div className="overflow-auto search-hero">
            <ul className="list-unstyled">
              <SearchViewFromHome
                authed={true}
                keyword={searchHomeText}
                searchResults={searchHomeResults}
              />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Search;
