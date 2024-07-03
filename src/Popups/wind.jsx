import TopBar from "../Components/TopBar";
import "reactjs-popup/dist/index.css";
import "../css/Tiles.css";
import WindChart from "../Charts/wind";

function WindPopup({ forecast, day }) {
  return (
    <>
      <TopBar text="Wind speed" img="wind" infoIcon={false} />
      <h2>Wind chart</h2>
      <WindChart forecast={forecast} day={day} />
    </>
  );
}

export default WindPopup;
