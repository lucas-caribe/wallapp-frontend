/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button';

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="username"
        {...register('username', { required: true })}
      />
      {errors.username && <span>You must specify a username</span>}

      <input
        type="email"
        placeholder="email@example.com"
        {...register('email', { required: true })}
      />
      {errors.email && <span>You must specify an email</span>}

      <input
        type="password"
        placeholder="password"
        {...register('password1', { required: true })}
      />
      {errors.password1 && <span>You must specify a password</span>}

      <input
        type="password"
        placeholder="password confirmation"
        {...register('password2', {
          validate: (value) => value === getValues('password1'),
        })}
      />
      {errors.password2 && <span>Passwords do not match</span>}

      <Button>Sign Up</Button>
    </form>
  );
}

export default Register;
