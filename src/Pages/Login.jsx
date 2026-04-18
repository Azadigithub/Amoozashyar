import React from "react";

const Login = () => {
  return (
    <div className="font-Vazir flex-center flex-col relative">
      <div className="flex-center flex-col static left-[200px] w-[400px] tablet:absolute bg-white rounded-[10px] p-[10px]">
        <img src="/Images/iaun-logo.png" alt="" className="w-[80%] mx-auto" />
        <div className=" ">
          <form className="flex-center flex-col gap-[10px] mt-[20px] max-w-[300px] mx-auto">
            <input
              type="text"
              name=""
              id=""
              placeholder="نام کاربری"
              className="w-full border-gray-300 border-2 py-[5px] px-[10px] rounded-[5px]"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="کلمه عبور"
              className="w-full border-gray-300 border-2 py-[5px] px-[10px] rounded-[5px]"
            />
            <button className="bg-blue-500 text-white p-[10px] rounded-[5px] hover:cursor-pointer">
              ورود به سایت
            </button>
          <hr className="w-[100%]" />
          <h3>نام کاربری: شماره دانشجویی</h3>
          <h3>رمز عبور: کد ملی</h3>
          </form>
        </div>
      </div>
      <div className="w-full h-[100vh] ">
        <img src="/Images/Iaun.png" alt="" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export default Login;
