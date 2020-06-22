import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

import Drumkit from "./Drumkit";

const Hot = hot(Drumkit);

ReactDom.render(<Hot />, document.querySelector("#root"));
