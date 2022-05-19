import { useEffect } from "react";
import { useMap } from "@mapcomponents/react-maplibre";

const TerrainLayer = (props) => {
  const mapHook = useMap({ mapId: "map_1" });

  useEffect(() => {
    if (!mapHook.map) return;

    if (!mapHook.map.map.getSource("terrain")) {
      mapHook.map.map.addSource("terrain", {
        type: "raster-dem",
        tiles: ["https://vtc-cdn.maptoolkit.net/terrainrgb/{z}/{x}/{y}.webp"],
        encoding: "mapbox",
        maxzoom: 14,
        minzoom: 4,
      });
    }
    mapHook.map.map.setTerrain({ source: "terrain", exaggeration: 1 });
  }, [mapHook.map]);

  return <></>;
};

export default TerrainLayer;
