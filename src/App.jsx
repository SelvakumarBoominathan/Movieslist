import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchvalue, setSearchValue] = useState("");

  return (
    <div classname="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
