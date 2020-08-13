import React, { useState, useEffect } from "react";

const FriendComponent = props => {
  const [friend, setFriend] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${props.match.params.id}`)
      .then(res => res.json())
      .then(friend => setFriend(friend))
      .catch(e => console.log(e));
  }, [props.match.params.id]);

  // HOOKS

  // useState

  // giving a state to functional component
  // we are using useState for that imported from react which accepts initial value as parametar
  // useState returns a pair of values: current state and function that updates it
  //Example:
  // const [group, setGroup] = useState("G8")

  // useEffect

  // useEffect lets us express different kinds of side effects after a component renders
  // Example 1:

  //    useEffect(() => {
  //        ... do something
  //    }, [])

  // in this example useEffect is substitution for componentDidMount which will be called once right after component is rendered

  // Example 2:

  //    useEffect(() => {
  //        ... do something
  //    return () => {
  //          ... here we clean things like intervals, eventListeners etc..
  //    }
  //    }, [])

  // in this example useEffect is substituon for componentDidMount performing something right after rendering
  // the component and also componendWillUnmount where in return callback function we clean things

  // Example 3:
  //    useEffect(() => {
  //        ... do something
  //    }, [props.name])

  // in this example useEffect is substitution for componentDidUpdate which will be triggered right after
  // name (prop) will be changed

  // destructiring the properties from friend to not write this.state.friend.. everywhere
  const { height, name, mass, gender } = friend;
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <div>HEIGHT: {height}</div>
        <div>WEIGHT: {mass}</div>
        <div>GENDER: {gender}</div>
      </div>
    </div>
  );
};

// IMPLEMENTATION WITH CLASS COMPONENT

// class FriendComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       friend: {},
//     };
//   }

//   componentDidMount() {
//     this.fetchFriend();
//   }

//   fetchFriend = async () => {
//     const data = await fetch(
//       `https://swapi.dev/api/people/${this.props.match.params.id}`
//     );
//     const result = await data.json();
//     this.setState({
//       friend: result,
//     });
//   };

//   render() {
//     const { name, height, mass, gender } = this.state.friend;
//     return (
//       <div>
//         <h1>{name}</h1>
//         <div>
//           <div>HEIGHT: {height}</div>
//           <div>WEIGHT: {mass}</div>
//           <div>GENDER: {gender}</div>
//         </div>
//       </div>
//     );
//   }
// }

export default FriendComponent;
