import { useContext, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import MoviesInList from "./components/MoviesInList";
import MoviesContext from "./contexts/MoviesContext";

function App() {
  const {
    movies,
    setMovies,
    displayMovies,
    favouriteMovies,
    onAddMoviesToList,
    setFavouriteMovies,
  } = useContext(MoviesContext);

  // const [movies, setMovies] = useState([]);
  // const [favouriteMovies, setFavouriteMovies] = useState([]);

  // const displayMovies = (movies) => {
  //   setMovies(movies);
  // };

  // const onAddMoviesToList = (id) => {
  //   const filteredMovie = movies.Search.filter((m) => m.imdbID === id);
  //   setFavouriteMovies((oldMovies) => [...oldMovies, filteredMovie]);
  // };
  return (
    <>
      <Navbar displayMovies={displayMovies} movies={movies} />
      {movies.totalResults > 0 ? (
        <Movies movies={movies} addMoviesToList={onAddMoviesToList} />
      ) : (
        <h2>Nema rezultata</h2>
      )}

      {favouriteMovies.length > 0 && (
        <MoviesInList
          favouriteMovies={favouriteMovies}
          setFavouriteMovies={setFavouriteMovies}
        />
      )}
    </>
  );
}

export default App;
