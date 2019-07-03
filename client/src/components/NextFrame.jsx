import React, { Component } from 'react';

export default class NextFrame extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleReset();
  }

  render() {
    return (
      <React.Fragment>
        <button className="next-frame" onClick={this.handleClick}>
          {this.props.newGame ? 'New Game' : 'Next Frame'}
        </button>
      </React.Fragment>
    );
  }
}
