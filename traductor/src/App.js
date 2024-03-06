import React, { useState } from "react";
import "./style/App.css";
import Input from "./components/Input.jsx";
import Dropdown from "./components/Dropdown.jsx";

export default function App() {
  const [valor, setValor] = useState(null);

  return (
    <div className="app">
      <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
          <Dropdown />

          <div style={{ display: "flex", textAlign: "center" }}>
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
          <br></br>
          <button className="cssbuttons-io">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-transform"
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
