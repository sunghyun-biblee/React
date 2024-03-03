import React from "react";
import "./Calitem.css";

export const Calitem = ({ onClick, value, mode }) => {
  return (
    <div className="wrap">
      <button
        className="item"
        id={value === 0 ? "zero" : null}
        value={value}
        onClick={onClick}
        style={{
          color: mode === "orange" || mode === "number" ? "white" : "black",
          backgroundColor:
            mode === "orange" ? "orange" : mode === "gray" ? "gray" : "#333",
          fontWeight: "bold",
        }}
      >
        {value}
      </button>
    </div>
  );
};
