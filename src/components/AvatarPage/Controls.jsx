import React, {useRef} from 'react';
import { toPng } from 'html-to-image';
import './AvatarComponent.css'

const Controls = ({ onSave }) => {

  const contentRef = useRef(null);

  const printImage = () => {
    const printWindow = window.open('', '_blank');
    const img = document.getElementById('avatar-frame').innerHTML;
    printWindow.document.write(img);
    printWindow.document.close();
    printWindow.print();
  };

  const saveImage = () => {
    const avatarFrame = document.getElementById('avatar-frame');
    toPng(avatarFrame).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'avatar.png';
      link.href = dataUrl;
      link.click();
    });
  };


  // Function to save the AvatarFrame as an image
  const saveAvatar = () => {
    const avatarFrame = document.getElementById('avatar-frame'); // Get the AvatarFrame element by its ID
    toPng(avatarFrame) // Convert the element to a PNG
      .then((dataUrl) => {
        console.warn('captured image:', dataUrl);
        const link = document.createElement('a'); // Create a link element
        link.download = 'avatar.png'; // Set the download attribute to specify the file name
        link.href = dataUrl; // Set the href of the link to the image data URL
        link.click(); // Programmatically click the link to trigger the download
      })
      .catch((err) => {
        console.error('Failed to save the image.', err); // Handle errors
      });
  };

  //capture avatar
  const captureAvatar = () =>{
    const node = contentRef.current;

    toPng(node, {
      cacheBust: true, height: 1000
    })
    .then(dataUrl =>{
      console.warn('captured image:', dataUrl);

      const link = document.createElement('a');
      link.download = 'love world.png';
      link.href = dataUrl;
      link.click();
    }).catch((err) => {
      console.error('Failed to save the image.', err); // Handle errors
    });
  }

  return (
    <div>
      <button onClick={saveImage} className='saveBtn'>Save Avatar</button>
      {/* <button onClick={printImage}>Print Avatar</button>
      <button onClick={saveAvatar}>Save the whole Avatar</button>
      <button onClick={captureAvatar}>capture avatar</button> */}
    </div>
  );
};

export default Controls;

