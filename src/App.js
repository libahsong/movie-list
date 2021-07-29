import axios from "axios";
import React from "react";
import Movie from "./Movie";
import "./App.css";
import "./Movie.css";

class App extends React.Component {
  state = { isLoading: true, movies: [] };
  getAxios = async (one) => {
    const res = await axios.get(
      `http://www.omdbapi.com/?t=${one}&apikey=42979a8e`
    );
    return res;
  };
  getMovie = async () => {
    const lists = [
      "It Happened One Night",
      "Modern Times",
      "Black Panther",
      "Citizen Kane",
      "The Wizard of Oz",
      "Parasite",
      "Avengers: Endgame",
      "Casablanca",
      "Knives Out",
      "Us",
      "Toy Story 4",
      "Lady Bird",
      "Mission: Impossible - Fallout",
      "BlacKkKlansman",
      "Get Out",
      "The Irishman",
      "The Godfather",
      "All About Eve",
      "Spider-Man: Into the Spider-Verse",
      "Mad Max: Fury Road",
    ];
    const movieInfo = await Promise.all(
      lists.map(async (one) => {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?t=${one}&plot=full&apikey=42979a8e`
        );
        data.Genre = data.Genre.split(",");
        return data;
      })
    );
    console.log(movieInfo);
    this.setState({ movies: movieInfo, isLoading: false });
  };

  // getMovie = async () => {
  //   const {
  //     data: {
  //       data: { movies },
  //     },
  //   } = await axios.get(
  //     "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
  //   );

  //   this.setState({ movies, isLoading: false });
  // };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading, movies } = this.state;
    console.log("state movies:", movies, isLoading);
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.imdbID}
                id={movie.imdbID}
                year={movie.Year}
                title={movie.Title}
                summary={movie.Plot}
                poster={movie.Poster}
                genres={movie.Genre}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
