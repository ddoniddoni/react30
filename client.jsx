const React = require("react");
const ReactDom = require("react-dom");
const { hot } = require("react-hot-loader/root");

const Drumkit = require("./Drumkit");

const Hot = hot(Drumkit);

ReactDom.render(<Hot />, document.querySelector("#root"));
