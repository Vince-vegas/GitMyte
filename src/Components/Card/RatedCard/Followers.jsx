import React from 'react';

const Followers = ({ followers }) => (
  <div className="rate-item followers-item">
    <h4>{followers && followers.toLocaleString()}</h4>
            <p>Followers</p>

  </div>
);

export default Followers;
