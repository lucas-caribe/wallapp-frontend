import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import UserContext from '../../context/UserContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

function LogIn() {
  const { logIn } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ username, password }) => {
    const status = await logIn({ username, password });

    if (status) {
      navigate('/', { replace: true });
    } else {
      global.alert('Incorrect username or password');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="username"
        type="text"
        registerCallback={() =>
          register('username', { required: 'You must specify a username' })
        }
        error={errors.username}
      />
      <Input
        placeholder="password"
        type="password"
        registerCallback={() =>
          register('password', { required: 'You must specify a password' })
        }
        error={errors.password}
      />
      <Button>Log In</Button>
    </form>
  );
}

export default LogIn;
