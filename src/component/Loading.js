import React from "react";
import "../css/spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container d-flex justify-content-center align-items-center vh-100">
      <div className="loading-spinner">
      </div>
    </div>
  );
}