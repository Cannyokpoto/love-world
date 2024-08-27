import { useState } from 'react'

function GeolocationPage() {
  const [latitude, setLatitude] = useState('');
  console.warn("latitude:", latitude)
  const [longitude, setLongitude] = useState('');
  console.warn("longitude:", longitude)


  const getLocation = () =>{
    if(navigator.geolocation){
      navigator.geolocation.watchPosition(function (position){
        console.warn("position:", position)

        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      })
    }
  }

  return (
    <div className='app'>
      <h1>location page</h1>

      <span>latitude: {latitude}</span>
      <span>longitude: {longitude}</span>

      <button onClick={getLocation}>get location</button>
    </div>
  )
}

export default GeolocationPage
