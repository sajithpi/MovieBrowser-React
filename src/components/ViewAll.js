import { useParams } from "react-router";
import AboutUs from "./AboutUs";
import HomeMostPopularC1 from "./HomeMostPopularC1";
import HomeTopRatedC4 from "./HomeTopRatedC4";
import HomeTrendingC2 from "./HomeTrendingC2";
import HomeUpcomingC3 from "./HomeUpcomingC3";

const ViewAll = () => {
  const { type } = useParams();
  console.log(type);

  const View = () => {
    console.log("View Invoked");
    switch (type) {
      case "mostpopular":
        console.log("Most Popular invoked");

        return <HomeMostPopularC1 />;

      case "trending":
        console.log("Trending invoked");
        return <HomeTrendingC2 />;
      case "upcoming":
        return <HomeUpcomingC3 />;
      case "toprated":
        return <HomeTopRatedC4 />;

      default:
        break;
    }
  };

  return (
    <>
  
    <View />

     
      {/* <HomeMostPopularC1/> */}
      {/* <HomeTrendingC2/> */}
    </>
  );
};
export default ViewAll;
