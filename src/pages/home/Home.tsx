import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const Home = () => {

  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      signOut(auth);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>You logging</h1>
      <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
    </div>
  )
}

export default Home;