import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import UserContext from '../../context/UserContext';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

import './style.css';

function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { isFetching, register: userRegister } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.token) {
      navigate('/', { replace: true });
    }
  }, []);

  const onSubmit = async (data) => {
    const status = await userRegister(data);

    if (status) {
      navigate('/', { replace: true });
    } else {
      global.alert('Username or email already exists!');
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      {isFetching && <Loading />}
      <h2>Sign Up</h2>
      <div className="register-inputs">
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
      </div>
      <Button>Sign Up</Button>
    </form>
  );
}

export default Register;
