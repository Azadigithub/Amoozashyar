import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Login from "./Pages/Login";
const routes = [
  { path: "/", element: <h1>Landing</h1> },
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
