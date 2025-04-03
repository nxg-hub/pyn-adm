import React from 'react';

const Button = ({ 
  text = 'Button', 
  onClick, 
  isLoading = false, 
  disabled = false, 
  type = 'button', 
  size = 'medium', 
  customStyles = '', 
  isRegistration = false, 
  isSuccess = false,
  isFailed = false,
  isPending = false,
}) => {
  
  const sizeClasses = {
    small: 'px-4 py-2 text-[#006181] text-sm bg-white border border-green-500 rounded',
    medium: 'px-6 py-3 text-[#006181] text-base bg-white border border-green-500 rounded',
    large: 'px-12 py-3 text-[#006181] text-lg bg-white border border-green-500 rounded',
  };
  
  const successClasses = {
    small: 'px-4 py-2 text-white text-sm bg-green-500 rounded',
    medium: 'px-6 py-3 text-white text-base bg-green-500 rounded',
    large: 'px-12 py-3 text-white text-lg bg-green-500 rounded', 
  };

  const failedClasses = {
    small: 'px-4 py-2 text-white text-sm bg-red-500 rounded',
    medium: 'px-6 py-3 text-white text-base bg-red-500 rounded',
    large: 'px-12 py-3 text-white text-lg bg-red-500 rounded', 
  };

  const pendingClasses = {
    small: 'px-4 py-2 text-[#006181] text-sm bg-white border border-yellow-500 rounded',
    medium: 'px-6 py-3 text-[#006181] text-base bg-white border border-yellow-500 rounded',
    large: 'px-12 py-3 text-[#006181] text-lg bg-white border border-yellow-500 rounded',
  };
  

  const registrationStyles = `text-[#006181] mt-5 xl:text-2xl text-2xl flex justify-center items-center rounded-md bg-yellow-400 px-6 py-3 font-bold xl:w-[120%] mx-auto w-[100%] !mb-12 xl:my-12 xl:mb-20 hover:cursor-pointer transition`;

  const commonStyles = 'font-bold hover:cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`
        ${isRegistration ? registrationStyles : 
          isSuccess ? `${successClasses[size]} ${commonStyles}` : 
          isFailed ? `${failedClasses[size]} ${commonStyles}` :
          isPending ? `${pendingClasses[size]} ${commonStyles}` :
          `${sizeClasses[size]} ${commonStyles}`
        } 
        ${customStyles}
      `}
    >
      {isLoading 
        ? (isRegistration ? 'Registering...' : isPending ? 'Pending...' : isFailed ? 'Failed...' : 'Loading...')
        : text}
    </button>
  );
};

export default Button;
