import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUser, FaKey } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import UserContext from '../../context/UserContext';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

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
    <form className="login-register-form" onSubmit={handleSubmit(onSubmit)}>
      {isFetching && <Loading />}
      <h2>Sign Up</h2>
      <div className="login-register-inputs">
        <Input
          type="text"
          placeholder="username"
          registerCallback={() =>
            register('username', { required: 'You must specify a username' })
          }
          error={errors.username}
          icon={FaUser}
        />

        <Input
          type="email"
          placeholder="email@example.com"
          registerCallback={() =>
            register('email', { required: 'You must specify an email' })
          }
          error={errors.email}
          icon={GrMail}
        />

        <Input
          type="password"
          placeholder="password"
          registerCallback={() =>
            register('password1', {
              required: 'You must specify a password',
              validate: (value) =>
                /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(value) ||
                'Password not strong enough',
            })
          }
          error={errors.password1}
          icon={FaKey}
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
          icon={FaKey}
        />
      </div>
      <Button>Sign Up</Button>
    </form>
  );
}

export default Register;
