import React, { Component } from 'react';
import Frame from './Frame.jsx';

export default class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard">
        <table>
          <tbody>
            <tr>
              <td>
                1
                <Frame num={1} />
              </td>
              <td>
                2
                <Frame num={2} />
              </td>
              <td>
                3
                <Frame num={3} />
              </td>
              <td>
                4
                <Frame num={4} />
              </td>
              <td>
                5
                <Frame num={5} />
              </td>
              <td>
                6
                <Frame num={6} />
              </td>
              <td>
                7
                <Frame num={7} />
              </td>
              <td>
                8
                <Frame num={8} />
              </td>
              <td>
                9
                <Frame num={9} />
              </td>
              <td>
                10
                <Frame num={10} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
