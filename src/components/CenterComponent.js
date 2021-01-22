import React, { useState } from "react";
import QAndA from "./QAndA";
import { data } from "../data";
import "./CenterComponent.css";

const CenterComponent = () => {
  const lenData = data.length;
  const qAndAs = data;
  const [isExpanded, setIsExpanded] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  //   console.log(isExpanded);

  return (
    <div className="center-component">
      <h1 className="title">Questions and Answers about Login</h1>
      <div className="right-half">
        {qAndAs.map((qAndA) => {
          return <QAndA key={qAndA.id} {...qAndA} />;
        })}
      </div>
    </div>
  );
};

export default CenterComponent;
