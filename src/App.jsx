import { useState } from 'react';
import './App.css';
import GeolocationPage from './components/GeolocationPage/GeolocationPage';
import AvatarComponent from './components/AvatarPage/AvatarComponent';
import Header from './components/AvatarPage/Header/Header';



function App() {

  return (
    <div className='app'>
      {/* <GeolocationPage /> */}
      <Header />
      <AvatarComponent />
    </div>
  )
}

export default App
