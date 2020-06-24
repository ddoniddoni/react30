import React, { useState } from "react";
import Drumkit from "./Drumkit";
import "./drumkit.css";

import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import boom from "./sounds/boom.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tom from "./sounds/tom.wav";
import tink from "./sounds/tink.wav";

export const Index = () => {
  return (
    <>
      <div className="keys">
        <Drumkit a="65" kbd="A" sound="clap" src={clap} />
        <Drumkit a="83" kbd="S" sound="hithat" src={hihat} />
        <Drumkit a="68" kbd="D" sound="kick" src={kick} />
        <Drumkit a="70" kbd="F" sound="openhat" src={openhat} />
        <Drumkit a="71" kbd="G" sound="boom" src={boom} />
        <Drumkit a="72" kbd="H" sound="ride" src={ride} />
        <Drumkit a="74" kbd="J" sound="snare" src={snare} />
        <Drumkit a="75" kbd="K" sound="tom" src={tom} />
        <Drumkit a="76" kbd="L" sound="tink" src={tink} />
      </div>

      {/* <div data-key="65" className="key">
        <kbd>A</kbd>
        <span className="sound">clap</span>
      </div>
      <audio data-key="65" src="sounds/clap.wav"></audio> */}
    </>
  );
};

export default Index;
