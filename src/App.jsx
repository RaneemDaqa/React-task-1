import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let name = "raneem daqa";
  let age = 21;
  return (
    <div>
      <span>hello<h3>{name}</h3></span>
      <span>You age is<h3>{age}</h3></span>
    </div>
  );
}

export default App;
