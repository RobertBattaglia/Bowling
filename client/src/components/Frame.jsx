import React from 'react';

const Frame = ({ currFrame, num, active, frame }) => {
  return currFrame < num && !active ? (
    <React.Fragment>
      <table className="frame-inactive">
        <tbody>
          <tr>
            <td className="first-shot">{'-'}</td>
            {num === 10 ? (
              <React.Fragment>
                <td className="second-shot">{'-'}</td>
                <td className="second-shot">{'-'}</td>
              </React.Fragment>
            ) : (
              <td className="second-shot">{'-'}</td>
            )}
          </tr>
          <tr>
            <td className="score">{'-'}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <table className={active ? 'frame-active' : 'frame-inactive'}>
        <tbody>
          <tr>
            <td className="first-shot">
              {frame.shot1 === 10 ? 'X' : frame.shot1}
            </td>
            {num === 10 ? (
              <React.Fragment>
                <td className="second-shot">{frame.shot2}</td>
                <td className="second-shot">{frame.shot3}</td>
              </React.Fragment>
            ) : (
              <td className="second-shot">
                {frame.shot1 + frame.shot2 === 10 ? '/' : frame.shot2}
              </td>
            )}
          </tr>
          <tr>
            <td className="score">{frame.score || '-'}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Frame;
