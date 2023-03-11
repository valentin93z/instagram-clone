import React from 'react';
import classes from './SignUpForm.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from '../../firebaseConfig';
import CustomPrimaryButton from '../UI/buttons/customPrimaryButton/CustomPrimaryButton';
import CustomInput from '../UI/inputs/customInput/CustomInput';
import CustomPasswordInput from '../UI/inputs/customPasswordInput/CustomPasswordInput';
import { registrationSlice } from '../../app/slices/registrationSlice';
import CustomFileUpload from '../UI/inputs/customFileUpload/CustomFileUpload';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


const SignUpForm = () => {

  const dispatch = useAppDispatch();
  const { username, email, password, firstname, lastname, avatarData } = useAppSelector(state => state.registrationReducer);

  const handleRegistration = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        await updateProfile(user, { displayName: username });
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          username: user.displayName,
          firstname: firstname,
          lastname: lastname,
          dateCreated: Date.now(),
        });
        if (avatarData) {
          const filePath = `avatars/${Date.now()}-${avatarData.name}`;
          const storageRef = ref(storage, filePath);
          await uploadBytes(storageRef, avatarData);
          const downloadUrl = await getDownloadURL(storageRef);
          await setDoc(doc(db, 'users', user.uid), { profilePhoto: downloadUrl }, { merge: true });
        }
      }
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <form className={classes.form}>
      <CustomInput
        type='email'
        placeholder='email'
        value={email}
        onChange={(e) => dispatch(registrationSlice.actions.setEmail(e.target.value))}
      />
      <CustomPasswordInput
        placeholder='password'
        value={password}
        onChange={(e) => dispatch(registrationSlice.actions.setPassword(e.target.value))}
      />
      <CustomInput
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => dispatch(registrationSlice.actions.setUsername(e.target.value))}
      />
      <CustomFileUpload
        addFile={(e) => e.target.files && dispatch(registrationSlice.actions.setAvatarData(e.target.files[0]))}
        removeFile={() => dispatch(registrationSlice.actions.setAvatarData(null))}
        selected={avatarData}
      />
      <CustomInput
        type='text'
        placeholder='firstname'
        value={firstname}
        onChange={(e) => dispatch(registrationSlice.actions.setFirstname(e.target.value))}
      />
      <CustomInput
        type='text'
        placeholder='lastname'
        value={lastname}
        onChange={(e) => dispatch(registrationSlice.actions.setLastname(e.target.value))}
      />
      <CustomPrimaryButton disabled={email && password ? false : true} onClick={(e) => handleRegistration(e)}>Sign Up</CustomPrimaryButton>
    </form>
  )
}

export default SignUpForm;