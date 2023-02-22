import React, { FC } from 'react';
import classes from './CustomFileUpload.module.css';

interface InputProps {
  addFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: () => void;
  selected: File | null;
}

const CustomFileUpload: FC<InputProps> = ({ addFile, removeFile, selected }) => {
  return (
    <div className={classes.upload}>
        <input className={classes.upload_input} type='file' id='file' onChange={(e) => addFile(e)} />
        {
          selected
            ?
              <div className={classes.upload_container}>
                <div className={classes.upload_title_selected}>{selected.name}</div>
                <div className={classes.upload_label} onClick={removeFile}>
                  <svg height='13px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                </div>
              </div>
            :
              <div className={classes.upload_container}>
                <div className={classes.upload_title}>profile photo</div>
                <label className={classes.upload_label} htmlFor="file">
                  <svg height='13px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M360.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>
                </label>
              </div>
        }

    </div>
  )
}

export default CustomFileUpload;