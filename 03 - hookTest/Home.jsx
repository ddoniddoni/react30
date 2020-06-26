import React, { useState, useEffect } from "react";
import "./styles.css";
import { Counter } from "./Counter";
import { Info } from "./Info";
import { ContextSample } from "./ContextSample";
import { Average } from "./Average";

const Home = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
        <hr />
      </div>
      {visible && <Counter />}
      {visible && <Info />}
      <ContextSample />
      <Average />
    </>
  );
};

export default Home;
