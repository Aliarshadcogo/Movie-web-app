import {FAV_ADD_ITEM,FAV_REMOVE_ITEM} from "../constants/favConstants"

export const addToFav = (movie) => async (dispatch, getState) => {
    
  
    dispatch({
      type: FAV_ADD_ITEM,
      payload: movie
    });
  
    localStorage.setItem('favourites', JSON.stringify(getState().favouriteList.favourites));
  };
  
  export const removeFromFav = (id) => (dispatch, getState) => {
    dispatch({
      type: FAV_REMOVE_ITEM,
      payload: id,
    });
    localStorage.setItem('favourites', JSON.stringify(getState().favouriteList.favourites));
};