import { ChartIcon } from "../Additional/ChartIcon";
import { InfoIcon } from "../Additional/InfoIcon";
import tempImg from "/location.png";
import windImg from "/wind.png";
import rainImg from "/rain.png";
import uvImg from "/sun.png";
import moonImg from "/moon/new-moon.png";
import visImg from "/visibility.png";
import humidityImg from "/humidity.png";
import sunImg from "/sun.png";
import pressureImg from "/pressure.png";
import aqImg from "/air-quality.png";
import sunriseImg from "/sunrise.png";

function TopBar({ text, img, chartIcon, infoIcon }) {
  const imgSrc = {
    temp: tempImg,
    wind: windImg,
    rain: rainImg,
    uv: uvImg,
    moon: moonImg,
    vis: visImg,
    humidity: humidityImg,
    sun: sunImg,
    pressure: pressureImg,
    aq: aqImg,
    sunrise: sunriseImg,
  };

  const topBarStyle = {
    display: "flex",
    alignItems: "center",
  };

  const imgStyle = {
    height: "1em",
    width: "1em",
  };

  const pStyle = {
    margin: "0 0 -2px 5px",
    fontWeight: "500",
    fontSize: "0.9em",
    textAlign: "left",
  };

  return (
    <div className="top-bar" style={topBarStyle}>
      <img src={imgSrc[img]} alt="" style={imgStyle} />
      <p style={pStyle}>{text}</p>
      {chartIcon && <ChartIcon />}
    </div>
  );
}

export default TopBar;
