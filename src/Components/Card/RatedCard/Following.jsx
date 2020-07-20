import React from 'react';

const Following = ({ following }) => (
  <div className="rate-item following-item">
    <h4>{following && following.toLocaleString()}</h4>
    <p>Following</p>
  </div>
);

export default Following;
