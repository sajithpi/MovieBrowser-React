
const Hero = ({a}) =>{


 console.log("img link",a)
 if(a===undefined)
 {
   console.log("img link is null")
   a='https://images.unsplash.com/photo-1542204165-19b33620e2c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
 }

 
    return(
      
      <div id="hero-section" className="nav-shadow " style={{ backgroundImage: `linear-gradient(rgba(35, 39, 75, 0.7), rgba(0, 0, 55, 0.7)),url(${a})`,backgroundSize:`cover`,height:`355px` ,backgroundAttachment:'fixed'}}>
          {/* <div style={{ backgroundImage: `url(${a})`, backgroundSize:`cover`,height:`355px`}}></div> */}
        <header className=" text-white p-lg-5 p-1 hero-container"  > 
      
       
        <h1 className="hero-text  mt-md-5 mb-1 mx-0 text-white">Welcome</h1>
        <h2 className="fs-md-2 fs-lg-1 mx-md-1 mx-1 m-0 text-white ">Unlimited Movies,Latest Movie Updates </h2>
        <p className="fs-5 m-1 mt-md-3 mt-3 text-white">Watch and Enjoy your favorite Movies from Movie Browser</p>


      
      </header>
      </div>
    )
}
export default Hero;