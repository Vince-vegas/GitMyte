import React from 'react';
import CalendarIcon from '../../Icons/CalendarIcon';

const JoinedInfo = ({ created_at }) => {
  return (
    <p>
      <CalendarIcon /> Joined: {created_at.slice(0, 10)}
    </p>
  );
};

export default JoinedInfo;
