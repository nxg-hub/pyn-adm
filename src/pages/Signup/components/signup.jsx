import { ErrorMessage, Field, Form, Formik } from 'formik';
import logo from '../../../assets/images/logo.png'
import { SignUpSchema } from '../schema/schema';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (values) => {
    setIsLoading(true);
    // dispatch(showLoading()); // Show Loader


    const requestData = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password,
      confirmPassword: values.confirmPassword
    };
    setErrorMessage('');
    try {
      const response = await fetch(import.meta.env.VITE_REGISTER_ADMIN_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });


    const result = await response.json();

if (result.debugMessage === "User already exists") {
    setErrorMessage(`Failed to sign up: ${result.debugMessage}`);
  } else if (response.ok) {
    navigate("/");
  } else {
    const debugMessage = result.debugMessage || "An error occurred";
    setErrorMessage(`Failed to log in: ${debugMessage}`);
  }
} catch (error) {
  setErrorMessage(`Error signing up: ${error.message}`);
} finally {
  setIsLoading(false);
}
};


  return (
    <div className="md:w-[40%] mx-10 md:mx-auto md:py-10">
      <div className="text-center mt-10 xl:mt-0 text-white font-bold xl:text-4xl text-2xl py-10">
        Sign Up As An Admin
      </div>
      {/* <div className="hidden md:block absolute md:top-[-13.6rem] md:right-[1rem] xl:top-[-12.5rem] xl:right-[-38.5rem]">
        <img src={logo} alt="" />
      </div> */}
      <div className="bg-white flex flex-col justify-center items-start mx-auto py-6">
        <Formik
          initialValues={{ email: '', firstName: '', lastName: '' ,password: '', confirmPassword: '' }}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}>
          {() => (
            <Form className="w-full space-y-4">
              <div className="xl:py-16 p-4 pt-[2.2rem] xl:p-10 xl:pl-[5rem] xl:pr-40 xl:w-auto w-full m-auto xl:space-y-8 space-y-4 pb-2 xl:pb-6">
                <div className="text-[#006181] text-start font-bold xl:text-[32px] text-xl">
                  Sign Up
                </div>
                <div className="xl:w-[120%] flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-normal text-[#006181]">
                    Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full h-[3.4rem] border border-[#9ca3af] outline-none font-light text-base text-gray rounded-[5px] py-2 px-[10px]"
                  />
                  <ErrorMessage name="email" component="span" className="text-[#db3a3a]" />
                </div>
                <div className="xl:w-[120%] flex flex-col space-y-2">
                  <label htmlFor="firstName" className="text-sm font-normal text-[#006181]">
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full h-[3.4rem] border border-[#9ca3af] outline-none font-light text-base text-gray rounded-[5px] py-2 px-[10px]"
                  />
                  <ErrorMessage name="firstName" component="span" className="text-[#db3a3a]" />
                </div>
                <div className="xl:w-[120%] flex flex-col space-y-2">
                  <label htmlFor="lastName" className="text-sm font-normal text-[#006181]">
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full h-[3.4rem] border border-[#9ca3af] outline-none font-light text-base text-gray rounded-[5px] py-2 px-[10px]"
                  />
                  <ErrorMessage name="lastName" component="span" className="text-[#db3a3a]" />
                </div>
                <div className="xl:w-[120%] flex flex-col space-y-2 relative">
                  <label htmlFor="password" className="text-sm font-normal text-[#006181]">
                    Password
                  </label>
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    className="w-full h-[3.4rem] border border-[#9ca3af] outline-none font-light text-base text-gray rounded-[5px] py-2 px-[10px]"
                  />
                  <ErrorMessage name="password" component="span" className="text-[#db3a3a]" />
                  <div className="xl:w-[120%] flex flex-col space-y-2">
                  <label htmlFor="password2" className="text-sm font-normal text-[#006181]">
                    Confirm Password
                  </label>
                  <Field
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Re-enter Password"
                    className="w-full h-[3.4rem] border border-[#9ca3af] outline-none font-light text-base text-gray rounded-[5px] py-2 px-[10px]"
                  />
                  <ErrorMessage name="confirmPassword" component="span" className="text-[#db3a3a]" />
                </div>
                  {showPassword ? (
                    <BsEye onClick={handleShowPassword} className="absolute top-10 right-1" />
                  ) : (
                    <BsEyeSlash onClick={handleShowPassword} className="absolute top-10 right-1" />
                  )}
                </div>

                {errorMessage && <div className="text-[#db3a3a]">{errorMessage}</div>}
                <button
                  type="submit"
                  className=" text-[#006181] mt-5 xl:text-2xl text-2xl  flex justify-center item-center rounded-md bg-yellow-400 px-6 py-3 font-bold  xl:w-[120%] mx-auto w-[100%] !mb-12 xl:my-12 xl:mb-20 hover: cursor-pointer transition"
                  disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Sign Up'}
                </button>
              </div>
              <p className="text-center text-[#006181]">
                Already have an admin account?
                <Link to="/" className="px-2">
                  <a className="text-blue-600 underline">Log in</a>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
