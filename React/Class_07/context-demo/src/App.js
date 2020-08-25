import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import MoviesContextProvider from "./MoviesContext";
import SongContextProvider from "./SongsContext";
import Song from "./components/Song";
import "./App.css";

function App() {
  // const [context, setContext] = useState({
  //   movies: [
  //     {
  //       title: "Titanic",
  //       rating: 3,
  //       duration: 126,
  //     },
  //     {
  //       title: "Avengers",
  //       rating: 4,
  //       duration: 180,
  //     },
  //   ],
  //   title: "MOVIE TITLE:",
  // });
  return (
    <div className="App">
      {/* <MoviesContextProvider retrievedValues={context}>
        <MoviesList something="something" />
      </MoviesContextProvider> */}
      <SongContextProvider>
        <Song />
      </SongContextProvider>
    </div>
  );
}

export default App;
