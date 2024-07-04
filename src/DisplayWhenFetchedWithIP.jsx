import { useState, useEffect } from "react";
import FetchWithIP from "./FetchWithIP";
// import FetchWithGeo from "./FetchWithGeo";
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

const DisplayWhenFetchedIPAndChooseDay = () => {
  // const [forecast, setForecast] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  let { forecast, error, loading } = FetchWithIP();

  // Set displayed day to 0
  const [selectedDay, setSelectedDay] = useState(0);

  // Function to handle day selection
  const handleDaySelect = (dayIndex) => {
    setSelectedDay(dayIndex);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <div className="buttons">
        <button onClick={() => handleDaySelect(0)}>Today</button>
        <button onClick={() => handleDaySelect(1)}>{day1Name}</button>
        <button onClick={() => handleDaySelect(2)}>{day2Name}</button>
      </div>
      <TileCurrentWeather forecast={forecast} day={selectedDay} />
      <TileWind forecast={forecast} day={selectedDay} />
      <TileRain forecast={forecast} day={selectedDay} />
      <TileUV forecast={forecast} day={selectedDay} />
      {selectedDay == 0 && <TileSunrise forecast={forecast} day={selectedDay} />}
      <TileMoon forecast={forecast} day={selectedDay} />
      <TileVisibility forecast={forecast} day={selectedDay} />
      <TileHumidity forecast={forecast} day={selectedDay} />
      {/* Currently sunrise displayed only on day 0 */}
      <TilePressure forecast={forecast} day={selectedDay} />
      {selectedDay == 0 &&  <TileAQ forecast={forecast} day={selectedDay} />    }
    </>
  );
};

export default DisplayWhenFetchedIPAndChooseDay;
