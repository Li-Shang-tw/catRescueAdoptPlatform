import { useForm } from "react-hook-form";

import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";

import {
  getRescuingCatsAPI,
  postCatAPI,
  putUserAPI,
  putCatAPI,
} from "../callAPI";
import { useNavigate } from "react-router-dom";

export default function FormforTransterToAdopt() {
  //預設值---如果有傳入值，就是編輯，沒有就是新增
  const defaultValue = {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultValue });
  const navigate = useNavigate();

  //---取得登入者資料-----
  //取得userContext的user
  const userData = useContext(CurrentUserContext);
  const { currentUser, setCurrentUser } = userData;

  const onSubmit = async (data) => {
    //幫表單資料加上state=1
    data.state = "3";
    //幫表單資料加上rescuerId
    data.rescuerId = currentUser.id;
    //發送新增api
    await postCatAPI(data);
    alert("新增成功");
    //呼叫API，取得新增的資料
    const Cats = await getRescuingCatsAPI();
    const newCat = Cats[Cats.length - 1];
    //更新user的resuceCats
    const newRescueCats = [...currentUser.rescueCats, newCat.id];
    //更新userContext的user
    setCurrentUser({ ...currentUser, rescueCats: newRescueCats });
    //發送put請求 更新user的rescueCats
    await putUserAPI(currentUser.id, { rescueCats: newRescueCats });
    //轉址到新增的貓咪頁面
    navigate(`/adopt/${newCat.id}`);
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
