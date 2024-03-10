import React, { useState } from "react";
import axios from "axios";
import "./style/App.css";
import Input from "./components/Input.jsx";
import Dropdown from "./components/Dropdown.jsx";

export default function App() {
  const [valor, setValor] = useState(null);

 async function traducir() { const encodedParams = new URLSearchParams();
    encodedParams.set('q',  document.getElementById("x").value);
    encodedParams.set('target', document.getElementById("idiom2").value);
    encodedParams.set('source', document.getElementById("idiom1").value);

    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'a7a000da96mshf1741fb7cc81bfcp1e7423jsn9b7af44b08ab',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      data: encodedParams,
    };
    
    try {
      const response = await axios.request(options);
      //console.log(response.data.data.translations[0].translatedText);
      setValor(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error(error);
      setValor('FUERA DE SERVICIO');

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

          <div style={{ display: "flex", textAlign: "center" }}>
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
