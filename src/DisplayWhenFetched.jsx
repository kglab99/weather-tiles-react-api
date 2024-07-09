import { useState, useEffect } from "react";
import FetchWeatherData from "./FetchWeather";
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
import Loading from "./Components/Loading";
import Error from "./Components/Error";
import next from '/next.png'
import back from '/back.png'

const DisplayWhenFetched = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [location, setLocation] = useState("auto:ip");
  const [searchInput, setSearchInput] = useState("");
  const [useGeo, setUseGeo] = useState(false);

  const { forecast, error, loading } = FetchWeatherData(location, useGeo);

  // Effect causes function to run only on initial render allowing search function to work
  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then(function (permissionStatus) {
      if (permissionStatus.state === 'granted') {
        setUseGeo(true);
      }
    });
  }, []); 

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

  const handleNextDay = () => {
    if (selectedDay < 2) {
      setSelectedDay(selectedDay + 1);
    }
  };

  const handlePreviousDay = () => {
    if (selectedDay > 0) {
      setSelectedDay(selectedDay - 1);
    }
  };

  const getDayName = () => {
    if (selectedDay === 0) return "Today";
    if (selectedDay === 1) return day1Name;
    if (selectedDay === 2) return day2Name;
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Enter location to search"
          value={searchInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleGeoLocation}>Use geolocation</button>
      </div>
      <div className="buttons">
        <button onClick={handlePreviousDay}><img src={back} alt="" /></button>
        <p>{getDayName()}</p>
        <button onClick={handleNextDay}><img src={next} alt="" /></button>
      </div>
      <TileCurrentWeather forecast={forecast} day={selectedDay} />
      <TileWind forecast={forecast} day={selectedDay} />
      <TileRain forecast={forecast} day={selectedDay} />
      <TileUV forecast={forecast} day={selectedDay} />
      {selectedDay === 0 && (
        <TileSunrise forecast={forecast} day={selectedDay} />
      )}
      <TileMoon forecast={forecast} day={selectedDay} />
      <TileVisibility forecast={forecast} day={selectedDay} />
      <TileHumidity forecast={forecast} day={selectedDay} />
      <TilePressure forecast={forecast} day={selectedDay} />
      {selectedDay === 0 && <TileAQ forecast={forecast} day={selectedDay} />}
    </>
  );
};

export default DisplayWhenFetched;
