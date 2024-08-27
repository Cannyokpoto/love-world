import React from 'react';
import PHOTOS from '../../assets/images';
import './AvatarFrame.css';

const AvatarFrame = ({ croppedImage }) => {
  return (
    <div className="avatar-frame" id="avatar-frame">
      <img src={PHOTOS.template} alt="" className='template' />
      {croppedImage && <img src={croppedImage} alt="Cropped Avatar" className='croppedImage' />}
    </div>
  );
};

export default AvatarFrame;
