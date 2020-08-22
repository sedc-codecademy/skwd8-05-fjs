import React from "react";
import Counter from "./Counter";
import { logIn, logOut } from "./actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {!user.isLogged ? (
        <React.Fragment>
          <h1>You must Log In first! Click the button to log in :)</h1>
          <button onClick={() => dispatch(logIn())}>LOG IN</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Counter />
          <button onClick={() => dispatch(logOut())}>LOG OUT</button>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
