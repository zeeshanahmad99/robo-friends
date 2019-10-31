import React from "react";
import { connect } from "react-redux";

import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ robots, searchField }) => {
  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="card-list">
      {filteredRobots.map(robot => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  searchField: state.robots.searchField,
  robots: state.robots.robots
});

export default connect(mapStateToProps)(CardList);
