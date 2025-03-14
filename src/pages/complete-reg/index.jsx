// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../Login/components/ui/logo';
import CompleteRegForm from './components/complete-regForm';

const CompleteReg = () => {
  return (
    <div className="bg-black h-screen overflow-x-hidden">
      <Logo />
      <CompleteRegForm />
    </div>
  );
};

export default CompleteReg;
