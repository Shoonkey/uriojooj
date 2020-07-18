import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from '../../forms/Login';
import SignupForm from '../../forms/Signup';
import { defineAuthType } from '../../util/auth';
import { Container } from './styles';
import { UserContext } from '../../components/UserProvider';

function Auth() {

  const type = new URLSearchParams(window.location.search).get("type");
  const { user } = useContext(UserContext);

  if (user)
    return <Redirect to="/dashboard" />;

  let form;
  switch(type){
    case "login":
      form = <LoginForm />;
      break;
    case "signup":
      form = <SignupForm />;
      break;
    default:
      defineAuthType("login");
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