import { useEffect, useState } from "react";
// here i imported the router ... https://github.com/remix-run/react-router/tree/dev/examples/view-transitions
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Note } from "./components/Note";
import { HomePage } from "./components/HomePage";
import { FormPage } from "./components/FormPage";
import { LocationContext } from "./LocationContext";
import "./App.css";

const sweden = { lat: 62.3875, lng: 16.325556 };

const AppLayout = () => {
  let { pathname } = useLocation();
  const [notes, setNotes] = useState([]);
  const [location, setLocation] = useState(sweden);
  const [noteId, setNoteId] = useState("");

  useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/notes`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNotes(data));
    // fetch more notes, every time you change page
  }, [pathname]);

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
  // Plug in Material ui https://mui.com/base-ui/react-input/
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Angry happy note</h1>
        <ul className="App-menu">
          <li>
            <Link to="/" unstable_viewTransition>
              Note map
            </Link>
          </li>
          <li>
            <Link to="/new" unstable_viewTransition>
              Add note
            </Link>
          </li>
        </ul>
      </header>

      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          // here we choose from where on the map we want to start
          className="App-map"
          defaultCenter={sweden}
          defaultZoom={4}
          center={pathname === "/new" && location.lat && location}
          zoom={pathname === "/new" && location.lat !== sweden.lat && 16}
          gestureHandling="greedy"
          disableDefaultUI
          mapId="happyangrynote"
        >
          {pathname === "/" &&
            // this is so the user can open one note at a time
            notes.map((note) => (
              <Note
                key={note._id}
                {...note}
                open={note._id == noteId}
                onClick={() => {
                  if (note._id === noteId) {
                    setNoteId("");
                  } else {
                    setNoteId(note._id);
                  }
                }}
              />
            ))}
        </Map>
      </APIProvider>

      <div className="App-outlet">
        <LocationContext.Provider value={location}>
          <Outlet />
        </LocationContext.Provider>
      </div>
    </div>
  );
};

// https://github.com/remix-run/react-router/blob/dev/examples/view-transitions/src/main.tsx
// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/view-transitions?file=README.md this is how to make the note slide in and out
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/new",
        element: <FormPage />,
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
