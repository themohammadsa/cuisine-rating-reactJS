import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const DB = {
    Indian: [
      { name: "Mutton Biryani", rating: "4.8/5" },
      { name: "Butter Chicken", rating: "4.6/5" },
      { name: "Samosa", rating: "4.2/5" },
      { name: "Gulab Jamun", rating: "4/5" }
    ],
    Arabic: [
      { name: "Zaatar", rating: "4.5/5" },
      { name: "Labneh", rating: "4.8/5" },
      { name: "Hummus", rating: "4/5" },
      { name: "Kunafa", rating: "4.9/5" }
    ],
    Italian: [
      { name: "Pasta", rating: "4/5" },
      { name: "Pizza", rating: "4.8/5" },
      { name: "Sphagetti", rating: "4.5/5" },
      { name: "Lasagne", rating: "4.7/5" }
    ]
  };

  const [genre, setGenre] = useState("Indian");

  function clickHandler(genre) {
    setGenre(genre);
  }

  const genreDB = Object.keys(DB);

  return (
    <div className="App">
      <h1> 🍲 Food </h1>
      <p> These are my favourite foods. Click on the cuisines to view them. </p>
      <hr />
      <div>
        {genreDB.map((genre) => (
          <button onClick={() => clickHandler(genre)} className="button">
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div>
        <ul>
          {DB[genre].map((genre) => (
            <li className="list">
              <div style={{ fontSize: "1.1rem" }}> {genre.name} </div>
              <div style={{ fontWeight: "bold" }}> {genre.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
