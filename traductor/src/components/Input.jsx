import React from "react";
import "../style/Input.css";

export default function Input(props) {
    return (
    <div className="coolinput">
        <label for="input" class="text">
        {props.mensaje}
        </label>
        <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        name="input"
        class="input"
        readOnly={props.readOnly}
        id={props.id}
        ></input>
    </div>
        );
}
