import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";
import Home from "./Home";

const Hot = hot(Home);

ReactDom.render(<Hot />, document.querySelector("#root"));
