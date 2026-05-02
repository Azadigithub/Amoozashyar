import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        sx={{ color: "black", textAlign: "center" }}
      >
        مشاهده جزییات
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
          {"جزییات تراکنش"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="flex-center gap-[10px]">
              <p> 1404/02/14</p>
              <p className="font-bold"> : تاریخ تراکنش </p>
            </div>
            <div className="flex-center gap-[10px]">
              <p> قرض الحسنه مهر ایران</p>
              <p className="font-bold"> :بانک مرجع </p>
            </div>
            <div className="flex-center gap-[10px]">
              <p> 4527859642</p>
              <p className="font-bold"> :شماره پیگیری </p>
            </div>
            <div className="flex-center gap-[10px]">
              <p> موفق</p>
              <p className="font-bold"> :وضعیت تراکنش </p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus sx={{color:"black",}}>
            متوجه شدم
          </Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
