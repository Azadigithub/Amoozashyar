import React, { useEffect, useState } from "react";
import { loginSchema } from "../../Validators/Login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const result = loginSchema.safeParse({ username, password });

    if (!result.success) {
      setMessage(result.error.issues[0].message);
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/accounts/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      // console.log(data);

      if (res.ok) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);

        setMessage("ورود موفقیت‌آمیز بود ");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        // data.detail
        setMessage("نام کاربری یا رمز عبور اشتباه است");
      }
    } catch (err) {
      setMessage("خطا در ارتباط با سرور");
    }
  };

  return (
    <div className="font-Vazir flex-center flex-col relative">
      <div className="flex-center flex-col static left-[200px] w-[400px] tablet:absolute bg-white rounded-[10px] p-[10px]">
        <img src="/Images/iaun-logo.png" alt="" className="w-[80%] mx-auto" />
        <div className="flex-center flex-col gap-[10px] mt-[20px] max-w-[300px] mx-auto">
          <input
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            placeholder="نام کاربری"
            className="w-full border-gray-300 border-2 py-[5px] px-[10px] rounded-[5px]"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="کلمه عبور"
            className="w-full border-gray-300 border-2 py-[5px] px-[10px] rounded-[5px]"
          />
          <span className="p-[10px]">{message}</span>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white p-[10px] rounded-[5px] hover:cursor-pointer"
          >
            ورود به سایت
          </button>
          <hr className="w-[100%]" />
          <h3>نام کاربری: شماره دانشجویی</h3>
          <h3>رمز عبور: کد ملی</h3>
        </div>
      </div>
      <div className="w-full h-[100vh] ">
        <img
          src="/Images/Iaun.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
