import { useForm } from "react-hook-form";

import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";

export default function FormforCreateRescue() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      {" "}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex flex-col items-center  mt-10">
          <h3 className="text-2xl font-bold">新增救援專案</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                貓的名字
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
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                年齡分類
              </label>
            </div>

            <div className="mt-2">
              <select
                id="age"
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("age", {
                  required: "請選擇年齡分類",
                })}
              >
                <option value="0">未分類</option>
                <option value="1">幼貓</option>
                <option value="2">成貓</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="riskLevel"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                危險程度
              </label>
            </div>

            <div className="mt-2">
              <select
                id="riskLevel"
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("riskLevel", {
                  required: "請選擇危險程度",
                })}
              >
                <option value="0">未分類</option>
                <option value="1">輕度</option>
                <option value="2">中度</option>
                <option value="3">重度</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                您所在的地區
              </label>
            </div>

            <div className="mt-2">
              <select
                id="location"
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("location", {
                  required: "請選擇地區",
                })}
              >
                <option value="taipei">台北</option>
                <option value="new-taipei">新北</option>
                <option value="taichung">台中</option>
                <option value="tainan">台南</option>
                <option value="kaohsiung">高雄</option>
                <option value="keelung">基隆</option>
                <option value="hsinchu">新竹</option>
                <option value="chiayi">嘉義</option>
                <option value="taoyuan">桃園</option>
                <option value="miaoli">苗栗</option>
                <option value="changhua">彰化</option>
                <option value="nantou">南投</option>
                <option value="yunlin">雲林</option>
                <option value="pingtung">屏東</option>
                <option value="yilan">宜蘭</option>
                <option value="hualien">花蓮</option>
                <option value="taitung">台東</option>
                <option value="penghu">澎湖</option>
                <option value="kinmen">金門</option>
                <option value="lienchiang">連江</option>
                <option value="overseas">海外</option>
              </select>

              {errors.location?.message && (
                <small className="text-red-500">
                  {errors.location.message}
                </small>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="symptoms"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                症狀
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("symptoms", { required: "症狀是必填" })}
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="symptoms"
              />
              {errors.symptoms?.message && (
                <small className="text-red-500">
                  {errors.symptoms.message}
                </small>
              )}
            </div>
          </div>

          <input
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </form>
      </div>
    </>
  );
}
