import React, { useEffect, useState } from "react";
import { Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./components/moviecard.css"
import {useDispatch, useSelector} from "react-redux"
import {removeFromFav} from "./actions/favActions"
import image from "./movie.png"


const FavouritesScreen = () => {

  const favouriteList = useSelector(state => state.favouriteList)
  const {favourites} = favouriteList;
  const movies = favourites;

  const dispatch = useDispatch();

  const deleteMovie = (id) =>{
   dispatch( removeFromFav(id));
  }
  

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center">
        <h3>Your Favourites</h3>
        <Link to={`/`} className="btn btn-outline btn-dark"><i class="fa-solid fa-house"></i> Home</Link>
        </div>
      
      <div className="row">
      {movies && movies.length>0 ? movies.map(movie =><div className="col-md-3" key={movie.imdbID}>
      <div className="card my-3 hoverCard" >
      <Link className="" to={`/movie/${movie.imdbID}`}>
        {" "}
        <img
          className="card-img-top imgHeight"
          src={movie.Poster}
          alt={movie.name}
        />{" "}
      </Link>
      <div className="card-body d-flex justify-content-around align-items-center">
        <Link to={`/movie/${movie.imdbID}`} className="btn btn-dark">
          Explore
        </Link>
        <Button variant="danger" onClick={() => deleteMovie(movie.imdbID)}>
        <i className="fa-solid fa-trash-can"></i>
        </Button>
      </div>
    </div>
      </div> )   : <div className="d-flex justify-content-center align-items-center flex-column"><h5 className="text-dark mt-3">You have Nothing here. Go to Home</h5><img src={image} className="favImage"/></div>}
      </div>
    
    </div>
  );
};

export default FavouritesScreen;
