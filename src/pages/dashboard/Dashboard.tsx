import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import classes from './Dashboard.module.css';
import BottomPanel from '../../components/bottomPanel/BottomPanel';
import { app } from '../../firebaseConfig';

const Dashboard = () => {

    const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        const auth = getAuth(app);
        signOut(auth);
      } catch(err) {
        console.log(err);
      }
    }

  return (
    <div className={classes.dashboard}>
        <h1>You logging</h1>
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
        <BottomPanel />
    </div>
  )
}

export default Dashboard;