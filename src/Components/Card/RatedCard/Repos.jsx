import React from 'react';

const Repos = ({ public_repos }) => (
  <div className="rate-item repo-item">
    <h4>{public_repos}</h4>
    <p>Repositories</p>
  </div>
);
export default Repos;
