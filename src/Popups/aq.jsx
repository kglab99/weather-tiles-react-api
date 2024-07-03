import { Line } from "rc-progress";
import TopBar from "../Components/TopBar";

// Colors for different bar levels
const level0 = "#0FCB5D";
const level1 = "#C2CB0F";
const level2 = "#CB830F";
const level3 = "#CB4D0F";
const level4 = "#CB0F0F";

function AQPopup({ forecast, day }) {
  let aq = forecast.forecast.forecastday[day].day.air_quality;

  return (
    <>
      <TopBar text="Air quality" img="aq" infoIcon={false} />
      <h2>How do we calculate Air Quality Index?</h2>
      <p className="info">
        Air Quality Index used in the app is based on GB Defra Index, which is a
        system developed by the Department for Environment, Food & Rural Affairs
        (Defra) in the United Kingdom to provide the public with clear and
        understandable information about air pollution levels. The index
        categorizes air pollution levels and provides health advice based on
        these levels. The index is rated from 1 to 10, where 1 means the lowest
        pollution level and 10 the highest. In the app we present reversed index
        - as to highlight the positives. 10 means the best air quality, 1 the
        worst.
      </p>
      <h2>Details</h2>
      <table>
        <tr>
          <th style={{ width: "15%" }}>Particle</th>
          <th style={{ width: "70%" }}></th>
          <th style={{ width: "15%" }}>μg/m3</th>
        </tr>
        <tr>
          <td>PM2.5</td>
          <td className="line">
            <Line
              percent={(aq.pm2_5 / 75) * 100}
              strokeWidth={3}
              strokeColor={pm2_5LineColor(aq.pm2_5)}
              trailColor="#fff"
            />
          </td>
          <td>{Math.floor(aq.pm2_5 * 100) / 100}</td>
        </tr>
        <tr>
          <td>PM10</td>
          <td>
            <Line
              percent={(aq.pm10 / 110) * 100}
              strokeWidth={3}
              strokeColor={pm10LineColor(aq.pm10)}
              trailColor="#fff"
            />
          </td>
          <td>{Math.floor(aq.pm10 * 100) / 100}</td>
        </tr>
        <tr>
          <td>O3</td>
          <td>
            <Line
              percent={(aq.o3 / 180) * 100}
              strokeWidth={3}
              strokeColor={o3LineColor(aq.o3)}
              trailColor="#fff"
            />
          </td>
          <td>{Math.floor(aq.o3 * 100) / 100}</td>
        </tr>
        <tr>
          <td>NO2</td>
          <td>
            <Line
              percent={(aq.no2 / 230) * 100}
              strokeWidth={3}
              strokeColor={no2LineColor(aq.no2)}
              trailColor="#fff"
            />
          </td>
          <td>{Math.floor(aq.no2 * 100) / 100}</td>
        </tr>
        <tr>
          <td>SO2</td>
          <td>
            <Line
              percent={(aq.so2 / 350) * 100}
              strokeWidth={3}
              strokeColor={so2LineColor(aq.so2)}
              trailColor="#fff"
            />
          </td>
          <td>{Math.floor(aq.so2 * 100) / 100}</td>
        </tr>
      </table>
    </>
  );
}

export default AQPopup;

// Aditional functions

function pm2_5LineColor(pm2_5) {
  let LineColor;

  switch (true) {
    case pm2_5 > 75:
      LineColor = level4;
      break;
    case pm2_5 > 55:
      LineColor = level3;
      break;
    case pm2_5 > 35:
      LineColor = level2;
      break;
    case pm2_5 > 13:
      LineColor = level1;
      break;
    case pm2_5 > 0:
      LineColor = level0;
      break;
  }

  return LineColor;
}

function pm10LineColor(pm10) {
  let LineColor;

  switch (true) {
    case pm10 > 110:
      LineColor = level4;
      break;
    case pm10 > 80:
      LineColor = level3;
      break;
    case pm10 > 50:
      LineColor = level2;
      break;
    case pm10 > 20:
      LineColor = level1;
      break;
    case pm10 > 0:
      LineColor = level0;
      break;
  }

  return LineColor;
}

function o3LineColor(o3) {
  let LineColor;

  switch (true) {
    case o3 > 180:
      LineColor = level4;
      break;
    case o3 > 150:
      LineColor = level3;
      break;
    case o3 > 120:
      LineColor = level2;
      break;
    case o3 > 70:
      LineColor = level1;
      break;
    case o3 > 0:
      LineColor = level0;
      break;
  }

  return LineColor;
}

function no2LineColor(no2) {
  let LineColor;

  switch (true) {
    case no2 > 230:
      LineColor = level4;
      break;
    case no2 > 150:
      LineColor = level3;
      break;
    case no2 > 100:
      LineColor = level2;
      break;
    case no2 > 40:
      LineColor = level1;
      break;
    case no2 > 0:
      LineColor = level0;
      break;
  }

  return LineColor;
}

function so2LineColor(so2) {
  let LineColor;

  switch (true) {
    case so2 > 350:
      LineColor = level4;
      break;
    case so2 > 200:
      LineColor = level3;
      break;
    case so2 > 100:
      LineColor = level2;
      break;
    case so2 > 50:
      LineColor = level1;
      break;
    case so2 > 0:
      LineColor = level0;
      break;
  }

  return LineColor;
}
