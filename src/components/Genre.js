import GenreMovie from "./GenreMovie";
import Hero from "./Hero";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import GenreGlassCard from "./GenreGlassCard";
const Genre = () => {
  return (
    <>
      <Hero text="Genre" />
      {/* <h1>Action</h1> */}
      <GenreGlassCard/>
      <Link to="/search" className="text-decoration-none"><Searchbar /></Link>
      <div className=" flex-wrap">
        <GenreMovie />
      </div>
    </>
  );
};
export default Genre;
