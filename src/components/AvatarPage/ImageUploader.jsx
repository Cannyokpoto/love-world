import React from 'react';
import { useDropzone } from 'react-dropzone';
import './ImageUploader.css';


const ImageUploader = ({ onImageUpload }) => {
  
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p>select image</p>
    </div>
  );
};

export default ImageUploader;

