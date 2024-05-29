//import { Link } from "react-router-dom";
//import { Planet } from "./Planet";
import { useState, useEffect } from "react";
// import planets from """

export const PlanetCards = () => {
  const URL = "https://project-final-45vw.onrender.com/planets";
  //import.meta.env.API_KEY_PLANETS;
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setPlanets(json.results);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(URL);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return <></>;
};

{
  /* <div className="Planets">
{PlanetCards.map((planet) => (
  <Link key={planet.name} to={`/planets/${planet.name}`}>
    <Planet name={planet.name} />
  </Link>
))}
</div> */
}
