import ProgressBar from "./ProgressBar";
import { useState, useContext } from "react";
import ModalSet from "./ModalSet";
import EditBtn from "./EditBtn";
import FormForUpdateProgress from "./FormForUpdateProgress";
import FormTransterToAdopt from "./FormTransterToAdopt";
import Chip from "@mui/material/Chip";

import { CurrentUserContext } from "../context/CurrentUserContext";
export default function ProgressCard({ rescueProject, handleUpdatRescueCat }) {
  //取得目前金額與目標金額與計算進度
  const currentAmount = rescueProject.currentAmount;
  const targetAmount = rescueProject.targetAmount;
  const progress = (currentAmount / targetAmount) * 100;
  //取得current user的資料
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center mb-2">
            {rescueProject.state === "2" && (
              <div className="mr-2">
                <Chip label="達標" color="success" />
              </div>
            )}

            <p>目標 NT$ {targetAmount}</p>
          </div>

          <p className="text-xl font-bold"> NT$ {currentAmount}</p>
        </div>
        <div>
          {rescueProject.state === "1" &&
            rescueProject.rescuerId === currentUser.id && (
              <div className="flex justify-end">
                <ModalSet
                  btn={<EditBtn>更新進度</EditBtn>}
                  form={
                    <FormForUpdateProgress
                      rescueProject={rescueProject}
                      handleUpdatRescueCat={handleUpdatRescueCat}
                    />
                  }
                />
              </div>
            )}
          {rescueProject.state === "2" && (
            <ModalSet
              btn={<EditBtn>轉成收養專站</EditBtn>}
              form={
                <FormTransterToAdopt
                  rescueProject={rescueProject}
                  handleUpdatRescueCat={handleUpdatRescueCat}
                />
              }
            />
          )}
        </div>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
}
