import React from "react";
import Button from "../Components/Button";
import Header from "../Components/Main/Header";

const Landing = () => {
  return (
    <div className="font-Vazir">
      <Header />
      <main>
        <div className="">
          <div className="flex items-start p-[20px] bg-gradient-to-r rounded-16">
            <div className="flex flex-col items-center justify-between">
              <div className="flex-center max-w-[600px] mx-auto">
                <img src="./Images/Amoozeshyar_logo.png" alt="" />
                <h1 className="text-center font-bold text-[24px] text-blue-500">
                  سامانه مدیریت آموزشی یکپارچه دانشگاه آزاد اسلامی (آموزشیار)
                </h1>
              </div>
              <div className=" flex flex-col tablet:flex-centerw-full flex-center gap-[20px]">
                <Button text="ورود به آموزشیار" />
                <Button text="ورود به پژوهشیار" />
                <Button text="ورود به سامانه سیما" />
              </div>
            </div>
            <img src="./Images/Logo_1.png" alt="" />
          </div>
          <img src="./Images/Logo_2.png" alt="" />
          <div className=" "></div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
