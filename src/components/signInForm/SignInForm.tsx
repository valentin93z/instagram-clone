import React from 'react';
import classes from './SignInForm.module.css';
import CustomInput from '../UI/inputs/customInput/CustomInput';
import CustomPasswordInput from '../UI/inputs/customPasswordInput/CustomPasswordInput';
import CustomPrimaryButton from '../UI/buttons/customPrimaryButton/CustomPrimaryButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginSlice } from '../../app/slices/loginSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebaseConfig';


const SignInForm = () => {

  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector(state => state.loginReducer);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(loginSlice.actions.setEmail(e.target.value));
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(loginSlice.actions.setPassword(e.target.value));
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <form className={classes.form}>
      <CustomInput type='email' placeholder='enter your email' value={email} onChange={handleEmail} />
      <CustomPasswordInput placeholder='enter your password' value={password} onChange={handlePassword} />
      <CustomPrimaryButton disabled={email && password ? false : true} onClick={(e) => handleLogin(e)}>Sign In</CustomPrimaryButton>
    </form>
  )
}

export default SignInForm;