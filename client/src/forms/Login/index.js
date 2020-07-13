import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { defineAuthType } from '../../util/auth';
import { login } from '../../services/api';

function LoginForm(){

  const [nicknameOrEmail, setNicknameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitFn = e => {
    e.preventDefault();
    login({ nicknameOrEmail, password })
      .then(res => res.data)
      .then(console.log)
      .catch(console.error);
  }

  return (
    <form onSubmit={submitFn}>
      <Input 
        type="text" 
        label="Nickname or email" 
        value={nicknameOrEmail} onUpdate={setNicknameOrEmail} 
      />
      <Input type="password" label="Password" value={password} onUpdate={setPassword} />
      <div className="btn-group">
        <Button type="submit" theme="primary">Log in</Button>
        <div className="social">
          <Button 
            onClick={() => console.log("Not implemented yet")}
            title="Log in with Google" 
          >
            <Icon name="logo-google" />
          </Button>
          <Button 
            onClick={() => console.log("Not implemented yet")}
            title="Log in with Facebook" 
          >
            <Icon name="logo-facebook" />
          </Button>
        </div>
      </div>
      <p className="extra">
        or <Button onClick={() => defineAuthType("signup")}>sign up</Button>
      </p>
    </form>
  );
}

export default LoginForm;