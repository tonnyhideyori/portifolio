import React from "react";

const LeftHeaderPic = props => {
  return (
    <div className="w3-display-container">
      <img
        src={require("../image/ed.jpg")}
        style={{ width: "100%" }}
        alt="Avatar"
      />
      <div className="w3-display-bottomleft w3-container w3-text-black">
        <h2>Edwin Beatus Ismail</h2>
      </div>
    </div>
  );
};
export default LeftHeaderPic;
