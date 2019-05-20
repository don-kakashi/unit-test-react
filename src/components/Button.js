import React from 'react';

export default ({location, handleClick}) =>
  <button onClick={handleClick} value={location}>{location || "All Locations"}</button> 