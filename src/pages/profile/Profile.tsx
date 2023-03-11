import { FC, useEffect } from 'react';
import classes from './Profile.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { db } from '../../firebaseConfig';
import { DiscoverPeopleIcon } from '../../components/UI/icons/ProfileIcons';
import ProfileTabs from '../../components/profileTabs/ProfileTabs';
import { BurgerIcon, PlusIcon } from '../../components/UI/icons/Icons';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { postSlice } from '../../app/slices/postSlice';

const Profile: FC = () => {

  const dispatch = useAppDispatch();
  const { username, firstname, lastname, profilePhoto, uid } = useAppSelector(state => state.authReducer.user);
  const { userPosts } = useAppSelector(state => state.postReducer);

  const fetchPosts = async () => {
    const q = query(collection(db, 'posts'), where('uid', '==', uid));
    const posts: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
    dispatch(postSlice.actions.getUserPosts(posts));
  }

  useEffect(() => {
    uid && fetchPosts();
  }, [uid]);

  
  return (
    <div>
      <div className={classes.upbar}>
        <div className={classes.username}>{username}</div>
        <div className={classes.menu_button}>
          <Link to='/new-post'>
            <PlusIcon width='18px' height='18px' />
          </Link>
          <div>
            <BurgerIcon width='18px' height='18px' />
          </div>
        </div>
      </div>
      <div className={classes.profile_header}>
        <div className={classes.profile_info}>
          <div className={classes.profile_photo}>
            <img width='100%' src={profilePhoto} alt='' style={{objectFit: 'cover'}} />
          </div>
          <ul className={classes.user_info_list}>
            <li className={classes.user_info_item}>
              <p className={classes.item_count}>124</p>
              <p className={classes.item_title}>Posts</p>
            </li>
            <li className={classes.user_info_item}>
              <p className={classes.item_count}>655</p>
              <p className={classes.item_title}>Followers</p>
            </li>
            <li className={classes.user_info_item}>
              <p className={classes.item_count}>321</p>
              <p className={classes.item_title}>Following</p>
            </li>
          </ul>
        </div>
        <div className={classes.profile_bio}>
          <p>{firstname} {lastname}</p>
          <p>biography...</p>
          <a className={classes.profile_link} href='https://www.google.ru'>www.google.ru</a>
        </div>
      </div>
      <div className={classes.profile_buttons}>
        <button className={classes.profile_button_grey}>Edit profile</button>
        <button className={classes.profile_button_grey}>Share profile</button>
        <button className={classes.button_discover_people}>
          <DiscoverPeopleIcon />
        </button>
      </div>
      <ul className={classes.highlights_list}>
        <li className={classes.highlights_item}>
          <div className={classes.highlights_circle}>
            <p>+</p>
          </div>
          <p className={classes.highlights_title}>New</p>
        </li>
      </ul>
      <ProfileTabs posts={userPosts} />
    </div>
  )
}

export default Profile;