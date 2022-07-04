import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Moviecard from './Moviecard'
import "./moviecard.css"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"
 

function Movielist({movies,addToFavourites}) {
  const favouriteList = useSelector(state => state.favouriteList)
  const {favourites} = favouriteList;


  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center'>
      <h4>MOVIE LIST</h4>
      <div className='d-flex align-items-center justify-content-between'>
      <Link to={`/favourites`} className="btn btn-primary" >Go To Liked Movies ({favourites ? favourites.length : 0 })</Link> 
      
      </div>
      
      </div>
      
         <div className='row'>
        
        {movies.map((movie) => 
        <div className='col-md-3' key={movie.imdbID}>
             <Moviecard  movie={movie} addToFavourites={addToFavourites} />
        </div>
        )}
      
    </div>
    </div>
   
  )
}

export default Movielist