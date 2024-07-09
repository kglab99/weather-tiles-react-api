import "../css/Tiles.css";
import TopBar from "../Components/TopBar";
import { useState } from "react";
import closeImg from "/close.png";
import Popup from "reactjs-popup";
import { tileSquareStyle, buttonStyle } from "../Additional/styles";

import TempPopup from "../Popups/current-weather";

// Tile content
function TileCurrentWeather({ forecast, day }) {
  let location = forecast.location.name;

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
      <TopBar text={location} img="temp" chartIcon={true} />
      <CurrentWeatherContent forecast={forecast} day={day} />
      <Popup open={MoreToggle} closeOnDocumentClick>
        <button className="close" onClick={MoreClick} style={buttonStyle}>
          <img src={closeImg}></img>
        </button>
        <TempPopup forecast={forecast} day={day} />
      </Popup>
    </div>
  );
}

export default TileCurrentWeather;

function CurrentWeatherContent({ forecast, day }) {
  let temperature = forecast.forecast.forecastday[day].day.avgtemp_c;
  let condition = forecast.forecast.forecastday[day].day.condition.text;
  let minTemp = forecast.forecast.forecastday[day].day.mintemp_c;
  let maxTemp = forecast.forecast.forecastday[day].day.maxtemp_c;

  const currentStyle = {
    textAlign: "left",
    marginTop: 0,
  };

  return (
    <div className="content uv">
      <div className="top">
        <h1 className="value">{temperature}°C</h1>
        <p className="current" style={currentStyle}>
          {condition}
        </p>
      </div>
      <p className="text-long">
        From {minTemp}°C to {maxTemp}°C
      </p>
    </div>
  );
}
