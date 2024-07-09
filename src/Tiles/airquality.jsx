import "../css/Tiles.css";
import TopBar from "../Components/TopBar";
import { useState } from "react";
import closeImg from "/close.png";
import Popup from "reactjs-popup";
import { tileSquareStyle, buttonStyle } from "../Additional/styles";

import AQPopup from "../Popups/aq";

import { Line } from "rc-progress";

// Tile content
function TileAQ({ forecast, day }) {
  // More toggle - display popup with additional info
  const [MoreToggle, setMoreToggle] = useState(false);

  function MoreClick() {
    setMoreToggle(!MoreToggle);
  }

  return (
    <div
      className="tile-square clickable"
      style={tileSquareStyle}
      onClick={MoreClick}
      onDoubleClick={MoreClick}
    >
      <TopBar text="Air quality" img="aq" chartIcon={true} />
      <AQContent forecast={forecast} day={day} />
      <Popup open={MoreToggle} closeOnDocumentClick>
        <button className="close" onClick={MoreClick} style={buttonStyle}>
          <img src={closeImg}></img>
        </button>
        <AQPopup forecast={forecast} day={day} />
      </Popup>
    </div>
  );
}

export default TileAQ;

// Aditional functions

function AQContent({ forecast }) {
  let aqi = calculateAirQuality(forecast.current.air_quality["gb-defra-index"]);

  function calculateAirQuality(defraIndex) {
    //GB Defra index runs as: 1 - best air quality, 10 - worst
    //We reverse that for better visual representation - rate 10 for best AQI

    let aqi = 10 - defraIndex + 1;

    return aqi;
  }

  let aqText;
  let aqiColor;

  switch (aqi) {
    case 10:
      aqText = "Great air! Enjoy outdoor activities.";
      aqiColor = "#05ED52";
      break;
    case 9:
    case 8:
      aqText = "Good air! Enjoy outdoor activities.";
      aqiColor = "#05ED52";
      break;
    case 7:
    case 6:
    case 5:
      aqText = "Enjoy outdoor activities unless felling unwell.";
      aqiColor = "#EC7505";
      break;
    case 4:
    case 3:
    case 2:
      aqText =
        "Anyone experiencing discomfort should consider reducing activity.";
      aqiColor = "#D84A05";
      break;
    case 1:
      aqText = "Reduce physical exertion, particularly outdoors.";
      aqiColor = "#F42B03";
      break;
  }

  return (
    <div className="content uv">
      <div className="top">
        <h1 className="value">{aqi}</h1>
      </div>
      <Line
        percent={aqi * 10}
        strokeWidth={3}
        strokeColor={aqiColor}
        trailColor="#fff"
      />
      <p className="text-long">{aqText}</p>
    </div>
  );
}
