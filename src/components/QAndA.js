import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import "./QAndA.css";

const QAndA = ({ id, question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expand = () => {
    console.log("Click");
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="q-and-a-container">
      <div className="question-expand-container">
        <h2 className="question">{question}</h2>
        {isExpanded ? (
          <AiFillMinusCircle className="expand" onClick={expand} />
        ) : (
          <AiFillPlusCircle className="expand" onClick={expand} />
        )}
      </div>
      {isExpanded && <p className="answer">{answer}</p>}
    </div>
  );
};

export default QAndA;
