import React, { Component } from 'react';
import Keypad from './Keypad.jsx';
import Board from './Board.jsx';

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
        <Board pins={this.state.pins} />
        <Keypad />
      </div>
    );
  }
}

export default App;
