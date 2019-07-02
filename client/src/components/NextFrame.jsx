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
        <button onClick={this.handleClick}>Next Frame</button>
      </React.Fragment>
    );
  }
}
