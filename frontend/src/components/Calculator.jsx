import { useState } from "react";

export const Calculator = () => {
  return <WeightOnPlanets />;
};

// Defines the gravity factors 
const gravityFactors = {
  Mercury: 0.38,
  Venus: 0.91,
  Earth: 1.0,
  Mars: 0.38,
  Jupiter: 2.34,
  Saturn: 1.06,
  Uranus: 0.92,
  Neptune: 1.19,
  Pluto: 0.063,
};

const calculateWeight = (weight, gravityFactor) => {
  return weight * gravityFactor;
};

const WeightOnPlanets = () => {
  const [weight, setWeight] = useState("");
  const [results, setResults] = useState({});

  const handleChange = (e) => {
    setWeight(e.target.value);
  };

  const handleCalculate = () => {
    const weightInKilos = weight;
    if (weightInKilos === null || weightInKilos <= 0) {
      alert("Please enter any items' weight in kilos, perhaps your pet? 🐩 🐾");
      return;
    }

    const newResults = {};
    for (const [planet, gravityFactor] of Object.entries(gravityFactors)) {
      newResults[planet] = calculateWeight(
        weightInKilos,
        gravityFactor
      ).toFixed(2);
    }
    setResults(newResults);
  };

  return (
    <div>
      <h2>Gravitational force converter</h2>
      <input
        type="number"
        value={weight}
        onChange={handleChange}
        placeholder="Enter a number here"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        {Object.entries(results).map(([planet, weight]) => (
          <div key={planet}>
            {planet}: {weight} kilos
          </div>
        ))}
      </div>
    </div>
  );
};


