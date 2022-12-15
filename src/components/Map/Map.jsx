import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent, Polyline, Polygon } from 'react-leaflet'
import { useEffect, useState } from 'react'
import * as coords from '../../helper/coords.js'
import './Map.css'

export default function Map({ routeName, setRouteName, setInfoOpen }) {
  const bounds = [[49.80761989268458, -97.29927040636541], [49.435792828043846, -100.0469920158388]]


  useEffect(() => { console.log(routeName) }, [routeName])

  function SetBounds() {
    const map = useMap()
    map.setMaxBounds(bounds)
  }


  function Onmapclick() {
    const map = useMapEvent('click', (e) => {
      console.log(`[${e.latlng.lat}, ${e.latlng.lng}],`)



    })
  }
  function routeClick(e) {
    setRouteName(e.target.options.className)
    setInfoOpen(true)
  }



  return (

    <MapContainer className='map' center={[49.76999692, -97.616997532]} zoom={13} scrollWheelZoom={true}

    >
      <SetBounds />
      <Onmapclick />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


      // attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      // url='https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png'
      />
      <Polygon className={'Winnipeg - Starbuck'} positions={coords.wpgStarbuckPolygon} pathOptions={coords.polygonOptions}
        eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Winnipeg - Starbuck'} pathOptions={coords.wpgStarbuckOptions} positions={coords.wpgStarbuck}
        eventHandlers={{ click: (e) => { routeClick(e) }, }}
      />
      <Polyline className={'Starbuck - Fannystelle'} pathOptions={coords.starbuckFannystelleOptions} positions={coords.starbuckFannystelle} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Fannystelle - Elm Creek'} pathOptions={coords.fannystelleElmCreekOptions} positions={coords.fannystelleElmCreek} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Elm Creek - Haywood'} pathOptions={coords.elmCreekHaywoodOptions} positions={coords.elmCreekHaywood} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Haywood - St.Claude'} pathOptions={coords.haywoodStClaudeOptions} positions={coords.haywoodStClaude} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'StClaude - Rathwell'} pathOptions={coords.stClaudeRathwellOptions} positions={coords.stClaudeRathwell} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Rathwell - Treherne'} pathOptions={coords.rathwellTreherneOptions} positions={coords.rathwellTreherne} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Treherne - Holland'} pathOptions={coords.treherneHollandOptions} positions={coords.treherneHolland} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Holland - Cypress River'} pathOptions={coords.hollandCypressRiverOptions} positions={coords.hollandCypressRiver} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Cypress River - Glenboro'} pathOptions={coords.cypressRiverGlenboroOptions} positions={coords.cypressRiverGlenboro} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Glenboro - Wawanessa'} pathOptions={coords.glenboroWawanessaOptions} positions={coords.glenboroWawanessa} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Wawanessa - Nesbitt'} pathOptions={coords.wawanessaNesbittOptions} positions={coords.wawanessaNesbitt} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'Nesbitt - HWY 10'} pathOptions={coords.nesbittHwy10Options} positions={coords.nesbittHwy10} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline className={'fullRoute'} pathOptions={coords.fullRouteOptions} positions={coords.fullRoute}
      // eventHandlers={{ click: (e) => { routeClick(e) }, }}
      />

      {/* <Marker position={[51.505, -0.09]}>
        <Popup >
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>

  )
}
