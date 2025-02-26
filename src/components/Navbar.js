import React, { useEffect, useState } from "react";

const Navbar = ({ displayMovies, movies }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let pageNo = Math.ceil(movies.totalResults / 10);

  let visiblePagination = pageNo > 0 && search !== "" ? true : false;

  const searchTheMovie = () => {
    fetch(`https://www.omdbapi.com/?apikey=${myAPI}&s=${search}&page=${page}`)
      .then((res) => res.json())
      .then((resJson) => displayMovies(resJson))
      .catch((error) => console.log(error));
  }; // Add dependencies here

  useEffect(() => {
    if (search) {
      searchTheMovie();
    }
  }, [page]);

  const previousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (page <= pageNo - 1) {
      setPage((next) => next + 1);
    }
  };

  const myAPI = 11087886;

  return (
    <>
      <nav className="bg-yellow-400">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Hamburger Menu Icon (Mobile) */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleMenu}
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Close Icon */}
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <i className="fa-solid fa-film text-2xl"></i>&nbsp;
                <h1 className="font-bold">OMDB API</h1>
              </div>
            </div>

            {/* Desktop Navigation (Hidden on Mobile) */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Search Bar */}
                <input
                  className="placeholder:text-gray-500 placeholder:italic rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search the movie here..."
                  type="text"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-500"
                  onClick={searchTheMovie}
                >
                  Search
                </button>

                {/* Pagination (Desktop) */}
                {visiblePagination && (
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                    aria-label="Pagination"
                  >
                    <button
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      onClick={previousPage}
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      {page}
                    </div>

                    <button
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      onClick={nextPage}
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </nav>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu (Collapsible) */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:hidden transition-all duration-300`}
            id="mobile-menu"
          >
            <div className="space-y-2 px-2 pb-3 pt-2">
              {/* Search Bar (Mobile) */}
              <input
                className="w-full placeholder:text-gray-500 placeholder:italic rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search the movie here..."
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="button"
                className="w-full inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-500"
                onClick={searchTheMovie}
              >
                Search
              </button>

              {/* Pagination (Mobile) */}
              {visiblePagination && (
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                  aria-label="Pagination"
                >
                  <button
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={previousPage}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {page}
                  </div>

                  <button
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={nextPage}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              )}
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
