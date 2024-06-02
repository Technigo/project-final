import {
  APIProvider,
  Map as ReactGoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";
import { Note } from "./Note";
import "./Map.css";

export const Map = () => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <ReactGoogleMap
        className="Map"
        defaultCenter={{ lat: 62.3875, lng: 16.325556 }}
        defaultZoom={5}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId="happyangrynote"
      >
        <Note
          latitude={55.60587}
          longitude={13.00073}
          text="det är för varmt"
        />
      </ReactGoogleMap>
    </APIProvider>
  );
};
