import Tilt from "react-vanilla-tilt";
// TODO:Movie CrewList

 const MovieCastCard = ({ cast, key }) => {
    // const profile_path = `https://image.tmdb.org/t/p/original/${cast.profile_path}`;
    var profile_path = "";
    // console.log(`profile path${cast.profile_path}`)
    if (cast.profile_path === null) {
      profile_path = ` https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=856&q=80`;
    } else {
      // console.log("path is loaded",cast.profile_path)
      profile_path = `https://image.tmdb.org/t/p/original/${cast.profile_path}`;
    }
    return (
      <div className=" col-lg-2 col-md-3 col-sm-6 col-5 px-sm-1 px-2 mx-lg-1 align-self-center  ">
        {/* <h3 className="text-white">{cast.name}</h3> */}

        <Tilt
            className="tilt"
            options={{
              scale: 2,
              max: 25,
              speed: 400,
              glare: true,
              "max-glare": 1,
            }}
            style={{
              height: `255px`,
              width: `-webkit-fill-available`,
              background: `inherit`,
              boxShadow: `rgba(20, 26, 40, 0.0) 0px 7px 42px`,
              boxShadow:`0px 0px`,
              borderRadius: `15px`,
            }}
          >
        <div className="card caste-card px-md-0 py-md-0  m-md-0 m-2">
      
          <img
            src={profile_path}
            className="card-img-top caste-card-img nav-shadow  "
            alt={cast.profile_path}
          />

          <div className="card-body px-1 py-1   ">
            <h6 class="card-title cast-card-title">{cast.original_name}</h6>
            <h6 class="card-subtitle mb-0 text-muted fw-normal mt-md-1" style={{fontSize:`0.9em`}}>
            {cast.character}
            </h6>
           </div>
     
      
        </div>
        </Tilt>
      </div>
    );
  };

export default MovieCastCard;  