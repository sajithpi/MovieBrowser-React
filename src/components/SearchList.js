
const SearchList = ({text,head}) =>{
  var heading;
 console.log("length0",text.length)
  if(text.length>0){
    heading=head;
  }
    return(
        <header className=" search-container text-white py-3 d-block">
            <h5 className="hero-text text-dark">{heading}</h5>
        <h3 className="hero-text text-secondary mb-5">{text}</h3>
      
      </header>
    )
}
export default SearchList;