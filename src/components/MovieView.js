import { lazy, Suspense, useEffect } from "react";
import Footer from "./Footer";
import AOS from "aos";

const MovieView = () => {
  const Movies = lazy(() => import("./Movies"));
  const Cast = lazy(() => import("./Cast"));
  const MovieReviewsSimilarMovies = lazy(() =>
    import("./MovieReviewsSimilarMovies")
  );
  const MovieRecommendSection4 = lazy(() => import("./MovieRecommendSection4"));

  // TODO:Renering films details and returning to movieView Main page

  useEffect(() => {
    AOS.init({
      duration: 500,
      // easing: 'ease-in-sine',
      disable: "mobile",
      delay: 100,
    });
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div class=" text-primary" role="status">
            <span className="visually-hidden text-dark">Loading Films</span>
          </div>
        }
      >
        <Movies />
      </Suspense>

      <Suspense
        fallback={
          <div class=" text-primary" role="status">
            <span className="visually-hidden text-dark">Loading Films</span>
          </div>
        }
      >
        {/* Cast And Trailer */}

        <Cast />
      </Suspense>
      <Suspense
        fallback={
          <div class="text-primary" role="status">
            <span className="visually-hidden text-dark">Loading Films</span>
          </div>
        }
      >
        {/* Movie Review and Similar Movies */}
        <MovieReviewsSimilarMovies />
      </Suspense>
      <Suspense
        fallback={
          <div class=" text-primary" role="status">
            <span className="visually-hidden text-dark">Loading Films</span>
          </div>
        }
      >
        {/* Movie Recommendations */}
        <MovieRecommendSection4 key={1} />
      </Suspense>

      <Footer />
    </>
  );
};
export default MovieView;
