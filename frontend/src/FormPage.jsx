import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LocationContext } from "./LocationContext";
import "./FormPage.css";

export const FormPage = () => {
  const navigate = useNavigate();
  const location = useContext(LocationContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      latitude: location.lat,
      longitude: location.lng,
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
      <form className="FormPage-form" onSubmit={onSubmit}>
        <input type="hidden" name="latitude" />
        <input type="hidden" name="longitude" />

        <label>
          <span className="FormPage-label">Note</span>
          <br />
          <textarea className="FormPage-textarea" name="text" />
        </label>
        <button className="FormPage-submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};
