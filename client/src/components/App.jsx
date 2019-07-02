import React, { Component } from 'react';
import Keypad from './Keypad.jsx';
import Board from './Board.jsx';
import Scoreboard from './Scoreboard.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: Array(10).fill(1)
    };
  }
  render() {
    return (
      <div>
        <Scoreboard />
        <Board pins={this.state.pins} />
        <Keypad />
      </div>
    );
  }
}

export default App;
