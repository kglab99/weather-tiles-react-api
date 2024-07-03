import TopBar from '../Components/TopBar';
import 'reactjs-popup/dist/index.css';
import '../css/Tiles.css';
import RainChart from '../Charts/rain';



function RainPopup({forecast, day}) {
  
    return(
        <>
            <TopBar text="Chance of rain" img="rain" infoIcon={false}/>
            <h2>Chance of rain chart</h2>
            <RainChart forecast={forecast} day={day}/>
        </>
    )
  }

export default RainPopup