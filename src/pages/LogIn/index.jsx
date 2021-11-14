import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUser, FaKey } from 'react-icons/fa';

import UserContext from '../../context/UserContext';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

function LogIn() {
  const { logIn, isFetching } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (sessionStorage.token) {
      navigate('/', { replace: true });
    }
  }, []);

  const onSubmit = async ({ username, password }) => {
    const status = await logIn({ username, password });

    if (status) {
      navigate('/', { replace: true });
    } else {
      global.alert('Incorrect username or password');
    }
  };

  return (
    <form className="login-register-form" onSubmit={handleSubmit(onSubmit)}>
      {isFetching && <Loading />}
      <h2>Log In</h2>
      <div className="login-register-inputs">
        <Input
          placeholder="username"
          type="text"
          registerCallback={() =>
            register('username', { required: 'You must specify a username' })
          }
          error={errors.username}
          icon={FaUser}
        />
        <Input
          placeholder="password"
          type="password"
          registerCallback={() =>
            register('password', { required: 'You must specify a password' })
          }
          error={errors.password}
          icon={FaKey}
        />
      </div>
      <Button>Log In</Button>
    </form>
  );
}

export default LogIn;
