import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet'
import './Map.css'

export default function Map() {
  function Onmapclick() {
    const map = useMapEvent('click', (e) => {
      console.log(e.latlng)
    })
  }


  return (
    <MapContainer className='map' center={[49.76999692 - 97.616997532, -0.09]} zoom={13} scrollWheelZoom={true}>
      <Onmapclick />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      // attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      // url='https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup >
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
