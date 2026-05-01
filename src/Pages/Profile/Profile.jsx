import React from "react";
import Header from "../../Components/Main/Header";
import Modal from "../../Components/Modal";
import toast from "react-hot-toast";
const routes = [
  {path:"", element:<h1></h1>},
  {path:"/pickout", element:<h1></h1>},
  {path:"/deletion", element:<h1></h1>},
]
const Profile = () => {

  const courseHandler = () => {
    toast.error("در حال حاضر امکان مشاهده دروس رشته وجود ندارد .");
  };


  return (
    <div className="font-Vazir flex items-start justify-center bg-My-blue-600 h-[1200px] p-[20px] gap-[10px] relative">
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
            {/* <li>انتخاب واحد</li> */}
            <li>حذف و اضافه</li>
            <li>مشاهده آخرین وضعیت ترم جاری</li>
            <li>مدیریت مالی</li>
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
      <div className="bg-white border-1 p-[10px] rounded-8 w-full gap-[5px] ">
        <div className="grid grid-cols-4 gap-[20px] p-[30px] font-bold">
          <div className="flex-center gap-[10px]">
            <label>نام :</label>
            <span> علی</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label>نام خانوادگی :</label>
            <span> آزادی حسین آبادی</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label>شماره دانشجویی</label>
            <span> 40115041054485</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> کد ملی</label>
            <span> 127400191</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label>رشته تحصیلی:</label>
            <span> مهندسی کامپیوتر</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> نیمسال پذیرش :</label>
            <span> 4011</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> مقطع:</label>
            <span> کارشناسی پیوسته</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> نوع پذیرش:</label>
            <span> بدون آزمون</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> دانشکده:</label>
            <span> نجف آباد / فناوری اطلاعات</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> نوع پذیرش:</label>
            <span> بدون آزمون</span>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 gap-[20px] p-[30px]">
          <div className="flex-center gap-[10px]">
            <label> تعداد واحد اخذ شده تاکنون :</label>
            <span> 133.00</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> تعداد واحد گذرانده :</label>
            <span> 115.00</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> تعداد نیمسال گذرانده :</label>
            <span> 8</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> معدل نیمسال قبل:</label>
            <span> 17.75</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> معدل تاکنون:</label>
            <span> 17.08</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> کف واحد مجاز :</label>
            <span> 12</span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> سقف واحد مجاز:</label>
            <span> 24 </span>
          </div>
          <div className="flex-center gap-[10px]">
            <label> نوع پذیرش:</label>
            <span> بدون آزمون</span>
          </div>
        </div>
        <hr />
        {/* Cources and grades */}
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
            {/* <tfoot className="bg-gray-300">
              <tr>
                <td colspan="7" className="text-center p-[5px]"> نمرات نیمسال تحصیلی 1404-1405</td>
              </tr>
            </tfoot> */}
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
      </div>
      <div className=""></div>
    </div>
  );
};

export default Profile;
