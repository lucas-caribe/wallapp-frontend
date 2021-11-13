import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import UserContext from './UserContext';

import { userLogout, userLogin } from '../helpers/wallApiHelpers';

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (sessionStorage.username) {
      setUsername(sessionStorage.username);
      setIsLoggedIn(true);
    }
  }, []);

  const logIn = async (userCredentials) => {
    setIsFetching(true);
    const status = await userLogin(userCredentials);
    setIsFetching(false);

    if (status) {
      setUsername(userCredentials.username);
      setIsLoggedIn(true);

      return true;
    }

    return false;
  };

  const logOut = () => {
    userLogout();
    setUsername(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, username, isFetching, logIn, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
