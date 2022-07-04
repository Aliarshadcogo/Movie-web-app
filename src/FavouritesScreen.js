import React, { useEffect, useState } from "react";
import { Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./components/moviecard.css"
import {useDispatch, useSelector} from "react-redux"
import {removeFromFav} from "./actions/favActions"


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
      <h3>Your Favourites</h3>
      <div className="row">
      {movies && movies.length>0 ? movies.map(movie =><div className="col-md-3" key={movie.imdbID}>
      <div className="card my-3 hoverCard" >
      <Link className="" to={`/${movie.imdbID}`}>
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
        <i class="fa-solid fa-trash-can"></i>
        </Button>
      </div>
    </div>
      </div> )   : <div>You have nothing here </div>}
      </div>
    
    </div>
  );
};

export default FavouritesScreen;
