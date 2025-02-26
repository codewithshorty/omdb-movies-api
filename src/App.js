import { useContext } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import MoviesInList from "./components/MoviesInList";
import MoviesContext from "./contexts/MoviesContext";

function App() {
  const {
    movies,
    displayMovies,
    favouriteMovies,
    onAddMoviesToList,
    setFavouriteMovies,
  } = useContext(MoviesContext);

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
