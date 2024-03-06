import React from "react";
import "./style/App.css";
import Input from "./components/Input.jsx";

function App() {
  return (
    <div className="app">
      <div class="card">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="card-inner">
          <div style={{ display: "flex" }}>
          <Input
            mensaje={"Escribe Tu texto aqui"}
            placeholder={"Traduciendo..."}
          />

          <Input mensaje={"Texto traducido"} placeholder={"Traducido..."} />
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
