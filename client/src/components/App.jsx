import React, { Component } from 'react';
import Keypad from './Keypad.jsx';
import Board from './Board.jsx';
import Scoreboard from './Scoreboard.jsx';
import NextFrame from './NextFrame.jsx';
import helpers from '../helperFunctions.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: Array(10).fill(1),
      shot: 1,
      frames: Array(10).fill({ shot1: 0, shot2: 0, score: 0 }),
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
    let { frames, frame, currFrame, shot, pins } = this.state;
    if (shot === 3) {
      this.handleReset();
      return;
    }
    //if strike -> make all pins drop, set shot to 3, add strike frame to frame list
    if (num === 10 && shot === 1) {
      this.setState({
        pins: Array(10).fill(0),
        shot: 3,
        frames: helpers.handleStrike(frames, currFrame)
      });
    } else {
      //randomize the pins depending on number clicked
      let newPins = helpers.randomizePins(pins, num);

      let newFrame = Object.assign({}, frame);
      //add scoring per shot and score to new frame
      helpers.handleShots(newFrame, newPins, shot, num);
      helpers.handleScore(frames, newFrame, currFrame);

      //add newly created frame to list of new frames
      let newFrames = helpers.handleNewFrames(frames, currFrame, newFrame);

      //update frames, current frame, randomized pins, and increase shot by 1
      this.setState({
        pins: newPins,
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
        <Scoreboard
          currFrame={this.state.currFrame}
          frames={this.state.frames}
        />
        <Board pins={this.state.pins} />
        <Keypad handleClick={this.handleClick} handleReset={this.handleReset} />
        <NextFrame handleReset={this.handleReset} />
      </div>
    );
  }
}

export default App;
