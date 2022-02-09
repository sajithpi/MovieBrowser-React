import { useNavigate } from "react-router-dom";
const Searchbar = ({ searchHomeText, setSearchHomeText }) => {
const navigate = useNavigate()



  const UpdateSearchText = (e) => {
    console.log("text");
    navigate('/search')
    setSearchHomeText(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg nav-color "  style={{borderRadius:`35px`}}>
      <form className="container-fluid">
        <input
          className="form-control me-2  "
          id="inputBox-hero"
          type="search"
          placeholder="Search Your Favourite Movies Here"
          aria-label="Search "
          value={searchHomeText}
          onChange={UpdateSearchText}
          list="data"
          style={{borderRadius:`20px`}}
          autoComplete="off"
          autoFocus={true}
        />
      </form>
    </nav>
  );
};
export default Searchbar;
