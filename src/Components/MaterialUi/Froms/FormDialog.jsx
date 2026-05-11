import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ text }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} sx={{fontSize:"18px"}}>
        {text}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {" "}
          رعایت مقررات آراستگی فرهنگی و رفتاری در دانشگاه آزاد اسلامی{" "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: "right", padding: "10px" }}>
            اینجانب از خداوند منان بخاطر فرصت حضور در محیط علمی و فضای فرهیختگی
            سپاسگزارم و قوانین و مقررات دانشگاه را ارج نهاده و در جهت اجرای آن
            کوشا باشم
            <br />
            <br />
            از آنجا که دانشگاه، محیط فرهیختگی است و دانشگاه آزاد اسلامی در جهت
            سلامت محیط تعلیم و تربیت و تضمین کیفیت یادگیری و حفظ و پاسداشت آزادی
            های مشروع همگانی، همانند دانشگاه های برتر جهان، مقرراتی برای رفتار
            فرهنگی و پوشش در دانشگاه تدوین کرده، متعهد می شوم آراستگی در پوشش و
            شئون رفتاری را با استفاده از لباس مناسب و پرهیز از پوشش نامناسب به
            شرح زیر رعایت کنم
            <br />
            <br />
            از پیراهن آستین دار و یقه معمولی، شلوار ساده، رسمی و بلند استفاده
            کنم. از آرایش و پیرایش غیرمتعارف مو مانند بافتن، مش کردن و... اجتناب
            کنم. از لباس اندامی، نازک، تنگ و چسبان، بدن نما و شلوار استریج و زاپ
            دار استفاده نکنم. اصول حرفه ای در تعامل با اساتید را مراعات می کنم و
            تکریم شان آنها را پاس می دارم. از هر گونه رفتاری که با اصول سازمانی،
            ضوابط و مقررات اخلاقی، فرهنگی و اجتماعی کلاس درس، آزمایشگاه و محیط
            دانشگاه مغایر باشد بپرهیزم. از استعمال دخانیات در تمام اماکن دانشگاه
            اجتناب می ورزم. در رفتار اجتماعی و ارتباط با دیگران، موازین شرعی و
            عرفی و آداب اجتماعی محیط های مشترک را رعایت می نمایم. تعهدنامه کتبی
            دانشجویان (بانوان) لباس ساده، آراسته و در شأن دانشگاه بپوشم. پوششم
            کامل باشد به نحوی که بدن بجز صورت و دست ها تا مچ معلوم نباشد. پوششم
            با چادر و مانتو یا مانتو بلند (تا زیر زانو)، شلوار، مقنعه یا روسری
            با رنگ مناسب، جوراب غیر نازک و کفش متعارف می باشد. از مانتو نامناسب،
            کوتاه، جلوباز،چاک دار، آستین کوتاه (ساق دست نما)، چسبان، دارای رنگ
            تند و زننده استفاده نکنم. از آرایش زننده، جواهرات و زیور آلات
            نامتعارف استفاده نکنم
            <br />
            <br />
            از هر گونه رفتاری که با اصول سازمانی، ضوابط و مقررات اخلاقی، فرهنگی
            و اجتماعی کلاس درس، آزمایشگاه و محیط دانشگاه مغایر باشد بپرهیزم.
            اصول حرفه ای در تعامل با اساتید را مراعات می کنم و تکریم شان آنها را
            پاس می دارم
            <br />
            <br />
            از استعمال دخانیات در تمام اماکن دانشگاه اجتناب ورزم. در رفتار
            اجتماعی و ارتباط با دیگران، موازین شرعی و عرفی و آداب اجتماعی محیط
            های مشترک را رعایت می نمایم
          </DialogContentText>
          <form
            onSubmit={handleSubmit}
            id="subscription-form"
            className="flex-center gap-[5px]"
          >
            <span>شرایط و قوانین فوق را میپذیرم</span>
            <input type="radio" />
            {/* <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            /> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>انصراف</Button>
          <Button type="submit" form="subscription-form">
            ورود به آموزشیار
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
