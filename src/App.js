// src/App.js
import React from "react";
import { Outlet } from "react-router-dom";
import App1 from '../src/Component/Login/App1'

function App() {
  return (
    <div className="App">
      <Outlet />
      <App1/>
    </div>
  );
}

export default App;
//almost done