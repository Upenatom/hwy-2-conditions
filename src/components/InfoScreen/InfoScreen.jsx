import './InfoScreen.css'

export default function InfoScreen({ routeName, setRouteName, infoOpen, setInfoOpen }) {


    const closeInfo = () => {
        setInfoOpen(false)
    }
    return (

        <div className='infoModal'>
            <h1 onClick={closeInfo} > X </h1 >
            <h1> {routeName}</h1>
        </div >
    )
}
