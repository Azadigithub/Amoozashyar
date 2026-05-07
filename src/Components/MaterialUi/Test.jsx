import React from 'react'
import ReactVirtualizedTable from "./ReactVirtualizedTable";
import SuccessSnackbar from './Snackbar/SuccessSnackbar';
import AlertDialog from './Froms/AlertDialog';
import FormDialog from './Froms/FormDialog';
import FullScreenDialog from './Froms/FullScreenDialog';
import ErrorSnackbar from './Snackbar/ErrorSnackbar';
import TransitionsSnackbar from './Snackbar/TransitionsSnackbar';
const Test = () => {
  return (
    <div>
      {/* <ReactVirtualizedTable/> */}
      <TransitionsSnackbar/>
      <SuccessSnackbar/>
      <ErrorSnackbar/>
      <AlertDialog/>
      <FormDialog/>
      <FullScreenDialog/>
    </div>
  )
}

export default Test

