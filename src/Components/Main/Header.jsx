import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="font-Vazir p-[15px] sticky top-[-125px] large:top-[-70px] gap-[10px] z-[100]">
      <div className="flex flex-col sm:grid grid-cols-[20%_50%_30%] items-center justify-center"></div>
      <div className="hidden laptop:flex items-center justify-between p-[10px] bg-blue-300 rounded-4">
        <ul className="flex-center gap-[20px] cursor-pointer p-[10px]">
          <li>صفحه اصلی </li>
          <li>پنل کاربری</li>
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
