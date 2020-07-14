import React from 'react';

import { Container } from './styles';

// Original SVG by Fabio Ottaviani (@supahfunk) (https://codepen.io/supah/pen/BjYLdW)
function Spinner({ size, color, duration }) {
  return (
    <Container 
      viewBox={`0 0 50 50`}
      size={size} color={color} duration={duration}
    >
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </Container>
  );
}

Spinner.defaultProps = {
  color: "#fff",
  size: 38,
  duration: 1
}

export default Spinner;