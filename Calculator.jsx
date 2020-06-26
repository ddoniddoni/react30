import React, { useState } from "react";

export const Calculator = () => {
  const [number, setNumber] = useState("");
  const [answer, setAnswer] = useState("");
  const [value, setValue] = useState("");

  const onClick = (e) => {};
  return (
    <>
      <div className="wrapper">
        <div>
          <form name="form">
            <input className="input" type="text" />
          </form>
        </div>
        <div>
          <input className="button" type="button" value="7" />
          <input className="button" type="button" value="8" />
          <input className="button" type="button" value="9" />
          <input className="button" type="button" value="*" />
        </div>

        <div>
          <input className="button" type="button" value="4" />
          <input className="button" type="button" value="5" />
          <input className="button" type="button" value="6" />
          <input className="button" type="button" value="+" />
        </div>

        <div>
          <input className="button" type="button" value="1" />
          <input className="button" type="button" value="2" />
          <input className="button" type="button" value="3" />
          <input className="button" type="button" value="-" />
        </div>

        <div>
          <input className="button" type="button" value="0" />
          <input className="button" type="button" value="." />
          <input className="button" type="button" value="/" />
          <input className="button" type="button" value="=" />
        </div>

        <div>
          <input className="clear" type="button" value="Clear" />
        </div>
      </div>
    </>
  );
};
