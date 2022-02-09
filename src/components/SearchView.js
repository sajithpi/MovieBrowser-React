import SearchList from "./SearchList";

var title = "";

const SearchView = ({ keyword, searchResults }) => {
  title = `you are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, index) => {
    return (
      <datalist id="data">
        <option key={index} value={obj.original_title} />
      </datalist>
    );

    // return <MovieCard movie={obj} key={index} />;
    // return <div key={i}>{obj.original_title}</div>
  });
  return (
    <div className="flex">
      {/* <div style={{height:'100px'}}><Hero text= {title}/></div>  */}
      <SearchList text={title} />
      <div className="d-flex flex-wrap">{resultsHtml}</div>

      {/* {resultsHtml} */}
      {/* console.console.log(searchResults,"are the results"); */}
    </div>
  );
};
export default SearchView;
