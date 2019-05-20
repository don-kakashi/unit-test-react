import React from 'react';

export default ({imageName}) =>
  <img src={`images/${imageName || 'none.png'}`} alt={imageName || `no-map`}/>