import React from "react";

const MoviesInList = ({ favouriteMovies, setFavouriteMovies }) => {
  const removeFromList = (item) => {
    const newFavourites = favouriteMovies.filter(
      (movie) => movie[0].imdbID !== item
    );
    setFavouriteMovies(newFavourites);
  };

  return (
    <div>
      <div>
        <div className="bg-black-500/75 py-10 sm:py-15 border-t-8 border-yellow-400 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-yellow-400 bg-stone-900 p-4 inline-block sm:text-5xl text-center">
              Favourite movies <i className="fa-regular fa-star"></i>
            </h2>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {favouriteMovies.map((movie, key) => (
                <article
                  key={key}
                  className="bg-yellow-500 flex max-w-xl flex-col items-start justify-between border-solid border-yellow-100 border-1 rounded-md p-4 shadow-xl shadow-yellow-500/100"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-black-500">
                      {movie[0].Year}
                    </time>
                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {movie[0].Type}
                    </div>
                  </div>
                  <div className="">
                    <img
                      src={movie[0].Poster}
                      alt={movie[0].Title}
                      className="pt-2 max-h-100 "
                    />
                  </div>
                  <div className="group relative">
                    <h2 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      {movie[0].Title}
                    </h2>

                    <button
                      className="bg-red-400 hover:bg-red-600 text-black font-semibold py-2 px-4 rounded inline-flex items-center mt-3"
                      onClick={() => removeFromList(movie[0].imdbID)}
                    >
                      <i className="fa-solid fa-heart-circle-minus text-2xl"></i>
                      &nbsp; Remove from list
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesInList;
