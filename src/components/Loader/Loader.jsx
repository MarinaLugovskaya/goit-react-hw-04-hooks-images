import React from "react";
import Loader from "react-loader-spinner";
// import style from "./loader.module.css";

export default function Spinner() {
  return (
    <div className="loader">
      <Loader type="Bars" color="#00BFFF" height={60} width={80} />
    </div>
  );
}
