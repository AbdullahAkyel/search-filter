import React, { useState } from "react";
import Data from "./data.json";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <h1 style={{fontFamily:'cursive'}}>Programlama Araçları</h1>
      <input
        className="inp"
        type="text"
        placeholder="   Filtrelemek istediğinizi girin"
        onChange={(e) => setSearch(e.target.value)}
      />

      {Data.filter((e) => {
        if (e.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
          return e;
        }
      }).map((e) => {
        return (
          <div className="data" key={e.id}>
            <h3 style={{textAlign:"center"}}>{e.title}</h3>
            <img src={e.image} alt={e.title} />
          </div>
        );
      })}
    </div>
  );
}
