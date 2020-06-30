import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import useGeolocation from "react-hook-geolocation";

const API_KEY = "d8395d193557f6d8cb03d38b69442b17";
export const Weather = () => {
  const [temps, setTemps] = useState([]);
  const geolocation = useGeolocation();

  useEffect(() => {
    console.log(geolocation.latitude);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${37.56667}&lon=${126.97806}&appid=${API_KEY}&units=metric`
      )
      .then(({ data }) => setTemps(data));
  }, []);
  console.log(temps);
  return (
    <>
      <div>{geolocation.latitude}</div>
    </>
  );
};
