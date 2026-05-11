import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function AccordionUsage({DataInform}) {
  const styles = {
    fontFamily: "vazir",
    fontWeight: "bold",
    fontSize: "16px",
  };
    return (
    <div className="w-[1200px] mx-auto">
      <h1 className="font-bold text-[28px] p-[30px]">
        پرسش و پاسخ سوالات متداول
      </h1>

      <div className="w-full m-[20px] flex flex-col gap-5 ">
        {DataInform.questions.map((details) => {
          return (
            <Accordion key={details.id} sx={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${details.id}-content`}
                id={`panel-${details.id}-header`}
              >
                <Typography component="h2" sx={styles}>
                  {details.header}
                </Typography>
              </AccordionSummary>

              {details.options.map((item, index) => (
                <AccordionDetails
                  key={index}
                  sx={{
                    textAlign: "right",
                    borderTop: "1px solid ",
                  }}
                >
                  <Typography sx={{fontSize:"14px",fontWeight:"bold"}}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              ))}
            </Accordion>
          );
        })}
      </div>
    </div>
  );

  // return (
  //   <div className="font-Vazir w-[1200px] mx-auto">
  //     <div className="">
  //       <h1 className="font-bold text-[28px] p-[30px]">پرسش و پاسخ سوالات متداول</h1>
  //     </div>

  //   <div className=" m-[20px]">
  //     {DataInform.questions.map((details)=>{
  //       console.log(details.header);

  //     <Accordion sx={{ width: "350px" }}>
  //       <AccordionSummary
  //         expandIcon={<ExpandMoreIcon />}
  //         aria-controls="panel1-content"
  //         id="panel1-header"
  //       >
  //         <Typography component="h2" sx={styles}>
  //           {details.header}
  //         </Typography>
  //       </AccordionSummary>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         نحوه ویرایش اطلاعات شخصی
  //       </AccordionDetails>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         تنظیم عکس پروفایل
  //       </AccordionDetails>
  //     </Accordion>
  //     })}
  //     {/* <Accordion sx={{ width: "350px" }}>
  //       <AccordionSummary
  //         expandIcon={<ExpandMoreIcon />}
  //         aria-controls="panel1-content"
  //         id="panel1-header"
  //       >
  //         <Typography component="h2" sx={styles}>
  //           {"انتخاب واحد "}
  //         </Typography>
  //       </AccordionSummary>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         مدت زمان انتخاب واحد
  //       </AccordionDetails>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         بازه زمانی مجاز به انتخاب واحد
  //       </AccordionDetails>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         نحوه انتخاب درس از دروس رشته
  //       </AccordionDetails>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         حداقل و حداکثر تعداد واحد مجاز برای برداشتن واحد درسی
  //       </AccordionDetails>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         نحوه درخواست افزایش واحد دروس
  //       </AccordionDetails>
  //       <AccordionDetails
  //         sx={{ textAlign: "center", fontFamily: "Vazir" }}
  //       ></AccordionDetails>
  //     </Accordion>
  //     <Accordion sx={{ width: "350px" }}>
  //       <AccordionSummary
  //         expandIcon={<ExpandMoreIcon />}
  //         aria-controls="panel1-content"
  //         id="panel1-header"
  //       >
  //         <Typography component="h2" sx={styles}>
  //           {"مدیریت مالی و پرداختها "}
  //         </Typography>
  //       </AccordionSummary>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         مدت زمان انتخاب واحد
  //       </AccordionDetails>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         بازه زمانی مجاز به انتخاب واحد
  //       </AccordionDetails>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         نحوه انتخاب درس از دروس رشته
  //       </AccordionDetails>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         حداقل و حداکثر تعداد واحد مجاز برای برداشتن واحد درسی
  //       </AccordionDetails>
  //       <AccordionDetails sx={{ textAlign: "center", fontFamily: "Vazir" }}>
  //         نحوه درخواست افزایش واحد دروس
  //       </AccordionDetails>
  //       <AccordionDetails
  //         sx={{ textAlign: "center", fontFamily: "Vazir" }}
  //       ></AccordionDetails>
  //     </Accordion> */}
  //   </div>
  //   </div>
  // );
}
