import React, { useState, useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import UserContext from '../../context/UserContext';

import logo from '../../assets/logo.svg';

import './style.css';

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { logOut, username } = useContext(UserContext);

  const hideNav = () => {
    setIsNavVisible(false);
  };

  const handleLogOut = async () => {
    await logOut();
    hideNav();
  };

  const renderGuestNav = () => (
    <nav className={isNavVisible ? 'visible' : ''}>
      <Link to="/login" onClick={hideNav}>
        LOGIN
      </Link>
      <Link to="/register" onClick={hideNav}>
        SIGN UP
      </Link>
    </nav>
  );

  const renderUserNav = () => (
    <nav className={isNavVisible ? 'visible' : ''}>
      <div className="user-section">
        <FaUser />
        <span>{username}</span>
      </div>
      <button className="logout-button" type="button" onClick={handleLogOut}>
        <FiLogOut className="logout-icon" />
        <span>Logout</span>
      </button>
    </nav>
  );

  return (
    <header>
      <div className="container">
        <GiHamburgerMenu
          className="toggle-menu"
          onClick={() => setIsNavVisible(!isNavVisible)}
        />
        <Link to="/" className="logo-section" onClick={hideNav}>
          <img src={logo} alt="Wall App" />
          <span>WallApp</span>
        </Link>
        {username ? renderUserNav() : renderGuestNav()}
      </div>
    </header>
  );
}

export default Header;
