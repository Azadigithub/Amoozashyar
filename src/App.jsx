import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Panel from "./Pages/Panel";
import UserAccount from "./Pages/Profile/UserAccount";
import Modal from "./Components/Modal";
import Muitable from "./Components/MaterialUi/Muitable";
import DataTable from "./Components/MaterialUi/DataTable";
import CollapsibleTable from "./Components/MaterialUi/CollapsibleTable";
import ReactVirtualizedTable from "./Components/MaterialUi/ReactVirtualizedTable";
import UserInformations from "./Pages/Profile/UserInformations";
import CoursesTable from "./Pages/Profile/CoursesTable";
// import Dashboard from "./Pages/Panel";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/Dashboard", element: <Dashboard /> },
  { path: "/Panel", element: <Panel /> },
  {
    path: "/UserAccount",
    element: <UserAccount />,
    children: [
      { index: true, element: <UserInformations/> },
      { path: "DataTable", element: <DataTable /> },
      { path: "CoursesTable", element: <CoursesTable /> },
      { path: "CollapsibleTable", element: <CollapsibleTable /> },
      // { path: "settings", element: <Settings /> },
    ],
  },
  { path: "/Login", element: <Login /> },
  { path: "/Modal", element: <Modal /> },
  { path: "/Muitable", element: <Muitable /> },
  { path: "/DataTable", element: <DataTable /> },
  { path: "/ReactVirtualizedTable", element: <ReactVirtualizedTable /> },
  // { path: "/*", element: </> },
];
function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div className=""></div>
      <Toaster />
      {router}
    </>
  );
}

export default App;
