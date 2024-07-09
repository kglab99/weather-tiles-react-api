import "../css/Tiles.css";
import TopBar from "../Components/TopBar";
import { tileSquareStyle } from "../Additional/styles";

function TilePressure({ forecast, day }) {
  return (
    <div className="tile-square" style={tileSquareStyle}>
      <TopBar text="Pressure" img="pressure" infoIcon={false} />
      <PressureContent forecast={forecast} day={day} />
    </div>
  );
}

export default TilePressure;

function PressureContent({ forecast, day }) {
  let pressure = forecast.forecast.forecastday[day].hour[12].pressure_mb;

  return (
    <div className="content uv">
      <div className="top">
        <h1 className="value">{pressure}hPa</h1>
      </div>
    </div>
  );
}
