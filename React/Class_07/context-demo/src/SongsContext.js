import React, { createContext, useState } from "react";

export const SongContext = createContext();

const SongContextProvider = props => {
  const [song, setSong] = useState({
    title: "Zosto li me ljudi izbegavaju",
    artist: "Unknown",
    duration: 156,
    rating: 1,
  });
  const [showSong, setShowSong] = useState(true);

  return (
    <SongContext.Provider value={{ song, setSong, showSong, setShowSong }}>
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContextProvider;
