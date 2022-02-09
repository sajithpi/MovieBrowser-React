import GenreCardSearch from "./GenreCardSearch";
import { Link } from "react-router-dom";

const GenreGlassCard = ()=>{
    const ActionGenre = `/genre/${28}`;
  const AdventureGenre = `/genre/${12}`;
  const AnimationGenre = `/genre/${16}`;
  const ComedyGenre = `/genre/${35}`;
  const FantasyGenre = `/genre/${14}`;
  const HorrorGenre = `/genre/${27}`;
  const ScienceFictionGenre = `/genre/${878}`;
  const ThrillerGenre = `/genre/${53}`;
  const WarGenre = `/genre/${10752}`;
    return(
<div id="gencard" className="genreCard d-flex flex-wrap my-3">
          <Link to={AdventureGenre} className="text-decoration-none mx-3 ">
            <GenreCardSearch text={"Adventure"} />
          </Link>
          <Link to={ActionGenre} className="text-decoration-none mx-3">
            <GenreCardSearch text={"Action"} />
          </Link>
          <Link to={AnimationGenre} className="text-decoration-none mx-3">
            <GenreCardSearch text={"Animation"} />
          </Link>
          <Link to={ComedyGenre} className="text-decoration-none mx-3">
            <GenreCardSearch text={"Comedy"} />
          </Link>
          <Link to={FantasyGenre} className="text-decoration-none mx-3">
            <GenreCardSearch text={"Fantasy"} />
          </Link>
          <Link to={HorrorGenre} className="text-decoration-none mx-3">
            <GenreCardSearch text={"Horror"} />
          </Link>
          <Link to={ScienceFictionGenre} className="text-decoration-none mx-3">
            <GenreCardSearch text={"SciFi"} />
          </Link>

          <Link to={ThrillerGenre} className="text-decoration-none mx-3">
            <GenreCardSearch text={"Thriller"} />
          </Link>

          <Link to={WarGenre} className="text-decoration-none mx-3">
            <GenreCardSearch text={"War"} />
          </Link>
        </div>
    )
}
export default GenreGlassCard;