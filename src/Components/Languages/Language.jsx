import React from 'react';
// import PropTypes from 'prop-types';

// Has to make conditional statement for C++ language to has its letter name
// Create a text of user's repo language used

const Language = ({ language }) => (
  <p className="lang-box">
    <span
      className={`lang-item ${
        language === 'C++' || language === null
          ? 'cplus'
          : language.toLowerCase()
      }`}
    ></span>{' '}
    {language}
  </p>
);

export default Language;
