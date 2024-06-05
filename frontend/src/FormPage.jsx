import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Map } from "./Map";
import "./FormPage.css";

export const FormPage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const latitudeInput = document.querySelector('input[name="latitude"]');
      const longitudeInput = document.querySelector('input[name="longitude"]');
      latitudeInput.value = latitude;
      longitudeInput.value = longitude;
    });
  }, []);
  console.log(location);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      latitude: formData.get("latitude"),
      longitude: formData.get("longitude"),
      text: formData.get("text"),
    };
    console.log(data);
    fetch("http://localhost:8080/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        console.log("note created");
        navigate("/");
      } else {
        console.log("note not created");
      }
    });
  };

  return (
    <div className="FormPage">
      <h1 className="FormPage-title">happy angry note</h1>
      <div className="FormPage-map">
        <Map
          notes={[]}
          center={location.lat && location}
          zoom={location.lat && 16}
        />
      </div>
      <form className="FormPage-form" onSubmit={onSubmit}>
        <input type="hidden" name="latitude" />
        <input type="hidden" name="longitude" />

        <label>
          <span>Note</span>
          <br />
          <textarea name="text" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
