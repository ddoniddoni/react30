import React, { useState, useRef, useEffect } from "react";

export const Calculator = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const inputEl = useRef(null);

  const numInput = (e) => {
    setValue(e.target.value);
  };

  const numClick = (e) => {
    setValue(value + e.target.value);
  };

  const calResult = () => {
    setResult(eval(value));
  };

  const numReset = () => {
    setResult("");
    setValue("");
  };

  const enterResult = (e) => {
    if (e.keyCode == "13") {
      calResult();
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="wrapper__cal">
          <div>
            <input
              className="input"
              value={value}
              onChange={numInput}
              ref={inputEl}
              onKeyDown={enterResult}
            ></input>
          </div>
          <div>
            <p className="result">결과 {result}</p>
          </div>
          <div>
            <input onClick={numClick} className="button" type="button" value="7" />
            <input onClick={numClick} className="button" type="button" value="8" />
            <input onClick={numClick} className="button" type="button" value="9" />
            <input onClick={numClick} className="button" type="button" value="*" />
          </div>

          <div>
            <input onClick={numClick} className="button" type="button" value="4" />
            <input onClick={numClick} className="button" type="button" value="5" />
            <input onClick={numClick} className="button" type="button" value="6" />
            <input onClick={numClick} className="button" type="button" value="+" />
          </div>

          <div>
            <input onClick={numClick} className="button" type="button" value="1" />
            <input onClick={numClick} className="button" type="button" value="2" />
            <input onClick={numClick} className="button" type="button" value="3" />
            <input onClick={numClick} className="button" type="button" value="-" />
          </div>

          <div>
            <input onClick={numClick} className="button" type="button" value="0" />
            <input onClick={numClick} className="button" type="button" value="." />
            <input onClick={numClick} className="button" type="button" value="/" />
            <input onClick={calResult} className="button" type="button" value="=" />
          </div>

          <div>
            <input onClick={numReset} className="clear" type="button" value="Clear" />
          </div>
        </div>
      </div>
    </>
  );
};
