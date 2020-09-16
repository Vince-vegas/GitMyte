import React from 'react';

const ChevronD = ({ showSort }) => (
  <React.Fragment>
    <svg
      className={`${
        showSort ? 'repos-icon chevron-d rotate-up' : 'repos-icon chevron-d'
      }`}
      viewBox="0 0 12 16"
    >
      <path fillRule="evenodd" d="M0 5l6 6 6-6H0z"></path>
    </svg>
  </React.Fragment>
);
export default ChevronD;
