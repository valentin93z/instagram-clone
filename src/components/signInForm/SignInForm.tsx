import React from 'react';
import classes from './SignInForm.module.css';
import logo from '../../images/logo.svg';
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
    <div className={classes.form_container}>
      <img className={classes.logo} src={logo} alt='logo' />
      <form className={classes.form}>
        <EmailInput value={email} setValue={handleEmail} />
        <PasswordInput value={password} setValue={handlePassword} />
        <SignButton status={email && password ? false : true}>Log In</SignButton>
      </form>
      <div className={classes.help}>
        <span className={classes.help_text}>Forget your login details? </span>
        <a className={classes.help_link} href='#'>Get help logging in.</a>
      </div>
    </div>
  )
}

export default SignInForm;