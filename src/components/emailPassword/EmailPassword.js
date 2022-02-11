import React, { useState } from 'react';
import { WithRouter } from '../withRouter/WithRouter';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetAllAuthForms,
  resetPassword,
} from './../../redux/user/user.action';
import './style.scss';

import AuthWrapper from '../authWrapper/AuthWrapper';
import FormInput from '../forms/form_input/FormInput';
import Button from '../forms/Button/Button';
import { useNavigate } from 'react-router-dom';

const mapState = ({ user }) => ({
  resetPasswordSucces: user.resetPasswordSucces,
  resetPasswordError: user.resetPasswordError,
});



const EmailPassword = () => {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])

   const navigate = useNavigate()

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      

      const config = {
        url: 'http://localhost:3000/account',
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          
          navigate('/account');
        })
        .catch(() => {
          
          const err = ['Email not found. Please try again'];
          setErrors(err)
        });
    } catch (err) {
      //console.log(err)
    }
  };
  
    

    const configAuthWrapper = {
      headline: 'Email Password',
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          {errors.length > 0 && (
            <ul>
              {errors.map((error, index) => {
                return <li key={index}>{error}</li>;
              })}
            </ul>
          )}
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={e => setEmail(e.target.value)}
            />
            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }


export default WithRouter(EmailPassword);
