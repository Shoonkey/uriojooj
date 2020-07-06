import React from 'react';

import Button from '../../components/Button';
import LoginForm from '../../forms/Login';
import SignupForm from '../../forms/Signup';
import { defineAuthType } from '../../util/auth';
import { Container } from './styles';

function Auth() {

  const type = new URLSearchParams(window.location.search).get("type");

  let form;
  switch(type){
    case "login":
      form = <LoginForm />;
      break;
    case "signup":
      form = <SignupForm />;
      break;
    default:
      form = (
        <div className="no-type-defined">
          <Button onClick={() => defineAuthType("login")}>Log in</Button>
          or
          <Button onClick={() => defineAuthType("signup")}>Sign up</Button>
        </div>
      );
  }

  return (
    <Container className="page">
      <div className="logo">
        <span className="highlighted">URI</span>
        <span>online</span>
        <span>jooj</span>
      </div>
      <div className="form-container">
        {form}
      </div>
    </Container>
  );
}

export default Auth;