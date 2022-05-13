import { Component } from "react";
import "./App.css";
import { getMonsterList } from "./components/Api";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    // Initial State Declaration : must declare inside constructor
    this.state = {
      monsters: [],
      searchValue: "",
    };
  }

  async componentDidMount() {
    const monsterList = await getMonsterList();
    this.setState(() => {
      return {
        monsters: monsterList,
      };
    });
  }
  // Functions for Handling State : outside of render
  onSearchChange = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    this.setState((e) => {
      return { searchValue: searchString };
    });
  };

  render() {
    // Destructured States Variables
    const { monsters, searchValue } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchValue);
    });

    return (
      <div>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monster-search-box"
          placeholder="search monster"
          onChangeHandler={onSearchChange}
        />
        <CardList monsterList={filteredMonsters} />
      </div>
    );
  }
}

export default App;
