import { Component,useState } from "react";
import "./App.css";
import Map from '../../components/Map/Map'
import InfoScreen from "../../components/InfoScreen/InfoScreen";
export default function App() {

  const [routeName, setRouteName] = useState('')
  const [infoOpen, setInfoOpen] = useState(false)

  return (
  <>
  {infoOpen?
  <InfoScreen routeName={routeName} 
  setRouteName={setRouteName} 
  infoOpen={infoOpen} 
  setInfoOpen={setInfoOpen}/>:null}
  <Map routeName={routeName} setRouteName={setRouteName} setInfoOpen={setInfoOpen}/>

    </>

  )
}

