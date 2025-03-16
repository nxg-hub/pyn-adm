import React, {useState} from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';


const AdminInvite = () => {
const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const user = useSelector((state) => state.user.user);

const handleInvite = async (values, {resetForm} ) => {
    setIsLoading(true);
    setErrorMessage('');

   const id = user?.id;

    const requestData = {
      email: values.email,
      adminUserType: values.adminUserType
    };
  
    try {
      const response = await fetch(import.meta.env.VITE_ADMIN_INVITE, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Inviting-Admin-Id': id
        },
        body: JSON.stringify(requestData),
      });
  
      const result = await response.json();
  
      if (response.ok && result.message === 'Admin invitation has been sent successfully') {
        setSuccessMessage('Admin invite sent.');
        setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
          resetForm()
      } else {
        setErrorMessage(result.debugMessage || 'An error occurred while sending the invite.');
      }
    } catch (error) {
      console.error('Error sending invite:', error);
      setErrorMessage(`Error sending invite: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  

return (
    <div className="md:w-[40%] mx-10 md:mx-auto md:py-10">
    <div className="text-center mt-10 xl:mt-0 text-[#006181] font-bold xl:text-5xl text-2xl py-10">
      Invite an Admin
    </div>
          <Formik initialValues={{ email: '', adminUserType: '' }}
          onSubmit={handleInvite}>
            {() => (
              <Form className="w-full ">
                <div className="space-y-6">
                  {/* Email Field */}
                  <div className="flex flex-col xl:w-[120%]">
                    <label htmlFor="email" className="text-lg  font-normal text-[#006181]">
                      Email Address
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter Email Address"
                      className="w-full h-[3.4rem] border border-[#9ca3af] outline-none font-light text-base text-gray rounded-md py-2 px-4"
                    />
                    <ErrorMessage name="email" component="span" className="text-[#db3a3a] text-xs mt-1" />
                  </div>

                  {/* Admin Type Field */}
                  <div className="flex flex-col xl:w-[120%]">
                    <label htmlFor="adminUserType" className="text-lg font-normal text-[#006181]">
                      Admin Type
                    </label>
                    <Field
                      as="select"
                      name="adminUserType"
                      className="w-full h-[3.4rem] border border-[#9ca3af] outline-none font-light text-base text-gray rounded-md py-2 px-4"
                    >
                      <option value="" disabled>Choose Admin Type</option>
                      <option value="GENERAL_MANAGER">General Manager</option>
                      <option value="CUSTOMER_CARE_REP">Customer Care Rep</option>
                      <option value="OPERATIONS_MANAGER">Operations Manager</option>
                      <option value="FINANCE_MANAGER">Finance Manager</option>
                    </Field>
                    <ErrorMessage name="adminUserType" component="span" className="text-[#db3a3a] text-xs mt-1" />
                  </div>
                </div>
                {successMessage && (
                          <div className="item-added-box border border-blue-100 bg-blue-100 rounded-lg p-4 mt-4 text-blue-700 max-w-md mx-auto shadow-md">
                            <p className="mt-2 text-lightBlue font-bold">{successMessage}</p>
                          </div>
                        )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="text-[#006181] mt-5 text-xl flex justify-center items-center rounded-md bg-[#CCDFE6] px-6 py-3 font-bold w-full xl:w-[120%] mx-auto transition hover:cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Invite'}
                </button>
              </Form>
            )}
          </Formik>
      </div>
    
    
  
    )
};

export default AdminInvite;
