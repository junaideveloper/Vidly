import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies,
  };

  handleDelete = () => {};

  render() {}
}

export default Movies;
