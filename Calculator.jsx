import React, { useState, useRef } from "react";

export const Calculator = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const inputEl = useRef(null);

  const onClick = (e) => {
    setValue(value + e.target.value);
  };

  const calResult = () => {
    setResult(eval(value));
  };

  const numReset = () => {
    setResult("");
    setValue("");
  };
  return (
    <>
      <div className="wrapper">
        <div>
          <form name="form">
            <input
              className="input"
              value={value}
              onChange={onClick}
              ref={inputEl}
            ></input>
          </form>
        </div>
        <div>
          <p>{result}</p>
        </div>
        <div>
          <input onClick={onClick} className="button" type="button" value="7" />
          <input onClick={onClick} className="button" type="button" value="8" />
          <input onClick={onClick} className="button" type="button" value="9" />
          <input onClick={onClick} className="button" type="button" value="*" />
        </div>

        <div>
          <input onClick={onClick} className="button" type="button" value="4" />
          <input onClick={onClick} className="button" type="button" value="5" />
          <input onClick={onClick} className="button" type="button" value="6" />
          <input onClick={onClick} className="button" type="button" value="+" />
        </div>

        <div>
          <input onClick={onClick} className="button" type="button" value="1" />
          <input onClick={onClick} className="button" type="button" value="2" />
          <input onClick={onClick} className="button" type="button" value="3" />
          <input onClick={onClick} className="button" type="button" value="-" />
        </div>

        <div>
          <input onClick={onClick} className="button" type="button" value="0" />
          <input onClick={onClick} className="button" type="button" value="." />
          <input onClick={onClick} className="button" type="button" value="/" />
          <input
            onClick={calResult}
            className="button"
            type="button"
            value="="
          />
        </div>

        <div>
          <input
            onClick={numReset}
            className="clear"
            type="button"
            value="Clear"
          />
        </div>
      </div>
    </>
  );
};
