import React, { Component } from 'react';
import Keypad from './Keypad.jsx';
import Board from './Board.jsx';
import Scoreboard from './Scoreboard.jsx';
import NextFrame from './NextFrame.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: Array(10).fill(1),
      shot: 1,
      frames: [],
      frame: {
        shot1: 0,
        shot2: 0,
        score: 0
      },
      currFrame: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(num) {
    let { frames, frame, currFrame, shot } = this.state;
    if (shot === 3) {
      this.handleReset();
      return;
    }
    if (num === 10 && shot === 1) {
      let newFrames = frames.slice();
      newFrames.push({ shot1: 10, shot2: '-', score: 10 });
      this.setState({
        pins: Array(10).fill(0),
        shot: 2,
        frames: newFrames
      });
    } else {
      let pins = this.state.pins.slice();
      let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let i = 0; i < 10 - num; i++) {
        var random = Math.floor(Math.random() * Math.floor(index.length));
        index.splice(random, 1);
      }
      let counter = num;
      while (counter > 0) {
        var random = Math.floor(Math.random() * Math.floor(index.length));
        let temp = index.splice(random, 1);
        pins[temp] = 0;
        counter--;
      }

      let shot2Pins = pins.filter(pin => {
        return pin === 0;
      }).length;

      let newFrame = Object.assign({}, frame);
      if (shot === 1) {
        newFrame.shot1 = num;
      } else {
        newFrame.shot2 = shot2Pins - newFrame.shot1;
      }

      if (currFrame === 0) {
        newFrame.score = newFrame.shot1 + newFrame.shot2;
      } else {
        newFrame.score =
          newFrame.shot1 + newFrame.shot2 + frames[currFrame - 1].score;
      }

      let newFrames = frames.slice();
      newFrames[currFrame] = newFrame;
      this.setState({
        pins: pins,
        shot: this.state.shot + 1,
        frames: newFrames,
        frame: newFrame
      });
    }
  }

  handleReset() {
    const { currFrame } = this.state;
    this.setState({
      shot: 1,
      currFrame: currFrame + 1,
      frame: {
        shot1: 0,
        shot2: 0,
        score: 0
      },
      pins: Array(10).fill(1)
    });
  }

  render() {
    return (
      <div>
        <Scoreboard />
        <Board pins={this.state.pins} />
        <Keypad handleClick={this.handleClick} />
        <NextFrame handleReset={this.handleReset} />
      </div>
    );
  }
}

export default App;
