import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const ImageCropper = ({ imageSrc, onCropComplete }) => {
  const cropperRef = useRef(null);

  const cropImage = () => {
    const cropper = cropperRef.current.cropper;
    onCropComplete(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <div style={{ width: 'auto', height: 'auto'}}>
      <Cropper
        src={imageSrc}
        style={{ height: 200, width: 200 }}
        // Cropper.js options
        aspectRatio={1}
        guides={false}
        ref={cropperRef}
        crop={cropImage}
      />
    </div>
  );
};

export default ImageCropper;
