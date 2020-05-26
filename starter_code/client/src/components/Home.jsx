import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div class="container">
        <div class="banner">
          <h1>Cinema </h1>
          <h1>Ironhack</h1>
          <Link to="/movies">Check the Movies</Link>
        </div>
      </div>
    );
  }
}
