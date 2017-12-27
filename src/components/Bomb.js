// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super();

    this.state = {
     secondsLeft : props.initialCount
=======
    super(props);

    this.state = {
     secondsLeft : `${props.initialCount}`
>>>>>>> ce6fae0656f0feec2557b3bf2a1ad87066141e97
    }
  }

  render() {
<<<<<<< HEAD
     const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    return (

       <div>
       {message}
=======
    return (

       <div>
       if this.props.secondsLeft !=== 0
       <h1> ${this.props.secondsLeft} seconds left before I go boom!</h1>
       else {
         <h1> Boom!</h1>
       }
>>>>>>> ce6fae0656f0feec2557b3bf2a1ad87066141e97
      </div>
    )
  }
}

export default Bomb;
