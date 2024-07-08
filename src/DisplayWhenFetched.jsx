import React, { useState } from "react";
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
  const [selectedDay, setSelectedDay] = useState(0);
  const [location, setLocation] = useState("auto:ip"); // State for location
  const [searchInput, setSearchInput] = useState(""); // State for input value
  const { forecast, error, loading } = FetchWithIP(location);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value); // Update local input value
  };

  const handleSearch = () => {
    // Trigger search based on 'searchInput'
    setLocation(searchInput); // Update location state
    setSelectedDay(0); // Reset selected day when searching
  };

  const handleKeyPress = (event) => {
    // Trigger search if Enter key is pressed (key code 13)
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleDaySelect = (dayIndex) => {
    setSelectedDay(dayIndex);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error occurred: {error}</p>;

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Enter location"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Listen for Enter key press
        />
        <button onClick={handleSearch}>Search</button>
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
