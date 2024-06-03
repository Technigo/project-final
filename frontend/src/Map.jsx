import {
  APIProvider,
  Map as ReactGoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";
import { Note } from "./Note";
import "./Map.css";

export const Map = (props) => {
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
        {props.notes.map((note) => (
          <Note key={note._id} {...note} />
        ))}
      </ReactGoogleMap>
    </APIProvider>
  );
};
