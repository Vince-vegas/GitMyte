import React from 'react';
import BuildingIcon from '../../Icons/BuildingIcon';

const WorkInfo = ({ company }) => {
  return (
    <p>
      <BuildingIcon /> {company}
    </p>
  );
};

export default WorkInfo;
