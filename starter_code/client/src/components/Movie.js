import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Movie.css";

export default class Movie extends React.Component {
  state = { movie: {} };

  async componentDidMount() {
    const response = await axios.get(
      `http://localhost:5001/movies/${this.props.match.params.id}`
    );

    this.setState({
      movie: response.data.movie,
    });
  }

  render() {
    return (
      <div className="movie-container">
        <img src={this.state.movie.image} />
        <div className="movie-details">
          <Link to="/movies">Go back</Link>
          <h3>{this.state.movie.title}</h3>
          <h4>Director: {this.state.movie.director}</h4>
          <ul>
            {this.state.movie.stars
              ? this.state.movie.stars.map((star, index) => (
                  <li key={index}>{star}</li>
                ))
              : ""}
          </ul>
          <p>{this.state.movie.description}</p>
          <p>
            {this.state.movie.showtimes
              ? this.state.movie.showtimes.join(" | ")
              : ""}
          </p>
        </div>
      </div>
    );
  }
}
