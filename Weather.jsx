import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
const API_KEY = "d8395d193557f6d8cb03d38b69442b17";
export const Weather = () => {
  const [temps, setTemps] = useState([]);
  const koreaPlace = {
    Seoul: {
      lat: 37.56667,
      log: 126.97806,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${37.56667}&lon=${126.97806}&appid=${API_KEY}&units=metric`
      )
      .then(({ data }) => setTemps(data));
  }, []);
  console.log(temps);
  return (
    <>
      <div>테스트중입니다ㅣ.</div>
    </>
  );
};
