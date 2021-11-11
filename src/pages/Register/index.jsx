/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Input from '../../components/Input';

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('user data: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="username"
        registerCallback={() =>
          register('username', { required: 'You must specify a username' })
        }
        error={errors.username}
      />

      <Input
        type="email"
        placeholder="email@example.com"
        registerCallback={() =>
          register('email', { required: 'You must specify an email' })
        }
        error={errors.email}
      />

      <Input
        type="password"
        placeholder="password"
        registerCallback={() =>
          register('password1', { required: 'You must specify a password' })
        }
        error={errors.password1}
      />

      <Input
        type="password"
        placeholder="password confirmation"
        registerCallback={() =>
          register('password2', {
            validate: (value) =>
              value === getValues('password1') || 'Passwords do not match',
          })
        }
        error={errors.password2}
      />

      <Button>Sign Up</Button>
    </form>
  );
}

export default Register;
