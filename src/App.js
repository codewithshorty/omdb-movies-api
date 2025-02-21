import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import MoviesInList from "./components/MoviesInList";

function App() {
  const [movies, setMovies] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const displayMovies = (movies) => {
    setMovies(movies);
    // console.log(movies);
  };

  const onAddMoviesToList = (id) => {
    // console.log(id);
    // console.log(movies);
    const filteredMovie = movies.Search.filter((m) => m.imdbID === id);
    setFavouriteMovies((oldMovies) => [...oldMovies, filteredMovie]);
    // console.log(filteredMovie);
    // console.log(movieInList);
  };
  return (
    <>
      <Navbar displayMovies={displayMovies} />
      {movies.totalResults > 0 ? (
        <Movies movies={movies} addMoviesToList={onAddMoviesToList} />
      ) : (
        <h2>Nema rezultata</h2>
      )}

      {favouriteMovies.length > 0 && (
        <MoviesInList favouriteMovies={favouriteMovies} />
      )}
    </>
  );
}

export default App;
