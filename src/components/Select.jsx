import "../style/Dropdown.css";
import languages from "../languages.js";
export default function Select(props) {
  return (
    <select className="button" id={props.id}>
      {languages.map((language, index) => {
        const code = Object.keys(language)[0];
        const name = Object.values(language)[0];
        return (
          <option key={index} className="option" id={code} value={code}>
            {name}
          </option>
        );
      })}
    </select>
  );
}
