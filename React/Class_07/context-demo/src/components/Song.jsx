import React, { useContext } from "react";
import { SongContext } from "../SongsContext";

const Song = props => {
  // useContext is hook that accepts Context as parametar to retrieve all its data
  const { song, showSong, setShowSong, setSong } = useContext(SongContext);
  return (
    <div>
      <h1>{song.title}</h1>
      {showSong && (
        <div>
          <p>Artist: {song.artist}</p>
          <p>Duration: {song.duration}</p>
          <p>Rating: {song.rating}*</p>
        </div>
      )}

      <button onClick={() => setShowSong(!showSong)}>
        {" "}
        {showSong ? "Hide song" : "Show song"}
      </button>
    </div>
  );
};

export default Song;
