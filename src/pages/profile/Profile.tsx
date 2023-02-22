import { ref } from 'firebase/storage';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { storage } from '../../firebaseConfig';
import { useDownloadURL } from 'react-firebase-hooks/storage';

const Profile = () => {

  const { profilePhoto } = useAppSelector(state => state.authReducer.user);
  const [photoUrl, loading, error] = useDownloadURL(profilePhoto ? ref(storage, profilePhoto) : null);
  
  return (
    <div>
      <p>Profile</p>
      {photoUrl && <img width='200px' height='200px' src={photoUrl} style={{borderRadius: '50%', objectFit: 'cover'}} />}
      {loading && 'loading...'}
    </div>
  )
}

export default Profile;