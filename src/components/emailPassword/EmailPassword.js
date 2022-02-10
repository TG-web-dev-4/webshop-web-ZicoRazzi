import React, { useState, useEffect } from 'react';
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

const mapState = ({ user }) => ({
  resetPasswordSucces: user.resetPasswordSucces,
  resetPasswordError: user.resetPasswordError,
});

const EmailPassword = (props) => {
  const { resetPasswordSucces, resetPasswordError } = useSelector(mapState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (resetPasswordSucces) {
      dispatch(resetAllAuthForms());
      navigate('/account');
    }
  }, [resetPasswordSucces, navigate]);

  useEffect(() => {
    if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
      setErrors(resetPasswordError);
    }
  }, [resetPasswordError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
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
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Email Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default WithRouter(EmailPassword);
