import { BsStar } from "react-icons/bs";
const SetMovieReview = ({ movie, filmname, rating, notFoundValue }) => {
  console.log("NotFound Value", notFoundValue);

  const movieReviewResultHtml = movie.map((obj, index) => {
    var content = "";
    var author = "";

    content = obj.content;

    return (
      <>
        <div>
          <div className="main-body d-block moviereview">
            <div className="d-flex flex-wrap-wrap">
              <h5 className="mx-3">A Review By {obj.author}</h5>

              <span class="badge bg-success p-2 mx-3 text-dark ">
                {rating}
                <BsStar className="ms-2" />
              </span>
            </div>

            <p className="card-text fs-6 ms-lg-3 me-4 ps-1 pe-2 ">{content}</p>
          </div>
        </div>
      </>
    );
  });
  if (notFoundValue === 0) {
    return <div className="d-flex overflow-auto"> {movieReviewResultHtml}</div>;
  } else {
    return (
      <>
        <h4>Reviews</h4>
        <p className="card-text fs-6 ms-lg-3 me-4 ps-1 pe-2 ">
          We don't have any written reviews for This Movie.
        </p>
      </>
    );
  }
};

export default SetMovieReview;
