import React from 'react';
import Spin from './spin.gif';

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={Spin} alt="spin" />
    </div>
  );
};

export default Spinner;
