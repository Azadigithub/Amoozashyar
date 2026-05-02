import React from "react";

const UserInformations = () => {
  return (
    <div>
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
    </div>
  );
};

export default UserInformations;
