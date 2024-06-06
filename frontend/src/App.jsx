import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Note } from "./Note";
import { HomePage } from "./HomePage";
import { FormPage } from "./FormPage";
import { LocationContext } from "./LocationContext";
import "./App.css";

const sweden = { lat: 62.3875, lng: 16.325556 };
// https://github.com/remix-run/react-router/blob/dev/examples/view-transitions/src/main.tsx 
const router = createBrowserRouter([
  {
    path: "/",
    Component() {
      let { pathname } = useLocation();
      const [notes, setNotes] = useState([]);
      const [location, setLocation] = useState(sweden);

      useEffect(() => {
        const url = "http://localhost:8080/notes";
        fetch(url)
          .then((response) => response.json())
          .then((data) => setNotes(data));
      }, []);
      console.log(notes);

      useEffect(() => {
        if (pathname === "/") {
        } else if (pathname === "/new") {
          navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          });
        }
      }, [pathname]);

      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">happy angry note</h1>
            <Link to="/" unstable_viewTransition>
              home
            </Link>
            .
            <Link to="/new" unstable_viewTransition>
              new
            </Link>
          </header>

          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <Map
              className="App-map"
              defaultCenter={sweden}
              defaultZoom={5}
              center={pathname === "/new" && location.lat && location}
              zoom={pathname === "/new" && location.lat !== sweden.lat && 16}
              gestureHandling="greedy"
              disableDefaultUI
              mapId="happyangrynote"
            >
              {pathname === "/" &&
                notes.map((note) => <Note key={note._id} {...note} />)}
            </Map>
          </APIProvider>

          <div className="App-outlet">
            <LocationContext.Provider value={location}>
              <Outlet />
            </LocationContext.Provider>
          </div>
        </div>
      );
    },
    children: [
      {
        index: true,
        Component() {
          return <HomePage />;
        },
      },
      {
        path: "/new",
        Component() {
          return <FormPage />;
        },
      },
    ],
  },
]);

// https://reactrouter.com/
export const App = () => (
  <RouterProvider
    router={router}
    future={{
      // Wrap all state updates in React.startTransition()
      v7_startTransition: true,
    }}
  />
);
