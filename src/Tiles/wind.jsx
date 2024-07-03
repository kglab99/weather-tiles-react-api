import '../css/Tiles.css'
import TopBar from '../Components/TopBar';
import { useState } from 'react';
import closeImg from '/close.png';
import Popup from 'reactjs-popup';
import { tileSquareStyle, buttonStyle } from '../Additional/styles';

import WindPopup from '../Popups/wind';


function TileWind({forecast, day}) {

    const [MoreToggle, setMoreToggle] = useState(false);

    function MoreClick() {
        setMoreToggle(!MoreToggle);
    }

    return (
        <div className="tile-square clickable" style={tileSquareStyle} onClick={MoreClick} onDoubleClick={MoreClick}>
            <TopBar text="Wind speed" img="wind" infoIcon={true}/>
            <WindContent forecast={forecast} day={day} />
            <Popup open={MoreToggle} closeOnDocumentClick >
                <button className="close" onClick={MoreClick} style={buttonStyle}>
                    <img src={closeImg}></img>
                </button>
                <WindPopup forecast={forecast} day={day}/>
            </Popup>
        </div>
    )

}

export default TileWind


function WindContent({forecast, day}) {
    let maxWind = forecast.forecast.forecastday[day].day.maxwind_kph;

  return (
    <div className="content uv">
          <div className="top">
              <h1 className="value">{maxWind}km/h</h1>
          </div>
    </div>
  )
}