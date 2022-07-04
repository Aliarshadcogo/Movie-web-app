import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Movielist from "./components/Movielist";
import { movies } from "./movies.js";
import {useDispatch} from "react-redux"
import {addToFav} from "./actions/favActions"

const MovieListScreen = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  

  const dispatch = useDispatch();
  

  useEffect(() => {
    const movie_list = localStorage.getItem("movies");
    
    
    if (movie_list) {
      setItems(JSON.parse(movie_list));
      
    } else {
      setItems(movies.Search);
      localStorage.setItem("movies", JSON.stringify(items));
    }

    

  }, []);


  const getMovies = async () => {
    const key = "cb992bd8";
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${key}&s=${search}`
    );

    const result = await response.json();

    if (response.ok) {
      setItems(result.Search);
      localStorage.setItem("movies", JSON.stringify(result.Search));
    } else {
      setErrorMessage(result.message);
    }
  };

  const searchMovie = (e) => {
    e.preventDefault();
    getMovies();
  };

  const addToFavourites =  (movie) => {
    dispatch(addToFav(movie)) 
  };
  return (
    <>
      <div className="container">
        <Form className="shadow-lg p-3 mb-5 bg-dark rounded d-flex" onSubmit={searchMovie}>
          <Form.Control
            type="text"
            placeholder="Search Movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </Form>
      </div>
      {items && items.length > 0 ? (
        <Movielist movies={items} addToFavourites={addToFavourites}/>
      ) : (
        <div>Search a movie from the search box</div>
      )}
    </>
  );
};

export default MovieListScreen;
