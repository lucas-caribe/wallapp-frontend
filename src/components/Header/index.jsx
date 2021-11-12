import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../../context/UserContext';

function Header() {
  const { logOut, username } = useContext(UserContext);

  const handleLogOut = () => {
    logOut();
  };

  const renderGuestNav = () => (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign Up</Link>
    </nav>
  );

  const renderUserNav = () => (
    <nav>
      <span>{username}</span>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </nav>
  );

  return (
    <header>
      <h1>WallApp</h1>
      {username ? renderUserNav() : renderGuestNav()}
    </header>
  );
}

export default Header;
