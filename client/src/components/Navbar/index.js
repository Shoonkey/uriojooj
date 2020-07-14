import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon';
import Button from '../Button';
import { UserContext } from '../UserProvider';
import { Container } from './styles';

function Navbar() {

  const { user, setUser } = useContext(UserContext);

  return (
    <Container>
      <Link to="/" className="logo">URI</Link>
      {
        user ? (
          <div className="profile">
            <div className="circle"></div>
            <Icon name="chevron-down-outline" />
            <div className="dropdown"></div>
          </div>
        ) : (
          <Button to="/auth?type=login">Log in</Button>
        )
      }
    </Container>
  );
}

export default Navbar;