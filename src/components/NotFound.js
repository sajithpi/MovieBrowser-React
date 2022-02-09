import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();
    
  const redirect = ()=>{
    navigate('/home')
  }
//   const a='https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpbmVtYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  return (
   <section className="notFound">
    <div>

   
      <div className="container pb-5" >
        <div className="row">
          <div className="content  mt-5">
            <div className="col-lg-12 text-white mx-3">
              <h1 className="text-light">404</h1>
              <h2 className="text-light">Oops, the page you're looking for does not exist.</h2>
              <p className="fs-6 text-light">
                You may want to head back to the homepage.
                <br />
                If you think something is broken, report a problem.
              </p>
              <button type="button" class="btn btn-outline-light ms-3 fs-5" onClick={redirect}>Return Home</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
   
  );
};
export default NotFound;
