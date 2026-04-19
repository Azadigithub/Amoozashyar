import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
const routes = [
  { path: "/", element: <Landing/> },
  { path: "/Login", element: <Login/> },
];
function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div className=""></div>
      {router}
    </>
  );
}

export default App;
