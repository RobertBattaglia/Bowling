import React, { Component } from 'react';

export default class Keypad extends Component {
  render() {
    return (
      <table>
        {[[1, 2, 3], [4, 5, 6], [7, 8, 9]].map(row => {
          return (
            <tr>
              {row.map(num => {
                return (
                  <td>
                    <button>{num}</button>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    );
  }
}

[[1, 2, 3], [4, 5, 6], [7, 8, 9], [' ', 0, ' ']];
