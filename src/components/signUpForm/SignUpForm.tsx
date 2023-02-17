import React from 'react';
import classes from './SignUpForm.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import CustomPrimaryButton from '../UI/buttons/customPrimaryButton/CustomPrimaryButton';
import CustomInput from '../UI/inputs/customInput/CustomInput';
import CustomPasswordInput from '../UI/inputs/customPasswordInput/CustomPasswordInput';
import { registrationSlice } from '../../app/slices/registrationSlice';


const SignUpForm = () => {

  const dispatch = useAppDispatch();
  const { username, email, password, firstname, lastname } = useAppSelector(state => state.registrationReducer);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(registrationSlice.actions.setUsername(e.target.value));
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(registrationSlice.actions.setEmail(e.target.value));
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(registrationSlice.actions.setPassword(e.target.value));
  }

  const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(registrationSlice.actions.setFirstname(e.target.value));
  }

  const handleLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(registrationSlice.actions.setLastname(e.target.value));
  }

  const handleRegistration = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        await updateProfile(user, { displayName: username });
        const docRef = await addDoc(collection(db, 'users'), {
          uid: user.uid,
          email: user.email,
          username: user.displayName,
          firstname,
          lastname,
          dateCreated: Date.now(),
        });
      }
      console.log(user);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <form className={classes.form}>
      <CustomInput type='email' placeholder='email' value={email} onChange={handleEmail} />
      <CustomPasswordInput placeholder='password' value={password} onChange={handlePassword} />
      <CustomInput type='text' placeholder='username' value={username} onChange={handleUsername} />
      <CustomInput type='text' placeholder='firstname' value={firstname} onChange={handleFirstname} />
      <CustomInput type='text' placeholder='lastname' value={lastname} onChange={handleLastname} />
      <CustomPrimaryButton disabled={email && password ? false : true} onClick={(e) => handleRegistration(e)}>Sign Up</CustomPrimaryButton>
    </form>
  )
}

export default SignUpForm;