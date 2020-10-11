import React from 'react';
import { onDetectColor } from './LangColors';

// Create a text of user's repo language used
const Language = ({ language }) => (
  <p className="lang-box">
    <span className="lang-item" style={{ backgroundColor: `${onDetectColor(language)}` }}></span>{' '}
    {language}
  </p>
);

export default Language;
