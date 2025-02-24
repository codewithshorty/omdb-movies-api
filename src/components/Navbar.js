import React, { useState } from "react";

const Navbar = ({ displayMovies, movies }) => {
  const [search, setSearch] = useState("");

  let pageNo = Math.ceil(movies.totalResults / 10);

  console.log(pageNo);

  const myAPI = 11087886;

  const searchTheMovie = () => {
    fetch(`http://www.omdbapi.com/?apikey=${myAPI}&s=${search}`)
      .then((res) => res.json())
      .then((resJson) => displayMovies(resJson))
      .catch((error) => console.log(error));
  };

  for (let index = 1; index <= pageNo; index++) {
    console.log(index);
  }

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
                  <div>
                    <div className="flex items-center justify-between border-t border-gray-200 bg-white sm:px-6">
                      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                          <nav
                            className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                            aria-label="Pagination"
                          >
                            <button
                              href="#"
                              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                              <span className="sr-only">Previous</span>
                              <svg
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </button>
                            {/* <button
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                1
              </button> */}

                            {Array.from({ length: pageNo }).map((_, index) => (
                              <button
                                href="#"
                                aria-current="page"
                                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                {index + 1}
                              </button>
                            ))}

                            {/* <button
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </button>
              <button
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </button>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                ...
              </span>
              <button
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                8
              </button>
              <button
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                9
              </button>
              <button
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                10
              </button> */}
                            <button
                              href="#"
                              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                              <span className="sr-only">Next</span>
                              <svg
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </button>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
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
