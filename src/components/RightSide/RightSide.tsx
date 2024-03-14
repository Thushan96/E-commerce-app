import React from "react";
import "./RightSide.css";
import Cards from "../Card/Cards";

const RightSide: React.FC = () => {
  return (
    <div className="RightSide">
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default RightSide;
