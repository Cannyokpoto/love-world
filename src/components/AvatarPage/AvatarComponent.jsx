import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import ImageCropper from './ImageCropper';
import AvatarFrame from './AvatarFrame';
import './AvatarComponent.css'
import Controls from './Controls';


const AvatarComponent = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };

  const handleCropComplete = (croppedImage) => {
    setCroppedImage(croppedImage);
  };

  return (
    <div className='AvatarComponent'>
      <div className="steps">
        <span>Step 1: Select image</span>
        <span>Step 2: Crop and save</span>
      </div>
      
      <div className="display">
        <div className="cropView">
          {croppedImage && <AvatarFrame croppedImage={croppedImage} />}
          {uploadedImage && (
            <ImageCropper imageSrc={uploadedImage} onCropComplete={handleCropComplete} />
          )}
        </div>
        
        
        <div className="avatarBtns">
          <ImageUploader onImageUpload={handleImageUpload} />
          {croppedImage && <Controls /> }
        </div> 
      </div>
    </div>
  );
};

export default AvatarComponent;
