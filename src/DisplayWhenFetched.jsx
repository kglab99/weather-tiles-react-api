import { useState } from "react";
import FetchWithIP from "./FetchWithIP";
import TileCurrentWeather from "./Tiles/current-weather";
import { day1Name, day2Name } from "./Additional/getDayNames";
import TileWind from "./Tiles/wind";
import TileRain from "./Tiles/rain";
import TileUV from "./Tiles/uv";
import TileMoon from "./Tiles/moonphase";
import TileVisibility from "./Tiles/visibility";
import TileHumidity from "./Tiles/humidity";
import TileSunrise from "./Tiles/sunrise";
import TilePressure from "./Tiles/pressure";
import TileAQ from "./Tiles/airquality";


const DisplayWhenFetched = () => {
  let { forecast, error, loading } = FetchWithIP();
  // let day = 0;
  let [day, setDay] = useState(0)

  let day0 = () => {
    setDay(0)
    console.log(day);

  }

  let day1 = () => {
    setDay(1)
    console.log(day);

  }

  let day2 = () => {
    setDay(2)
    console.log(day);

  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  console.log(day);

  return (
      <>
        <div className="buttons">
          <button onClick={day0}>Today</button>
          <button onClick={day1}>{day1Name}</button>
          <button onClick={day2}>{day2Name}</button>
        </div>
        <TileCurrentWeather forecast={forecast} day={day}/>
        <TileWind forecast={forecast} day={day}/>
        <TileRain forecast={forecast} day={day}/>
        <TileUV forecast={forecast} day={day}/>
        <TileMoon forecast={forecast} day={day}/>
        <TileVisibility forecast={forecast} day={day}/>
        <TileHumidity forecast={forecast} day={day}/>
        {day == 0 &&         
          <TileSunrise forecast={forecast} day={day}/>
        }
        <TilePressure forecast={forecast} day={day}/>
        <TileAQ forecast={forecast} day={day}/>

      </>
  );
};

export default DisplayWhenFetched;


