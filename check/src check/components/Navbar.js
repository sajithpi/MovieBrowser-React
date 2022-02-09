import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
const navigate = useNavigate()


const UpdateSearchText = (e) =>{
navigate('/search')
  setSearchText(e.target.value)
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Brows
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="gonowherenavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="gonowhere"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={UpdateSearchText}
            />
             {/* <button className="btn btn-outline-success" 
            
             >
              Search
            </button> */}
            <Link className="btn btn-outline-success" aria-current="page" to="/Search">
                Search
              </Link>
          
          </form>
         
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
