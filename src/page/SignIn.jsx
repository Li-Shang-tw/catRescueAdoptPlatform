import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";

import { getUsersAPI } from "../callAPI";
import logo from "../assets/imgs/logo.png";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //使用useNavigate
  const navigate = useNavigate();
  const userData = useContext(CurrentUserContext);
  const { setCurrentUser } = userData;

  const onSubmit = async (data) => {
    //登入的信箱與密碼
    const signInEmail = data.email;
    const signInPassword = data.password;
    const users = await getUsersAPI();
    //在users中找出與登入信箱與密碼相同的使用者
    const user = users.find(
      (user) =>
        (user.email === signInEmail) & (user.password === signInPassword)
    );
    //如果有找到相同的使用者
    if (user) {
      setCurrentUser(user);
      //alert登入成功
      alert("登入成功!!");
      //將id存入cookie，期限為7天
      document.cookie = `id=${user.id}; expires=${new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      )}; path=/`;

      //導向user
      navigate(`/user/${user.id}`);
    } else {
      const emailCorrect = users.find((user) => user.email === signInEmail);

      if (emailCorrect) {
        alert("登入失敗!!密碼錯誤");
      } else {
        alert("登入失敗!!信箱不存在");
      }
    }
  };
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="flex flex-col items-center  mt-10">
        <img src={logo} alt="logo" className="w-1/2 rounded-full" />
        <h3 className="text-2xl font-bold">請登入</h3>
        <p className="text-center mt-3">
          還沒有帳號嗎？
          <Link to="/SignUp" className="font-bold underline text-blue-700">
            註冊
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              請輸入註冊的信箱
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
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              請輸入您的密碼
            </label>
          </div>
          <div className="mt-2">
            <input
              {...register("password", { required: "密碼是必填" })}
              className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="password"
            />
            {errors.password?.message && (
              <small className="text-red-500">{errors.password.message}</small>
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
