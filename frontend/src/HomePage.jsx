import { Link } from "react-router-dom";
import { Map } from "./Map";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <h1 className="HomePage-title">
        happy angry note <Link to="/new">new</Link>
      </h1>
      <div className="HomePage-map">
        <Map />
      </div>
    </div>
  );
};
