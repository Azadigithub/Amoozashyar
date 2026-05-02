import React from "react";

const CoursesTable = () => {
  return (
    <div className="mt-[30px]">
      <table className="border-2 p-[10px] w-full h-full">
        <thead className="border-2 p-[10px]">
          <tr>
            <td
              colSpan="20"
              className="text-center p-[5px] bg-gray-400 text-white"
            >
              نمرات نیمسال تحصیلی 1404-1405
            </td>
          </tr>
          <tr className="p-[10px] overflow-x-scroll">
            <th> </th>
            <th className="p-[5px]">کد درس</th>
            <th>نام درس</th>
            <th>کد ارایه </th>
            <th> نام استاد</th>
            <th> وضعیت درس</th>
            <th> زمان بندی کلاسها</th>
            <th> شهریه متغیر</th>
            <th> بازه اخذ درس</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          <tr className="border-y-2 border-gray-400 ">
            <td className="p-[5px]">1</td>
            <td className="p-[5px]">462857415221</td>
            <td className="p-[5px]">آزمایشگاه پایگاه داده</td>
            <td className="p-[5px]">15662</td>
            <td className="p-[5px]">علیرضا نیکیان</td>
            <td>معتبر</td>
            <td>دوشبنبه 8:30 الی 9:45</td>
            <td>950.568.000</td>
            <td> انتخاب واحد</td>
          </tr>

          <tr className="border-y-2 border-gray-400 ">
            <td className="p-[5px]">2</td>
            <td className="p-[5px]">462854415227</td>
            <td className="p-[5px]">ریاضیات مهندسی</td>
            <td className="p-[5px]">15478</td>
            <td className="p-[5px]">شهرام دارویی</td>
            <td>حذف شده</td>
            <td>پنجشنبه 9:20 الی 12:45</td>
            <td> 12.125.000</td>
            <td>انتخاب واحد</td>
          </tr>

          <tr>
            <td className="p-[5px]">3</td>
            <td className="p-[5px]">462857415389</td>
            <td>ساختمان داده</td>
            <td>14586</td>
            <td>مبینا کریمی</td>
            <td>معتبر</td>
            <td>شنبه 8:30 الی 10:15</td>
            <td> 13.258.000 </td>
            <td>حذف و اضافه</td>
          </tr>
        </tbody>
      </table>
      <div className="flex-center gap-[20px] flex-wrap p-[20px]">
        <button
          onClick={() => courseHandler()}
          className="bg-My-blue-400 text-white p-[5px] rounded-4"
        >
          مشاهده دروس رشته
        </button>
        <button className="bg-My-blue-400 text-white p-[5px] rounded-4">
          مشاهده کارنامه
        </button>
        <button className="bg-My-blue-400 text-white p-[5px] rounded-4">
          چاپ کارنامه
        </button>
        <button className="bg-My-blue-400 text-white p-[5px] rounded-4">
          چاپ برگه انتخاب واحد
        </button>
        <button className="bg-My-blue-400 text-white p-[5px] rounded-4">
          مشاهده و چاپ برنامه هفتگی
        </button>
        <button className="bg-My-blue-400 text-white p-[5px] rounded-4">
          مشاهده کارت ورود به جلسه
        </button>
        <button className="bg-My-blue-400 text-white p-[5px] rounded-4">
          صدور کارت دانشجویی موقت
        </button>
      </div>
    </div>
  );
};

export default CoursesTable;
