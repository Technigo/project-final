import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "@mui/material/Button";
import { LocationContext } from "./LocationContext";
import "./FormPage.css";
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';


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
     
      <Paper elevation={3}>
        <form className="FormPage-form" onSubmit={onSubmit}>
          <input type="hidden" name="latitude" />
          <input type="hidden" name="longitude" />

       
          <TextField
          name="text"
            label="Note"
            multiline
            rows={4}
          />
          <Button variant="contained" className="FormPage-submit" type="submit">
            submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};
