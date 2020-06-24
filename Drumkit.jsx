import React from "react";
import "./drumkit.css";

export const Drumkit = (data) => {
  console.log(data);
  return (
    <>
      <div data-key={data.datakey} className={data.className}>
        <kbd>{data.kbd}</kbd>
        <span className="sound">{data.sound}</span>
      </div>

      <audio data-key={data.datakey} src="sounds/clap.wav"></audio>
    </>
  );
};

export default Drumkit;
