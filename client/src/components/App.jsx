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
      frames: Array(10).fill({ shot1: 0, shot2: 0, shot3: 0, score: 0 }),
      frame: {
        shot1: 0,
        shot2: 0,
        score: 0
      },
      currFrame: 0,
      reset: false,
      newGame: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(num) {
    let { frames, frame, currFrame, shot, pins } = this.state;

    if (shot === 3 && frame.shot1 + frame.shot2 >= 10) {
      let newFrames = helpers.handleThirdShot(frames, num);
      let newPins = helpers.randomizePins(Array(10).fill(1), num);
      this.setState({
        frames: newFrames,
        pins: newPins,
        newGame: true,
        reset: true
      });
      return;
    }
    //if strike -> make all pins drop, set shot to 3, add strike frame to frame list
    if (num === 10 && shot === 1 && currFrame !== 9) {
      // let final = currFrame === 9 ? false : true
      this.setState({
        pins: Array(10).fill(0),
        shot: 2,
        frames: helpers.handleStrike(frames, currFrame),
        reset: true
      });
    } else {
      //randomize the pins depending on number clicked
      // if (currFrame === 9) {

      // }
      let newPins = helpers.randomizePins(pins, num);
      let newFrame = Object.assign({}, frame);
      //add scoring per shot and score to new frame
      helpers.handleShots(newFrame, newPins, shot, num);
      helpers.handleScore(frames, newFrame, currFrame);

      //add newly created frame to list of new frames
      let newFrames = helpers.handleNewFrames(frames, currFrame, newFrame);

      //update frames, current frame, randomized pins, and increase shot by 1
      this.setState(
        {
          pins: newPins,
          shot: this.state.shot + 1,
          frames: newFrames,
          frame: newFrame
        },
        () => {
          const { shot, currFrame, frame } = this.state;
          //only reset if third short before round 9 or if on third shot, score is less than 10 round 9
          let case1 = shot === 3 && currFrame !== 9;
          let case2 =
            shot === 3 && currFrame === 9 && frame.shot1 + frame.shot2 < 10;
          if (case1 || case2) {
            this.setState(
              {
                reset: true
              },
              () => {
                if (currFrame === 9) {
                  this.setState({ newGame: true });
                }
              }
            );
          }
        }
      );
    }
  }

  handleReset() {
    const { currFrame } = this.state;
    if (currFrame === 9) {
      this.setState({
        pins: Array(10).fill(1),
        shot: 1,
        frames: Array(10).fill({ shot1: 0, shot2: 0, shot3: 0, score: 0 }),
        frame: {
          shot1: 0,
          shot2: 0,
          shot3: 0,
          score: 0
        },
        newGame: false,
        currFrame: 0,
        reset: false
      });
    } else {
      this.setState({
        shot: 1,
        currFrame: currFrame + 1,
        frame: {
          shot1: 0,
          shot2: 0,
          shot3: 0,
          score: 0
        },
        reset: false,
        pins: Array(10).fill(1)
      });
    }
  }

  render() {
    return (
      <div>
        <Scoreboard
          currFrame={this.state.currFrame}
          frames={this.state.frames}
        />
        <Board pins={this.state.pins} />
        {this.state.reset ? (
          <NextFrame
            newGame={this.state.newGame}
            handleReset={this.handleReset}
          />
        ) : (
          <Keypad
            handleClick={this.handleClick}
            handleReset={this.handleReset}
          />
        )}
      </div>
    );
  }
}

export default App;
