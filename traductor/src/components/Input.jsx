import React from "react";
import "../style/Input.css";

export default function Input(props) {
    return (
    <div class="coolinput">
        <label for="input" class="text">
        {props.mensaje}
        </label>
        <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        name="input"
        class="input"
        ></input>
    </div>
        );
}
