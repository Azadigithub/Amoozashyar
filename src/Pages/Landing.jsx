import React from "react";
import Button from "../Components/Button";
import Header from "../Components/Main/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Main/Footer";
const Landing = () => {
  return (
    <div className="font-Vazir">
      <Header />
      <main>
        <div>
          <div className="flex flex-col max-w-[1200px] mx-auto tablet:flex-row items-center tablet:items-start p-[20px]rounded-16">
            <div className="flex flex-col items-center justify-between">
              <div className="flex-center flex-col mobile:flex-row max-w-[600px] mx-auto">
                <img
                  src="./Images/Amoozeshyar_logo.png"
                  alt=""
                  className="w-[100px] mobile:w-[120px] tablet:w-[150px]"
                />
                <h1 className="text-center font-bold text-[24px] text-blue-500 m-[20px]">
                  سامانه مدیریت آموزشی یکپارچه دانشگاه آزاد اسلامی (آموزشیار)
                </h1>
              </div>
              <div className=" flex flex-col tablet:flex-centerw-full flex-center gap-[20px]">
                <Button text="ورود به آموزشیار" />
                <Button text="ورود به پژوهشیار" />
                <Link to={"/Login"}>
                  <Button text="ورود به سامانه سیما" />
                </Link>
              </div>
            </div>
            <img
              src="./Images/Logo_1.png"
              alt=""
              className="max-w-[500px] w-full"
            />
          </div>
          <img src="./Images/Logo_2.png" alt="" />
          <div className=" "></div>
        </div>
      </main>
      <Footer/>
    </div>
    
  );
};

export default Landing;
