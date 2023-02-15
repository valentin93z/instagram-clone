import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginSlice } from '../../app/slices/loginSlice';
import SignButton from '../UI/buttons/signButton/SignButton';
import EmailInput from '../UI/inputs/emailInput/EmailInput';
import PasswordInput from '../UI/inputs/passwordInput/PasswordInput';
import classes from './SignUpForm.module.css';


const SignUpForm = () => {

  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector(state => state.loginReducer);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(loginSlice.actions.setEmail(e.target.value));
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(loginSlice.actions.setPassword(e.target.value));
  }

  return (
    <form className={classes.form}>
      <EmailInput value={email} setValue={handleEmail} />
      <PasswordInput value={password} setValue={handlePassword} />
      <SignButton status={email && password ? false : true}>Sign Up</SignButton>
    </form>
  )
}

export default SignUpForm;