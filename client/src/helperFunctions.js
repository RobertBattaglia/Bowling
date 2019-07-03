module.exports = {
  handleStrike: frames => {
    let newFrames = frames.slice();
    newFrames.push({ shot1: 10, shot2: '-', score: 10 });
    return newFrames;
  },
  randomizePins: (pins, num) => {
    let newPins = pins.slice();
    let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 10 - num; i++) {
      var random = Math.floor(Math.random() * Math.floor(index.length));
      index.splice(random, 1);
    }
    let counter = num;
    while (counter > 0) {
      var random = Math.floor(Math.random() * Math.floor(index.length));
      let temp = index.splice(random, 1);
      newPins[temp] = 0;
      counter--;
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
  }
};
