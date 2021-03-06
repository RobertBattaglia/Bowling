module.exports = {
  handleStrike: (frames, currFrame) => {
    let newFrames = frames.slice();
    let totalScore = currFrame === 0 ? 10 : frames[currFrame - 1].score + 10
    newFrames[currFrame] = { shot1: 10, shot2: '-', shot3: '-', score: totalScore }
    return newFrames;
  },
  randomizePins: (pins, num) => {
    let newPins = pins.slice();
    let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //index represents what pins get knocked down -> splice out pins that don't get knocked down
    for (let i = 0; i < 10 - num; i++) {
      var random = Math.floor(Math.random() * Math.floor(index.length));
      index.splice(random, 1);
    }
    for (let ind of index) {
      newPins[ind] = 0;
    }
    return newPins;
  },
  calcShot2: (shot1, pins) => {
    return (
      pins.filter(pin => {
        return pin === 0;
      }).length - shot1
    );
  },
  handleShots: (frame, pins, shot, num) => {
    if (shot === 1) {
      frame.shot1 = num;
    } else {
      frame.shot2 =
        pins.filter(pin => {
          return pin === 0;
        }).length - frame.shot1;
    }
  },
  handleScore: (frames, frame, currFrame) => {
    if (currFrame === 0) {
      frame.score = frame.shot1 + frame.shot2;
    } else {
      frame.score = frame.shot1 + frame.shot2 + frames[currFrame - 1].score;
    }
  },
  handleNewFrames: (frames, currFrame, frame) => {
    let newFrames = frames.slice();
    newFrames[currFrame] = frame;
    return newFrames;
  },
  handleThirdShot: (frames, num) => {
    var newFrames = frames.slice()
    newFrames[9].shot3 = num
    newFrames[9].score = newFrames[9].score + num
    return newFrames;
  }
};
