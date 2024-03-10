import React from "react";
import "../style/Input.css";

export default function Input(props) {
    return (
    <div className="coolinput">
        <label htmlFor="input" className="text">
        {props.mensaje}
        </label>
        <input
        type="text"
        placeholder={props.placeholder}
        value={props.contenido}
        name="input"
        className="input"
        readOnly={props.readOnly}
        id={props.id}
        ></input>
    </div>
        );
}
