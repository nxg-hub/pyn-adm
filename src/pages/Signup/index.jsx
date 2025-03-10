// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../Login/components/ui/logo';
import SignUpForm from './components/signup';

const SignUp = () => {
  return (
    <div className="bg-black h-screen overflow-x-hidden">
      <Logo />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
