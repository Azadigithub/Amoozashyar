import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Panel from "./Pages/Panel";
import Profile from "./Pages/Profile";
import Modal from "./Components/Modal";
// import Dashboard from "./Pages/Panel";

const routes = [
  { path: "/", element: <Landing/> },
  { path: "/Dashboard", element: <Dashboard/> },
  { path: "/Panel", element: <Panel/> },
  { path: "/Profile", element: <Profile/> },
  { path: "/Login", element: <Login/> },
  { path: "/Modal", element: <Modal/> },
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
