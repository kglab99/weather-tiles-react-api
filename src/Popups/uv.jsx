import TopBar from "../Components/TopBar";
import "reactjs-popup/dist/index.css";
import "../css/Tiles.css";

function UVPopup() {
  return (
    <>
      <TopBar text="UV index" img="uv" infoIcon={false} />
      <h2>What is the UV Index?</h2>
      <p className="info">
        The UV Index is a measure of the sun&apos;s ultraviolet (UV) radiation
        strength at a specific location and time. It helps you understand your
        risk of overexposure to UV rays, which can cause skin damage, sunburn,
        and increase the risk of skin cancer.
      </p>
      <h2>UV Index Scale:</h2>
      <ul>
        <li>
          <strong>0-2 (Low)</strong>: Minimal risk. You can safely enjoy being
          outside with minimal sun protection.
        </li>
        <li>
          <strong>3-5 (Moderate)</strong>: Moderate risk. Take precautions if
          you&apos;ll be outside, such as wearing a hat and sunglasses, and
          using sunscreen.
        </li>
        <li>
          <strong>6-7 (High)</strong>: High risk. Reduce time in the sun between
          10 a.m. and 4 p.m. Wear protective clothing, a wide-brimmed hat, and
          sunglasses. Apply and reapply sunscreen frequently.
        </li>
        <li>
          <strong>8-10 (Very High)</strong>: Very high risk. Take extra
          precautions. Seek shade during midday hours. Wear protective clothing
          and apply broad-spectrum sunscreen with SPF 30+.
        </li>
        <li>
          <strong>11+ (Extreme)</strong>: Extreme risk. Avoid sun exposure
          during midday hours. Take all precautions: wear protective clothing,
          use a wide-brimmed hat, sunglasses, and apply broad-spectrum sunscreen
          SPF 30+ every two hours.
        </li>
      </ul>
    </>
  );
}

export default UVPopup;
