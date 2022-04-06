import { useState, useEffect } from "react";

import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import SetRadio from "./components/set-radio/set-radio.component";
import "./App.css";

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [imgSet, setImgSet] = useState({id:1,name:'Robot'});

  useEffect(() => {
    document.title = imgSet.name + " Rolodex";
  }, [imgSet]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onRadioChange = (event) => {
    switch(event.target.value) {
      case "1":
        setImgSet({id:1,name:'Robot'});
        break;
      case "2":
        setImgSet({id:2,name:'Monster'});
        break;
      case "4":
        setImgSet({id:4,name:'Meoww'});
        break;
      case "5":
        setImgSet({id:5,name:'Hooman'});
        break;
      default:
        setImgSet({id:1,name:'Robot'});
    }
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <SetRadio
        onRadioChangeHandler={onRadioChange}
        className="monster-radio"
      />
      <h1 className="app-title">{imgSet.name} Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={`Search ${imgSet.name}`}
        className="monster-search-box"
      />
      <Cardlist monsters={filteredMonsters} imgSet={imgSet.id} />
    </div>
  );
};

export default App;
