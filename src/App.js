import "./App.css";
import { MlNavigationTools } from "@mapcomponents/react-maplibre";
import TerrainLayer from "./components/TerrainLayer";
import MapLibreMap from "./components/MapLibreMap/MapLibreMap";

// const yourMapTilerAPIkey = 

function App() {
  return (
    <>
      <MapLibreMap
        mapId="map_1"
        options={{
          zoom: 17,
          style: `https://api.maptiler.com/maps/hybrid/style.json?key=${yourMapTilerAPIkey}`,
          center: [-93.32780,29.8834],
          pitch:85
        }}
      />
      <TerrainLayer />
      <MlNavigationTools mapId="map_1" />
    </>
  );
}

export default App;
