import "../css/Tiles.css";
import TopBar from "../Components/TopBar";
import { tileSquareStyle, buttonStyle } from "../Additional/styles";
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

function SunChart({ forecast, day }) {
  let latitude = forecast.location.lat;
  let longitude = forecast.location.lon;
  const currentDateAndTime = new Date(
    forecast.location.localtime.replace(/-/g, "/")
  );
  let sunTimes = SunCalc.getSunTimes(
    currentDateAndTime,
    latitude,
    longitude,
    0
  );
  let sunrise = sunTimes.sunriseStart.value.toString().split(" ")[4].split(":");
  let sunset = sunTimes.sunsetEnd.value.toString().split(" ")[4].split(":");

  let dayTime = Math.floor(
    (sunTimes.sunsetEnd.value - sunTimes.sunriseStart.value) / 60000
  );
  console.log(dayTime);

  let dayTimeElapsed = Math.floor(
    (currentDateAndTime - sunTimes.sunriseStart.value) / 60000
  );
  console.log(dayTimeElapsed);

  let dayTimePercentage = (dayTimeElapsed / dayTime) * 100;
  console.log(dayTimePercentage);

  if (dayTimePercentage > 100) {
    dayTimePercentage = 100;
  }

  console.log(dayTimePercentage);

  sunrise = `${sunrise[0]}:${sunrise[1]}`;
  sunset = `${sunset[0]}:${sunset[1]}`;

  const bottomStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "-80px",
  };

  const progressStyle = {
    alignSelf: "center",
  };

  const bottomTextStyle = {
    marginTop: 0,
  };

  const contentStyle = {
    // justifyContent: "center"
  };

  return (
    <div className="content uv" style={contentStyle}>
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
