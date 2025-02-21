import { createContext, useState } from "react";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const displayMovies = (movies) => {
    setMovies(movies);
  };

  const onAddMoviesToList = (id) => {
    const filteredMovie = movies.Search.filter((m) => m.imdbID === id);
    setFavouriteMovies((oldMovies) => [...oldMovies, filteredMovie]);
  };
  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        displayMovies,
        favouriteMovies,
        onAddMoviesToList,
        setFavouriteMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
