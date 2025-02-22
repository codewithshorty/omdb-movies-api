import React, { useState } from "react";

const Navbar = ({ displayMovies }) => {
  const [search, setSearch] = useState("");

  const myAPI = 11087886;

  const searchTheMovie = () => {
    fetch(`http://www.omdbapi.com/?apikey=${myAPI}&s=${search}`)
      .then((res) => res.json())
      .then((resJson) => displayMovies(resJson))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <nav className="bg-yellow-400">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <i className="fa-solid fa-film text-2xl"></i>&nbsp;
                <h1 className="font-bold">OMDB API </h1>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <input
                    className="placeholder:text-gray-500 placeholder:italic ..."
                    placeholder="Search the movie here..."
                    type="text"
                    name="search"
                    value={search}
                    e
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span className="sm:ml-3">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-500"
                      onClick={() => searchTheMovie()}
                    >
                      Search
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto text-center p-6">
        <h1 className="text-3xl font-bold mt-4 text-orange-100">
          Welcome to OMDB API clone{" "}
        </h1>
        <h2 className="text-xl text-orange-100 mt-2">
          Keep searching for your favourite movie
        </h2>
      </div>
    </>
  );
};

export default Navbar;
