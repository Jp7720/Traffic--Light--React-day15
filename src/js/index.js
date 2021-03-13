import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.scss";

//import your own components
import Home from "./component/Home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
