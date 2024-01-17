import React from "react";
import MovieList from "../components/MovieList.js";
import { Container, Segment } from "semantic-ui-react";

const HomePage = () => {
  return (
    <Container>
      {/* Add a Navbar */}
      <Segment style={{ padding: '8em 0em' }} vertical>

      <h1>Welcome to Movie Explorer</h1>
      <MovieList />
      </Segment>
    </Container>
  );
};

export default HomePage;
