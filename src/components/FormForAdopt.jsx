import { useForm } from "react-hook-form";

import { CurrentUserContext } from "../context/CurrentUserContext";
import { ModalOpenContext } from "../context/ModalOpenContext";
import { useContext, useState } from "react";
import ImageUpload from "./ImageUpload";

import {
  getAdoptingCatsAPI,
  postCatAPI,
  putUserAPI,
  putCatAPI,
} from "../callAPI";
import { useNavigate } from "react-router-dom";

export default function FormforCreateAdopt({
  type,
  adoptProject,
  updateAdoptProject,
}) {
  //預設值---如果有傳入值，就是編輯，沒有就是新增
  const defaultValue = {
    name: adoptProject ? adoptProject.name : "",
    ageCategory: adoptProject ? adoptProject.ageCategory : "",
    breed: adoptProject ? adoptProject.breed : "",
    gender: adoptProject ? adoptProject.gender : "",
    location: adoptProject ? adoptProject.location : "",
    health: adoptProject ? adoptProject.health : "",
    cta: adoptProject ? adoptProject.cta : "",
    image: adoptProject ? adoptProject.image : "",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: defaultValue });
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  //---取得登入者資料-----
  //取得userContext的user
  const userData = useContext(CurrentUserContext);
  const { currentUser, setCurrentUser } = userData;
  //取得關閉modal的function
  const handleClose = useContext(ModalOpenContext);

  const onSubmit = async (data) => {
    //先將不會用到的欄位設為空
    data.riskLevel = "";
    data.symptoms = "";
    data.adoptId = "";
    data.currentAmount = 0;
    data.targetAmount = 0;

    if (type === "edit") {
      //將data的image重新賦予創造的url
      data.image = previewImage;
      //發送put請求
      await putCatAPI(adoptProject.id, data);
      //更新rescueProject的state
      //關閉modal
      handleClose();
    } else {
      //幫表單資料加上state=1
      data.state = "3";
      //幫表單資料加上adoptId
      data.rescuerId = currentUser.id;
      //將data的image重新賦予創造的url
      data.image = previewImage;
      //發送新增api
      await postCatAPI(data);
      alert("新增成功");
      //呼叫API，取得新增的資料
      const Cats = await getAdoptingCatsAPI();
      const newCat = Cats[Cats.length - 1];
      //更新user的resuceCats
      const newAdoptProject = [...currentUser.adoptProject, newCat.id];
      //更新userContext的user
      setCurrentUser({ ...currentUser, adoptProject: newAdoptProject });
      //發送put請求 更新user的rescueCats
      await putUserAPI(currentUser.id, { adoptProject: newAdoptProject });
      //轉址到新增的貓咪頁面
      navigate(`/adopt/${newCat.id}`);
      //關閉modal
      handleClose();
    }
  };

  return (
    <>
      <div className="mt-2 sm:mx-auto w-full  ">
        <div className="flex flex-col items-center  my-4">
          <h3 className="text-2xl font-bold">新增收養專案</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex">
            <div className="mr-5  w-1/2">
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

              <div className="flex justify-between">
                <div className="w-5/12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="ageCategory"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      年齡分類
                    </label>
                  </div>

                  <div className="mt-2">
                    <select
                      id="age"
                      className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("ageCategory", {
                        required: "請選擇年齡分類",
                      })}
                    >
                      <option value="0">未分類</option>
                      <option value="1">幼貓</option>
                      <option value="2">成貓</option>
                    </select>
                  </div>
                </div>
                <div className="w-5/12">
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
                    <small className="text-red-500">
                      {errors.breed.message}
                    </small>
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
                    <small className="text-red-500">
                      {errors.health.message}
                    </small>
                  )}
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
                    htmlFor="cta"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    呼籲大家的話
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
            </div>
            <div className="flex flex-col w-1/2">
              <ImageUpload
                register={register}
                watch={watch}
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
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
