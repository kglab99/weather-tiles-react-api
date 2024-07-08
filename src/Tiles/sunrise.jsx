import "../css/Tiles.css";
import TopBar from "../Components/TopBar";
import { tileSquareStyle } from "../Additional/styles";
import SunCalc from "suncalc3";
import ProgressBar from "react-customizable-progressbar";

function TileSunrise({ forecast, day }) {
  return (
    <div className="tile-square" style={tileSquareStyle}>
      <TopBar text="Sunrise" img="sunrise" infoIcon={false} />
      <SunChart forecast={forecast} day={day} />
    </div>
  );
}

export default TileSunrise;


function SunChart({ forecast }) {
  let latitude = forecast.location.lat;
  let longitude = forecast.location.lon;

  const timezoneOffset = forecast.location.timezone_offset * 60 * 1000; // Convert minutes to milliseconds
  let currentDateAndTime = new Date(forecast.location.localtime + timezoneOffset);

  currentDateAndTime = new Date();
  let sunTimes = SunCalc.getSunTimes(currentDateAndTime, latitude, longitude);

  let sunrise = sunTimes.sunriseStart.value;
  let sunset = sunTimes.sunsetEnd.value;


    sunrise = sunrise.toString().split(" ")[4].split(":");
    sunrise = `${sunrise[0]}:${sunrise[1]}`;


    sunset = sunset.toString().split(" ")[4].split(":");
    sunset = `${sunset[0]}:${sunset[1]}`;
  
  let dayTime = Math.floor((sunTimes.sunsetEnd.value - sunTimes.sunriseStart.value) / 60000);

  let dayTimeElapsed = Math.floor((currentDateAndTime - sunTimes.sunriseStart.value) / 60000);

  let dayTimePercentage = (dayTimeElapsed / dayTime) * 100;

  if (dayTimePercentage > 100) {
    dayTimePercentage = 100;
  }

  if (dayTimePercentage < 0) {
    dayTimePercentage = 0;
  }

  const bottomStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "-80px",
  };

  const bottomTextStyle = {
    marginTop: 0,
  };

  return (
    <div className="content uv" >
      <ProgressBar
        radius={70}
        progress={dayTimePercentage}
        strokeWidth={5}
        strokeColor="orange"
        strokeLinecap="butt"
        trackStrokeWidth={5}
        trackStrokeLinecap="butt"
        cut={180}
        rotate={-180}
        pointerRadius={7}
        pointerStrokeWidth={8}
        pointerStrokeColor="orange"
      ></ProgressBar>
      <div className="bottom" style={bottomStyle}>
        <div className="left">
          <p className="text" style={bottomTextStyle}>
            Sunrise
          </p>
          <p className="text" style={bottomTextStyle}>
            {sunrise}
          </p>
        </div>
        <div className="right">
          <p className="text" style={bottomTextStyle}>
            Sunset
          </p>
          <p className="text" style={bottomTextStyle}>
            {sunset}
          </p>
        </div>
      </div>
    </div>
  );
}
