import React from "react";
import "./loading.css";
import loader from "./loading.gif";

const Loading = () => {
  return (
    <>
      <div className="container">
        <div className="loading-overlay">
          <img style={{ height: " 50px" }} src={loader} alt="loading" />
        </div>
      </div>
    </>
  );
};

export default Loading;
