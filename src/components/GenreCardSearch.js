import Tilt from "react-vanilla-tilt";

const GenreCardSearch = ({ a, text }) => {
  console.log("img link", a);
  if (a === undefined) {
    console.log("img link is null");
    a =
      "https://images.unsplash.com/photo-1542204165-19b33620e2c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  }
  const r = Math.floor(Math.random() * (175 - 15 + 1) + 15);
  const g = Math.floor(Math.random() * (175 - 55 + 1) + 15);
  const b = Math.floor(Math.random() * (255 - 15 + 1)  + 15);
  return (
    <Tilt
      className="tilt"
      options={{ scale: 5, max: 25, speed: 300, glare: true, "max-glare": 1 }}
      style={{
        height: `auto`,
        width: `min-content`,
        background: `rgba(${r},${g},${b},0.7)`,
        boxShadow: `rgba(20, 26, 40, 0.0) 0px 7px 42px`,
        borderRadius: `7px`,
      }}
    >
      <div className="container-genre ">
        <div className="card-search ">
          <div className="content">
            <h4 className="text-dark">{text}</h4>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
export default GenreCardSearch;
