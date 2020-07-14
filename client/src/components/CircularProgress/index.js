import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Circle } from 'progressbar.js';

import { Container } from './styles';

function CircularProgress({ color, size, animationDuration, strokeWidth, progress }) {
  const id = "cp" + uuid();

  useEffect(() => {
    new Circle('#'+id, {
      color,
      strokeWidth,              // the progress indicator
      trailWidth: strokeWidth,  // the circle path
      text: { value: progress + "%" }
    }).animate(progress / 100, { duration: animationDuration });
  });

  return <Container id={id} style={{ width: size, height: size }} />;
}

CircularProgress.defaultProps = {
  color: "#efae13",
  size: 200,
  strokeWidth: 8,
  animationDuration: 500 // milliseconds of animation
}

export default CircularProgress;