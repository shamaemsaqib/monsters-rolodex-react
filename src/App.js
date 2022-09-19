import React, { useState, useEffect } from "react";

import "./App.css";

import CardList from "./components/card-list/card-list.component";
import Search from "./components/search/search.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="title">Monsters Rolodex</h1>
      <Search placeholder="Search monsters" handleChange={handleChange} />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;
