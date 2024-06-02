import { APIProvider, Map as ReactGoogleMap } from "@vis.gl/react-google-maps";
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
      />
    </APIProvider>
  );
};
