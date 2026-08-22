import React from "react";
import "./App.css";
import CustomVerticalStepper from "./forms/CustomVerticalStepper";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://mun-dat-git-main-mun20.vercel.app/health")
      .then(res => res.json())
      .then(data => console.log("Backend status:", data.message))
      .catch(err => console.error("Backend unreachable:", err));
  }, []);
  return (
    <div className="App">
      {/* <h1 id="head">Registration</h1> */}
      <CustomVerticalStepper></CustomVerticalStepper>
    </div>
  );
}

export default App;
// dep check 