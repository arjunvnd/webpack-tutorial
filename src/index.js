import React from "react";
import ReactDOM from "react-dom";

import MyImage from "./assets/dog.jpg";
import "./index.css";

const App = () => {
  return (
    <div>
      <div>Welcome to my-sssasrter</div>
      <img src={MyImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
