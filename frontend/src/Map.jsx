import { APIProvider, Map as ReactGoogleMap } from "@vis.gl/react-google-maps";

export const Map = () => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <ReactGoogleMap
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
};
