import React from 'react';
import classes from './SignIn.module.css';
import logo from '../../images/logo.svg';
import SignInForm from '../../components/signInForm/SignInForm';
import SignDivider from '../../components/UI/dividers/signDivider/SignDivider';
import SignGoogleButton from '../../components/UI/buttons/signGoogleButton/SignGoogleButton';
import SignBottomPanel from '../../components/signBottomPanel/SignBottomPanel';
import LanguageSelect from '../../components/UI/selects/languageSelect/LanguageSelect';


const SignIn = () => {
  return (
    <div className={classes.SignIn}>
      <div className={classes.language_select}>
        <LanguageSelect />
      </div>
      <div className={classes.wrapper}>
        <img className={classes.logo} src={logo} alt='logo' />
        <SignInForm />
        <div className={classes.help}>
          <span className={classes.help_text}>Forget your login details? </span>
          <a className={classes.help_link} href='#'>Get help logging in.</a>
        </div>
        <div className={classes.divider}>
          <SignDivider />
        </div>
        <SignGoogleButton>Sign In with Google</SignGoogleButton>
      </div>
      <div className={classes.bottom_panel}>
        <SignBottomPanel text='Don’t have an account?' title='Sign Up' path='/registration' />
      </div>
    </div>
  )
}

export default SignIn;