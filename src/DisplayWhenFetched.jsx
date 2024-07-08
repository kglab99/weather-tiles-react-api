import React, { useState } from "react";
import useWeatherData from "./FetchWithGeo";
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
import Loading from './Components/Loading';
import Error from "./Components/Error";

const DisplayWhenFetched = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [location, setLocation] = useState("auto:ip");
  const [searchInput, setSearchInput] = useState("");
  const [useGeo, setUseGeo] = useState(false);

  const { forecast, error, loading } = useWeatherData(location, useGeo);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    setLocation(searchInput);
    setSelectedDay(0);
    setUseGeo(false);
  };

  const handleGeoLocation = () => {
    setSelectedDay(0);
    setUseGeo(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleDaySelect = (dayIndex) => {
    setSelectedDay(dayIndex);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Enter location"
          value={searchInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleGeoLocation}>Geolocation</button>
      </div>
      <div className="buttons">
        <button onClick={() => handleDaySelect(0)}>Today</button>
        <button onClick={() => handleDaySelect(1)}>{day1Name}</button>
        <button onClick={() => handleDaySelect(2)}>{day2Name}</button>
      </div>
      <TileCurrentWeather forecast={forecast} day={selectedDay} />
      <TileWind forecast={forecast} day={selectedDay} />
      <TileRain forecast={forecast} day={selectedDay} />
      <TileUV forecast={forecast} day={selectedDay} />
      {selectedDay === 0 && <TileSunrise forecast={forecast} day={selectedDay} />}
      <TileMoon forecast={forecast} day={selectedDay} />
      <TileVisibility forecast={forecast} day={selectedDay} />
      <TileHumidity forecast={forecast} day={selectedDay} />
      <TilePressure forecast={forecast} day={selectedDay} />
      {selectedDay === 0 && <TileAQ forecast={forecast} day={selectedDay} />}
    </>
  );
};

export default DisplayWhenFetched;
