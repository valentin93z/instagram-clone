import React from 'react';
import classes from './Main.module.css';
import BottomPanel from '../../components/bottomPanel/BottomPanel';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className={classes.main}>
      <Outlet />
      <BottomPanel />
    </div>
  )
}

export default Main;