import React from 'react';
import classes from './SignIn.module.css';
import logo from '../../images/logo.svg';
import SignInForm from '../../components/signInForm/SignInForm';
import SignBottomPanel from '../../components/signBottomPanel/SignBottomPanel';
import LanguageSelect from '../../components/UI/selects/languageSelect/LanguageSelect';
import { Link } from 'react-router-dom';


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
          <Link className={classes.help_link} to='#'>Get help logging in.</Link>
        </div>
      </div>
      <div className={classes.bottom_panel}>
        <SignBottomPanel text='Don’t have an account?' title='Sign Up' path='/registration' />
      </div>
    </div>
  )
}

export default SignIn;