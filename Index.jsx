import React, { useState } from "react";
import Drumkit from "./Drumkit";
import "./drumkit.css";

export const Index = () => {
  const [datakey, setDatakey] = useState();
  const [className, setClassName] = useState();
  const [kbd, setKbd] = useState();
  const [sound, setSound] = useState();

  return (
    <>
      <div className="keys">
        <Drumkit data-key={65} className={"key"} kbd={"A"} sound={"clap"} />
        <Drumkit data-key={83} className={"key"} kbd={"S"} sound={"hihat"} />
        <Drumkit data-key={68} className={"key"} kbd={"D"} sound={"kick"} />
        <Drumkit data-key={70} className={"key"} kbd={"F"} sound={"openhat"} />
        <Drumkit data-key={71} className={"key"} kbd={"G"} sound={"boom"} />
        <Drumkit data-key={72} className={"key"} kbd={"H"} sound={"ride"} />
        <Drumkit data-key={74} className={"key"} kbd={"J"} sound={"snare"} />
        <Drumkit data-key={75} className={"key"} kbd={"K"} sound={"tom"} />
        <Drumkit data-key={76} className={"key"} kbd={"L"} sound={"tink"} />
      </div>
    </>
  );
};

export default Index;
