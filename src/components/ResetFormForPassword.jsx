import { useForm } from "react-hook-form";

// import { getUsersAPI } from "../callAPI";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { ModalOpenContext } from "../context/ModalOpenContext";
import { useContext } from "react";

import { putUserAPI, getUserAPI } from "../callAPI";

export default function ResetFormForPassword() {
  //取得userContext的user
  const userData = useContext(CurrentUserContext);
  const { currentUser, setCurrentUser } = userData;
  //取得關閉modal的function
  const handleClose = useContext(ModalOpenContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newPassword = data.password;
    //需要將密碼包裝成物件，才能發送請求
    const newPasswordObj = { password: newPassword };
    //發送修改user的請求
    await putUserAPI(currentUser.id, newPasswordObj);
    //取得更新後的user
    const updatedUser = await getUserAPI(currentUser.id);
    // 更新userContext的user;
    setCurrentUser(updatedUser);
    alert("密碼已重設");
    //關閉modal
    handleClose();
  };

  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex flex-col items-center  mt-10">
          <h3 className="text-2xl font-bold">重設密碼</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  validate: (value) =>
                    value === currentUser.email || "信箱不符",
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
                htmlFor="OldPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                輸入您的舊密碼
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("OldPassword", {
                  required: "密碼是必填",
                  validate: (value) =>
                    value === currentUser.password || "密碼不符",
                })}
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="OldPassword"
              />
              {errors.OldPassword?.message && (
                <small className="text-red-500">
                  {errors.OldPassword.message}
                </small>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                輸入您的新密碼
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("password", {
                  required: "密碼是必填",
                  validate: (value) =>
                    value !== currentUser.password || "新密碼與舊密碼相同",
                })}
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="password"
              />
              {errors.password?.message && (
                <small className="text-red-500">
                  {errors.password.message}
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
