import React, { useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
  Pin,
} from "@vis.gl/react-google-maps";

export const Note = ({ text, latitude, longitude, open, onClick }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={onClick}
        position={{ lat: latitude, lng: longitude }}
        title={text}
      >
        <Pin
          background={"#f0ed18"}
          borderColor={"#000000"}
          glyphColor={"#1334ef"}
        ></Pin>
      </AdvancedMarker>
      {open && (
        <InfoWindow anchor={marker} maxWidth={200} onCloseClick={onClick}>
          {text}
        </InfoWindow>
      )}
    </>
  );
};
