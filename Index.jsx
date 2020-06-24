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
        <Drumkit data-key="65" kbd={"A"} sound={"clap"} src={clap} />
        <Drumkit data-key="83" kbd={"S"} sound={"hihat"} src={hihat} />
        <Drumkit data-key="68" kbd={"D"} sound={"kick"} src={kick} />
        <Drumkit data-key="70" kbd={"F"} sound={"openhat"} src={openhat} />
        <Drumkit data-key="71" kbd={"G"} sound={"boom"} src={boom} />
        <Drumkit data-key="72" kbd={"H"} sound={"ride"} src={ride} />
        <Drumkit data-key="74" kbd={"J"} sound={"snare"} src={snare} />
        <Drumkit data-key="75" kbd={"K"} sound={"tom"} src={tom} />
        <Drumkit data-key="76" kbd={"L"} sound={"tink"} src={tink} />
      </div>
    </>
  );
};

export default Index;
