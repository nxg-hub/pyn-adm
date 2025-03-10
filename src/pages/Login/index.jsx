// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from './components/ui/logo';
import LoginForm from './components/form';

const Login = () => {
  return (
    <div className="bg-black h-screen overflow-x-hidden">
      <Logo />
      <LoginForm />
    </div>
  );
};

export default Login;
