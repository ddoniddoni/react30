import React, { useState } from "react";
import "./Drumkit.css";

const Drumkit = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}> +1</button>
      <button onClick={() => setValue(value - 1)}> -1</button>
    </>
  );
};

export default Drumkit;
