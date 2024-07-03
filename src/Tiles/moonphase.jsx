import '../css/Tiles.css'
import TopBar from '../Components/TopBar';
import { useState } from 'react';
import closeImg from '/close.png';
import Popup from 'reactjs-popup';
import { tileSquareStyle, buttonStyle } from '../Additional/styles';

import MoonPopup from '../Popups/moon';

import { Line } from 'rc-progress';


function TileMoon({forecast, day}) {

    const [MoreToggle, setMoreToggle] = useState(false);

    function MoreClick() {
        setMoreToggle(!MoreToggle);
    }

    return (
        <div className="tile-square clickable" style={tileSquareStyle} onClick={MoreClick} onDoubleClick={MoreClick}>
            <TopBar text="Moonphase" img="moon" infoIcon={true}/>
            <Moonphase forecast={forecast} day={day} />
            <Popup open={MoreToggle} closeOnDocumentClick >
                <button className="close" onClick={MoreClick} style={buttonStyle}>
                    <img src={closeImg}></img>
                </button>
                <MoonPopup forecast={forecast} day={day}/>
            </Popup>
        </div>
    )

}

export default TileMoon

import firstQuarter from '/moon/first-quarter.png';
import fullMoon from '/moon/full-moon.png';
import lastQuarter from '/moon/last-quarter.png';
import newMoon from '/moon/new-moon.png';
import waningCrescent from '/moon/waning-crescent.png';
import waningGibbous from '/moon/waning-gibbous.png';
import waxingCrescent from '/moon/waxing-crescent.png';
import waxingGibbous from '/moon/waxing-gibbous.png';

function Moonphase({forecast, day}) {
    let moonphase = forecast.forecast.forecastday[day].astro.moon_phase;
    let moonImg;

    let lat = forecast.location.lat;
    // Show img proper to earth hemisphere of location
    if (lat >= 0) {
        switch (moonphase) {
          case "New Moon":
            moonImg = newMoon;
            break;
          case "Waxing Crescent":
            moonImg = waxingCrescent;
            break;
          case "First Quarter":
            moonImg = firstQuarter;
            break;
          case "Waxing Gibbous":
            moonImg = waxingGibbous;
            break;
          case "Full Moon":
            moonImg = fullMoon;
            break;
          case "Waning Gibbous":
            moonImg = waningGibbous;
            break;
          case "Last Quarter":
            moonImg = lastQuarter;
            break;
          case "Waning Crescent":
            moonImg = waningCrescent;
            break;
        }
      } else if (lat < 0) {
        switch (moonphase) {
          case "New Moon":
            moonImg = newMoon;
            break;
          case "Waxing Crescent":
            moonImg = waningCrescent;
            break;
          case "First Quarter":
            moonImg = lastQuarter;
            break;
          case "Waxing Gibbous":
            moonImg = waningCrescent;
            break;
          case "Full Moon":
            moonImg = fullMoon;
            break;
          case "Waning Gibbous":
            moonImg = waxingGibbous;
            break;
          case "Last Quarter":
            moonImg = firstQuarter;
            break;
          case "Waning Crescent":
            moonImg = waxingCrescent;
            break;
        }
      }

    return (
      <div className="content moon" style={{alignItems: "center"}}>
          <img src={moonImg} alt="" style={{width: "96px", height: "96px", marginTop: "auto", marginBottom: "auto"}}/>
          <p style={{marginTop: "0"}}>{moonphase}</p>
      </div>
    )
  }