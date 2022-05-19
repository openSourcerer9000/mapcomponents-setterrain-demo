import "./App.css";
import { MlNavigationTools } from "@mapcomponents/react-maplibre";
import TerrainLayer from "./components/TerrainLayer";
import MapLibreMap from "./components/MapLibreMap/MapLibreMap";

function App() {
  return (
    <>
      <MapLibreMap
        mapId="map_1"
        options={{
          zoom: 8,
          style: "https://wms.wheregroup.com/tileserver/style/osm-fiord-color.json",
          center: [7.0851268, 50.73884],
        }}
      />
      <TerrainLayer />
      <MlNavigationTools mapId="map_1" />
    </>
  );
}

export default App;
