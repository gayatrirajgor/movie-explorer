import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

const MoviePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Details</h1>
      <MovieDetails id={id} />
    </div>
  );
};

export default MoviePage;
