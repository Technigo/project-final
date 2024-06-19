import { APIProvider, Map as ReactGoogleMap } from "@vis.gl/react-google-maps";

export const Map = (props) => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <ReactGoogleMap
        // here we choose from where on the map we want to start
        className="App-map"
        defaultCenter={props.defaultCenter}
        defaultZoom={props.defaultZoom}
        center={props.center}
        zoom={props.zoom}
        minZoom={4}
        gestureHandling="greedy"
        disableDefaultUI
        mapId="happyangrynote"
      >
        {props.children}
      </ReactGoogleMap>
    </APIProvider>
  );
};
