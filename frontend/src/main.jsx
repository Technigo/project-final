import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
// import { CarouselProvider } from "./contexts/CarouselContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CarouselProvider> */}
       <App />
    {/* </CarouselProvider> */}
  </React.StrictMode>
);
