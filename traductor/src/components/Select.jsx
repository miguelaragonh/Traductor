import "../style/Dropdown.css";

export default function Select(props) {
  return (
    <select className="button" id={props.id}>
      <option className="option" id="top" value="es">
        Español
      </option>
      <option className="option" id="middle" value="en">
        Ingles
      </option>
      <option className="option" id="bottom" value="it">
        Italiano
      </option>
      <option className="option" id="bottom" value="de">
       Aleman
      </option>
    </select>
  );
}


