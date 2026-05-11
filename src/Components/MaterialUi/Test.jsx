import React from 'react'
import ReactVirtualizedTable from "./ReactVirtualizedTable";
import SuccessSnackbar from './Snackbar/SuccessSnackbar';
import AlertDialog from './Froms/AlertDialog';
import FormDialog from './Froms/FormDialog';
import FullScreenDialog from './Froms/FullScreenDialog';
import ErrorSnackbar from './Snackbar/ErrorSnackbar';
import TransitionsSnackbar from './Snackbar/TransitionsSnackbar';
import AccordionUsage from './Accordion/AccordionUsage';
import CustomizedAccordions from './Accordion/CustomizedAccordions';
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
      <AccordionUsage/>
      <CustomizedAccordions/>
    </div>
  )
}

export default Test

