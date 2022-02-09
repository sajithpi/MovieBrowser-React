import { useEffect, useState } from "react/cjs/react.development";

const Upcoming = () => {
  const [upComing, setUpcoming] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=7293f904dd84a92206ed9390d9612045&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setUpcoming(data.results);
      });
  }, []);

  const resultUpcomingHtml = upComing.map((obj, index) => {
    return <h3>{upComing.original_title}</h3>;
  });
  return <>{resultUpcomingHtml}</>;
};
export default Upcoming;
