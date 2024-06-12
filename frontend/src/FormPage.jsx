import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { LocationContext } from "./LocationContext";
import "./FormPage.css";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

export const FormPage = () => {
  const navigate = useNavigate();
  const location = useContext(LocationContext);
  const [error, setError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      latitude: location.lat,
      longitude: location.lng,
      text: formData.get("text"),
    };
    fetch(`${import.meta.env.VITE_BACKEND_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        navigate("/");
      } else {
        setError(true);
      }
    });
  };

  return (
    <div className="FormPage">
      <Paper elevation={3} className="FormPage-paper">
        <form className="FormPage-form" onSubmit={onSubmit}>
          <input type="hidden" name="latitude" />
          <input type="hidden" name="longitude" />

          <TextField name="text" label="Note" multiline rows={4} />
          {error && <p className="FormPage-error">Note creation failed.</p>}
          <Button
            style={{ background: "#1334ef" }}
            variant="contained"
            className="FormPage-submit"
            type="submit"
          >
            submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};
