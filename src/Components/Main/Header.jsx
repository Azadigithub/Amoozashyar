// import { IoLogInOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className=" p-[15px] sticky top-[-125px] large:top-[-70px] gap-[10px] z-[100]">
//       <div className="flex flex-col sm:grid grid-cols-[20%_50%_30%] items-center justify-center"></div>
//       <div className="hidden laptop:flex items-center justify-between p-[10px] bg-blue-300 rounded-4">
//         <ul className="flex-center gap-[20px] cursor-pointer p-[10px]">
//           <li>صفحه اصلی </li>
//           <Link to={"/Panel"}>پنل کاربری</Link>
//           <li>آزمون</li>
//           <li>مشاوره </li>
//           <li>سوالات متداول </li>
//           <li>تماس با پشتیبانی</li>
//           <li> ارتباط با ما</li>
//         </ul>
//         <div className="hidden tablet:flex-center gap-[20px] ">
//           <Link
//             to={"/Login"}
//             className="flex-center  bg-white p-[10px] text-gray-600 rounded-4 cursor-pointer"
//           >
//             <IoLogInOutline />
//             <p>ورود</p>
//           </Link>
//           <Link
//             to={"/Signin"}
//             className="flex-center border-white border-2 p-[10px] rounded-4 cursor-pointer"
//           >
//             <IoLogInOutline />
//             <p>ثبت نام</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="font-Vazir p-[15px] sticky top-[-70px] large:top-[-70px] gap-[10px] z-[100]">
      <div className="flex flex-col sm:grid grid-cols-[20%_50%_30%] items-center justify-center">
        {/* Logo  */}
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <h1 className="font-bold text-[18px] text-center text-blue-900">
            دانشگاه آزاد اسلامی واحد نجف آباد
          </h1>
        </div>
        {/* Searchbar  */}
        <div className="bg-blue-200 w-[80%] h-[40px] rounded-8 m-[5px] max-w-[320px]">
          <input
            type="text"
            placeholder="جست و جو..."
            className="w-[100%] h-full p-[20px] border-0 outline-0"
            />
        </div>
        <div className="">
            {/* <img src="./Images/Iaun_logo.png" alt="" /> */}
        </div>
      </div>
      <div className="hidden tablet:flex items-center justify-between p-[10px] bg-blue-300 rounded-4">
        <ul className="flex-center gap-[20px] cursor-pointer p-[10px]">
          <li>صفحه اصلی </li>
          <Link to={"/Panel"}>پنل کاربری</Link>
          <li>آزمون</li>
          <li>مشاوره </li>
          <li>سوالات متداول </li>
          <li>تماس با پشتیبانی</li>
          <li> ارتباط با ما</li>
        </ul>
        <div className="hidden tablet:flex-center gap-[20px] ">
          <Link
            to={"/Login"}
            className="flex-center  bg-white p-[10px] text-gray-600 rounded-4 cursor-pointer"
          >
            <IoLogInOutline />
            <p>ورود</p>
          </Link>
          <Link
            to={"/Signin"}
            className="flex-center border-white border-2 p-[10px] rounded-4 cursor-pointer"
          >
            <IoLogInOutline />
            <p>ثبت نام</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
