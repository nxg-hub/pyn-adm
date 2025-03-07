import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .max(20, 'Must not exceed 20 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .max(20, 'Must not exceed 20 characters')
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),

});