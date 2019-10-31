import React from "react";
import { connect } from "react-redux";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { setRobots } from "./redux/robots/robots.actions";

import "./App.css";

class App extends React.Component {
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(users => this.props.setRobots(users))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>Robo Friends</h1>
        <SearchBox />
        <hr />
        <CardList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setRobots: robots => dispatch(setRobots(robots))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
