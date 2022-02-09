import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
            <p ClassName="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate nostrum aut inventore tempore, sed ut repellendus,
              labore, magni natus reiciendis maxime temporibus aliquid earum
              veniam laboriosam ipsam possimus. Rerum, reprehenderit?
            </p>
            </div>
          </div>
      </div>
    </>
  );
};
export default AboutView;
