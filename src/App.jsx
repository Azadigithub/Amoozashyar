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
import UserInformations from "./Pages/Profile/UserInformations";
import CoursesTable from "./Pages/Profile/CoursesTable";
import Test from "./Components/MaterialUi/Test";
import FrequentlyQuestions from "./Pages/FrequentlyQuestions";
import Logg from "./Pages/Logg";
// import Dashboard from "./Pages/Panel";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/Dashboard", element: <Dashboard /> },
  { path: "/FrequentlyQuestions", element: <FrequentlyQuestions /> },
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
  { path: "/Logg", element: <Logg/> },
  { path: "/Modal", element: <Modal /> },
  { path: "/Muitable", element: <Muitable /> },
  { path: "/DataTable", element: <DataTable /> },
  { path: "/test", element: <Test/> },
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
