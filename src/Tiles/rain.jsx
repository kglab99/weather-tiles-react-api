import "../css/Tiles.css";
import TopBar from "../Components/TopBar";
import { useState } from "react";
import closeImg from "/close.png";
import Popup from "reactjs-popup";
import { tileSquareStyle, buttonStyle } from "../Additional/styles";

import RainPopup from "../Popups/rain";

function TileRain({ forecast, day }) {
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
      <TopBar text="Chance of rain" img="rain" chartIcon={true} />
      <WindContent forecast={forecast} day={day} />
      <Popup open={MoreToggle} closeOnDocumentClick>
        <button className="close" onClick={MoreClick} style={buttonStyle}>
          <img src={closeImg}></img>
        </button>
        <RainPopup forecast={forecast} day={day} />
      </Popup>
    </div>
  );
}

export default TileRain;

function WindContent({ forecast, day }) {
  let chanceOfRain =
    forecast.forecast.forecastday[day].day.daily_chance_of_rain;

  return (
    <div className="content uv">
      <div className="top">
        <h1 className="value">{chanceOfRain}%</h1>
      </div>
    </div>
  );
}
