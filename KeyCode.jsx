import React, { useEffect, useState } from "react";
import "./styles.css";
import { KeyCodeDetail } from "./KeyCodeDetail";

export const KeyCode = () => {
  const [value, setValue] = useState("");

  const pressKeydown = (e) => {
    console.log(e);
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
      </div>
    </>
  );
};
