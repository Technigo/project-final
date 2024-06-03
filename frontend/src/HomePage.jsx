import { Map } from "./Map";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <h1 className="HomePage-title">happy angry note</h1>
      <div className="HomePage-map">
        <Map />
      </div>
    </div>
  );
};
