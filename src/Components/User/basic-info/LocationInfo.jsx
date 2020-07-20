import React from 'react';
import LocationIcon from '../../Icons/LocationIcon';

const LocationInfo = ({ location }) => (
  <p>
    <LocationIcon /> {location}
  </p>
);

export default LocationInfo;
