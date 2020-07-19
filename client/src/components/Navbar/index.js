import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon';
import Button from '../Button';
import { UserContext } from '../UserProvider';
import { Container } from './styles';

function Navbar() {

  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Container>
      <Link to="/" className="logo">URI</Link>
      {
        user ? (
          <div className="profile">
            <div className="circle"></div>
            <Button theme="discreet" onClick={toggleDropdown}>
              <Icon name="chevron-down-outline" />
            </Button>
            {
              dropdownOpen && (
                <div className="dropdown">
                  <Button theme="discreet" to="/profile">Your profile</Button>
                  <Button theme="discreet" to="/profile/settings">Settings</Button>
                  <Button theme="discreet" onClick={() => setUser(null)}>Log out</Button>
                </div>
              )
            }
          </div>
        ) : (
          <Button to="/auth?type=login">Log in</Button>
        )
      }
    </Container>
  );
}

export default Navbar;