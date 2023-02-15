import React from 'react';
import classes from './SignUp.module.css';
import logo from '../../images/logo.svg';
import LanguageSelect from '../../components/UI/selects/languageSelect/LanguageSelect';
import SignDivider from '../../components/UI/dividers/signDivider/SignDivider';
import SignGoogleButton from '../../components/UI/buttons/signGoogleButton/SignGoogleButton';
import SignBottomPanel from '../../components/signBottomPanel/SignBottomPanel';
import SignUpForm from '../../components/signUpForm/SignUpForm';


const SignUp = () => {
  return (
    <div className={classes.SignUp}>
      <div className={classes.language_select}>
        <LanguageSelect />
      </div>
      <div className={classes.wrapper}>
        <img className={classes.logo} src={logo} alt='logo' />
        <SignUpForm />
        <div className={classes.divider}>
          <SignDivider />
        </div>
        <SignGoogleButton>Sign Up with Google</SignGoogleButton>
      </div>
      <div className={classes.bottom_panel}>
        <SignBottomPanel text='Already have an account?' title='Sign In' path='/login' />
      </div>
    </div>
  )
}

export default SignUp;