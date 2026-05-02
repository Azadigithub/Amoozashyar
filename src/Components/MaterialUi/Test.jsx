import React from 'react'
import ReactVirtualizedTable from "./ReactVirtualizedTable";
import TransitionSnackbar from './Snackbar/Snackbars';
import AlertDialog from './Froms/AlertDialog';
import FormDialog from './Froms/FormDialog';
import FullScreenDialog from './Froms/FullScreenDialog';
const Test = () => {
  return (
    <div>
      {/* <ReactVirtualizedTable/> */}
      <TransitionSnackbar/>
      <AlertDialog/>
      <FormDialog/>
      <FullScreenDialog/>
    </div>
  )
}

export default Test

