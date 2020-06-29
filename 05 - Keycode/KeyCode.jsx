import React, { useEffect, useState } from "react";
import "./styles.css";

export const KeyCode = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [eventCode, setEventCode] = useState("");

  const pressKeydown = (e) => {
    setName(e.key);
    setCode(e.keyCode);
    setEventCode(e.code);

    e.returnValue = false;
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
          <div className="keycode__bigcode">{code}</div>
        </div>
        <div className="wrapper__all">
          <div className="wrapper__name">
            <div className="keycode__ename">event.key</div>
            <div className="keycode__name">{name}</div>
          </div>
          <div className="wrapper__which">
            <div className="keycode__ewhich">event.which</div>
            <div className="keycode__which">{code}</div>
          </div>
          <div className="wrapper__ecode">
            <div className="keycode__ecode">event.code</div>
            <div className="keycode__eventCode">{eventCode}</div>
          </div>
        </div>
      </div>
    </>
  );
};
