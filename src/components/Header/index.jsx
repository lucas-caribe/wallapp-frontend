import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>WallApp</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </nav>
    </div>
  );
}

export default Header;
