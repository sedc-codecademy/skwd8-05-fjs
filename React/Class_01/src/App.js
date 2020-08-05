import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title.jsx";
import Description from "./Description.jsx";

function App() {
  const fullName = "Goce Kabov";
  return (
    <div className="App">
      <Title title="TITLE FROM PARENT APP" />
      <Description description="This is some description" />
    </div>
  );
}

export default App;
