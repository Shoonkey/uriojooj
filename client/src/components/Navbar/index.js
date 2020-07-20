import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Button from '../Button';
import Icon from '../Icon';
import Overlay from '../Overlay';
import { UserContext } from '../UserProvider';
import { Container } from './styles';

function Navbar() {

  const { user, setUser } = useContext(UserContext);
  const [dropdown, setDropdown] = useState(null);

  return (
    <Container>
      <Link to="/" className="logo">URI</Link>
      {
        user ? (
          <div className="profile">
            { dropdown && <Overlay bgColor="transparent" onClick={() => setDropdown(null)} /> }
            <Button 
              theme="discreet" 
              onClick={() => setDropdown(dropdown === "nav" ? null : "nav")}
              aria-controls="nav-dropdown"
              aria-expanded={dropdown === "nav"}
              className="nav-btn"
            >
              <Icon name="grid" />
            </Button>
            <div id="nav-dropdown" className={clsx("dropdown", dropdown === "nav" && "visible")}>
              <Button theme="discreet" to="/news">
                <Icon name="newspaper-outline" />
                News
              </Button>
              <Button theme="discreet" to="/contests">
                <Icon name="game-controller-outline" />
                Contests
              </Button>
              <Button theme="discreet" to="/problems">
                <Icon name="code-slash-outline" />
                Problems
              </Button>
            </div>
            <Button 
              theme="discreet" 
              onClick={() => setDropdown(dropdown === "user" ? null : "user")}
              className="user-btn"
              aria-controls="user-dropdown"
              aria-expanded={dropdown === "user"}
            >
              <div className="circle"></div>
            </Button>
            <div id="user-dropdown" className={clsx("dropdown", dropdown === "user" && "visible")}>
              <Button theme="discreet" to="/profile">Your profile</Button>
              <Button theme="discreet" to="/profile/settings">Settings</Button>
              <Button theme="discreet" onClick={() => setUser(null)}>Log out</Button>
            </div>
          </div>
        ) : (
          <Button to="/auth?type=login">Log in</Button>
        )
      }
    </Container>
  );
}

export default Navbar;