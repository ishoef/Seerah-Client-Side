import Lottie from "lottie-react";
import React from "react";
import pageTurner from "../assets/lotties/Book.json";

export default function PageTurner() {
  return (
    <div className="">
      <Lottie
        style={{ width: "100px" }}
        animationData={pageTurner}
        loop={true}
      ></Lottie>
    </div>
  );
}
