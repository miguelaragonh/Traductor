import React, { useState } from "react";
import axios from "axios";
import "./style/App.css";
import Input from "./components/Input.jsx";
import Dropdown from "./components/Dropdown.jsx";

export default function App() {
  const [valor, setValor] = useState(null);

  async function traducir() {
     const texto = document.getElementById("x").value;
    const idioma1 = document.getElementById("idiom1").value;
    const idioma2 = document.getElementById("idiom2").value;
    
    try {
      const response = await axios.get(`https://api.mymemory.translated.net/get?q=${texto}&langpair=${idioma1}|${idioma2}`);
      
      console.log(response.data.responseData.translatedText); 
      setValor(response.data.responseData.translatedText);
    } catch (error) {
      console.error(error);
      setValor("FUERA DE SERVICIO");
    }
    
  }
  return (
    <div className="app">
      <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
          <br></br>
          <Dropdown />

          <div className="inputs">
            <Input
              mensaje={"Escribe Tu texto aqui"}
              placeholder={"Traduciendo..."}
              readOnly={false}
              id={"x"}
            />

            <Input
              mensaje={"Texto traducido"}
              placeholder={"Traducido..."}
              readOnly={true}
              contenido={valor}
              id={"y"}
            />
          </div>
          <br></br>
          <button className="cssbuttons-io" onClick={traducir}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-transform"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
                <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
                <path d="M15 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              </svg>
              Traducir
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
