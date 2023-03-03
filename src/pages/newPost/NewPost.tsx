import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postSlice } from '../../app/slices/postSlice';
import { LeftArrow } from '../../components/UI/icons/Icons';
import { db, storage } from '../../firebaseConfig';
import classes from './NewPost.module.css';

const NewPost: FC = () => {

  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.authReducer);
  const { caption, photos, preview } = useAppSelector(state => state.postReducer.newPost);

  const sharePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (photos && caption) {
        const photosPathURLs = [];
        for (let i = 0; i < photos.length; i++) {
          const photoPath = `photos/${user.uid}/${Date.now()}-${photos[i].name}`;
          const storageRef = ref(storage, photoPath);
          await uploadBytes(storageRef, photos[i]);
          photosPathURLs.push(photoPath);
        }
        await addDoc(collection(db, 'posts'), {
          uid: user.uid,
          caption: caption,
          photos: photosPathURLs,
          dateCreated: Date.now(),
        });
        dispatch(postSlice.actions.setResetNewPost());
      } else {
        alert("Attach photo and write caption!");
      }
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    let reader: FileReader;
    let isCancel = false;
    if (photos) {
      reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && !isCancel) {
          dispatch(postSlice.actions.setPreview(e.target.result));
        }
      }
      reader.readAsDataURL(photos[0]);
    }
    return () => {
      isCancel = true;
      if (reader && reader.readyState === 1) {
        reader.abort();
      }
    }
  }, [photos]);

  
  return (
    <div className={classes.container}>
      <div className={classes.topbar}>
        <LeftArrow width='10px' height='20px' />
        <div className={classes.topbar_title}>New Post</div>
        <button className={classes.topbar_button} onClick={sharePost}>Share</button>
      </div>
      <div className={classes.upload_container}>
        <div className={classes.textarea_container}>
          <textarea placeholder='Write a caption...' maxLength={300} value={caption} onChange={(e) => dispatch(postSlice.actions.setCaption(e.target.value))}></textarea>
        </div>
        <div className={classes.post_input_container}>
          <input
            className={classes.post_input}
            type="file"
            id="photos"
            accept='image/*'
            multiple
            onChange={(e) => dispatch(postSlice.actions.setPhotos(e.target.files))}
          />
          <label className={classes.post_label} htmlFor='photos'>
            {
              preview
                ? <img width="100%" height='100%' style={{objectFit: 'cover'}} src={preview} alt='preview' />
                : <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
            }
          </label>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default NewPost;