import React from 'react';

import Spinner from '../Spinner';
import { ButtonContainer, LinkContainer } from './styles';

function Button({ type, to, onClick, theme, loading, children, ...props }) {

  const Container = to ? LinkContainer : ButtonContainer;
  const appliableProps = Object.assign(props, to ? { to } : { type, onClick });

  return (
    <Container theme={theme} {...appliableProps}>
      {loading ? <Spinner size={16} color="black" /> : children}
    </Container>
  );
}

Button.defaultProps = {
  type: "button",
  theme: "primary"
}

export default Button;