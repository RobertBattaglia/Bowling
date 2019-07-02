import React from 'react';

const Frame = ({ num }) => {
  return (
    <React.Fragment>
      <table className="frame-inactive">
        <tbody>
          <tr>
            <td className="first-shot">{num}</td>
            {num === 10 ? (
              <React.Fragment>
                <td className="second-shot">{num}</td>
                <td className="second-shot">{num}</td>
              </React.Fragment>
            ) : (
              <td className="second-shot">{num}</td>
            )}
          </tr>
          <tr>
            <td className="score">{num}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Frame;
