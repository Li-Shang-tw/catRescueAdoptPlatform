import { useForm } from "react-hook-form";

import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { ModalOpenContext } from "../context/ModalOpenContext";
import { putUserAPI, getUserAPI } from "../callAPI";

export default function EditFormForPersonalInfo() {
  //取得userContext的user
  const userData = useContext(CurrentUserContext);
  const { currentUser, setCurrentUser } = userData;

  //取得關閉modal的function
  const handleClose = useContext(ModalOpenContext);
  //複製並取得能夠修改的user欄位
  const temporaryUser = {
    name: currentUser.name,
    email: currentUser.email,
    role: currentUser.role,
    location: currentUser.location,
  };
  //取得user的id
  const userId = currentUser.id;
  const defaultValues = {
    defaultValues: temporaryUser,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(defaultValues);

  const onSubmit = async (data) => {
    //發送修改user的請求
    await putUserAPI(userId, data);
    //取得更新後的user
    const updatedUser = await getUserAPI(userId);
    //更新userContext的user
    setCurrentUser(updatedUser);
    alert("使用者資料已更新");
    //關閉modal
    handleClose();
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="flex flex-col items-center  mt-10">
        <h3 className="text-2xl font-bold">修改個人資訊</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              您的名字
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
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              您的信箱
            </label>
          </div>

          <div className="mt-2">
            <input
              id="email"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("email", {
                required: "信箱是必填",
                validate: {
                  maxLength: (v) =>
                    v.length <= 50 || "信箱長度不得超過50個字元",
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "信箱格式錯誤",
                },
              })}
            />

            {errors.email?.message && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="role"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              您要扮演的角色
            </label>
          </div>

          <div className="mt-2">
            <select
              id="role"
              className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("role", {
                required: "請選擇角色",
              })}
            >
              <option value="rescuer">救援者</option>
              <option value="adopter">收養者</option>
              <option value="donor">贊助者</option>
            </select>

            {errors.role?.message && (
              <small className="text-red-500">{errors.role.message}</small>
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
              <option value="lienchiang">連江</option>p
            </select>

            {errors.location?.message && (
              <small className="text-red-500">{errors.location.message}</small>
            )}
          </div>
        </div>

        <input
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
      </form>
    </div>
  );
}
