import React, { useEffect, useState } from "react";
import "./styles.css";

export const KeyCode = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [eventCode, setEventCode] = useState("");

  const pressKeydown = (e) => {
    console.log(e);
    setName(e.key);
    setCode(e.keyCode);
    setEventCode(e.code);
  };

  useEffect(() => {
    window.addEventListener("keydown", pressKeydown);
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="wrapper__text">
          <p>자바스크립트 개발을 위한 키보드 Keycode</p>
        </div>
        <div className="wrapper__keycode">
          <div className="keycode__name">{name}</div>
          <div className="keycode__code">{code}</div>
          <div className="keycode__eventCode">{eventCode}</div>
        </div>
      </div>
    </>
  );
};
