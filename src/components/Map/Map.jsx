import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent, Polyline } from 'react-leaflet'
import * as coords from '../../helper/coords.js'
import './Map.css'

export default function Map() {

  function Onmapclick() {
    const map = useMapEvent('click', (e) => {
      console.log(`[${e.latlng.lat}, ${e.latlng.lng}],`)
    })
  }
  function routeClick(e) {
    return console.log(e.target.options.attribution)
  }


  return (
    <MapContainer className='map' center={[49.76999692, -97.616997532]} zoom={13} scrollWheelZoom={true}>
      <Onmapclick />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      // attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      // url='https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png'
      />
      <Polyline attribution={'Winnipeg - Starbuck'} pathOptions={coords.wpgStarbuckOptions} positions={coords.wpgStarbuck} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Starbuck - Fannystelle'} pathOptions={coords.starbuckFannystelleOptions} positions={coords.starbuckFannystelle} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Fannystelle - Elm Creek'} pathOptions={coords.fannystelleElmCreekOptions} positions={coords.fannystelleElmCreek} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Elm Creek - Haywood'} pathOptions={coords.elmCreekHaywoodOptions} positions={coords.elmCreekHaywood} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Haywood - St.Claude'} pathOptions={coords.haywoodStClaudeOptions} positions={coords.haywoodStClaude} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'StClaude - Rathwell'} pathOptions={coords.stClaudeRathwellOptions} positions={coords.stClaudeRathwell} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Rathwell - Treherne'} pathOptions={coords.rathwellTreherneOptions} positions={coords.rathwellTreherne} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Treherne - Holland'} pathOptions={coords.treherneHollandOptions} positions={coords.treherneHolland} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Holland - Cypress River'} pathOptions={coords.hollandCypressRiverOptions} positions={coords.hollandCypressRiver} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Cypress River - Glenboro'} pathOptions={coords.cypressRiverGlenboroOptions} positions={coords.cypressRiverGlenboro} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Glenboro - Wawanessa'} pathOptions={coords.glenboroWawanessaOptions} positions={coords.glenboroWawanessa} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Wawanessa - Nesbitt'} pathOptions={coords.wawanessaNesbittOptions} positions={coords.wawanessaNesbitt} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Nesbitt - HWY 10'} pathOptions={coords.nesbittHwy10Options} positions={coords.nesbittHwy10} eventHandlers={{ click: (e) => { routeClick(e) }, }} />

      {/* <Marker position={[51.505, -0.09]}>
        <Popup >
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  )
}
