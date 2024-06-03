import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Map } from "./Map";
import "./HomePage.css";

export const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/notes";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);
  console.log(notes);
  return (
    <div className="HomePage">
      <h1 className="HomePage-title">
        happy angry note <Link to="/new">new</Link>
      </h1>
      <div className="HomePage-map">
        <Map notes={notes} />
      </div>
    </div>
  );
};
