import React from 'react';

import { Container } from './styles';

function Overlay({ bgColor, children, ...props }) {
  return (
    <Container bgColor={bgColor} {...props}>
      {children}
    </Container>
  );
}

Overlay.defaultProps = {
  bgColor: "#000000aa"
}

export default Overlay;