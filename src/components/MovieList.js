import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
  CardGroup,
} from "semantic-ui-react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_KEY,
            },
          }
        );
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
        {movies.map((movie, index) => (
          <>
            {/* <CardGroup itemsPerRow={5}> */}
              <Card key={index}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <CardContent>
                  <CardHeader>{movie.title}</CardHeader>
                  <CardMeta>
                    <span className="date">{movie.release_date}</span>
                  </CardMeta>
                  <CardDescription>{movie.overview}</CardDescription>
                </CardContent>
                <CardContent extra>
                  <a>
                    
                  </a>
                </CardContent>
              </Card>
            {/* </CardGroup> */}
          </>
        ))}
    </div>
  );
};

export default MovieList;
