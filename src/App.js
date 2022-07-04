import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import MovieListScreen from './MovieListScreen';
import MovieScreen from './MovieScreen';
import FavouritesScreen from './FavouritesScreen';


function App() {
  
  
  return (
    <Router className="App">
      <Header />
      <main className='py-3'>
        <Routes>
        <Route path="/movie/:id" element={<MovieScreen/>} exact/>
        <Route path="/favourites" element={<FavouritesScreen/>}exact/>
        <Route path="/" element={<MovieListScreen/>} exact/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
