import React, { Component } from 'react';
import Frame from './Frame.jsx';

export default class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currFrame, frames } = this.props;
    return (
      <div className="scoreboard">
        <table>
          <tbody>
            <tr>
              {frames.map((frame, index) => {
                const num = index + 1;
                return index === currFrame ? (
                  <td key={index}>
                    {num}
                    <Frame
                      currFrame={currFrame}
                      num={num}
                      active={true}
                      frame={frame}
                    />
                  </td>
                ) : (
                  <td key={index}>
                    {num}
                    <Frame
                      currFrame={currFrame}
                      num={num}
                      active={false}
                      frame={frame}
                    />
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
