import { ErrorMessage, Field, Form, Formik } from 'formik';
import logo from '../../../assets/images/logo.png';
import { LoginSchema } from '../schema/schema';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../Redux/UserSlice';
import { fetchCustomer } from "../../../Redux/CustomerSlice";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    const requestData = {
      email: values.email,
      password: values.password,
    };

    localStorage.setItem('email', values.email);
    setErrorMessage('');

    try {
      const response = await fetch(import.meta.env.VITE_LOGIN_ADMIN_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (response.ok) {
        const token = result?.data;
        if (token) {
          localStorage.setItem('token', token);
          dispatch(fetchUser(values.email));
          dispatch(fetchCustomer());
          navigate("/dashboard");
        }
      } else {
        const message = result.message;
        setErrorMessage(`Failed to log in: ${message}`);
      }
    } catch (error) {
      setErrorMessage(`Error logging in: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="min-h-screen flex flex-col md:flex-row bg-white">
        <div className="md:hidden flex justify-center py-6">
          <img src={logo} alt="Company Logo" className="h-10"/>
        </div>

        <div
            className="hidden md:block md:w-1/2 relative bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url(src/assets/images/background.png)"
            }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logo} alt="Company Logo" className="max-w-xs" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8">
          <div className="max-w-md w-full mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h1 className="text-[#006181] font-bold text-2xl md:text-3xl xl:text-4xl">
                Login to Admin
              </h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
              <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={LoginSchema}
                  onSubmit={handleSubmit}
              >
                {() => (
                    <Form className="w-full space-y-4 md:space-y-6 p-4 md:p-6">
                      <div className="text-[#006181] text-start font-bold text-xl md:text-2xl">
                        Login
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-sm font-normal text-[#006181]">
                          Email Address
                        </label>
                        <Field
                            name="email"
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-full h-12 border border-gray-300 outline-none font-light text-base rounded px-3"
                        />
                        <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />
                      </div>

                      <div className="flex flex-col space-y-2 relative">
                        <label htmlFor="password" className="text-sm font-normal text-[#006181]">
                          Password
                        </label>
                        <Field
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter Password"
                            className="w-full h-12 border border-gray-300 outline-none font-light text-base rounded px-3"
                        />
                        <div className="absolute right-3 top-10 cursor-pointer">
                          {showPassword ? (
                              <BsEye onClick={handleShowPassword} className="text-gray-500" />
                          ) : (
                              <BsEyeSlash onClick={handleShowPassword} className="text-gray-500" />
                          )}
                        </div>
                        <ErrorMessage name="password" component="span" className="text-red-500 text-sm" />
                      </div>

                      <div className="pt-1 md:pt-2">
                        <Link to="/forgot-password" className="text-[#006181] underline font-semibold text-sm">
                          Forgot password?
                        </Link>
                      </div>

                      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

                      <button
                          type="submit"
                          className="w-full mt-4 md:mt-6 text-base md:text-lg flex justify-center items-center rounded-md bg-yellow-400 px-6 py-3 font-bold text-[#006181] hover:bg-yellow-500 transition disabled:opacity-50"
                          disabled={isLoading}
                      >
                        {isLoading ? 'Logging in...' : 'Log in'}
                      </button>
                    </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LoginForm;