import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("quito");
  const inputRef = useRef();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac595f7af9be1b51b1a8942f01b7806&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch(() => {
        alert("City not found");
      });
  }, [city]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather App</h1>
      {weather.weather[0].main === "Rain" ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/4150/4150897.png"
          alt="Rain"
        />
      ) : (
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
          alt="Sunny"
        />
      )}
      <h2>{weather.name}</h2>
      <p>Temperatura: {weather.main.temp}°C</p>
      <p>Temperatura min: {weather.main.temp_min}°C</p>
      <p>Temperatura max: {weather.main.temp_max}°C</p>
      <input ref={inputRef} type="text" placeholder="City" />
      <button onClick={() => setCity(inputRef.current.value)}>Search</button>
    </div>
  );
}
