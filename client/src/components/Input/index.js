import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container } from './styles';

function Input({ id = uuid(), type, label, value, onUpdate }) {

  const [active, setActive] = useState(false);

  return (
    <Container className={active && "input-active"}>
      <input 
        id={id} 
        type={type} 
        value={value} 
        onChange={e => onUpdate(e.target.value)} 
        onFocus={() => setActive(true)}
        onBlur={() => !value && setActive(false)}
      /> 
      <label htmlFor={id}>{label}</label>
    </Container>
  );
}

Input.defaultProps = {
  type: "text",
  value: ""
}

export default Input;