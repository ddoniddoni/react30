import React, { useState, useEffect } from "react";
import "./drumkit.css";

export const Drumkit = (data) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = (e) => {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log("어려워..", key);
  };

  useEffect(() => {
    window.addEventListener("keydown", playSound);
  }, []);

  return (
    <>
      <div data-key={data.datakey} className="key">
        <kbd>{data.kbd}</kbd>
        <span className="sound">{data.sound}</span>
      </div>
      <audio data-key={data.datakey} src={data.src}></audio>
    </>
  );
};

export default Drumkit;
