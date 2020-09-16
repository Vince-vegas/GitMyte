import React from 'react';
import { Link } from 'react-router-dom';

const NoSearches = () => {
  return (
    <div className="w-100" style={{ textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>No Search Results</h1>
      <Link to="/" className="btn">
        Homepage
      </Link>
    </div>
  );
};

export default NoSearches;
