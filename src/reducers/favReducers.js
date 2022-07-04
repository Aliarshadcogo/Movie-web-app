import {FAV_ADD_ITEM,FAV_REMOVE_ITEM} from "../constants/favConstants"

export const favReducer = (state = {favourites: []},action) => {
switch(action.type){
    case FAV_ADD_ITEM :
        const item = action.payload;
        const existItem = state.favourites.find((x) => x.imdbID === item.imdbID);
        if(existItem){
            return {
              ...state,
              favourites: state.favourites.map((x) =>
                x.imdbID === existItem.imdbID ? item : x
              ),
            };
          } else {
            return {
              ...state,
              favourites: [...state.favourites, item],
            };
          }

    case FAV_REMOVE_ITEM : 
          return {
            ...state,
            favourites: state.favourites.filter((x) => x.imdbID !== action.payload),
          };

    default:
        return state;

}

}