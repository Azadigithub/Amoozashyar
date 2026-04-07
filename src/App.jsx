import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
const routes = [{ path: "/", element: <h1>Landing</h1> }];
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
