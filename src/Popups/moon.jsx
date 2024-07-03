import TopBar from '../Components/TopBar';
import 'reactjs-popup/dist/index.css';
import '../css/Tiles.css';

function MoonPopup() {
  
    return(
        <>
            <TopBar text="Moonphase" img="moon" infoIcon={false}/>
            <h2>What is the moon phase?</h2>
            <p className="info">
            A moon phase refers to the shape of the directly sunlit portion of the Moon as 
            viewed from Earth. This shape changes in a cyclic pattern as the Moon orbits Earth. 
            The cycle of the Moon&apos;s phases is called a lunation and takes about 29.5 days to 
            complete. There are eight distinct phases of the Moon:
            </p>
            <h2>UV Index Scale:</h2>
            <ul>
                <li><strong>New Moon</strong>: The Moon is positioned between the Earth and the Sun. The side of the Moon facing Earth is not illuminated, making the Moon invisible in the night sky.</li>
                <li><strong>Waxing Crescent</strong>: A small sliver of the Moon becomes visible after the New Moon. The crescent appears to grow larger each night.</li>
                <li><strong>First Quarter</strong>: Half of the Moon is illuminated, and it appears as a half-circle. This phase occurs approximately one week after the New Moon.</li>
                <li><strong>Waxing Gibbous</strong>: More than half of the Moon is illuminated, and it continues to grow toward a full moon.</li>
                <li><strong>Full Moon</strong>: The entire face of the Moon is illuminated, making it fully visible in the night sky. This phase occurs when the Earth is between the Sun and the Moon.</li>
                <li><strong>Waning Gibbous</strong>: After the Full Moon, the illumination begins to decrease. More than half of the Moon is still visible.</li>
                <li><strong>Last Quarter</strong>: Also known as the Third Quarter, half of the Moon is illuminated, but the opposite side compared to the First Quarter.</li>
                <li><strong>Waning Crescent</strong>: A small sliver of the Moon is visible, decreasing until it becomes a New Moon again.</li>
             </ul>
        </>
    )
  }

export default MoonPopup