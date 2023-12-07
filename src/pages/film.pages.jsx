import React, { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";
import "./style.css"
export default function FilmsPage() {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    // Fetch Studio Ghibli films
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }, []);

  const filmsByDirector = filterFilmsByDirector(list, searchDirector);
  const directors = getListOf(list, "director");

  return (
    <div className="FilmPages">
      <h1>Studio Ghibli Films</h1>

      {/* Form for filtering by director */}
      <form>
        <div className="form-group">
          <label htmlFor="directorSelect">Filter by Director:</label>
          <select
            id="directorSelect"
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value="">All</option>
            {directors.map((director) => (
              <option key={director} value={director}>
                {director}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* List of films */}
      <ul>
        {filmsByDirector.map((film) => (
          <li key={film.id} className="MovieList">
            <strong>Title:</strong> {film.title}, <strong>Director:</strong> {film.director}
          </li>
        ))}
      </ul>

      {/* Display list of unique directors (for debugging purposes) */}
      <div>
        <strong>Unique Directors:</strong>{" "}
        {directors.map((director) => (
          <span key={director}>{director} </span>
        ))}
      </div>
    </div>
  );
}







