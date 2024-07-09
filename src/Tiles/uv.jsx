import "../css/Tiles.css";
import TopBar from "../Components/TopBar";
import { useState } from "react";
import { tileSquareStyle } from "../Additional/styles";

import { Line } from "rc-progress";

function TileUV({ forecast, day }) {
  const [MoreToggle, setMoreToggle] = useState(false);

  function MoreClick() {
    setMoreToggle(!MoreToggle);
  }

  return (
    <div
      className="tile-square"
      style={tileSquareStyle}
      onClick={MoreClick}
      onDoubleClick={MoreClick}
    >
      <TopBar text="UV index" img="uv" infoIcon={false} />
      <UVContent forecast={forecast} day={day} />
    </div>
  );
}

export default TileUV;

function UVContent({ forecast, day }) {
  let UVindex = forecast.forecast.forecastday[day].day.uv;

  let UVtext;
  let UVtextLong;
  let UVcolor;

  switch (UVindex) {
    case 1:
    case 2:
      UVtext = "Low";
      UVtextLong = "You can safely enjoy being outside";
      UVcolor = "#05ED52";
      break;
    case 3:
    case 4:
    case 5:
      UVtext = "Moderate";
      UVtextLong = "Seek shade during midday hours!";
      UVcolor = "#EC7505";
      break;
    case 6:
    case 7:
      UVtext = "High";
      UVtextLong = "Seek shade during midday hours!";
      UVcolor = "#D84A05";
      break;
    case 8:
    case 9:
    case 10:
      UVtext = "Very high";
      UVtextLong = "Avoid being outside";
      UVcolor = "#F42B03";
      break;
    case 11:
      UVtext = "Extreme";
      UVtextLong = "Avoid being outside";
      UVcolor = "#E70E02";
      break;
  }

  return (
    <div className="content uv">
      <div className="top">
        <h1 className="value">{UVindex}</h1>
        <h2 className="text">{UVtext}</h2>
      </div>
      <Line
        percent={UVindex * 9}
        strokeWidth={3}
        strokeColor={UVcolor}
        trailColor="#fff"
      />
      <p className="text-long">{UVtextLong}</p>
    </div>
  );
}
