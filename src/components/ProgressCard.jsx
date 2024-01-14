import ProgressBar from "./ProgressBar";
import { useState } from "react";
export default function ProgressCard({ rescueProject }) {
  //取得目前金額與目標金額與計算進度
  const currentAmount = rescueProject.currentAmount;
  const targetAmount = rescueProject.targetAmount;
  const progress = (currentAmount / targetAmount) * 100;

  return (
    <div className="bg-white">
      <div>
        <p className="">目標 NT$ {targetAmount}</p>
        <p className="text-xl font-bold"> NT$ {currentAmount}</p>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
}
