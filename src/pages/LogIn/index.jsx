import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { userLogin } from '../../helpers/wallApiHelpers';

import Input from '../../components/Input';
import Button from '../../components/Button';

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    const token = await userLogin({ username, password });

    if (token.error) {
      global.alert(token.error);
    } else {
      sessionStorage.username = username;
      sessionStorage.token = token;
      navigate('/', { replace: true });
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
