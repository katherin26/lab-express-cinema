import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Movies.css";

export default class Movies extends React.Component {
  state = { movies: [] };

  async componentDidMount() {
    const response = await axios.get("http://localhost:5001/movies");
    this.setState({
      movies: response.data.movies,
    });
  }

  render() {
    const movieList = this.state.movies.map((movie, index) => (
      <div className="movie" key={index}>
        <img src={movie.image} />
        <h5>{movie.title}</h5>
        <Link to={`/movie/${movie._id}`}>See More</Link>
      </div>
    ));
    return (
      <div className="movies-container">
        <h1>Ironhack Cinema</h1>
        <p>Click on the movie to check show times!</p>
        <div className="movie-list">{movieList}</div>
      </div>
    );
  }
}
