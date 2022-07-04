import React, { useEffect, useState } from "react";
import "./moviecard.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { removeFromFav } from "../actions/favActions";
const Moviecard = ({ movie, addToFavourites }) => {
  
  const favouriteList = useSelector(state => state.favouriteList)
  const {favourites} = favouriteList;
  const dispatch = useDispatch();

  const [pre,setPre] = useState(false)
  useEffect(() => {
    const val = favourites.find(fav => fav.imdbID === movie.imdbID)
  if(val){
    setPre(true);
  }else{
    setPre(false)
  }
  },[favourites,pre])
  
  
  

  const deleteMovie = (id) =>{
   dispatch( removeFromFav(id));
  }

  return (
    <div className="card my-3 hoverCard">
      <Link className="" to={`/movie/${movie.imdbID}`}>
        {" "}
        <img
          className="card-img-top imgHeight"
          src={movie.Poster}
          alt={movie.Title}
        />{" "}
      </Link>
      <div className="card-body d-flex justify-content-around align-items-center">
        <Link to={`/movie/${movie.imdbID}`} className="btn btn-dark">
          Explore
        </Link>
        {
          pre ? <Button variant="danger" onClick={() => deleteMovie(movie.imdbID)}><i class="fa-solid fa-trash-can"></i></Button> : <Button variant="warning" onClick={() => addToFavourites(movie)}>
             <i className="fa-regular fa-heart"></i></Button>
        }
      </div>
    </div>
  );
};

export default Moviecard;

// if(fav.imdbID == movie.imdbID )
//             {
//               return <Button variant="danger" onClick={() => deleteMovie(movie.imdbID)}>
//               <i class="fa-solid fa-trash-can"></i>
//               </Button>
//             }else{
//               return <Button variant="warning" onClick={() => addToFavourites(movie)}>
//         <i className="fa-regular fa-heart"></i>
//         </Button>
//             }