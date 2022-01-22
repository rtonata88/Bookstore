import React from 'react';
import progress from '../progress-bar.png';

const ProgressBar = () => {
  return (
    <div className='d-flex justify-content-start align-items-center'>
      <img src={progress} alt='Progress' className='img-fluid w-25' />
      <div>
        <p className='display-6'>10%</p>
        <p>Completed</p>
      </div>
    </div>
  );
};

export default ProgressBar;
