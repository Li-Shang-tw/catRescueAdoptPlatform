import { useContext } from "react";
import { useForm } from "react-hook-form";
import { putCatAPI } from "../callAPI";
import { ModalOpenContext } from "../context/ModalOpenContext";
export default function FormForUpdateProgress({
  rescueProject,
  handleUpdatRescueCat,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //取得關閉modal的function
  const handleClose = useContext(ModalOpenContext);
  const onSubmit = async (data) => {
    //先取得目前金額
    let currentAmount = rescueProject.currentAmount;
    //再加上捐款金額
    currentAmount += parseInt(data.amount);
    //當目標金額達標，將專案轉成state 2(已完成)
    if (currentAmount >= rescueProject.targetAmount) {
      //更新進度
      await putCatAPI(rescueProject.id, {
        currentAmount: currentAmount,
        DonateRecord: [...rescueProject.DonateRecord, data],
        state: "2",
      });
      //更新狀態
      handleUpdatRescueCat({
        currentAmount: currentAmount,
        DonateRecord: [...rescueProject.DonateRecord, data],
        state: "2",
      });
      //關閉modal
      handleClose();
      alert("更新成功");
    } else {
      //更新進度
      await putCatAPI(rescueProject.id, {
        currentAmount: currentAmount,
        DonateRecord: [...rescueProject.DonateRecord, data],
      });
      //更新狀態
      handleUpdatRescueCat({
        currentAmount: currentAmount,
        DonateRecord: [...rescueProject.DonateRecord, data],
      });
      //關閉modal
      handleClose();
      alert("更新成功");
    }
  };
  return (
    <>
      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm ">
        <div className="flex flex-col items-center  mt-4">
          <h3 className="text-2xl font-bold">新增捐款</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              捐款的名字
            </label>
          </div>
          <div className="mt-2">
            <input
              {...register("name", { required: "姓名是必填" })}
              className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="name"
            />
            {errors.name?.message && (
              <small className="text-red-500">{errors.name.message}</small>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              捐款金額
            </label>
          </div>
          <div className="mt-2">
            <input
              {...register("amount", { required: "金額是必填" })}
              className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="name"
            />
            {errors.amount?.message && (
              <small className="text-red-500">{errors.amount.message}</small>
            )}
          </div>
        </div>

        <input
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
      </form>
    </>
  );
}
