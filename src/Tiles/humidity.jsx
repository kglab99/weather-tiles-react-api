import '../css/Tiles.css'
import TopBar from '../Components/TopBar';
import { tileSquareStyle, buttonStyle } from '../Additional/styles';


function TileHumidity({forecast, day}) {

    return (
        <div className="tile-square" style={tileSquareStyle}>
            <TopBar text="Humidity" img="humidity" infoIcon={false}/>
            <VisContent forecast={forecast} day={day} />
        </div>
    )

}

export default TileHumidity


function VisContent({forecast, day}) {
    let humidity = forecast.forecast.forecastday[day].day.avghumidity;
    let dewPoint = Math.floor(forecast.forecast.forecastday[day].day.avgtemp_c-((100-humidity)/5))

  return (
    <div className="content uv">
          <div className="top">
              <h1 className="value">{humidity}%</h1>
          </div>
          <p className="text-long">Today&apos;s average dewpoint is {dewPoint}°C</p>
    </div>
  )
}