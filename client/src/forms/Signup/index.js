import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { defineAuthType } from '../../util/auth';
import { signup } from '../../services/api';

function SignupForm(){

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitFn = e => {
    e.preventDefault();
    signup({ name, nickname, email, password })
      .then(res => res.data)
      .then(console.log)
      .catch(console.error);
  }

  return (
    <form onSubmit={submitFn}>
      <Input type="text" label="Name" value={name} onUpdate={setName} />
      <Input type="text" label="Nickname" value={nickname} onUpdate={setNickname} />
      <Input type="text" label="Email" value={email} onUpdate={setEmail} />
      <Input type="password" label="Password" value={password} onUpdate={setPassword} />
      <Button type="submit" theme="primary">Sign up</Button>
      <p className="extra">
        or <Button type="button" theme="primary" onClick={() => defineAuthType("login")}>login</Button>
      </p>
    </form>
  );
}

export default SignupForm;