import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {Accordion} from "react-bootstrap"
import "./components/moviecard.css"

const MovieScreen = () => {
    const params = useParams()
    const key = "cb992bd8";
    const [movie,setMovie] = useState();
    const[errorMessage,setErrorMessage] = useState("");
    const[id,setId] = useState(params.id);

    useEffect(() => {

      const getMovie = async() => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${key}&i=${id}&plot=full`);

      const result = await response.json();

      if (response.ok) {
        setMovie(result);
      } else {
        setErrorMessage(result.message);
      }

      }

      getMovie();

    },[])


  
    return (
    
      <div className='container' style={{width :"80vw" }}>
        {movie ? <div className="card mb-3" style={{minHeight :"500px" }}>
        <div className="row g-0">
        <div className="col-md-4 hoverCard">
        <img src={movie.Poster} class="card-img" style={{Height :"500px" }} alt={movie.Title}/> 
        </div>
        <div className="col-md-8 ">
          <div className="card-body">
            <h3 class="card-title">{movie.Title}</h3>
            
            <p className="card-text">Release date : {movie.Released}</p>
            <p className="card-text">Runtime : {movie.Runtime}</p>
            <p className="card-text">Genre : {movie.Genre}</p>
            <p className="card-text">Actors : {movie.Actors}</p>
            <p className="card-text">Directors : {movie.Director}</p>
            <p className="card-text">Writers : {movie.Writer}</p>
            <h6 className="card-title">Ratings</h6>
            {
              movie.Ratings.map(Rating =>  <p className="card-text">{Rating.Source} : {Rating.Value}</p>)
            }
    
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Plot : {movie.Plot.slice(0,60)}...</Accordion.Header>
            <Accordion.Body style={{color : "white"}}>
            {movie.Plot}
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
          </div>
        </div>
      </div>
    </div>  : <div class="loader__parent"> <div class="spinner-border text-primary loader" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div> } 
        
    </div>
      
        
    )
  
}

export default MovieScreen