import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";

const Panel = () => {
  return (
    <div className="font-Vazir ">
      <div className="flex items-start w-[90%] h-[568px] bg-blue-200 mx-auto my-[20px] rounded-8">
        <div className="w-[20%] h-full">
          <div className="w-[250px] h-[100%] bg-blue-400 rounded-8 p-[10px]">
            <div className=" p-[20px] flex items-center justify-evenly gap-[10px]">
              <img
                src="./Profiles/avatar_man_1.jpg"
                alt=""
                className="w-[140px] rounded-[100px]"
              />
              <div className="flex flex-col gap-[15px]">
                <RiUploadCloud2Fill />
                <FaEdit />
                <IoSettings />
                <SlLogout />
              </div>
            </div>
            <div className="flex flex-col w-full gap-[10px] ">
              <p className=" rounded-8 py-[10px] px-[20px]">رضا مهدوی نیا</p>
              <hr />
              <p className="py-[10px] px-[20px]">جنسیت : آقا </p>
              <hr />
              <p className="py-[10px] px-[20px]">محل سکونت : تهران</p>
              <hr />
              <p className=" rounded-8 py-[10px] px-[20px]">
                {" "}
                متولد 1385/05/12
              </p>
              <hr />
              <p className="py-[10px] px-[20px]">استان : تهران</p>
              <hr />
              <p className="py-[10px] px-[20px]"> شماره همراه :09125864796 </p>
              <hr />
            </div>
          </div>
        </div>
        <div className="h-full">
          <ul className="h-full flex flex-col gap-[15px] p-[10px]">
            <li>مشاهده درسهای من</li>
            <li>اطلاعیه های مربوط به کلاسها</li>
            <li> کلاس آنلاین</li>
            <li>ارسال تکلیف کلاسی</li>
            <li>گفت و گوی عمومی</li>
            <li>کارنامه دانشجویی  </li>

          </ul>
        </div>
      </div>
      <div className="flex-center">

      <Link to={"/"} className="py-[10px] px-[20px] border-2 border-blue-700  rounded-2xl text-blue-600">بازگشت </Link>
      </div>
    </div>
  );
};

export default Panel;
