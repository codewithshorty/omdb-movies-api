import React from "react";

const Movies = ({ movies, addMoviesToList }) => {
  // console.log(movies);

  return (
    <div>
      <div className="bg-black-500/75 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-yellow-400 sm:text-5xl">
              Searched Movie term results:
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {movies.Search.map((movie) => (
              <article
                key={movie.imdbID}
                className="flex max-w-xl flex-col items-start justify-between border-solid border-gray-100 border-1 rounded-md p-4 shadow-xl shadow-yellow-500/100 bg-yellow-500"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-black-500">
                    {movie.Year}
                  </time>
                  <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {movie.Type}
                  </div>
                </div>
                <div className="">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="pt-2 max-h-100 "
                  />
                </div>
                <div className="group relative">
                  <h2 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    {movie.Title}
                  </h2>

                  <button
                    className="bg-yellow-300 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded inline-flex items-center mt-3"
                    onClick={() => addMoviesToList(movie.imdbID)}
                  >
                    <i class="fa-solid fa-heart-circle-plus text-2xl"></i>&nbsp;
                    Add to list
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
