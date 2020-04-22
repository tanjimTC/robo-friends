import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
      super()
    this.state = {
      robots: robots,
      SearchField: "",
    };
  }
  render() {
    return (
      <div className="tc">
        <h1>Robo Friends</h1>
        <SearchBox />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
