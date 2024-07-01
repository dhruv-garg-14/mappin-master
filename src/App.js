
import { Icon, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Routes from "./routes";
import markers from './marker'
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {

  const [start, setStart] = useState(0)
  const [dest, setDest] = useState(0)
  const [choose, setChoose] = useState(0)
  const [data, setData] = useState([])
  const [display, setDisplay] = useState(false)



  const customIcon2 = new Icon({
    iconUrl: require('./icons/marker-icon.png'),
    iconSize: [20, 20]
  })
  const customIcon = new Icon({
    iconUrl: require('./icons/marker-icon.png'),
    iconSize: [20, 20]
  })

  useEffect(() => {
    setChoose(1)
  }, [start])
  useEffect(() => {
    setChoose(0)
  }, [dest])


  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const a = start
    const b = dest
    if (a == b)
      return;
    try {
      const response = await fetch(`http://localhost:5000/shortd/${a}/${b}`);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error('Error:', error);
    }

    setDisplay(true)
  }

  const onresetHandler = async () => {
    setData([])
    setStart(0)
    setDest(0)
    setChoose(0)
    setDisplay(false)
  }

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="marker-cluster">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      // iconSize: point(33, 33, true)
    })
  }

  return (
    <div className="App">
      <div className="heading">BetterWay</div>


      <div>
        <div className="show-results">
          {/* <p>{markers.length}</p> */}
          <h2>Source: {start}</h2>
          <h2>Destination: {dest}</h2>
          <div className='projectDisplay'>
            {display && <Routes dataPoint={data} />}
          </div>
          <button className="btn" onClick={onsubmitHandler}>Submit</button>
          <button className="btn" onClick={onresetHandler}>Reset</button>
          <br />
        </div>

        <MapContainer center={[26.191614, 91.694497]} zoom={15.4} maxZoom={16}>
          {/* <TileLayer
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          /> */}
          <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg"
        />
          {/* var Stadia_AlidadeSatellite = L.tileLayer('', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
}); */}

          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}
            disableClusteringAtZoom={15}
          >

            {markers.filter(marker => !display || data.path?.includes(marker.info)).map((marker) => (
              <Marker position={marker.geocode} icon={(data.path?.includes(marker.info)) ? customIcon : customIcon2}>
                <Popup>
                  <b>{marker.info}</b> {marker.text}<br />
                  <button onClick={() => { (choose) ? setDest(marker.info) : setStart(marker.info) }}>
                    {(choose) ? 'dest' : 'start'}
                  </button>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>

      </div>

    </div>
  );
}

export default App;
