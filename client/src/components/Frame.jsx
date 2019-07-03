import React from 'react';

const Frame = ({ frame, num }) => {
  return (
    <React.Fragment>
      <table className="frame-inactive">
        <tbody>
          <tr>
            <td className="first-shot">{frame.shot1}</td>
            {num === 10 ? (
              <React.Fragment>
                <td className="second-shot">{frame.shot2}</td>
                <td className="second-shot">{frame.shot2}</td>
              </React.Fragment>
            ) : (
              <td className="second-shot">{frame.shot2}</td>
            )}
          </tr>
          <tr>
            <td className="score">{frame.score}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Frame;
