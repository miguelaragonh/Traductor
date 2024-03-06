import React, { useState } from "react";
import "./style/App.css";
import Input from "./components/Input.jsx";

cont [valor, setValor]=useState;
function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
          <div style={{ display: "flex", textAlign:"center" }} >
          <Input
            mensaje={"Escribe Tu texto aqui"}
            placeholder={"Traduciendo..."}
            readOnly={false}
          />

          <Input 
          mensaje={"Texto traducido"} 
          placeholder={"Traducido..."}
          readOnly={true}
          value={valor}
          />
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
