import React from 'react';
import { useForm } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('user data: ', data);
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
      <Button>Login</Button>
    </form>
  );
}

export default Login;
