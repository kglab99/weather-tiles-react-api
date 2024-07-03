import '../css/Tiles.css'
import TopBar from '../Components/TopBar';
import { tileSquareStyle, buttonStyle } from '../Additional/styles';


function TileVisibility({forecast, day}) {



    return (
        <div className="tile-square" style={tileSquareStyle}>
            <TopBar text="Visibility" img="vis" infoIcon={false}/>
            <VisContent forecast={forecast} day={day} />
        </div>
    )

}

export default TileVisibility


function VisContent({forecast, day}) {
    let visibility = forecast.forecast.forecastday[day].day.avgvis_km;
    let visibilityText;
    
    if (visibility < 1) {
        visibilityText = "Light fog"
    } else if (visibility < 2) {
        visibilityText = "Thin fog"
    } else if (visibility < 4) {
        visibilityText = "Haze"
    } else if (visibility < 10) {
        visibilityText = "Ligh haze"
    } else {
        visibilityText = "Clear"
    }

  return (
    <div className="content uv">
          <div className="top">
              <h1 className="value">{visibility}km</h1>
          </div>
          <p className="text-long">{visibilityText}</p>
    </div>
  )
}