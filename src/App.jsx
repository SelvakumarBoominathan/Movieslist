import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./components/SearchBox.jsx";
import MovieListHeading from "./components/MovieListHeading.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
