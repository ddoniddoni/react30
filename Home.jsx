import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(0);

  const plusValue = () => {
    setValue(value + 1);
  };

  const minusValue = () => {
    setValue(value - 1);
  };
  return (
    <>
      <div>
        <p>{value}</p>
        <button onClick={plusValue}>+</button>
        <button onClick={minusValue}>-</button>
      </div>
    </>
  );
};

export default Home;
