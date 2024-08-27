import React from 'react';
import PHOTOS from '../../../assets/images';
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className="logo">
        <img src={PHOTOS.church_logo} alt="" />
      </div>

        <a href="https://forms.gle/3TtJhjyQWms5rPHR8" className="anchor">Register for program</a>
    </div>
  )
}

export default Header
