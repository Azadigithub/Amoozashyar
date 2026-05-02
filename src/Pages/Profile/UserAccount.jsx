import React from "react";
import Header from "../../Components/Main/Header";
import Modal from "../../Components/Modal";
import toast from "react-hot-toast";
import { Link, Outlet, useRoutes } from "react-router-dom";
import DataTable from "../../Components/MaterialUi/DataTable";

const UserAccount = () => {
  const courseHandler = () => {
    toast.error("در حال حاضر امکان مشاهده دروس رشته وجود ندارد .");
  };

  return (
    <div className="font-Vazir flex items-start justify-center bg-gray-300 h-[1200px] p-[20px] gap-[10px] relative">
      <div className="flex flex-col w-[300px] sticky top-0">
        <div className="bg-white border-1 w-full  p-[10px] rounded-8">
          <div className="flex items-center justify-evenly">
            <div className="bg-gray-300 flex-center w-[60px] h-[60px] rounded-[100px]">
              <img
                src="./Profiles/Ali.png"
                alt="profile-image"
                className="w-full h-full rounded-[100px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[16px]">علی آزادی حسین آبادی</h4>
            </div>
          </div>
        </div>
        <div className="bg-white border-1 p-[10px] rounded-8 w-full flex flex-col gap-[5px] mt-[10px] text-center ">
          {/* <h3 className="text-[16px] font-bold text-center">
            مشاهده و ویرایش اطلاعات
          </h3> */}
          <ul className="flex flex-col w-full text-[14px] border-b-1 py-[10px] px-[5px] gap-[10px]">
            <span className="text-[16px] font-bold text-center">
              ثبت نام دروس دانشجو
            </span>
            <Modal
              // onClick={Function}

              title="شما در این زمان مجاز به انتخاب واحد نمی باشید."
              // onConfirm={StartExam}
              // textbitton=""
              text=" انتخاب واحد"
            >
              <p className="text-gray-600 text-sm leading-relaxed"></p>
            </Modal>
            <Link to={""}>مشاهده اطلاعات کاربری </Link>
            <li>حذف و اضافه</li>
            <Link to={"CoursesTable"}>مشاهده آخرین وضعیت ترم جاری</Link>
            <Link to={"CollapsibleTable"}>مدیریت مالی</Link>
            <li>خدمات پرداخت امن آموزشیار</li>
            <li>فعالیت های آموزشی دانشجو</li>
            <li>مشاهده کارنامه دانشجویی</li>
            
          </ul>
          <ul className=" w-full text-[14px] border-b-1 px-[10px] py-[5px]">
            <h3 className="text-[16px] font-bold text-center"> خدمات مالی</h3>

            <li>مشاهده کارنامه دانشجویی</li>
          </ul>
          <ul className=" w-full text-[14px] border-b-1 px-[10px] py-[5px]">
            <h3 className="text-[16px] font-bold text-center">
              خدمات دانش آموختگی
            </h3>

            <li> ارسال / پیگیری درخواست صدور مدارک</li>
          </ul>
          <ul className=" w-full text-[14px] border-b-1 px-[10px] py-[5px]">
            <h3 className="text-[16px] font-bold text-center">درخواست/ مجوز</h3>
            <li> ارسال / پیگیری درخواست دانشجو</li>
          </ul>
          <ul className=" w-full text-[14px] border-b-1 px-[10px] py-[5px]">
            <span className="text-[16px] font-bold text-center">
              ارزشیابی استاد
            </span>

            <li> ارزشیابی استاد در نیمسال جاری</li>
          </ul>
        </div>
      </div>
      {/* Left Table  */}

      {/* <div className="bg-white border-1 p-[10px] rounded-8 w-full gap-[5px] ">
        
      </div> */}
      <div className="bg-white border-1 p-[10px] rounded-8 w-full min-h-[500px] gap-[5px] ">
        <Outlet />
        
      </div>
      <div className=""></div>
    </div>
  );
};

export default UserAccount;
