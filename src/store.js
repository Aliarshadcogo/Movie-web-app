import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { favReducer } from './reducers/favReducers';

const reducer = combineReducers({
favouriteList : favReducer
})


const favouritesFromStorage = localStorage.getItem('favourites')
  ? JSON.parse(localStorage.getItem('favourites'))
  : [];

const middleware = [thunk];

const initialState = {
    favouriteList: {
      favourites: favouritesFromStorage,

    },
  };

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;