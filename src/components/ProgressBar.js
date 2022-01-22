import React from 'react';
import progress from '../progress-bar.png';

const ProgressBar = () => (
  <div className="d-flex justify-content-start align-items-center">
    <img src={progress} alt="Progress" className="img-fluid w-25" />
    <div>
      <p className="progress-percentage">10%</p>
      <p className="progress-status">Completed</p>
    </div>
  </div>
);

export default ProgressBar;
