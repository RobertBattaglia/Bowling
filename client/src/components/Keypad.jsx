
import React, { Component } from 'react';

export default class Keypad extends Component {
  render() {
    return (
      <table>
        <tbody>
          {[[1, 2, 3], [4, 5, 6], [7, 8, 9]].map(row => {
            return (
              <tr key={row}>
                {row.map(num => {
                  return (
                    <td key={num}>
                      <button
                        onClick={e => {
                          this.props.handleClick(num);
                        }}
                      >
                        {num}
                      </button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            <td>
              <button
                onClick={e => {
                  this.props.handleClick(0);
                }}
              >
                0
              </button>
            </td>
            <td />
            <td>
              <button
                onClick={e => {
                  this.props.handleClick(10);
                }}
              >
                10
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}