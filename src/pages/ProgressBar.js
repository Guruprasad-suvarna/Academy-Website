

import React from 'react';

import "./ProgressBar.css"


const ProgressBar = ({ currentProgress, totalItems }) => {
  return (
    <div className="progress-bar-container">
     
      <div className="progress-bar" style={{ width: `${(currentProgress / totalItems) * 100}%` }}>
        {/* Display progress as "X out of Y completed" */}
        <div className="progress-bar-text"> {currentProgress} Out of {totalItems} Completed</div>
      </div>
    </div>
  );
};
 
export default ProgressBar;
