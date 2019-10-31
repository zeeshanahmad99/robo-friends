import React from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchQuery: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(users => this.setState({ robots: users }))
      .catch(error => console.log(error));
  }

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { robots, searchQuery } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Robo Friends</h1>
        <SearchBox handleChange={this.handleChange} />
        <hr />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
