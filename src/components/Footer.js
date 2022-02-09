import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row">
          <div className="footer-col col-4">
            <h4>Movie Browser</h4>
            <ul className="list-unstyled ">
              <Link
                className="footerItems text-decoration-none "
                to="/home"
                onClick={{ top: `0` }}
              >
                <li className="text-decoration-none">Home</li>
              </Link>

              <Link className="footerItems text-decoration-none " to="/home">
                {" "}
                <li>About </li>{" "}
              </Link>
            </ul>
          </div>
          <div className="footer-col col-4">
            <h4>Movies</h4>
            <ul className="list-unstyled">
              <Link className="footerItems text-decoration-none " to="/home">
              
                <li id="most-popular my-3">Most Popular </li>
              </Link>

              <Link className="footerItems text-decoration-none " to="/home">
          
                <li id="toprated my-3">Top Rated </li>
              </Link>

              <Link className="footerItems text-decoration-none " to="/home">
            
                <li id="trending my-3">Trending </li>
              </Link>
            </ul>
          </div>
          <div className="footer-col col-4">
            <h4>follow us</h4>
            <div className="social-links">
              <ExternalLink
                href={`https://facebook.com/sajith.palamanna/`}
                className="text-decoration-none fs-3 "
              >
                <BsFacebook className="icons"/>
              </ExternalLink>

              <ExternalLink
                href={`https://instagram.com/sajith_violin_`}
                className="text-decoration-none fs-3 "
              >
                <BsInstagram className="icons" />
              </ExternalLink>
              <Link to="/home" className="text-decoration-none fs-3 ">
                <BsTwitter className="icons" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
