import { useState, useEffect, ChangeEvent } from "react";

import "./App.css";

import CardList from "./components/card-list/card-list.component";
import Search from "./components/search/search.component";

import { getData } from "./utils/data.utils";

export type Monsters = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchMonsters = async () => {
      const monsters = await getData<Monsters[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(monsters);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
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
