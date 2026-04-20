import React from "react";

const Footer = () => {
  return (
    <div className=" w-full flex items-center justify-evenly bg-blue-300 text-[14px] p-[20px]">
      <div className=" flex-center flex-col">
        <p>تمامی حقوق این وب سایت محفوظ است. </p>
        <p>کپی برداری از مطالب این وب سایت پیگرد قانونی دارد. </p>
        <p> توسعه و طراحی توسط فناوری اطلاعات و ارتباطات واحد نجف آباد</p>
      </div>
      <div className=" flex-center flex-col ">
        <p>ایران،اصفهان، نجف آباد، بلوار دانشگاه - کدپستی: ۸۵۱۴۱۴۳۱۳۱ </p>
        <p>تلفن: ۰۳۱۴۲۲۹۲۹۲۹</p>
        <p>پست الکترونیک: info @ iaun.ac.ir</p>
        <p>رتباط با حراست: herasat@ iaun.ac.ir</p>

      </div>
    </div>
  );
};

export default Footer;
