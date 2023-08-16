import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Login() {

const navigate = useNavigate();

const initialValues = {
  username: '',
  pwd: ''
};

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  }

  if (!values.pwd) {
    errors.pwd = 'Password is required';
  } else if (values.pwd.length < 6) {
    errors.pwd = 'Password should be at least 6 characters long';
  }

  return errors;
};

const onSubmit = (values) => {
  console.log(values); // This will contain the form data
};

  return (
    <section className='reg-container' >
    <h2>Login</h2>
    <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
    <Form  className='reg-form'>
      <div className='form-control'>
          <label htmlFor="username" className='form-lbl'>Username:</label>
          <Field
            className='form-input'
            type="text"
            id="username"
            name="username"
          />
          <ErrorMessage name="username" component="span" className="error-message" />

        </div>

      <div className='form-control'>
        <label htmlFor="pwd" className='form-lbl'>Password:</label>
        <Field
          className='form-input'
          type="password"   
          id="pwd"
          name="pwd"      
          />
          <ErrorMessage name="pwd" component="span" className="error-message" />
      </div>
    
      <button type="submit" className='form-btn'>Login</button>
      </Form>
    </Formik>

</section>
)
}

export default Login