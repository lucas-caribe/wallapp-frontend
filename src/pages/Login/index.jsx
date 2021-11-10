import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    global.alert('logged in');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Input
        placeholder="username"
        type="text"
        value={username}
        handleChange={({ target }) => setUsername(target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        value={password}
        handleChange={({ target }) => setPassword(target.value)}
      />
      <Button>Login</Button>
    </form>
  );
}

export default Login;
