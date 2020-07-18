import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Circle } from 'progressbar.js';

import { Container } from './styles';

function CircularProgress({ color, size, animation, strokeWidth, progress }) {
  const id = "cp" + uuid();

  useEffect(() => {

    const { easing, duration } = animation;

    new Circle('#'+id, {
      color,
      strokeWidth,              // the progress indicator
      trailWidth: strokeWidth,  // the circle path
      text: { value: "" }
    }).animate(progress / 100, { 
      duration,
      easing,
      step(state, shape){
        const percentage = shape.value() * 100;
        const textContainer = document.querySelector(".progressbar-text");

        textContainer.innerText = percentage.toFixed(2) + "%";
      }
    });
  });

  return <Container id={id} style={{ width: size, height: size }} />;
}

CircularProgress.defaultProps = {
  color: "#efae13",
  size: 200,
  strokeWidth: 8,
  animation: {
    duration: 1400, // milliseconds of animation
    easing: "easeOut"
  }
}

export default CircularProgress;