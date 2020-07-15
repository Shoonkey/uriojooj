import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { UserContext } from '../../components/UserProvider';
import { defineAuthType } from '../../util/auth';
import { signup } from '../../services/api';

function SignupForm(){

  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const submitFn = e => {
    e.preventDefault();

    // Only activate btn loading animation if API call takes more than 300ms
    const timeout = setTimeout(() => setLoading(true), 300);

    signup({ name, nickname, email, password })
      .then(res => res.data)
      .then(data => {
        setUser(data);
        setTimeout(() => history.push("/dashboard"), 400);
      })
      .catch(console.error)
      .finally(() => {

        // Clears the btn loading animation timeout
        clearTimeout(timeout);

        if (loading)
          setLoading(false);
      });
  }

  return (
    <form onSubmit={submitFn}>
      <Input type="text" label="Name" value={name} onUpdate={setName} />
      <Input type="text" label="Nickname" value={nickname} onUpdate={setNickname} />
      <Input type="text" label="Email" value={email} onUpdate={setEmail} />
      <Input type="password" label="Password" value={password} onUpdate={setPassword} />
      <div className="btn-group">
        <Button type="submit" theme="primary" loading={loading}>Sign up</Button>
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
        or <Button type="button" theme="primary" onClick={() => defineAuthType("login")}>login</Button>
      </p>
    </form>
  );
}

export default SignupForm;