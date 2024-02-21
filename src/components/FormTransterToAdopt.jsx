import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { ModalOpenContext } from "../context/ModalOpenContext";

import { getRescuingCatsAPI, putUserAPI, putCatAPI } from "../callAPI";
import { useNavigate } from "react-router-dom";

export default function FormforTransterToAdopt({ projectId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  //---取得登入者資料-----
  //取得userContext的user
  const userData = useContext(CurrentUserContext);
  const { currentUser, setCurrentUser } = userData;
  //取得關閉modal的function
  const handleClose = useContext(ModalOpenContext);
  const onSubmit = async (data) => {
    //將state改成3
    data.state = "3";
    //發送新增api
    await putCatAPI(projectId, data);

    //更新user的resuceCats
    const newAdoptCats = [...currentUser.adoptProject, projectId];
    //更新userContext的user
    setCurrentUser({ ...currentUser, adoptProject: newAdoptCats });
    //發送put請求 更新user的rescueCats
    await putUserAPI(currentUser.id, { adoptProject: newAdoptCats });
    alert("轉換成功");
    //關閉modal
    handleClose();
    //轉址到新增的貓咪頁面
    navigate(`/adopt/${projectId}`);
  };

  return (
    <>
      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm ">
        <div className="flex flex-col items-center  mt-4">
          <h3 className="text-2xl font-bold">轉換成收養專案</h3>
          <p>請填以下資訊</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                性別
              </label>
            </div>

            <div className="mt-2">
              <select
                id="gender"
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("gender", {
                  required: "請選擇性別",
                })}
              >
                <option value="0">未分類</option>
                <option value="1">男性</option>
                <option value="2">女性</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="breed"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                品種
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("breed", { required: "品種是必填" })}
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="breed"
              />
              {errors.breed?.message && (
                <small className="text-red-500">{errors.breed.message}</small>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="health"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                健康狀況
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("health", { required: "健康狀況是必填" })}
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="breed"
              />
              {errors.health?.message && (
                <small className="text-red-500">{errors.health.message}</small>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="cta"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                呼籲大家認養的話
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("cta")}
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="cta"
              />
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
