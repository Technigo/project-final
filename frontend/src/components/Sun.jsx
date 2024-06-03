import { useState, useEffect } from "react";

export const Sun = () => {
  const [data, setData] = useState([]);

  const fetchSun = async () => {
    try {
      const response = await fetch("http://localhost:8080/sun");
      if (!response.ok) {
        throw new Error("Couldn't get hold of the sun!");
      }
      const SunData = await response.json();
      setData(SunData);
    } catch (error) {
      console.error("fetch error", error);
    }
  };

  useEffect(() => {
    fetchSun();
  }, []);

  return (
    <div>
      <p>Sun Data</p>
      <div>
        {data.map((sun) => (
          <li key={sun._id}>{sun.sun}</li>
        ))}
      </div>
    </div>
  );
};
