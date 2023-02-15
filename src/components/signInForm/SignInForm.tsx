import React from 'react';
import classes from './SignInForm.module.css';
import EmailInput from '../UI/inputs/emailInput/EmailInput';
import PasswordInput from '../UI/inputs/passwordInput/PasswordInput';
import SignButton from '../UI/buttons/signButton/SignButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginSlice } from '../../app/slices/loginSlice';


const SignInForm = () => {

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
      <SignButton status={email && password ? false : true}>Sign In</SignButton>
    </form>
  )
}

export default SignInForm;