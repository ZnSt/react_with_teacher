import React from "react";
import ReactDOM from "react-dom/client";
import imageJson from "./assets/images.json";

const MyImage = (props) => {
  console.log(props);
  return <img src={props.src} width={props.width} height={props.height} alt="" />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyImage src={imageJson[0]} width="300" height="300" alt="" />);
