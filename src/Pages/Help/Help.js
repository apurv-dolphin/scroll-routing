import React from "react";
import "./help.css";

export default function Help() {
  return (
    <div>
      <h1>Need Help????</h1>
      <p>If Yes then click on below button</p>
      <a href="#home">
        <button className="help-btn">Click Here To Find The Solution</button>
      </a>
    </div>
  );
}
