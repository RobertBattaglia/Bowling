import React, { Component } from 'react';
import Frame from './Frame.jsx';

export default class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { frames } = this.props;
    return (
      <div className="scoreboard">
        <table>
          <tbody>
            <tr>
              <td>
                1
                <Frame frame={frames[0]} />
              </td>
              <td>
                2
                <Frame frame={frames[1]} />
              </td>
              <td>
                3
                <Frame frame={frames[2]} />
              </td>
              <td>
                4
                <Frame frame={frames[3]} />
              </td>
              <td>
                5
                <Frame frame={frames[4]} />
              </td>
              <td>
                6
                <Frame frame={frames[5]} />
              </td>
              <td>
                7
                <Frame frame={frames[6]} />
              </td>
              <td>
                8
                <Frame frame={frames[7]} />
              </td>
              <td>
                9
                <Frame frame={frames[8]} />
              </td>
              <td>
                10
                <Frame num={10} frame={frames[9]} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
