import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Friend from "./Friend";

const Friends = props => {
  const [friends, setFriends] = useState([]);
  const [filteredFriends, setFilteredFriends] = useState([]);
  const [searchName, setSearchName] = useState("");
  const searchFriendRef = useRef();

  useEffect(() => {
    fetchFriends();
    searchFriendRef.current.focus();
    return () => {};
  }, []);

  const fetchFriends = async () => {
    const data = await fetch("https://swapi.dev/api/people");
    const result = await data.json();
    setFriends(result.results);
    setFilteredFriends(result.results);
  };
  const handleDeleteFriend = url => {
    const editedFriends = filteredFriends.filter(friend => friend.url !== url);
    setFilteredFriends(editedFriends);
  };

  const handleOnChangeSearchName = e => {
    setSearchName(e.target.value);
    const editedFriends = friends.filter(friend =>
      friend.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    if (e.target.value.length > 0) {
      setFilteredFriends(editedFriends);
    } else {
      setFilteredFriends(friends);
    }
  };

  const friendsStyle = {
    padding: "100px",
  };
  return (
    <div style={friendsStyle}>
      <div>
        <label>Search</label>
        <input
          type="text"
          ref={searchFriendRef}
          value={searchName}
          onChange={handleOnChangeSearchName}
          placeholder="Search by name"
        />
      </div>
      {filteredFriends.map((friend, index) => (
        <Friend {...friend} onDelete={handleDeleteFriend}>
          <Link to={`/friend/${index + 1}`}>
            <h1>{friend.name}</h1>
          </Link>
        </Friend>
      ))}
    </div>
  );
};

export default Friends;
