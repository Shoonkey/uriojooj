import React from 'react';

import { Container } from './styles';

function Button({ type, onClick, theme, children, ...props }) {
  return (
    <Container type={type} onClick={onClick} theme={theme} {...props}>
      {children}
    </Container>
  );
}

Button.defaultProps = {
  type: "button",
  theme: "primary"
}

export default Button;