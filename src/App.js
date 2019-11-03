import React from "react";
import { connect } from "react-redux";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { setRobots, requestRobots } from "./redux/robots/robots.actions";

import "./App.css";

class App extends React.Component {
  
  componentDidMount() {
    this.props.requestRobots();
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <h1>Robo Friends</h1>
          <SearchBox />
          <hr />
          <CardList />
        </div>
      </ErrorBoundary>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setRobots: robots => dispatch(setRobots(robots)),
  requestRobots: () => dispatch(requestRobots())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
