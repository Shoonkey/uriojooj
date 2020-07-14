import React from 'react';

import { ButtonContainer, LinkContainer } from './styles';

function Button({ type, to, onClick, theme, children, ...props }) {

  const Container = to ? LinkContainer : ButtonContainer;
  const appliableProps = Object.assign(props, to ? { to } : { type, onClick });

  return (
    <Container theme={theme} {...appliableProps}>
      {children}
    </Container>
  );
}

Button.defaultProps = {
  type: "button",
  theme: "primary"
}

export default Button;