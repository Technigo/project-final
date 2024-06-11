import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment-timezone";
import { Cloudy } from "./iconFolder/weatherIcon/Cloudy";
import { Sunny } from "./iconFolder/weatherIcon/Sunny";
import { Rain } from "./iconFolder/weatherIcon/Rain";

export const Weather = ({ city, timezone, className }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(null);

  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const BASE_URL1 = "weather";
  const API_KEY = "0a3f5beba05e6db2d5da18ddf3283c92";
  const URL1 = `${BASE_URL}${BASE_URL1}?q=${city}&units=metric&appid=${API_KEY}`;

  const location = useLocation();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(URL1);
        const data = await res.json();
        setWeather(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching the weather data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weather) {
    return <div>Failed to fetch weather data.</div>;
  }

  let bgColor;
  let iconColor;
  let textColor;
  if (location.pathname === "/sweden") {
    bgColor = "bg-weather2";
    iconColor = "#FFFFFF";
    textColor = "text-cardBg";
  } else if (location.pathname === "/finland" || location.pathname === "/") {
    bgColor = "bg-weather1";
    iconColor = "#3B744E";
    textColor = "text-fontColor";
  }

  const description = weather.weather[0].description;
  const cityName = weather.name;
  const time = moment().tz(`${timezone}`).format("MMMM Do YYYY, h:mm:ss a");
  const temp = Math.round(weather.main.temp);
  return (
    <>
      <div
        className={`${bgColor} ${textColor} ${className} flex-col sm:h-[110px] sm:space-y-[20px] lg:space-y-[80px] p-3 max-h-full text-textdm md:text-textmd lg:text-textlg rounded  md:h-[250px] lg:h-[250px] md:w-[450px] lg:w-[700px]`}
      >
        <div className="flex flex-row content-center space-x-3">
          <div className="flex space-x-2">
            {description === "clear sky" ? (
              <Sunny stroke={iconColor} />
            ) : description === "Rain" ||
              description === "Drizzle" ||
              description === "Thunderstorm" ||
              "Light rain" ? (
              <Rain stroke={iconColor} />
            ) : description === "Clouds" ||
              description === "Fog" ||
              description === "Snow" ? (
              <Cloudy stroke={iconColor} />
            ) : (
              <Cloudy stroke={iconColor} />
            )}
            <p>{temp}°C</p>
          </div>
          <p>{time}</p>
        </div>
        <div>
          <p>
            {cityName}: {description}
          </p>
        </div>
      </div>
    </>
  );
};
