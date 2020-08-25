import React, { useState, useEffect } from "react";

const FriendComponent = props => {
  const [friend, setFriend] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${props.match.params.id}`)
      .then(res => res.json())
      .then(friend => setFriend(friend))
      .catch(e => console.log(e));
  }, [props.match.params.id]);

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
