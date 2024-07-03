import TopBar from '../Components/TopBar';
import TempChart from '../Charts/temp';
import 'reactjs-popup/dist/index.css';
import '../css/Tiles.css';




function TempPopup({forecast, day}) {

    let location = forecast.location.name;
  
    return(
        <>
            <TopBar text={location} img="temp" infoIcon={false}/>
            <h2>Temperature chart</h2>
            <TempChart forecast={forecast} day={day}/>
        </>
    )
  }

export default TempPopup