import { useState, useContext } from "react";
//載入救援資料的context
import { AdoptContext } from "../context/AdoptContext";
export default function AdoptContainer() {
  const adoptData = useContext(AdoptContext);
  const { adoptCats, setAdoptCats } = adoptData;
  console.log(adoptCats);
  return (
    <div>
      <h1>AdoptOverView</h1>
    </div>
  );
}
