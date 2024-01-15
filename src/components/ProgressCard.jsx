import ProgressBar from "./ProgressBar";
import { useState } from "react";
import ModalSet from "./ModalSet";
import EditBtn from "./EditBtn";
export default function ProgressCard({ rescueProject }) {
  //取得目前金額與目標金額與計算進度
  const currentAmount = rescueProject.currentAmount;
  const targetAmount = rescueProject.targetAmount;
  const progress = (currentAmount / targetAmount) * 100;

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between">
        <div>
          <p className="">目標 NT$ {targetAmount}</p>
          <p className="text-xl font-bold"> NT$ {currentAmount}</p>
        </div>
        <div>
          <ModalSet btn={<EditBtn>更新進度</EditBtn>} />
        </div>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
}
