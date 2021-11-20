import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import UserContext from './UserContext';

import { userLogout, userLogin, userRegister } from '../helpers/wallApiHelpers';

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
    const { status, message } = await userLogin(userCredentials);
    setIsFetching(false);

    if (status === 200) {
      setUsername(userCredentials.username);
      setIsLoggedIn(true);

      return '';
    }

    return message;
  };

  const logOut = () => {
    userLogout();
    setUsername(null);
    setIsLoggedIn(false);
  };

  const register = async (userData) => {
    setIsFetching(true);
    const { status, message } = await userRegister(userData);
    setIsFetching(false);

    if (status === 201) {
      setUsername(userData.username);
      setIsLoggedIn(true);

      return '';
    }

    return message;
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, username, isFetching, logIn, logOut, register }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
