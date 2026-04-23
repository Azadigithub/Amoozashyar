import React from "react";
import Header from "../Components/Main/Header";

const Profile = () => {
  return (
    <div className="font-Vazir flex items-start justify-center bg-gray-200 h-[1200px] p-[20px] gap-[10px]">
      <div className="flex flex-col w-[300px]">
        <div className="bg-white border-2 w-full  p-[10px] rounded-8">
          <div className="flex items-center justify-evenly">
            <div className="bg-gray-300 flex-center w-[70px] h-[70px] rounded-[100px]">
              <img
                src="./Profiles/Ali.png"
                alt="profile-image"
                className="w-full h-full rounded-[100px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[20px] font-bold">علی آزادی</h4>
              <h4 className="text-[18px]">40115041054485</h4>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 p-[10px] rounded-8 w-full flex flex-col gap-[5px] mt-[10px]">
          <p className="w-full text-[16px] border-b-1 px-[10px] py-[5px] hover:cursor-pointer">
            مشاهده و ویرایش اطلاعات
          </p>
          <p className=" w-full text-[16px] border-b-1 px-[10px] py-[5px]">
            {" "}
            ثبت نام دروس{" "}
          </p>
          <p className=" w-full text-[16px] border-b-1 px-[10px] py-[5px]">
            {" "}
            خدمات مالی{" "}
          </p>
          <p className=" w-full text-[16px] border-b-1 px-[10px] py-[5px]">
            {" "}
            خدمات دانش آموختگی{" "}
          </p>
          <p className=" w-full text-[16px] border-b-1 px-[10px] py-[5px]">
            {" "}
            درخواست/ مجوز{" "}
          </p>
          <p className=" w-full text-[16px] border-b-1 px-[10px] py-[5px]">
            {" "}
            ارزشیابی استاد{" "}
          </p>
          <p className=" w-full text-[16px] px-[10px] py-[5px]">
            {" "}
            خروج از حساب{" "}
          </p>
        </div>
      </div>
      <div className="bg-white border-2 p-[10px] rounded-8 w-full h-[600px] gap-[5px]"></div>
      <div className=""></div>
    </div>
  );
};

export default Profile;
