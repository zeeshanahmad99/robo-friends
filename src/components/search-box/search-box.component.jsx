import React from "react";
import {connect} from 'react-redux';

import {setSearchField} from '../../redux/robots/robots.actions';

import "./search-box.styles.css";

const SearchBox = ({ onSearchChange }) => (
  <input
    className="search-box"
    type="search"
    onChange={onSearchChange}
    placeholder="search robots"
  />
);

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value))
})

export default connect(null, mapDispatchToProps)(SearchBox);
