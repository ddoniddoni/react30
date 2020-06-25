import React, { useEffect, useState } from "react";
import "./drumkit.css";

export const Drumkit = (data) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <div data-key={data.a} className="key">
        <kbd>{data.kbd}</kbd>
        <span className="sound">{data.sound}</span>
      </div>
      <audio data-key={data.a} src={data.src}></audio>
    </>
  );
};
export default Drumkit;
